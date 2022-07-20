/* eslint-disable no-alert */
/* eslint-disable spaced-comment */
/* eslint-disable arrow-parens */
/* eslint-disable brace-style */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
// node modules
import { format } from 'date-fns';

// js objects
import { ToDo } from './classes/ToDo';
import { Project } from './classes/Project';
import { save, load, deleteFromStorage } from './storage';

// html templates
import templateModalToDoContainer from './html-templates/toDoModal.html';
import templateModalToDoList from './html-templates/toDoModal_list.html';
import templateCardToDo from './html-templates/toDoCard.html';
import templateCardProject from './html-templates/projectCard.html';
import templateProjectEditor from './html-templates/projectEditor.html';

// elements object
const elements = {
  menuBtn: document.querySelector('button.hamburger'),
  themeBtn: document.querySelector('.change-theme'),
  header: document.querySelector('.header'),
  nav: document.querySelector('.nav'),
  content: document.querySelector('.content'),
  showAllTodosBtns: document.querySelectorAll('.button-show-todos'),
  showAllProjectsBtns: document.querySelectorAll('.button-show-projects'),
  menuExpandingBtns: document.querySelectorAll('.menu-expanding-button'),
  menuAddToDoBtns: document.querySelectorAll('.menu-expanding-button.add-todo-button'),
  menuAddProjectBtns: document.querySelectorAll('.menu-expanding-button.add-project-button'),
  menuAddToDoToProjectBtns: document.querySelectorAll('.menu-expanding-button.add-todo-to-project-button'),
};

// initialise DOM
((function initialise() {
  setMenuPosition();

  initButtonEvents([elements.themeBtn], () => document.body.classList.toggle('dark'));
  initButtonEvents([elements.menuBtn], () => {
    const showSelector = 'nav-open';
    if (elements.nav.classList.contains(showSelector)) {
      elements.nav.classList.remove(showSelector);
    } else {
      elements.nav.classList.add(showSelector);
    }
  });
  initButtonEvents(elements.showAllTodosBtns, () => renderAllTodos('All ToDos'));
  initButtonEvents(elements.showAllProjectsBtns, renderAllProjects);
  initButtonEvents(elements.menuAddToDoBtns, () => renderToDoModal(null, () => renderAllTodos('All Todos')));
  initButtonEvents(elements.menuAddProjectBtns, () => renderProject(null));

  renderWelcome();

  function initButtonEvents(btns, eventFunc) {
    for (const btn of btns) {
      btn.addEventListener('click', eventFunc);
    }
  }

  function setMenuPosition() {
    elements.nav.style.top = `${elements.header.offsetHeight - 2}px`;
    elements.nav.style.left = '10px';
    setTimeout(() => {
      elements.nav.classList.remove('hidden');
    }, 200);
  }
})());

/**
 * Render the welcome message that is first shown to user on page load.
 */
function renderWelcome() {
  clearContent();
  setContentTitle('Welcome to TooDoo!');
  const welcomeDiv = document.createElement('div');
  welcomeDiv.textContent = 'Welcome, please use the header buttons or optional drop down menu to navigate through this app!';
  elements.content.appendChild(welcomeDiv);
}

/**
 * clear all child nodes from the 'content' div - resetting it to empty.
 */
function clearContent() {
  for (let i = elements.content.childNodes.length - 1; i >= 0; i--) {
    elements.content.removeChild(elements.content.childNodes[i]);
  }
}

/**
 * Load up a html template from a file and parse into an Element object
 * @param {HTMLTemplateElement} htmlTemplate
 * @returns a HTML element object
 */
function generateTemplate(htmlTemplate) {
  const template = document.createElement('template');
  template.innerHTML = htmlTemplate;
  return template.content.firstElementChild;
}

/**
 * Close any open modals
 */
function closeModalAction() {
  const modalSelector = '.modal-wrapper';
  const modal = document.querySelector(modalSelector);
  document.body.removeChild(modal);
  document.body.classList.remove('modal-active');
}

/**
 * Close modal event handler
 * @param {event} event
 * @param {function} onCloseEvent
 */
