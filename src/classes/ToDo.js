import { format } from 'date-fns';

const WHITESPACE_ONLY_REGEX = /^\s+$/;

/**
 * ToDo object class
 */
class ToDo {

    // private fields
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #checklist;
    #uid;

    static #uidSeed = 0;

    // static fields
    static MIN_PRIORITY = 1;
    static MAX_PRIORITY = 5;
    static PRIORITIES = ['Critical', 'High', 'Medium', 'Low', 'Unimportant'];
    static MAX_CHECKLIST_TEXT_LENGTH = 255;

    /**
     * Base class for all ToDo classes.
     * @param {string} title 
     * @param {string} description 
     * @param {Date} dueDate 
     * @param {number} priority 
     * @param {number|undefined} uid  
     */
    constructor(title, description, dueDate, priority, notes, uid) {
        this.title = title || 'New task';
        this.description = description || 'No description added';
        this.dueDate = dueDate || new Date();
        this.priority = priority || ToDo.MAX_PRIORITY;
        this.notes = notes || "";
        this.#checklist = []; // directly set to empty array
        this.#uid = uid || ++ToDo.#uidSeed;
    }

    static updateUidSeed(newSeed) {
        ToDo.#uidSeed = newSeed;
    }

    static getUidSeed() { return ToDo.#uidSeed };

    get checklist() { return this.#checklist };

    get uid() { return this.#uid };

    get notes() { return this.#notes };
    set notes(newNotes) { this.#notes = newNotes };

    get title() { return this.#title };
    /**
     * @param {string} newTitle the new title to set
     * @throws Error if newTitle length is 0 or is only whitespace
     */
    set title(newTitle) {
        if (newTitle.length === 0) throw new Error('ERROR: ToDo title may not be empty');
        if (newTitle.match(WHITESPACE_ONLY_REGEX)) throw new Error('ERROR: ToDo title may not be blank (whitespace only)');
        this.#title = newTitle;
    };

    get description() { return this.#description };
    set description(newDesc) { this.#description = newDesc };

    get dueDate() { return this.#dueDate };
    /**
     * @param {Date} newDueDate the new due date to set
     * @throws Error if newDueDate is not a Date object
     */
    set dueDate(newDueDate) {
        if (!(newDueDate instanceof Date)) {
            throw Error('due date must be a Date');
        }
        this.#dueDate = newDueDate
    };

    get priority() { return this.#priority };
    /**
     * @param {number }newPriority
     * @throws Error if newPriority is less than ToDo.MIN_PRIORITY or greater than ToDo.MAX_PRIORITY.
     */
    set priority(newPriority) {
        if (newPriority < ToDo.MIN_PRIORITY || newPriority > ToDo.MAX_PRIORITY) {
            throw new Error(`Priority must be ${ToDo.MIN_PRIORITY} to ${ToDo.MAX_PRIORITY} (inclusive), but ${newPriority} was specified`);
        }
        this.#priority = newPriority;
    };

    /**
     * Adds a new checklist item. each item is a 2 length array containing a boolean at
     * index 0 and a string at index 1.
     * @param {boolean} complete 
     * @param {string} text 
     * @return true if added successfully, false if not. 
     */
    addToCheckList(complete, text) {
        if (typeof complete !== 'boolean') {
            throw new Error('complete parameter invalid type: ' + typeof complete);
        }
        if (typeof text !== 'string') {
            throw new Error('text parameter invalid type: ' + typeof complete);
        }
        if (text.length === 0 || text.match(WHITESPACE_ONLY_REGEX)) {
            throw new Error('Checklist text cannot be empty!');
        }
        if (text.length > ToDo.MAX_CHECKLIST_TEXT_LENGTH) {
            throw new Error(`Checklist text cannot be longer than ${ToDo.MAX_CHECKLIST_TEXT_LENGTH} characters`);
        }
        this.#checklist.push([complete, text]);
    }

    /**
     * Removes a Checklist item if its text is equal to parameter text
     * @param {string} text 
     * @returns true if removed successfully, false if not.
     */
    removeFromCheckList(text) {
        for (let i = 0; i < this.#checklist.length && !removed; i++) {
            if (this.#checklist[i][1] === text) {
                this.#checklist.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    clearChecklist() {
        this.#checklist = [];
    }

    toString() {
        return `Title:${this.#title}\nDescription:${this.#description}\nDue-Date:${this.#dueDate}\nPriority:${this.#priority}\nuid:${this.#uid}`;
    };

    /**
     * Call to serialize this ToDo object into JSON
     * @returns 
     */
    toJSON() {
        return {
            title: this.#title,
            description: this.#description,
            notes: this.#notes,
            dueDate: this.#dueDate,
            priority: this.#priority,
            checklist: this.#checklist,
            uid: this.#uid
        };
    };
}

export { ToDo };