function onCloseModal(event, onCloseEvent) {
  if (event.target.closest('#modal-form') === null) {
    closeModalAction();
    if (onCloseEvent !== undefined) onCloseEvent();
  }
}

/**
 * Configure which expanding menu buttons to show
 * @param  {string} selectors - a comma separated list of css class selectors that determines what expanding buttons to show
 */
function configExpandingMenuBtns(...selectors) {
  for (const btn of elements.menuExpandingBtns) {
    const makeActive = selectors.reduce((selectorFound, selector) => { if (btn.classList.contains(selector)) return true; return selectorFound; }, false);
    if (makeActive) { btn.classList.add('active'); }
    else { btn.classList.remove('active'); }
  }
}

/**
 * Set the title of the ".content-title" div which sits atop the ".content" divs.
 * @param {string} newTitle
 */
function setContentTitle(newTitle) {
  document.querySelector('.content-title').textContent = newTitle;
}

/**
 * Render all todo objects into todo "cards" and place into the ".content" div.
 */
function renderAllTodos(title, onClickEvent, predicate) {
  clearContent();
  setContentTitle(title);
  configExpandingMenuBtns('add-todo-button');
  const loadedTodos = load('todo');
  if (loadedTodos.length !== 0) {
    elements.content.appendChild(createToDoCards(loadedTodos, () => renderAllTodos(title), onClickEvent, predicate));
  } else {
    const msg = document.createElement('div');
    msg.textContent = "You don't have any to do's yet!";
    elements.content.appendChild(msg);
  }
}

/**
 * @param {number} tuid ToDo unique identifier
 * @param {function} onCloseEvent a function that is called when the modal is closed
 * @param {number} puid Project unique identifier
 */
function renderToDoModal(tuid, onCloseEvent, puid) {
  // ensure modal doesn't render twice
  if (document.body.classList.contains('modal-active')) closeModalAction();
  const toDoObj = (tuid === null) ? new ToDo() : load('todo', tuid);

  const currentUid = toDoObj.uid;
  // setup modal
  document.body.classList.add('modal-active');
  const modal = generateTemplate(templateModalToDoContainer);
  modal.querySelector('#title-field').value = toDoObj.title;
  modal.querySelector('#desc-field').value = toDoObj.description;
  modal.querySelector('#notes-field').value = toDoObj.notes;
  modal.querySelector('#due-date-field').value = format(toDoObj.dueDate, 'yyyy-MM-dd');
  modal.querySelector('#priority-field').value = toDoObj.priority;
  renderChecklistView(toDoObj);
  modal.querySelector('#add-todo-button').addEventListener('click', event => onAddNewChecklistItem(event));
  modal.querySelector('#save-button').addEventListener('click', () => onSave(currentUid));
  modal.querySelector('#delete-button').addEventListener('click', () => {
    deleteFromStorage('todo', currentUid);
    //onCloseModal(event, onCloseEvent);
    closeModalAction();
    if (onCloseEvent) onCloseEvent();
  });
  // append modal to body
  document.body.appendChild(modal);
  document.querySelector('.modal-wrapper').addEventListener('click', event => {
    onCloseModal(event, onCloseEvent);
  });

  // HELPER FUNCTIONS
  function renderChecklistView(todo) {
    const { checklist } = todo;
    const checklistSection = modal.querySelector('.checklist-section');
    if (checklist.length > 0) {
      for (let i = 0; i < checklist.length; i++) {
        const checklistItem = generateTemplate(templateModalToDoList);
        const [isComplete, text] = checklist[i];
        checklistItem.querySelector('.complete-field').value = isComplete;
        checklistItem.querySelector('.checklist-text').value = text;
        checklistSection.appendChild(checklistItem);
      }
    } else {
      const p = document.createElement('p');
      p.textContent = 'No Checklist Items';
      checklistSection.appendChild(p);
    }
  }
  function onSave() {
    const t = pullTodo(currentUid);
    save(t);
    if (puid !== undefined && typeof puid === 'number') {
      const project = load('project', puid);
      project.addTodo(t);
      save(project);
    }
    // eslint-disable-next-line no-restricted-globals
    const cont = confirm('Saved.\nPress ok to keep editing.');
    if (!cont) closeModalAction();
    if (onCloseEvent) onCloseEvent();
  }
  function onAddNewChecklistItem(event) {
    const completeValue = modal.querySelector('.checklist-new-item .complete-field').value === 'true';
    const textField = modal.querySelector('.checklist-new-item .checklist-text');
    try {
      const t = pullTodo();
      t.addToCheckList(completeValue, textField.value);
      onCloseModal(event);
      save(t);
      renderToDoModal(t.uid, onCloseEvent, puid);
    } catch (error) {
      textField.setCustomValidity(error.message);
      textField.reportValidity();
    }
  }
  function pullTodo() {
    const title = modal.querySelector('#title-field').value;
    const description = modal.querySelector('#desc-field').value;
    const dueDate = new Date(modal.querySelector('#due-date-field').value);
    const priority = modal.querySelector('#priority-field').value;
    const notes = modal.querySelector('#notes-field').value;
    const t = new ToDo(title, description, dueDate, parseInt(priority, 10), notes, currentUid);
    for (const node of modal.querySelectorAll('.checklist-list-item')) {
      const complete = node.querySelector('.complete-field').value === 'true';
      const text = node.querySelector('.checklist-text').value;
      t.addToCheckList(complete, text);
    }
    return t;
  }
}

function createToDoCards(todos, onCloseEvent, onClickEvent, predicate) {
  const todoCards = document.createElement('div');
  todoCards.classList.add('todo-cards');
  const loadedProjects = load('project');
  for (const todo of todos) {
    if (predicate === undefined || predicate(todo)) {
      const card = generateTemplate(templateCardToDo);
      card.querySelector('.title').textContent = todo.title;
      //card.querySelector('.description').textContent = (todo.description.length < 170) ? todo.description : todo.description.substring(0, 170) + '...';
      card.querySelector('.description').textContent = todo.description;
      card.querySelector('.summary').textContent = `${todo.checklist.length === 0 ? 'No' : todo.checklist.length} checklist item${todo.checklist.length !== 1 ? 's' : ''}`;
      const containingProject = (loadedProjects.find(p => p.todos.filter(t => t.uid === todo.uid).length > 0));
      card.querySelector('.project-info>span:last-child').textContent = containingProject !== undefined ? containingProject.title : 'Not in any project';
      card.querySelector('.bottom-cell>div:first-child>span:last-child').textContent = format(todo.dueDate, 'do LLLL y');
      card.querySelector('.bottom-cell>div:last-child>span:last-child').textContent = todo.priority;
      //console.log(card.outerHTML);
      card.addEventListener('click', (onClickEvent === undefined)
        ? () => renderToDoModal(todo.uid, onCloseEvent)
        : () => onClickEvent(todo));

      todoCards.appendChild(card);
    }
  }
  return todoCards;
}

function renderAllProjects() {
  clearContent();
  setContentTitle('All Projects');
  configExpandingMenuBtns('add-project-button');

  //elements.menuAddProjectBtns.forEach(element => element.addEventListener('click', () => render_project(null)));

  const projects = load('project');

  if (projects.length !== 0) {
    const cards = document.createElement('div');
    cards.classList.add('project-cards');
    for (const project of projects) {
      //console.log(project);
      const card = generateTemplate(templateCardProject);
      card.querySelector('.title').textContent = project.title;
      card.querySelector('.description').textContent = project.description;
      card.querySelector('.notes').textContent = project.notes;
      card.querySelector('.summary').textContent = `${project.todos.length === 0 ? 'No' : project.todos.length} todo${project.todos.length >= 1 ? 's' : ''}`;
      card.addEventListener('click', () => renderProject(project.uid));
      cards.appendChild(card);
    }
    elements.content.appendChild(cards);
  } else {
    const msg = document.createElement('div');
    msg.textContent = "You don't have any projects yet!";
    elements.content.appendChild(msg);
  }
}

function renderProject(projectUid) {
  clearContent();
  configExpandingMenuBtns('add-project-button', 'add-todo-to-project-button');

  let projectObj;
  if (projectUid === null) {
    projectObj = new Project();
    save(projectObj);
  } else {
    projectObj = load('project', projectUid);
  }
  setContentTitle(`Project: ${projectObj.title}`);

  const { uid } = projectObj;

  elements.menuAddToDoToProjectBtns.forEach(element => element.addEventListener('click', () => renderToDoModal(null, () => renderProject(uid), uid)));

  const content = generateTemplate(templateProjectEditor);
  const btnPanel = content.querySelector('.project-editor-button-panel');
  content.querySelector('#title-field').value = projectObj.title;
  content.querySelector('#desc-field').value = projectObj.description;
  content.querySelector('#notes-field').value = projectObj.notes;
  btnPanel.before(createToDoCards(projectObj.todos, () => renderProject(uid)));
  elements.content.appendChild(content);

  //console.log(load('project'));

  content.querySelector('#save-button').addEventListener('click', () => save(pullProjectFromEditorDiv()));
  content.querySelector('#add-button').addEventListener('click', () => renderToDoModal(null, () => renderProject(uid), uid));
  content.querySelector('#delete-button').addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    const deleteTodos = confirm('Would you like to delete all associated todos?\nPress ok to delete all associated todos, or cancel to delete only the project');
    deleteFromStorage('project', uid, deleteTodos);
    renderAllProjects();
  });
  content.querySelector('#add-existing-button').addEventListener('click', () => renderAllTodos('Choose a ToDo to add to your project', (todo) => onClicks.addExistingTodo(todo), (todo) => predicates.isNotInAnyProject(todo)));
  content.querySelector('#remove-existing-button').addEventListener('click', () => renderAllTodos('Choose a ToDo to remove from your project', (todo) => onClicks.removeTodoFromProject(todo), (todo) => predicates.isInThisProject(todo)));

  function pullProjectFromEditorDiv() {
    const title = document.querySelector('#title-field').value;
    const description = document.querySelector('#desc-field').value;
    const notes = document.querySelector('#notes-field').value;
    const p = new Project(title, description, notes, uid);
    p.todos = projectObj.todos;
    return p;
  }

  let onClicks = {
    addExistingTodo: function addExistingTodoNotInAProjectToThisProject(todo) {
      projectObj.addTodo(todo);
      save(projectObj);
      renderProject(projectUid);
    },
    removeTodoFromProject: function removeATodoFromThisProject(todo) {
      projectObj.removeTodo(todo);
      save(projectObj);
      renderProject(projectUid);
    },
  };

  let predicates = {
    isNotInAnyProject: function showTodoOnlyIfItsNotInAnyProject(todo) {
      for (const p of load('project')) {
        if (p.todos.find(e => todo.uid === e.uid)) return false;
      }
      return true;
    },
    isInThisProject: function showTodoOnlyIfItIsInThisProject(todo) {
      if (projectObj.todos.find(e => todo.uid === e.uid)) return true;
      return false;
    },
  };

  // let onClick_addExistingTodo = function (todo) {
  //     projectObj.addTodo(todo);
  //     save(projectObj);
  //     render_project(projectUid);
  // }

  // let onClick_removeTodoFromProject = function (todo) {
  //     projectObj.removeTodo(todo);
  //     save(projectObj);
  //     render_project(projectUid);
  // }

  // let isNotInAnyProjectPredicate = function (todo) {
  //     // discern all todos not currently in a project, and display only them using the following predicate
  //     for (let p of load('project')) {
  //         if (p.todos.find(e => todo.uid === e.uid)) return false;
  //     }
  //     return true;
  // }

  // let isInThisProjectPredicate = function (todo) {
  //     // discern all todos not currently in a project, and display only them using the following predicate
  //     if (projectObj.todos.find(e => todo.uid === e.uid)) return true;
  //     return false;
  // }
}

// export { clearContent, elements, onCloseModal, closeModalAction, setContentTitle, render_allTodos, createToDoCards, render_toDoModal, render_allProjects, render_project };
