/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/menu-dark.png */ "./src/img/menu-dark.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/moon.png */ "./src/img/moon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/menu-light.png */ "./src/img/menu-light.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/sunWhite.png */ "./src/img/sunWhite.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/AlfaSlabOne-Regular.ttf */ "./src/fonts/AlfaSlabOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/BungeeShade-Regular.ttf */ "./src/fonts/BungeeShade-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/OpenSans-VariableFont_wdth,wght.ttf */ "./src/fonts/OpenSans-VariableFont_wdth,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --margin-main: 100px;\r\n    --border-rad: 10px;\r\n    font-size: 10pt;\r\n    font-family: opensans;\r\n\r\n    --theme-color-1: #f4f9f9;\r\n    --theme-color-2: #e44232;\r\n    --theme-color-3: #d3d3d3;\r\n    --theme-accent: #fca199;\r\n\r\n    --theme-text-1: black;\r\n    --theme-text-2: white;\r\n    --theme-burger-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    --theme-change-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n\r\n    --theme-transition-speed: 1s;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed);\r\n}\r\n\r\n.dark {\r\n    --theme-color-1: #261c2c;\r\n    --theme-color-2: #3e2c41;\r\n    --theme-color-3: #5c527f;\r\n    --theme-accent: #6e85b2;\r\n\r\n    --theme-text-1: white;\r\n    --theme-text-2: black;\r\n    --theme-burger-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    --theme-change-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: alfa;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: bungee;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: opensans;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n}\r\n\r\n\r\nbody {\r\n    /* html body element */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n\r\n    background-color: var(--theme-color-1);\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.main {\r\n    /* main container for content */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n\r\n.header {\r\n    /* header container */\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0px;\r\n    z-index: 2;\r\n\r\n    background-color: var(--theme-color-2);\r\n    height: 3.5rem;\r\n    font-size: 1.2rem;\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.header-title {\r\n    /* header logo */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: var(--theme-accent);\r\n    border-radius: var(--border-rad);\r\n    font-family: bungee;\r\n    font-weight: 100;\r\n    letter-spacing: 0.2rem;\r\n    text-shadow: 2px 2px 4px black;\r\n    padding: 10px;\r\n    margin: 10px;\r\n\r\n}\r\n\r\n.header-title>span {\r\n    /* header logo div */\r\n    background-color: var(--theme-accent);\r\n    border-radius: 4px;\r\n\r\n    padding: 5px 10px;\r\n}\r\n\r\n.header-body {\r\n    /* Container for header burger button and navigation buttons */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.menu-button,\r\n.menu-expanding-button {\r\n    /* header buttons - top menu, and burger menu */\r\n    position: relative;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    margin: 0px 5px;\r\n}\r\n\r\n.menu-button {\r\n    background-color: var(--theme-accent);\r\n    max-width: 150px;\r\n}\r\n\r\n.menu-button:hover {\r\n    background-color: var(--theme-color-3);\r\n    box-shadow: 2px 2px 10px var(--theme-text-2);\r\n    outline: var(--theme-text-2) solid 1px;\r\n\r\n    transition: color 0.2s;\r\n}\r\n\r\n.menu-button:active {\r\n    background-color: var(--theme-color-1);\r\n    box-shadow: 2px 2px 10px var(--theme-text-1);\r\n\r\n}\r\n\r\n.menu-expanding-button {\r\n    font-size: 0.85em;\r\n    visibility: collapse;\r\n    transition: transform 0s, visibility 0s;\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.menu-expanding-button.active {\r\n    visibility: visible;\r\n    transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out, height 0.5s ease-in-out;\r\n\r\n    padding: 2px 5px;\r\n}\r\n\r\n.header-body>.menu-expanding-button {\r\n    transform: scaleX(0);\r\n    transform-origin: left;\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button {\r\n    transform: scaleY(0);\r\n    transform-origin: top;\r\n    height: 0;\r\n}\r\n\r\n.header-body>.menu-expanding-button.active {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button.active {\r\n    height:auto;\r\n    margin: 5px 0px;\r\n    transform: scaleY(1);\r\n}\r\n\r\nbutton.hamburger {\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    background-image: var(--theme-burger-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-color: var(--theme-accent);\r\n    border: 0px\r\n        /* solid var(--bg-color-1)*/\r\n    ;\r\n    border-radius: 5px;\r\n\r\n    margin: 0px 10px;\r\n    padding: 5px;\r\n\r\n    transition: transform 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n    transform-origin: center;\r\n}\r\n\r\nbutton.hamburger:hover {\r\n    background-color: var(--theme-color-3);\r\n\r\n    transform: scale(1.2);\r\n}\r\n\r\n.change-theme {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-left: auto;\r\n}\r\n\r\n.change-theme>div {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n    background-image: var(--theme-change-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    padding: 5px;\r\n\r\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n}\r\n\r\n.change-theme>div:hover {\r\n    transform: scale(1.3);\r\n}\r\n\r\n/* CONTENT */\r\n\r\n.main>div {\r\n    width: 800px;\r\n    padding: 10px;\r\n\r\n}\r\n\r\n.content {\r\n    --content-padding: 10px;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n\r\n    overflow-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed),\r\n        transform var(--theme-transition-speed);\r\n}\r\n\r\n.content-title {\r\n    text-align: center;\r\n    border-radius: var(--border-rad);\r\n    background-color: var(--theme-accent);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.nav {\r\n\r\n    position: absolute;\r\n    overflow: hidden;\r\n    /* top: set in dom.js */\r\n\r\n    min-width: 100px;\r\n    background-color: var(--theme-color-2);\r\n    border-radius: 0px 0px 5px 5px;\r\n\r\n    padding: 5px 10px;\r\n\r\n    /*\r\n    Nav is hidden upon loading and dom.js removes .hidden class\r\n    after 200ms (corresponding to the transition time). this stops\r\n    the nav transforming to scale(0) after loading, which shows\r\n    the nav briefly - bit of a hack?!\r\n    */\r\n    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n}\r\n\r\n.nav-open {\r\n    display: inline;\r\n    transform: scaleY(1);\r\n}\r\n\r\n.nav>ul {\r\n    list-style: none;\r\n}\r\n\r\n/* ADD TODO */\r\n\r\ndiv.add-todo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px;\r\n}\r\n\r\n/* TODO CARD */\r\n.todo-cards,\r\n.project-cards {\r\n    display: grid;\r\n    gap: 10px;\r\n    justify-items: center;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.todo-cards {\r\n    grid-template: 1fr / repeat(3, 1fr);\r\n    grid-auto-rows: 1fr;\r\n}\r\n\r\n.project-cards {\r\n    grid-template: 1fr / 1fr;\r\n    grid-auto-flow: 1fr;\r\n}\r\n\r\n.todo-card,\r\n.project-card {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0);\r\n    display: grid;\r\n\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.todo-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 2fr 1fr 1fr / repeat(2, 1fr);\r\n\r\n    width: 90%;\r\n\r\n}\r\n\r\n.project-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 6rem 2fr / repeat(2, 1fr);;\r\n\r\n    width: 95%;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-card:hover,\r\n.project-card:hover {\r\n    border: 1px solid var(--theme-text-1);\r\n    box-shadow: 5px 5px 15px var(--theme-accent);\r\n}\r\n\r\n.todo-card>*,\r\n.project-card>* {\r\n    /*position of all cells bar the bottom cell is to span 2 grid tracks*/\r\n    grid-column: 2 span;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-card>.title,\r\n.project-card>.title {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.notes {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.notes,\r\n.todo-card>.description,\r\n.project-card>.description {\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n    position: relative;\r\n\r\n    padding: 10px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.checklist {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.todo-card>.checklist>.checklist-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 4fr;\r\n}\r\n\r\n.summary {\r\n    background-color: var(--theme-accent);\r\n    border-radius: 10px;\r\n    padding: 5px 10px;\r\n    margin: 5px 5px 5px 0px;\r\n}\r\n\r\n.project-card>.summary {\r\n    margin-top: 0px;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell,\r\n.todo-card>.project-info {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.project-info>span:first-child,\r\n.todo-card>.bottom-cell>div>span:nth-child(1) {\r\n    font-weight: bold;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-column: 1 / -1;\r\n}\r\n.project-card>.bottom-cell>div:first-child,\r\n.todo-card>.bottom-cell>div:first-child {\r\n    margin-right: auto;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.project {\r\n    width: 100%;\r\n}\r\n\r\n#project-form {\r\n    display: grid;\r\n}\r\n\r\n.project-editor-button-panel {\r\n    display: grid;\r\n    grid-template: 1fr /1fr;\r\n    grid-auto-columns: 1fr;\r\n    grid-auto-flow: column;\r\n    justify-items: center;\r\n    column-gap: 10px;\r\n}\r\n\r\n/* TOOL TIP */\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    /* transform: translate(-50%, -50%); */\r\n    display: none;\r\n    background-color: var(--theme-text-1);\r\n    color: var(--theme-text-2);\r\n    padding: 5px;\r\n    border-radius: var(--border-rad);\r\n}\r\n\r\n.description:hover .tooltip,\r\n.notes:hover .tooltip {\r\n    display: block;\r\n}\r\n\r\n.description:focus .tooltip,\r\n.notes:focus .tooltip {\r\n    display: none;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.modal-active {\r\n    overflow: hidden;\r\n}\r\n\r\nselect.section-input,\r\n.section-input,\r\n.content-button,\r\n.checklist-section,\r\n.checklist-text,\r\n#modal-form {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: var(--border-rad);\r\n    border: 2px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper .content-button {\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.section-label {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: calc(var(--border-rad)/3);\r\n    border: 0px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper {\r\n    --top-offset: 3.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n#modal-form {\r\n    --margin-top:calc(var(--top-offset) + 10px);\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n\r\n    width: 50%;\r\n    min-width: 265px;\r\n    max-height: calc(100vh - var(--top-offset) - var(--margin-top));\r\n    overflow: scroll;\r\n    border-radius: 10px;\r\n    color: var(--theme-text-1);\r\n\r\n    margin-top: var(--margin-top);\r\n    padding: 10px;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px 0px;\r\n}\r\n\r\n.section.two-cell {\r\n    display: grid;\r\n    grid-template: 1fr/ repeat(2, 1fr);\r\n    column-gap: 10px;\r\n}\r\n\r\n#title-field {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n#desc-field {\r\n    font-size: 1em;\r\n}\r\n\r\n.section>textarea {\r\n    resize: vertical;\r\n    font-family: inherit;\r\n}\r\n\r\n.section-label {\r\n    position: absolute;\r\n    top: -0.7em;\r\n    left: 1.5em;\r\n\r\n    /* background-color: var(--text-2); */\r\n    font-size: 0.65em;\r\n\r\n    padding: 0.05em 0.5em;\r\n}\r\n\r\n.section-input {\r\n    flex-grow: 1;\r\n\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0.8em 0.5em 0.5em 0.5em;\r\n}\r\n\r\n.checklist-section {\r\n    position: relative;\r\n\r\n    /* background-color: var(--accent); */\r\n\r\n    padding: 1.2em 1em 1em 1em;\r\n}\r\n\r\n.checklist-list-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 7fr;\r\n    column-gap: 10px;\r\n\r\n    /* margin: 12px 0px; */\r\n}\r\n\r\n.checklist-new-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 6fr 1fr;\r\n    column-gap: 10px;\r\n\r\n    margin: 12px 0px;\r\n}\r\n\r\n.new-item {\r\n    margin-top: 15px;\r\n}\r\n\r\n.checklist-section>.checklist-item>.section {\r\n    width: 100%;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.checklist-text {\r\n    width: 100%;\r\n    padding: 0px 10px;\r\n\r\n    font-size: 0.8em;\r\n\r\n    color: var(--theme-text-1);\r\n}\r\n\r\n.content-button {\r\n    width: 100%;\r\n\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    border: 0px;\r\n    border-radius: var(--border-rad);\r\n    height: 2.5rem;\r\n}\r\n\r\n\r\n.content-button:hover {\r\n    background-color: var(--theme-color-2);\r\n    transition: background-color 0.1s;\r\n}\r\n\r\n.content-button:active {\r\n    background-color: var(--theme-color-1);\r\n    transition: none;\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n    #modal-form {\r\n        width: 95%;\r\n    }\r\n    .checklist-section {\r\n        width: 95%;\r\n    }\r\n    .complete-field {\r\n        width: 75px;\r\n        font-size: 0.75em;\r\n        \r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 430px) {\r\n    .header-body .menu-button,\r\n    .header-body .menu-expanding-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n/* HIDDEN */\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .main>div {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .main>div {\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n    .main>div {\r\n        width: 250px;\r\n    }\r\n}\r\n@media only screen and (max-width: 655px) {\r\n    .body {\r\n        height: 100vh;\r\n    }\r\n\r\n    .content {\r\n        margin: 0 10px;\r\n        flex-wrap: nowrap;\r\n    }\r\n\r\n    .todo-cards {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .todo-card,\r\n    .project-card {\r\n        width: 95%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --margin-main: 100px;\r\n    --border-rad: 10px;\r\n    font-size: 10pt;\r\n    font-family: opensans;\r\n\r\n    --theme-color-1: #f4f9f9;\r\n    --theme-color-2: #e44232;\r\n    --theme-color-3: #d3d3d3;\r\n    --theme-accent: #fca199;\r\n\r\n    --theme-text-1: black;\r\n    --theme-text-2: white;\r\n    --theme-burger-icon: url('../img/menu-dark.png');\r\n    --theme-change-icon: url('../img/moon.png');\r\n\r\n    --theme-transition-speed: 1s;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed);\r\n}\r\n\r\n.dark {\r\n    --theme-color-1: #261c2c;\r\n    --theme-color-2: #3e2c41;\r\n    --theme-color-3: #5c527f;\r\n    --theme-accent: #6e85b2;\r\n\r\n    --theme-text-1: white;\r\n    --theme-text-2: black;\r\n    --theme-burger-icon: url('../img/menu-light.png');\r\n    --theme-change-icon: url('../img/sunWhite.png');\r\n}\r\n\r\n@font-face {\r\n    font-family: alfa;\r\n    src: url('../fonts/AlfaSlabOne-Regular.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: bungee;\r\n    src: url('../fonts/BungeeShade-Regular.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: opensans;\r\n    src: url('../fonts/OpenSans-VariableFont_wdth,wght.ttf');\r\n}\r\n\r\n\r\nbody {\r\n    /* html body element */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n\r\n    background-color: var(--theme-color-1);\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.main {\r\n    /* main container for content */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n\r\n.header {\r\n    /* header container */\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0px;\r\n    z-index: 2;\r\n\r\n    background-color: var(--theme-color-2);\r\n    height: 3.5rem;\r\n    font-size: 1.2rem;\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.header-title {\r\n    /* header logo */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: var(--theme-accent);\r\n    border-radius: var(--border-rad);\r\n    font-family: bungee;\r\n    font-weight: 100;\r\n    letter-spacing: 0.2rem;\r\n    text-shadow: 2px 2px 4px black;\r\n    padding: 10px;\r\n    margin: 10px;\r\n\r\n}\r\n\r\n.header-title>span {\r\n    /* header logo div */\r\n    background-color: var(--theme-accent);\r\n    border-radius: 4px;\r\n\r\n    padding: 5px 10px;\r\n}\r\n\r\n.header-body {\r\n    /* Container for header burger button and navigation buttons */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.menu-button,\r\n.menu-expanding-button {\r\n    /* header buttons - top menu, and burger menu */\r\n    position: relative;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    margin: 0px 5px;\r\n}\r\n\r\n.menu-button {\r\n    background-color: var(--theme-accent);\r\n    max-width: 150px;\r\n}\r\n\r\n.menu-button:hover {\r\n    background-color: var(--theme-color-3);\r\n    box-shadow: 2px 2px 10px var(--theme-text-2);\r\n    outline: var(--theme-text-2) solid 1px;\r\n\r\n    transition: color 0.2s;\r\n}\r\n\r\n.menu-button:active {\r\n    background-color: var(--theme-color-1);\r\n    box-shadow: 2px 2px 10px var(--theme-text-1);\r\n\r\n}\r\n\r\n.menu-expanding-button {\r\n    font-size: 0.85em;\r\n    visibility: collapse;\r\n    transition: transform 0s, visibility 0s;\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.menu-expanding-button.active {\r\n    visibility: visible;\r\n    transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out, height 0.5s ease-in-out;\r\n\r\n    padding: 2px 5px;\r\n}\r\n\r\n.header-body>.menu-expanding-button {\r\n    transform: scaleX(0);\r\n    transform-origin: left;\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button {\r\n    transform: scaleY(0);\r\n    transform-origin: top;\r\n    height: 0;\r\n}\r\n\r\n.header-body>.menu-expanding-button.active {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button.active {\r\n    height:auto;\r\n    margin: 5px 0px;\r\n    transform: scaleY(1);\r\n}\r\n\r\nbutton.hamburger {\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    background-image: var(--theme-burger-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-color: var(--theme-accent);\r\n    border: 0px\r\n        /* solid var(--bg-color-1)*/\r\n    ;\r\n    border-radius: 5px;\r\n\r\n    margin: 0px 10px;\r\n    padding: 5px;\r\n\r\n    transition: transform 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n    transform-origin: center;\r\n}\r\n\r\nbutton.hamburger:hover {\r\n    background-color: var(--theme-color-3);\r\n\r\n    transform: scale(1.2);\r\n}\r\n\r\n.change-theme {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-left: auto;\r\n}\r\n\r\n.change-theme>div {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n    background-image: var(--theme-change-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    padding: 5px;\r\n\r\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n}\r\n\r\n.change-theme>div:hover {\r\n    transform: scale(1.3);\r\n}\r\n\r\n/* CONTENT */\r\n\r\n.main>div {\r\n    width: 800px;\r\n    padding: 10px;\r\n\r\n}\r\n\r\n.content {\r\n    --content-padding: 10px;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n\r\n    overflow-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed),\r\n        transform var(--theme-transition-speed);\r\n}\r\n\r\n.content-title {\r\n    text-align: center;\r\n    border-radius: var(--border-rad);\r\n    background-color: var(--theme-accent);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.nav {\r\n\r\n    position: absolute;\r\n    overflow: hidden;\r\n    /* top: set in dom.js */\r\n\r\n    min-width: 100px;\r\n    background-color: var(--theme-color-2);\r\n    border-radius: 0px 0px 5px 5px;\r\n\r\n    padding: 5px 10px;\r\n\r\n    /*\r\n    Nav is hidden upon loading and dom.js removes .hidden class\r\n    after 200ms (corresponding to the transition time). this stops\r\n    the nav transforming to scale(0) after loading, which shows\r\n    the nav briefly - bit of a hack?!\r\n    */\r\n    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n}\r\n\r\n.nav-open {\r\n    display: inline;\r\n    transform: scaleY(1);\r\n}\r\n\r\n.nav>ul {\r\n    list-style: none;\r\n}\r\n\r\n/* ADD TODO */\r\n\r\ndiv.add-todo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px;\r\n}\r\n\r\n/* TODO CARD */\r\n.todo-cards,\r\n.project-cards {\r\n    display: grid;\r\n    gap: 10px;\r\n    justify-items: center;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.todo-cards {\r\n    grid-template: 1fr / repeat(3, 1fr);\r\n    grid-auto-rows: 1fr;\r\n}\r\n\r\n.project-cards {\r\n    grid-template: 1fr / 1fr;\r\n    grid-auto-flow: 1fr;\r\n}\r\n\r\n.todo-card,\r\n.project-card {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0);\r\n    display: grid;\r\n\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.todo-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 2fr 1fr 1fr / repeat(2, 1fr);\r\n\r\n    width: 90%;\r\n\r\n}\r\n\r\n.project-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 6rem 2fr / repeat(2, 1fr);;\r\n\r\n    width: 95%;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-card:hover,\r\n.project-card:hover {\r\n    border: 1px solid var(--theme-text-1);\r\n    box-shadow: 5px 5px 15px var(--theme-accent);\r\n}\r\n\r\n.todo-card>*,\r\n.project-card>* {\r\n    /*position of all cells bar the bottom cell is to span 2 grid tracks*/\r\n    grid-column: 2 span;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-card>.title,\r\n.project-card>.title {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.notes {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.notes,\r\n.todo-card>.description,\r\n.project-card>.description {\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n    position: relative;\r\n\r\n    padding: 10px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.checklist {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.todo-card>.checklist>.checklist-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 4fr;\r\n}\r\n\r\n.summary {\r\n    background-color: var(--theme-accent);\r\n    border-radius: 10px;\r\n    padding: 5px 10px;\r\n    margin: 5px 5px 5px 0px;\r\n}\r\n\r\n.project-card>.summary {\r\n    margin-top: 0px;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell,\r\n.todo-card>.project-info {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.project-info>span:first-child,\r\n.todo-card>.bottom-cell>div>span:nth-child(1) {\r\n    font-weight: bold;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-column: 1 / -1;\r\n}\r\n.project-card>.bottom-cell>div:first-child,\r\n.todo-card>.bottom-cell>div:first-child {\r\n    margin-right: auto;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.project {\r\n    width: 100%;\r\n}\r\n\r\n#project-form {\r\n    display: grid;\r\n}\r\n\r\n.project-editor-button-panel {\r\n    display: grid;\r\n    grid-template: 1fr /1fr;\r\n    grid-auto-columns: 1fr;\r\n    grid-auto-flow: column;\r\n    justify-items: center;\r\n    column-gap: 10px;\r\n}\r\n\r\n/* TOOL TIP */\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    /* transform: translate(-50%, -50%); */\r\n    display: none;\r\n    background-color: var(--theme-text-1);\r\n    color: var(--theme-text-2);\r\n    padding: 5px;\r\n    border-radius: var(--border-rad);\r\n}\r\n\r\n.description:hover .tooltip,\r\n.notes:hover .tooltip {\r\n    display: block;\r\n}\r\n\r\n.description:focus .tooltip,\r\n.notes:focus .tooltip {\r\n    display: none;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.modal-active {\r\n    overflow: hidden;\r\n}\r\n\r\nselect.section-input,\r\n.section-input,\r\n.content-button,\r\n.checklist-section,\r\n.checklist-text,\r\n#modal-form {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: var(--border-rad);\r\n    border: 2px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper .content-button {\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.section-label {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: calc(var(--border-rad)/3);\r\n    border: 0px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper {\r\n    --top-offset: 3.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n#modal-form {\r\n    --margin-top:calc(var(--top-offset) + 10px);\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n\r\n    width: 50%;\r\n    min-width: 265px;\r\n    max-height: calc(100vh - var(--top-offset) - var(--margin-top));\r\n    overflow: scroll;\r\n    border-radius: 10px;\r\n    color: var(--theme-text-1);\r\n\r\n    margin-top: var(--margin-top);\r\n    padding: 10px;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px 0px;\r\n}\r\n\r\n.section.two-cell {\r\n    display: grid;\r\n    grid-template: 1fr/ repeat(2, 1fr);\r\n    column-gap: 10px;\r\n}\r\n\r\n#title-field {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n#desc-field {\r\n    font-size: 1em;\r\n}\r\n\r\n.section>textarea {\r\n    resize: vertical;\r\n    font-family: inherit;\r\n}\r\n\r\n.section-label {\r\n    position: absolute;\r\n    top: -0.7em;\r\n    left: 1.5em;\r\n\r\n    /* background-color: var(--text-2); */\r\n    font-size: 0.65em;\r\n\r\n    padding: 0.05em 0.5em;\r\n}\r\n\r\n.section-input {\r\n    flex-grow: 1;\r\n\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0.8em 0.5em 0.5em 0.5em;\r\n}\r\n\r\n.checklist-section {\r\n    position: relative;\r\n\r\n    /* background-color: var(--accent); */\r\n\r\n    padding: 1.2em 1em 1em 1em;\r\n}\r\n\r\n.checklist-list-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 7fr;\r\n    column-gap: 10px;\r\n\r\n    /* margin: 12px 0px; */\r\n}\r\n\r\n.checklist-new-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 6fr 1fr;\r\n    column-gap: 10px;\r\n\r\n    margin: 12px 0px;\r\n}\r\n\r\n.new-item {\r\n    margin-top: 15px;\r\n}\r\n\r\n.checklist-section>.checklist-item>.section {\r\n    width: 100%;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.checklist-text {\r\n    width: 100%;\r\n    padding: 0px 10px;\r\n\r\n    font-size: 0.8em;\r\n\r\n    color: var(--theme-text-1);\r\n}\r\n\r\n.content-button {\r\n    width: 100%;\r\n\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    border: 0px;\r\n    border-radius: var(--border-rad);\r\n    height: 2.5rem;\r\n}\r\n\r\n\r\n.content-button:hover {\r\n    background-color: var(--theme-color-2);\r\n    transition: background-color 0.1s;\r\n}\r\n\r\n.content-button:active {\r\n    background-color: var(--theme-color-1);\r\n    transition: none;\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n    #modal-form {\r\n        width: 95%;\r\n    }\r\n    .checklist-section {\r\n        width: 95%;\r\n    }\r\n    .complete-field {\r\n        width: 75px;\r\n        font-size: 0.75em;\r\n        \r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 430px) {\r\n    .header-body .menu-button,\r\n    .header-body .menu-expanding-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n/* HIDDEN */\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .main>div {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .main>div {\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n    .main>div {\r\n        width: 250px;\r\n    }\r\n}\r\n@media only screen and (max-width: 655px) {\r\n    .body {\r\n        height: 100vh;\r\n    }\r\n\r\n    .content {\r\n        margin: 0 10px;\r\n        flex-wrap: nowrap;\r\n    }\r\n\r\n    .todo-cards {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .todo-card,\r\n    .project-card {\r\n        width: 95%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/html-templates/projectCard.html":
/*!*********************************************!*\
  !*** ./src/html-templates/projectCard.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"project-card\">\r\n    <div class=\"title\">x</div>\r\n    <div class=\"description\"><span class=\"tooltip\">Description</span>x</div>\r\n    <div class=\"notes\"><span class=\"tooltip\">Notes</span>x</div>\r\n    <div class=\"summary\">x Todo('s)</div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html-templates/projectEditor.html":
/*!***********************************************!*\
  !*** ./src/html-templates/projectEditor.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"project\">\r\n    <form id=\"project-form\">\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">Title</div>\r\n            <input class=\"section-input\" type=\"text\" placeholder=\"Enter title\" id=\"title-field\">\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">Description</div>\r\n            <textarea class=\"section-input\" cols=\"40\" rows=\"5\" placeholder=\"Enter description\"\r\n                id=\"desc-field\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">Notes</div>\r\n            <textarea class=\"section-input\" cols=\"40\" rows=\"5\" placeholder=\"Enter description\"\r\n                id=\"notes-field\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">ToDos</div>\r\n            <div class=\"todo-cards\"></div>\r\n            \r\n\r\n        </div>\r\n        <div class=\"project-editor-button-panel\">\r\n            <button type=\"button\" class=\"content-button\" id=\"save-button\">Save Project</button>\r\n            <button type=\"button\" class=\"content-button\" id=\"delete-button\">Delete Project</button>\r\n        </div>\r\n        <div class=\"project-editor-button-panel\">\r\n            <button type=\"button\" class=\"content-button\" id=\"add-button\">Add New ToDo</button>\r\n            <button type=\"button\" class=\"content-button\" id=\"add-existing-button\">Add Existing ToDo</button>\r\n            <button type=\"button\" class=\"content-button\" id=\"remove-existing-button\">Remove ToDo from Project</button>\r\n\r\n        </div>\r\n    </form>\r\n</div>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html-templates/toDoCard.html":
/*!******************************************!*\
  !*** ./src/html-templates/toDoCard.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"todo-card\">\r\n    <div class=\"title\"></div>\r\n    <div class=\"description\"></div>\r\n    <div class=\"checklist\">\r\n        <div class=\"summary\"> checklist items</div>\r\n    </div>\r\n    <div class=\"project-info\"><span>Project: </span><span></span></div>\r\n    <div class=\"bottom-cell\">\r\n        <div><span>Due: </span><span>01/02/1901</span></div>\r\n        <div><span>Priority: </span><span>1</span></div>\r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html-templates/toDoModal.html":
/*!*******************************************!*\
  !*** ./src/html-templates/toDoModal.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"modal-wrapper\">\r\n    <form id=\"modal-form\">\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">Title</div>\r\n            <input class=\"section-input\" type=\"text\" placeholder=\"Enter title\" id=\"title-field\">\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">Description</div>\r\n            <textarea class=\"section-input\" cols=\"40\" rows=\"5\" placeholder=\"Enter description\"\r\n                id=\"desc-field\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"section\">\r\n            <div class=\"section-label\">Notes</div>\r\n            <textarea class=\"section-input\" cols=\"40\" rows=\"5\" placeholder=\"Enter notes\"\r\n                id=\"notes-field\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"section two-cell\">\r\n            <div class=\"section\">\r\n                <div class=\"section-label\">Due Date</div>\r\n                <input class=\"section-input\" type=\"date\" id=\"due-date-field\">\r\n            </div>\r\n            <div class=\"section\">\r\n                <div class=\"section-label\">Priority</div>\r\n                <select class=\"section-input\" id=\"priority-field\">\r\n                    <option value=\"1\">1</option>\r\n                    <option value=\"2\">2</option>\r\n                    <option value=\"3\">3</option>\r\n                    <option value=\"4\">4</option>\r\n                    <option value=\"5\">5</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"checklist-section\">\r\n            <div class=\"section-label\">Checklist - List</div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"checklist-section new-item\">\r\n            <div class=\"section-label\">Checklist - New</div>\r\n            <div class=\"checklist-new-item\">\r\n                <div class=\"section\">\r\n                    <select class=\"section-input complete-field\" name=\"completed\">\r\n                        <option value=\"true\">Complete</option>\r\n                        <option value=\"false\">Not Complete</option>\r\n                    </select>\r\n                    <div class=\"section-label\">Complete?</div>\r\n                </div>\r\n                <div class=\"section\">\r\n                    <input class=\"checklist-text\" type=\"text\" placeholder=\"maximum 255 characters\">\r\n                    <div class=\"section-label\">Checklist item text</div>\r\n                </div>\r\n                <button type=\"button\" id=\"add-todo-button\" class=\"content-button\">Add</button>\r\n            </div>\r\n        </div>\r\n        <button type=\"button\" id=\"save-button\" class=\"content-button\">Save</button>\r\n        <button type=\"button\" id=\"delete-button\" class=\"content-button\">Delete</button>\r\n    </form>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html-templates/toDoModal_list.html":
/*!************************************************!*\
  !*** ./src/html-templates/toDoModal_list.html ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div class=\"checklist-list-item\">\r\n    <div class=\"section\">\r\n        <select class=\"section-input complete-field\" name=\"completed\">\r\n            <option value=\"true\">Complete</option>\r\n            <option value=\"false\">Not Complete</option>\r\n        </select>\r\n        <div class=\"section-label\">Complete?</div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <input class=\"checklist-text\" type=\"text\">\r\n        <div class=\"section-label\">Checklist item text</div>\r\n    </div>\r\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDo.js */ "./src/classes/ToDo.js");


class Project {

    #uid;

    #title;
    #description;
    #notes;
    #todos;

    static #uidSeed = 0;
    static updateUidSeed(newSeed) {
        Project.#uidSeed = newSeed;
    }
    static getUidSeed() {
        return Project.#uidSeed;
    }
    
    /**
     * Construct a project object. If UID parameter is undefined, a new uid will be assigned
     * @param {string} title 
     * @param {string} description 
     * @param {string} notes 
     * @param {number | undefined} uid 
     */
    constructor(title, description, notes, uid) {
        this.title = title || 'New Project';
        this.description = description || 'New Project description';
        this.notes = notes | "";
        this.#todos = [];
        this.#uid = uid || ++Project.#uidSeed;
    }



    set title(newTitle) { this.#title = newTitle };
    get title() { return this.#title };

    set todos(toDoArray) { this.#todos = toDoArray };
    get todos() { return this.#todos };

    set description(newDescription) { this.#description = newDescription };
    get description() { return this.#description };

    set notes(newNotes) { this.#notes = newNotes };
    get notes() { return this.#notes };

    get uid() { return this.#uid };

    addTodo(toDoObj) {
        this.#todos.push(toDoObj);
    }

    removeTodo(toDoObj) {
        this.#todos.splice(this.#todos.findIndex((o) => o.uid == toDoObj.uid), 1);
    }

    toString() {
        let str = `Desc: ${this.#description}\n\nNotes: ${this.#notes}\n\nToDos:`;
        for (let todo of this.#todos) {
            str += "\n" + todo.toString();
        }
        return str;
    }

    toJSON() {
        let toDoUids = this.#todos.map((element) => element.uid);
        //console.log('todo uids in project');
        //console.log(toDoUids);
        return {
            title: this.#title,
            description: this.#description,
            notes: this.#notes,
            toDoUids: toDoUids,
        }
    }
}



/***/ }),

/***/ "./src/classes/ToDo.js":
/*!*****************************!*\
  !*** ./src/classes/ToDo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });


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



/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _classes_ToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ToDo */ "./src/classes/ToDo.js");
/* harmony import */ var _classes_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project */ "./src/classes/Project.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _html_templates_toDoModal_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-templates/toDoModal.html */ "./src/html-templates/toDoModal.html");
/* harmony import */ var _html_templates_toDoModal_list_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-templates/toDoModal_list.html */ "./src/html-templates/toDoModal_list.html");
/* harmony import */ var _html_templates_toDoCard_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-templates/toDoCard.html */ "./src/html-templates/toDoCard.html");
/* harmony import */ var _html_templates_projectCard_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-templates/projectCard.html */ "./src/html-templates/projectCard.html");
/* harmony import */ var _html_templates_projectEditor_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-templates/projectEditor.html */ "./src/html-templates/projectEditor.html");
/* eslint-disable no-alert */
/* eslint-disable spaced-comment */
/* eslint-disable arrow-parens */
/* eslint-disable brace-style */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
// node modules


// js objects




// html templates






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
  const loadedTodos = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('todo');
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
  const toDoObj = (tuid === null) ? new _classes_ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo() : (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('todo', tuid);

  const currentUid = toDoObj.uid;
  // setup modal
  document.body.classList.add('modal-active');
  const modal = generateTemplate(_html_templates_toDoModal_html__WEBPACK_IMPORTED_MODULE_3__["default"]);
  modal.querySelector('#title-field').value = toDoObj.title;
  modal.querySelector('#desc-field').value = toDoObj.description;
  modal.querySelector('#notes-field').value = toDoObj.notes;
  modal.querySelector('#due-date-field').value = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(toDoObj.dueDate, 'yyyy-MM-dd');
  modal.querySelector('#priority-field').value = toDoObj.priority;
  renderChecklistView(toDoObj);
  modal.querySelector('#add-todo-button').addEventListener('click', event => onAddNewChecklistItem(event));
  modal.querySelector('#save-button').addEventListener('click', () => onSave(currentUid));
  modal.querySelector('#delete-button').addEventListener('click', () => {
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.deleteFromStorage)('todo', currentUid);
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
        const checklistItem = generateTemplate(_html_templates_toDoModal_list_html__WEBPACK_IMPORTED_MODULE_4__["default"]);
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
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(t);
    if (puid !== undefined && typeof puid === 'number') {
      const project = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('project', puid);
      project.addTodo(t);
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(project);
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
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(t);
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
    const t = new _classes_ToDo__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, description, dueDate, parseInt(priority, 10), notes, currentUid);
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
  const loadedProjects = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('project');
  for (const todo of todos) {
    if (predicate === undefined || predicate(todo)) {
      const card = generateTemplate(_html_templates_toDoCard_html__WEBPACK_IMPORTED_MODULE_5__["default"]);
      card.querySelector('.title').textContent = todo.title;
      //card.querySelector('.description').textContent = (todo.description.length < 170) ? todo.description : todo.description.substring(0, 170) + '...';
      card.querySelector('.description').textContent = todo.description;
      card.querySelector('.summary').textContent = `${todo.checklist.length === 0 ? 'No' : todo.checklist.length} checklist item${todo.checklist.length !== 1 ? 's' : ''}`;
      const containingProject = (loadedProjects.find(p => p.todos.filter(t => t.uid === todo.uid).length > 0));
      card.querySelector('.project-info>span:last-child').textContent = containingProject !== undefined ? containingProject.title : 'Not in any project';
      card.querySelector('.bottom-cell>div:first-child>span:last-child').textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(todo.dueDate, 'do LLLL y');
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

  const projects = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('project');

  if (projects.length !== 0) {
    const cards = document.createElement('div');
    cards.classList.add('project-cards');
    for (const project of projects) {
      //console.log(project);
      const card = generateTemplate(_html_templates_projectCard_html__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
    projectObj = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project();
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(projectObj);
  } else {
    projectObj = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('project', projectUid);
  }
  setContentTitle(`Project: ${projectObj.title}`);

  const { uid } = projectObj;

  elements.menuAddToDoToProjectBtns.forEach(element => element.addEventListener('click', () => renderToDoModal(null, () => renderProject(uid), uid)));

  const content = generateTemplate(_html_templates_projectEditor_html__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const btnPanel = content.querySelector('.project-editor-button-panel');
  content.querySelector('#title-field').value = projectObj.title;
  content.querySelector('#desc-field').value = projectObj.description;
  content.querySelector('#notes-field').value = projectObj.notes;
  btnPanel.before(createToDoCards(projectObj.todos, () => renderProject(uid)));
  elements.content.appendChild(content);

  //console.log(load('project'));

  content.querySelector('#save-button').addEventListener('click', () => (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(pullProjectFromEditorDiv()));
  content.querySelector('#add-button').addEventListener('click', () => renderToDoModal(null, () => renderProject(uid), uid));
  content.querySelector('#delete-button').addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    const deleteTodos = confirm('Would you like to delete all associated todos?\nPress ok to delete all associated todos, or cancel to delete only the project');
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.deleteFromStorage)('project', uid, deleteTodos);
    renderAllProjects();
  });
  content.querySelector('#add-existing-button').addEventListener('click', () => renderAllTodos('Choose a ToDo to add to your project', (todo) => onClicks.addExistingTodo(todo), (todo) => predicates.isNotInAnyProject(todo)));
  content.querySelector('#remove-existing-button').addEventListener('click', () => renderAllTodos('Choose a ToDo to remove from your project', (todo) => onClicks.removeTodoFromProject(todo), (todo) => predicates.isInThisProject(todo)));

  function pullProjectFromEditorDiv() {
    const title = document.querySelector('#title-field').value;
    const description = document.querySelector('#desc-field').value;
    const notes = document.querySelector('#notes-field').value;
    const p = new _classes_Project__WEBPACK_IMPORTED_MODULE_1__.Project(title, description, notes, uid);
    p.todos = projectObj.todos;
    return p;
  }

  let onClicks = {
    addExistingTodo: function addExistingTodoNotInAProjectToThisProject(todo) {
      projectObj.addTodo(todo);
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(projectObj);
      renderProject(projectUid);
    },
    removeTodoFromProject: function removeATodoFromThisProject(todo) {
      projectObj.removeTodo(todo);
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.save)(projectObj);
      renderProject(projectUid);
    },
  };

  let predicates = {
    isNotInAnyProject: function showTodoOnlyIfItsNotInAnyProject(todo) {
      for (const p of (0,_storage__WEBPACK_IMPORTED_MODULE_2__.load)('project')) {
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


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageError": () => (/* binding */ LocalStorageError),
/* harmony export */   "ParameterError": () => (/* binding */ ParameterError),
/* harmony export */   "clearStorage": () => (/* binding */ clearStorage),
/* harmony export */   "deleteFromStorage": () => (/* binding */ deleteFromStorage),
/* harmony export */   "displayStorage": () => (/* binding */ displayStorage),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ToDo.js */ "./src/classes/ToDo.js");
/* harmony import */ var _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project.js */ "./src/classes/Project.js");



/**
 * 
 * @param {ToDo | Project} objToSave 
 * @throws LocalStorageError if localStorage not accessible, or ParameterError if parameter is not a ToDo or Project object.
 */
function save(objToSave) {

    if (!localStorageAvailable()) throw new LocalStorageError('save', 'Local storage is not available! - save action not complete');
    if (objToSave instanceof _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo) saveToDo(objToSave);
    else if (objToSave instanceof _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__.Project) saveProject(objToSave);
    else throw new ParameterError('objToSave', 'parameter must be a ToDo object or a Project object but was not');

    function saveToDo(toDoObj) {
        let todosFromStorage;
        try {
            // attempt to load todos object from localStorage
            todosFromStorage = JSON.parse(getStorage().todos);
        } catch (err) {
            // if parse fails then set to empty object
            todosFromStorage = {};
        }
        // set key of todo uid to stringified ToDo object
        todosFromStorage[toDoObj.uid] = toDoObj;
        // save data in localStorage
        getStorage().setItem('todos', JSON.stringify(todosFromStorage));
        console.log(`Todo saved: [uid: ${toDoObj.uid}] [title: ${toDoObj.title}]`);
    }
    function saveProject(projectObj) {
        let projectsFromStorage;
        try {
            // attempt to load todos object from localStorage
            projectsFromStorage = JSON.parse(getStorage().projects);
        } catch (err) {
            // if parse fails then set to empty object
            projectsFromStorage = {};
        }
        // save all ToDos in project sequentially
        for (let todo of projectObj.todos) {
            saveToDo(todo);
        }
        // set key of project uid to stringified Project object
        projectsFromStorage[projectObj.uid] = JSON.stringify(projectObj);
        // save data in storage
        getStorage().setItem('projects', JSON.stringify(projectsFromStorage));
        console.log(`Project saved: [uid: ${projectObj.uid}] [title: ${projectObj.title}]`);
    }
}

/**
 * Multi-use
 * @param {string} toLoad "todo" or "project"
 * @param {number} uid uid of ToDo or Project object
 * @return single instance of ToDo or Project if uid is specifed, ToDo[] or Project[] (all stored) if not. Returns null if specific project is not found.
 * @throws LocalStorageError if local storage not accessible, or ParameterError if toLoad string was not recognised as valid.
 */
function load(toLoad, uid = null) {

    if (!localStorageAvailable()) throw new LocalStorageError('load', 'Local storage is not available! - load action not complete');
    if (toLoad !== 'project' && toLoad !== 'todo') throw new ParameterError('toLoad', `invalid paramter, must be "todo" or "project" but was "${toLoad}"`);


    if (toLoad === 'todo') {
        if (uid === null) return loadToDos();
        return loadTodo(uid);
    }
    if (toLoad === 'project') {
        if (uid === null) return loadProjects();
        return loadProject(uid);
    }

    function loadProject(projectUid) {
        if (typeof projectUid !== 'number') {
            throw new Error('loadProject(projectUid) projectUID parameter must be a number');
        }
        let loadedProjects = JSON.parse(getStorage().getItem('projects'));
        if (!loadedProjects.hasOwnProperty(projectUid)) {
            return null; // return null if project with projectUid not found
        }
        let parsedObj = JSON.parse(loadedProjects[projectUid]);
        let projectObj = new _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__.Project(parsedObj.title, parsedObj.description, parsedObj.notes, projectUid);
        for (let tuid of parsedObj.toDoUids) {
            let t = load('todo', tuid);
            //console.log(t);
            projectObj.addTodo(t);
        }
        return projectObj;
    }
    function loadProjects() {
        let loadedProjects = JSON.parse(getStorage().getItem('projects'));
        let projectObjs = [];
        for (let projectUID in loadedProjects) {
            let parsedObj = JSON.parse(loadedProjects[projectUID]);
            let projectObj = new _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__.Project(parsedObj.title, parsedObj.description, parsedObj.notes, parseInt(projectUID));
            for (let tuid of parsedObj.toDoUids) {
                projectObj.addTodo(loadTodo(tuid));
            }
            projectObjs.push(projectObj);
        }

        console.groupCollapsed('Projects loaded')
        console.log(`Projects loaded [number loaded: ${projectObjs.length}]`);
        for (let project of projectObjs) {
            console.log(project);
        }
        console.groupEnd('Projects loaded')

        return projectObjs;
    }
    function loadTodo(toDoUid) {
        //console.log("attempting to load todo with uid: " + toDoUid);

        let loadedTodosAll = getStorage().getItem('todos');
        //console.log(loadedTodosAll);

        let parsed = JSON.parse(loadedTodosAll);

        let loadedTodo = parsed[toDoUid];

        // let obj = JSON.parse(JSON.parse(loadedTodosAll)[toDoUid]);
        // //console.log(obj);

        let todo = new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(loadedTodo.title, loadedTodo.description, new Date(loadedTodo.dueDate), loadedTodo.priority, loadedTodo.notes, loadedTodo.uid);

        for (let item of loadedTodo.checklist) {
            todo.addToCheckList(item[0], item[1]);
            //console.log(item);
        }

        //console.log(todo.toString());

        return todo;


    }
    function loadToDos() {
        let loadedTodosJson = getStorage().getItem('todos');
        //console.log(loadedTodosJson);

        let parsedTodos = JSON.parse(loadedTodosJson);
        //console.log(parsedTodos);

        let builtTodos = [];
        for (let tuid in parsedTodos) {
            //console.log(typeof keyUid);
            // let obj = parsedTodos[keyUid];
            // //console.log(u);
            // let todo = new ToDo(obj.title, obj.description, new Date(obj.dueDate), obj.priority, obj.uid);
            // for (let item of obj.checklist) {
            //     todo.addToCheckList(item[0], item[1]);
            // }
            //console.log(todo);
            builtTodos.push(loadTodo(tuid));
        }
        //console.log(builtTodos);
        console.groupCollapsed('ToDos loaded')
        console.log(`ToDos loaded [number loaded: ${builtTodos.length}]`);
        for (let todo of builtTodos) {
            console.log(todo);
        }
        console.groupEnd('ToDos loaded')
        return builtTodos;
    }
}

/**
 * Delete data from storage, depending on parameters
 * @param {string} toDelete either 'todo' or 'project'
 * @param {number} uid the uid of either the project or todo to delete 
 * @param {boolean | undefined} deleteAssociatedTodos if deleting a project, this boolean respresents the users choice to delete all associated todo objects from storage
 */
function deleteFromStorage(toDelete, uid, deleteAssociatedTodos) {
    if (!localStorageAvailable()) throw new LocalStorageError('deleteFromStorage', 'Local storage is not available! - delete action not complete');
    if (toDelete !== 'project' && toDelete !== 'todo') throw new ParameterError('toDelete', `invalid paramter, must be "todo" or "project" but was "${toDelete}"`);


    if (toDelete === 'todo') return deleteToDo(uid);
    if (toDelete === 'project') return deleteProject(uid, deleteAssociatedTodos);

    function deleteProject(puid, deleteAssociatedTodos) {
        if (deleteAssociatedTodos === undefined) {
            console.log('deleteAssociatedTodos was not defined, defaulting to false');
            deleteAssociatedTodos = false;
        }
        //console.log(puid);

        let loadedProjects = load('project');
        //console.log(loadedProjects);

        let index = loadedProjects.findIndex(e => e.uid === puid);
        //console.log(index);

        let todosInProjectUids = loadedProjects[index].todos.map(e => e.uid );
        //console.log(todosInProjectUids);

        loadedProjects.splice(index, 1);

        let toStore = {};
        for (let project of loadedProjects) {
            toStore[project.uid] = project;
        }

        let stringified = JSON.stringify(toStore);
        getStorage().setItem('projects', stringified);
        if (deleteAssociatedTodos) {
            for (let tuid of todosInProjectUids) {
                deleteToDo(tuid);
            }
        }

    }
    function deleteToDo(tuid) {
        //TODO optimise by hiding loading projects behind a conditional (if todo is in project)?
        
        //console.log("loaded:");
        //console.log(getStorage().getItem('todos'));

        let loadedTodos = load('todo');
        let loadedProjects = load('project');


        //console.log(todos);
        let index = loadedTodos.findIndex((element) => element.uid === tuid);
        //console.log('index: ' + index);
        loadedTodos.splice(index, 1);
        let toStore = {};
        for (let todo of loadedTodos) {
            toStore[todo.uid] = todo;
        }
        //console.log("toStore:");
        //console.log(toStore);
        //console.log("toStore stringified:");
        //console.log(JSON.stringify(toStore));
        let stringified =  JSON.stringify(toStore);

        // remove refences to deleted todos from project json object
        let containingProject = loadedProjects.find(p => p.todos.filter(t => t.uid === uid).length > 0);
        if (containingProject) {
            let puid = containingProject.uid;
            console.log('containing project uid');
            console.log(puid);
            let p = load('project', puid);
            console.log(p);
            let ptodoindex = p.todos.findIndex(element => element.uid === tuid);
            console.log(ptodoindex);
            p.todos.splice(ptodoindex, 1);
            save(p);
        }

        getStorage().setItem('todos', stringified);



    }
}

/**
 * Checks if localStorage is accessible.
 * @returns a boolean representing if localStorage is accessible.
 */
function localStorageAvailable() {
    var storage;
    try {
        storage = getStorage();
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}

/**
 * Retrieve json from storage source - currently localStorage
 * @returns a Storage object (array-like object of key:value pairs)
 */
function getStorage() {
    return window['localStorage'];
}

/**
 * Clear localStorage
 */
function clearStorage() {
    console.log('localStorage cleared!')
    getStorage().clear();
}

/**
 * Print to console all ToDo objects in localStorage
 */
function displayStorage() {
    // console.group('displaying storage');
    // let s = Array.from(loadToDos()) || [];
    // for (let i = 0; i < s.length; i++) {
    //     console.log(s[i]);
    // }
    // console.groupEnd('displaying storage');
}

class LocalStorageError extends Error {
    constructor(action, message) {
        super(`${action} : ${message}`);
        this.name = 'LocalStorageError';
    }
}

class ParameterError extends Error {
    constructor(parameterName, message) {
        super(`${parameterName} : ${message}`);
        this.name = `ParameterError`;
    }
}




/***/ }),

/***/ "./src/fonts/AlfaSlabOne-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/AlfaSlabOne-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76486fb5cc170dab15a5.ttf";

/***/ }),

/***/ "./src/fonts/BungeeShade-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/BungeeShade-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65113b6b47a5bd986255.ttf";

/***/ }),

/***/ "./src/fonts/OpenSans-VariableFont_wdth,wght.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/OpenSans-VariableFont_wdth,wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c7806d7ef7d294f568e.ttf";

/***/ }),

/***/ "./src/img/menu-dark.png":
/*!*******************************!*\
  !*** ./src/img/menu-dark.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "147955f7d6817810977c.png";

/***/ }),

/***/ "./src/img/menu-light.png":
/*!********************************!*\
  !*** ./src/img/menu-light.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2ee2bb91e5fa1e7785a.png";

/***/ }),

/***/ "./src/img/moon.png":
/*!**************************!*\
  !*** ./src/img/moon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d72fba816caf54c7eedd.png";

/***/ }),

/***/ "./src/img/sunWhite.png":
/*!******************************!*\
  !*** ./src/img/sunWhite.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13e8a04cc19f65750fbb.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _classes_Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Project.js */ "./src/classes/Project.js");
/* harmony import */ var _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/ToDo.js */ "./src/classes/ToDo.js");






let loaded = {};

(function initialise() {
    //clearStorage();
    //buildTestData();
    let todos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('todo');
    let projects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('project');
    setUIDs(todos, projects);
    // let t = new ToDo(null, null, null, null);
    // console.log(t);
})();

function setUIDs(todos, projects) {
    _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo.updateUidSeed(determinedNewUidSeed(todos));
    console.log("TUID seed: " + _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo.getUidSeed());

    _classes_Project_js__WEBPACK_IMPORTED_MODULE_3__.Project.updateUidSeed(determinedNewUidSeed(projects));
    console.log("PUID seed: " + _classes_Project_js__WEBPACK_IMPORTED_MODULE_3__.Project.getUidSeed());

    function determinedNewUidSeed(objects) {
        let highest = objects.reduce((p, el) => {
            if (p <= el.uid) return el.uid + 1;
        }, 0);
        return highest;
    }
};

function buildTestData() {
    // addTestToDosToStorage(7);
    let tProj = new _classes_Project_js__WEBPACK_IMPORTED_MODULE_3__.Project("ptitle1", "pdesc1", "pnotes1", 5555);
    let t1 = new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("ttitle1a", "tdesc1a", new Date(1, 1, 1), 1, "some notes", 1111);
    let t2 = new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("ttitle1b", "tdesc1b", new Date(1, 1, 1), 1, "some notes", 1112);
    t1.addToCheckList(true, "text checklist item");
    t2.addToCheckList(false, "text checklist item");
    t2.addToCheckList(true, "text checklist item");
    tProj.addTodo(t1);
    tProj.addTodo(t2);
    tProj.addTodo(new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("ttitle2", "tdesc2", new Date(2, 2, 2), 2, "some notes", 2222));

    let tProj2 = new _classes_Project_js__WEBPACK_IMPORTED_MODULE_3__.Project("ptitle2", "pdesc2", "pnotes2", 6666);
    tProj2.addTodo(new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("ttitle3", "tdesc3", new Date(3, 3, 3), 3, "some notes", 3333));
    tProj2.addTodo(new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("ttitle4", "tdesc4", new Date(4, 4, 4), 4, "some notes", 4444));
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(tProj);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(tProj2);

    let loneT1 = new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("not in any project 1", "description - this one isnt in a project 1".repeat(10), new Date(5, 5, 5), 5, "some notes 1", 1337);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(loneT1);
    let loneT2 = new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_4__.ToDo("not in any project 2", "description - this one isnt in a project 2", new Date(6, 6, 6), 5, "some notes 2", 1338);
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(loneT2);


    //deleteFromStorage('todo', t2.uid);
    //console.log(load('todo'));

    //let whatever = load("project");
    //console.log(whatever);


    //console.log(window['localStorage']);

    //console.log(load("todo"));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsWUFBWSxVQUFVLE9BQU8sVUFBVSxNQUFNLFVBQVUsVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFVBQVUsT0FBTyxLQUFLLGFBQWEsWUFBWSxNQUFNLEtBQUssYUFBYSxXQUFXLFNBQVMsTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxhQUFhLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxZ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QWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUSxJQUFJLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWUsSUFBSSxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQzBHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlUMUc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0o7QUFDa0Q7QUFDNUI7QUFDTjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQUk7QUFDcEIsbUJBQW1CLGlEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxnRUFBa0I7QUFDdEIsZ0NBQWdDLDZEQUFlO0FBQy9DO0FBQ0EsSUFBSSxzRUFBcUI7QUFDekIsZ0NBQWdDLG1FQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQU87QUFDM0IsaUJBQWlCLGtEQUFJO0FBQ3JCLGlCQUFpQixrREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFJO0FBQzFCO0FBQ0EscUJBQXFCLHdEQUFPO0FBQzVCLHVCQUF1QixrREFBSTtBQUMzQix1QkFBdUIsa0RBQUk7QUFDM0IsSUFBSSxpREFBSTtBQUNSLElBQUksaURBQUk7QUFDUjtBQUNBLHFCQUFxQixrREFBSTtBQUN6QixJQUFJLGlEQUFJO0FBQ1IscUJBQXFCLGtEQUFJO0FBQ3pCLElBQUksaURBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9odG1sLXRlbXBsYXRlcy9wcm9qZWN0Q2FyZC5odG1sIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2h0bWwtdGVtcGxhdGVzL3Byb2plY3RFZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9odG1sLXRlbXBsYXRlcy90b0RvQ2FyZC5odG1sIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2h0bWwtdGVtcGxhdGVzL3RvRG9Nb2RhbC5odG1sIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2h0bWwtdGVtcGxhdGVzL3RvRG9Nb2RhbF9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9tZW51LWRhcmsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21vb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21lbnUtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3N1bldoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FsZmFTbGFiT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQnVuZ2VlU2hhZGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9PcGVuU2Fucy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1tYXJnaW4tbWFpbjogMTAwcHg7XFxyXFxuICAgIC0tYm9yZGVyLXJhZDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgICBmb250LWZhbWlseTogb3BlbnNhbnM7XFxyXFxuXFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMTogI2Y0ZjlmOTtcXHJcXG4gICAgLS10aGVtZS1jb2xvci0yOiAjZTQ0MjMyO1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTM6ICNkM2QzZDM7XFxyXFxuICAgIC0tdGhlbWUtYWNjZW50OiAjZmNhMTk5O1xcclxcblxcclxcbiAgICAtLXRoZW1lLXRleHQtMTogYmxhY2s7XFxyXFxuICAgIC0tdGhlbWUtdGV4dC0yOiB3aGl0ZTtcXHJcXG4gICAgLS10aGVtZS1idXJnZXItaWNvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgLS10aGVtZS1jaGFuZ2UtaWNvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG5cXHJcXG4gICAgLS10aGVtZS10cmFuc2l0aW9uLXNwZWVkOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpLFxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciB2YXIoLS10aGVtZS10cmFuc2l0aW9uLXNwZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsge1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTE6ICMyNjFjMmM7XFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMjogIzNlMmM0MTtcXHJcXG4gICAgLS10aGVtZS1jb2xvci0zOiAjNWM1MjdmO1xcclxcbiAgICAtLXRoZW1lLWFjY2VudDogIzZlODViMjtcXHJcXG5cXHJcXG4gICAgLS10aGVtZS10ZXh0LTE6IHdoaXRlO1xcclxcbiAgICAtLXRoZW1lLXRleHQtMjogYmxhY2s7XFxyXFxuICAgIC0tdGhlbWUtYnVyZ2VyLWljb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIC0tdGhlbWUtY2hhbmdlLWljb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogYWxmYTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJ1bmdlZTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAvKiBodG1sIGJvZHkgZWxlbWVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTEpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICAvKiBtYWluIGNvbnRhaW5lciBmb3IgY29udGVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICAvKiBoZWFkZXIgY29udGFpbmVyICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGl0bGUge1xcclxcbiAgICAvKiBoZWFkZXIgbG9nbyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBidW5nZWU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlPnNwYW4ge1xcclxcbiAgICAvKiBoZWFkZXIgbG9nbyBkaXYgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1ib2R5IHtcXHJcXG4gICAgLyogQ29udGFpbmVyIGZvciBoZWFkZXIgYnVyZ2VyIGJ1dHRvbiBhbmQgbmF2aWdhdGlvbiBidXR0b25zICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24sXFxyXFxuLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIC8qIGhlYWRlciBidXR0b25zIC0gdG9wIG1lbnUsIGFuZCBidXJnZXIgbWVudSAqL1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLXRoZW1lLXRleHQtMik7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLXRoZW1lLXRleHQtMikgc29saWQgMXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIHZpc2liaWxpdHkgMHM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDAuNXMgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJvZHk+Lm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2PnVsPmxpLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1ib2R5Pi5tZW51LWV4cGFuZGluZy1idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXY+dWw+bGkubWVudS1leHBhbmRpbmctYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGhlaWdodDphdXRvO1xcclxcbiAgICBtYXJnaW46IDVweCAwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGhlbWUtYnVyZ2VyLWljb24pO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXI6IDBweFxcclxcbiAgICAgICAgLyogc29saWQgdmFyKC0tYmctY29sb3ItMSkqL1xcclxcbiAgICA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGFtYnVyZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZT5kaXYge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS10aGVtZS1jaGFuZ2UtaWNvbik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZT5kaXY6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRFTlQgKi9cXHJcXG5cXHJcXG4ubWFpbj5kaXYge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgLS1jb250ZW50LXBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCksXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpLFxcclxcbiAgICAgICAgdHJhbnNmb3JtIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWFjY2VudCk7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIC8qIHRvcDogc2V0IGluIGRvbS5qcyAqL1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHJcXG4gICAgLypcXHJcXG4gICAgTmF2IGlzIGhpZGRlbiB1cG9uIGxvYWRpbmcgYW5kIGRvbS5qcyByZW1vdmVzIC5oaWRkZW4gY2xhc3NcXHJcXG4gICAgYWZ0ZXIgMjAwbXMgKGNvcnJlc3BvbmRpbmcgdG8gdGhlIHRyYW5zaXRpb24gdGltZSkuIHRoaXMgc3RvcHNcXHJcXG4gICAgdGhlIG5hdiB0cmFuc2Zvcm1pbmcgdG8gc2NhbGUoMCkgYWZ0ZXIgbG9hZGluZywgd2hpY2ggc2hvd3NcXHJcXG4gICAgdGhlIG5hdiBicmllZmx5IC0gYml0IG9mIGEgaGFjaz8hXFxyXFxuICAgICovXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1vcGVuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdj51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEFERCBUT0RPICovXFxyXFxuXFxyXFxuZGl2LmFkZC10b2RvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETyBDQVJEICovXFxyXFxuLnRvZG8tY2FyZHMsXFxyXFxuLnByb2plY3QtY2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkLFxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGNhbGMoMS4ycmVtICsgMjBweCkgNnJlbSAyZnIgMWZyIDFmciAvIHJlcGVhdCgyLCAxZnIpO1xcclxcblxcclxcbiAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogY2FsYygxLjJyZW0gKyAyMHB4KSA2cmVtIDZyZW0gMmZyIC8gcmVwZWF0KDIsIDFmcik7O1xcclxcblxcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1jYXJkOmhvdmVyLFxcclxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4qLFxcclxcbi5wcm9qZWN0LWNhcmQ+KiB7XFxyXFxuICAgIC8qcG9zaXRpb24gb2YgYWxsIGNlbGxzIGJhciB0aGUgYm90dG9tIGNlbGwgaXMgdG8gc3BhbiAyIGdyaWQgdHJhY2tzKi9cXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgc3BhbjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi50aXRsZSxcXHJcXG4ucHJvamVjdC1jYXJkPi50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMge1xcclxcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsXFxyXFxuLnRvZG8tY2FyZD4uZGVzY3JpcHRpb24sXFxyXFxuLnByb2plY3QtY2FyZD4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4uY2hlY2tsaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmQ+LmNoZWNrbGlzdD4uY2hlY2tsaXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciA0ZnI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5zdW1tYXJ5IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5wcm9qZWN0LWluZm8ge1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi5wcm9qZWN0LWluZm8+c3BhbjpmaXJzdC1jaGlsZCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbD5kaXY+c3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZD4uYm90dG9tLWNlbGwsXFxyXFxuLnRvZG8tY2FyZD4uYm90dG9tLWNlbGwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbD5kaXY6Zmlyc3QtY2hpbGQsXFxyXFxuLnRvZG8tY2FyZD4uYm90dG9tLWNlbGw+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUICovXFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVkaXRvci1idXR0b24tcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLzFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT09MIFRJUCAqL1xcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0yKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uOmhvdmVyIC50b29sdGlwLFxcclxcbi5ub3Rlczpob3ZlciAudG9vbHRpcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb246Zm9jdXMgLnRvb2x0aXAsXFxyXFxuLm5vdGVzOmZvY3VzIC50b29sdGlwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUwgKi9cXHJcXG5cXHJcXG4ubW9kYWwtYWN0aXZlIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0LnNlY3Rpb24taW5wdXQsXFxyXFxuLnNlY3Rpb24taW5wdXQsXFxyXFxuLmNvbnRlbnQtYnV0dG9uLFxcclxcbi5jaGVja2xpc3Qtc2VjdGlvbixcXHJcXG4uY2hlY2tsaXN0LXRleHQsXFxyXFxuI21vZGFsLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtd3JhcHBlciAuY29udGVudC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tbGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkKS8zKTtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC13cmFwcGVyIHtcXHJcXG4gICAgLS10b3Atb2Zmc2V0OiAzLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWZvcm0ge1xcclxcbiAgICAtLW1hcmdpbi10b3A6Y2FsYyh2YXIoLS10b3Atb2Zmc2V0KSArIDEwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjY1cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3Atb2Zmc2V0KSAtIHZhcigtLW1hcmdpbi10b3ApKTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLW1hcmdpbi10b3ApO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLnR3by1jZWxsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNkZXNjLWZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uPnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWxhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0wLjdlbTtcXHJcXG4gICAgbGVmdDogMS41ZW07XFxyXFxuXFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtMik7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwLjA1ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWlucHV0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC44ZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3Qtc2VjdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTsgKi9cXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMS4yZW0gMWVtIDFlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICAvKiBtYXJnaW46IDEycHggMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LW5ldy1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgNmZyIDFmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1zZWN0aW9uPi5jaGVja2xpc3QtaXRlbT4uc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtdGV4dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgI21vZGFsLWZvcm0ge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2hlY2tsaXN0LXNlY3Rpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tcGxldGUtZmllbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcXHJcXG4gICAgLmhlYWRlci1ib2R5IC5tZW51LWJ1dHRvbixcXHJcXG4gICAgLmhlYWRlci1ib2R5IC5tZW51LWV4cGFuZGluZy1idXR0b24ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBISURERU4gKi9cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVESUEgUVVFUklFUyAqL1xcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLm1haW4+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5tYWluPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAubWFpbj5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjU1cHgpIHtcXHJcXG4gICAgLmJvZHkge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNhcmRzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNhcmQsXFxyXFxuICAgIC5wcm9qZWN0LWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7O0lBRXJCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiw0REFBZ0Q7SUFDaEQsNERBQTJDOztJQUUzQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYO3NEQUNrRDtBQUN0RDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiw0REFBaUQ7SUFDakQsNERBQStDO0FBQ25EOztBQUVBO0lBQ0ks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SUFDZixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksc0NBQXNDO0lBQ3RDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCOztJQUVyQjtBQUNKOztBQUVBO0lBQ0k7O1FBRUksYUFBYTtJQUNqQjtBQUNKOzs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxrQkFBa0I7Ozs7QUFJbEI7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7O1FBRUksVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLW1hcmdpbi1tYWluOiAxMDBweDtcXHJcXG4gICAgLS1ib3JkZXItcmFkOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEwcHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBvcGVuc2FucztcXHJcXG5cXHJcXG4gICAgLS10aGVtZS1jb2xvci0xOiAjZjRmOWY5O1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTI6ICNlNDQyMzI7XFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMzogI2QzZDNkMztcXHJcXG4gICAgLS10aGVtZS1hY2NlbnQ6ICNmY2ExOTk7XFxyXFxuXFxyXFxuICAgIC0tdGhlbWUtdGV4dC0xOiBibGFjaztcXHJcXG4gICAgLS10aGVtZS10ZXh0LTI6IHdoaXRlO1xcclxcbiAgICAtLXRoZW1lLWJ1cmdlci1pY29uOiB1cmwoJy4uL2ltZy9tZW51LWRhcmsucG5nJyk7XFxyXFxuICAgIC0tdGhlbWUtY2hhbmdlLWljb246IHVybCgnLi4vaW1nL21vb24ucG5nJyk7XFxyXFxuXFxyXFxuICAgIC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZDogMXM7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10aGVtZS10cmFuc2l0aW9uLXNwZWVkKSxcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIHtcXHJcXG4gICAgLS10aGVtZS1jb2xvci0xOiAjMjYxYzJjO1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTI6ICMzZTJjNDE7XFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMzogIzVjNTI3ZjtcXHJcXG4gICAgLS10aGVtZS1hY2NlbnQ6ICM2ZTg1YjI7XFxyXFxuXFxyXFxuICAgIC0tdGhlbWUtdGV4dC0xOiB3aGl0ZTtcXHJcXG4gICAgLS10aGVtZS10ZXh0LTI6IGJsYWNrO1xcclxcbiAgICAtLXRoZW1lLWJ1cmdlci1pY29uOiB1cmwoJy4uL2ltZy9tZW51LWxpZ2h0LnBuZycpO1xcclxcbiAgICAtLXRoZW1lLWNoYW5nZS1pY29uOiB1cmwoJy4uL2ltZy9zdW5XaGl0ZS5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBhbGZhO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvQWxmYVNsYWJPbmUtUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBidW5nZWU7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9CdW5nZWVTaGFkZS1SZWd1bGFyLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvT3BlblNhbnMtVmFyaWFibGVGb250X3dkdGgsd2dodC50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIC8qIGh0bWwgYm9keSBlbGVtZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIC8qIG1haW4gY29udGFpbmVyIGZvciBjb250ZW50ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIC8qIGhlYWRlciBjb250YWluZXIgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xcclxcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10aXRsZSB7XFxyXFxuICAgIC8qIGhlYWRlciBsb2dvICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJ1bmdlZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGl0bGU+c3BhbiB7XFxyXFxuICAgIC8qIGhlYWRlciBsb2dvIGRpdiAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJvZHkge1xcclxcbiAgICAvKiBDb250YWluZXIgZm9yIGhlYWRlciBidXJnZXIgYnV0dG9uIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbixcXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uIHtcXHJcXG4gICAgLyogaGVhZGVyIGJ1dHRvbnMgLSB0b3AgbWVudSwgYW5kIGJ1cmdlciBtZW51ICovXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgICBtYXJnaW46IDBweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWFjY2VudCk7XFxyXFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tdGhlbWUtdGV4dC0yKTtcXHJcXG4gICAgb3V0bGluZTogdmFyKC0tdGhlbWUtdGV4dC0yKSBzb2xpZCAxcHg7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tZW51LWV4cGFuZGluZy1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDAuODVlbTtcXHJcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgdmlzaWJpbGl0eSAwcztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWV4cGFuZGluZy1idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMC41cyBlYXNlLWluLW91dCwgaGVpZ2h0IDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItYm9keT4ubWVudS1leHBhbmRpbmctYnV0dG9uIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5uYXY+dWw+bGkubWVudS1leHBhbmRpbmctYnV0dG9uIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJvZHk+Lm1lbnUtZXhwYW5kaW5nLWJ1dHRvbi5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdj51bD5saS5tZW51LWV4cGFuZGluZy1idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgaGVpZ2h0OmF1dG87XFxyXFxuICAgIG1hcmdpbjogNXB4IDBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5oYW1idXJnZXIge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS10aGVtZS1idXJnZXItaWNvbik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWFjY2VudCk7XFxyXFxuICAgIGJvcmRlcjogMHB4XFxyXFxuICAgICAgICAvKiBzb2xpZCB2YXIoLS1iZy1jb2xvci0xKSovXFxyXFxuICAgIDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICBtYXJnaW46IDBweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllciguNjEsIC0wLjM3LCAuNTQsIDEuNzgpO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5oYW1idXJnZXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXRoZW1lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXRoZW1lPmRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXRoZW1lLWNoYW5nZS1pY29uKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllciguNjEsIC0wLjM3LCAuNTQsIDEuNzgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhbmdlLXRoZW1lPmRpdjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09OVEVOVCAqL1xcclxcblxcclxcbi5tYWluPmRpdiB7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICAtLWNvbnRlbnQtcGFkZGluZzogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10aGVtZS10cmFuc2l0aW9uLXNwZWVkKSxcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCksXFxyXFxuICAgICAgICB0cmFuc2Zvcm0gdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiB7XFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgLyogdG9wOiBzZXQgaW4gZG9tLmpzICovXFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcblxcclxcbiAgICAvKlxcclxcbiAgICBOYXYgaXMgaGlkZGVuIHVwb24gbG9hZGluZyBhbmQgZG9tLmpzIHJlbW92ZXMgLmhpZGRlbiBjbGFzc1xcclxcbiAgICBhZnRlciAyMDBtcyAoY29ycmVzcG9uZGluZyB0byB0aGUgdHJhbnNpdGlvbiB0aW1lKS4gdGhpcyBzdG9wc1xcclxcbiAgICB0aGUgbmF2IHRyYW5zZm9ybWluZyB0byBzY2FsZSgwKSBhZnRlciBsb2FkaW5nLCB3aGljaCBzaG93c1xcclxcbiAgICB0aGUgbmF2IGJyaWVmbHkgLSBiaXQgb2YgYSBoYWNrPyFcXHJcXG4gICAgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW9wZW4ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2PnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQUREIFRPRE8gKi9cXHJcXG5cXHJcXG5kaXYuYWRkLXRvZG8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT0RPIENBUkQgKi9cXHJcXG4udG9kby1jYXJkcyxcXHJcXG4ucHJvamVjdC1jYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZHMge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZHMge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiAxZnI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmQsXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogY2FsYygxLjJyZW0gKyAyMHB4KSA2cmVtIDJmciAxZnIgMWZyIC8gcmVwZWF0KDIsIDFmcik7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBjYWxjKDEuMnJlbSArIDIwcHgpIDZyZW0gNnJlbSAyZnIgLyByZXBlYXQoMiwgMWZyKTs7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi50b2RvLWNhcmQ6aG92ZXIsXFxyXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPiosXFxyXFxuLnByb2plY3QtY2FyZD4qIHtcXHJcXG4gICAgLypwb3NpdGlvbiBvZiBhbGwgY2VsbHMgYmFyIHRoZSBib3R0b20gY2VsbCBpcyB0byBzcGFuIDIgZ3JpZCB0cmFja3MqL1xcclxcbiAgICBncmlkLWNvbHVtbjogMiBzcGFuO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmQ+LnRpdGxlLFxcclxcbi5wcm9qZWN0LWNhcmQ+LnRpdGxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5ub3RlcyB7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub3RlcyxcXHJcXG4udG9kby1jYXJkPi5kZXNjcmlwdGlvbixcXHJcXG4ucHJvamVjdC1jYXJkPi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi5jaGVja2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4uY2hlY2tsaXN0Pi5jaGVja2xpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDRmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQ+LnN1bW1hcnkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQ+LmJvdHRvbS1jZWxsLFxcclxcbi50b2RvLWNhcmQ+LmJvdHRvbS1jZWxsLFxcclxcbi50b2RvLWNhcmQ+LnByb2plY3QtaW5mbyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmQ+LnByb2plY3QtaW5mbz5zcGFuOmZpcnN0LWNoaWxkLFxcclxcbi50b2RvLWNhcmQ+LmJvdHRvbS1jZWxsPmRpdj5zcGFuOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxyXFxufVxcclxcbi5wcm9qZWN0LWNhcmQ+LmJvdHRvbS1jZWxsPmRpdjpmaXJzdC1jaGlsZCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbD5kaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFBST0pFQ1QgKi9cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZWRpdG9yLWJ1dHRvbi1wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvMWZyO1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFRPT0wgVElQICovXFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7ICovXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS10ZXh0LTIpO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb246aG92ZXIgLnRvb2x0aXAsXFxyXFxuLm5vdGVzOmhvdmVyIC50b29sdGlwIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbjpmb2N1cyAudG9vbHRpcCxcXHJcXG4ubm90ZXM6Zm9jdXMgLnRvb2x0aXAge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNT0RBTCAqL1xcclxcblxcclxcbi5tb2RhbC1hY3RpdmUge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Quc2VjdGlvbi1pbnB1dCxcXHJcXG4uc2VjdGlvbi1pbnB1dCxcXHJcXG4uY29udGVudC1idXR0b24sXFxyXFxuLmNoZWNrbGlzdC1zZWN0aW9uLFxcclxcbi5jaGVja2xpc3QtdGV4dCxcXHJcXG4jbW9kYWwtZm9ybSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC13cmFwcGVyIC5jb250ZW50LWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1sYWJlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWJvcmRlci1yYWQpLzMpO1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXdyYXBwZXIge1xcclxcbiAgICAtLXRvcC1vZmZzZXQ6IDMuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwtZm9ybSB7XFxyXFxuICAgIC0tbWFyZ2luLXRvcDpjYWxjKHZhcigtLXRvcC1vZmZzZXQpICsgMTBweCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAyNjVweDtcXHJcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIHZhcigtLXRvcC1vZmZzZXQpIC0gdmFyKC0tbWFyZ2luLXRvcCkpO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tbWFyZ2luLXRvcCk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24udHdvLWNlbGwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGUtZmllbGQge1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2MtZmllbGQge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24+dGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tbGFiZWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTAuN2VtO1xcclxcbiAgICBsZWZ0OiAxLjVlbTtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC0yKTsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAwLjY1ZW07XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDAuMDVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24taW5wdXQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjVlbSAwLjVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1zZWN0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpOyAqL1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxLjJlbSAxZW0gMWVtIDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciA3ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAgIC8qIG1hcmdpbjogMTJweCAwcHg7ICovXFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtbmV3LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciA2ZnIgMWZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICBtYXJnaW46IDEycHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LWl0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LXNlY3Rpb24+LmNoZWNrbGlzdC1pdGVtPi5zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC10ZXh0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250ZW50LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcclxcbiAgICAjbW9kYWwtZm9ybSB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jaGVja2xpc3Qtc2VjdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb21wbGV0ZS1maWVsZCB7XFxyXFxuICAgICAgICB3aWR0aDogNzVweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xcclxcbiAgICAuaGVhZGVyLWJvZHkgLm1lbnUtYnV0dG9uLFxcclxcbiAgICAuaGVhZGVyLWJvZHkgLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhJRERFTiAqL1xcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRURJQSBRVUVSSUVTICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAubWFpbj5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLm1haW4+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxyXFxuICAgIC5tYWluPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTVweCkge1xcclxcbiAgICAuYm9keSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG8tY2FyZHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvZG8tY2FyZCxcXHJcXG4gICAgLnByb2plY3QtY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogOTUlO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInByb2plY3QtY2FyZFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj54PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj48c3BhbiBjbGFzcz1cXFwidG9vbHRpcFxcXCI+RGVzY3JpcHRpb248L3NwYW4+eDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJub3Rlc1xcXCI+PHNwYW4gY2xhc3M9XFxcInRvb2x0aXBcXFwiPk5vdGVzPC9zcGFuPng8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+eCBUb2RvKCdzKTwvZGl2PlxcclxcbjwvZGl2PlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0XFxcIj5cXHJcXG4gICAgPGZvcm0gaWQ9XFxcInByb2plY3QtZm9ybVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5UaXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRpdGxlXFxcIiBpZD1cXFwidGl0bGUtZmllbGRcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5EZXNjcmlwdGlvbjwvZGl2PlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgY29scz1cXFwiNDBcXFwiIHJvd3M9XFxcIjVcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImRlc2MtZmllbGRcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPk5vdGVzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJzZWN0aW9uLWlucHV0XFxcIiBjb2xzPVxcXCI0MFxcXCIgcm93cz1cXFwiNVxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICBpZD1cXFwibm90ZXMtZmllbGRcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPlRvRG9zPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidG9kby1jYXJkc1xcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgXFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtZWRpdG9yLWJ1dHRvbi1wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCIgaWQ9XFxcInNhdmUtYnV0dG9uXFxcIj5TYXZlIFByb2plY3Q8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbnRlbnQtYnV0dG9uXFxcIiBpZD1cXFwiZGVsZXRlLWJ1dHRvblxcXCI+RGVsZXRlIFByb2plY3Q8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1lZGl0b3ItYnV0dG9uLXBhbmVsXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbnRlbnQtYnV0dG9uXFxcIiBpZD1cXFwiYWRkLWJ1dHRvblxcXCI+QWRkIE5ldyBUb0RvPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCIgaWQ9XFxcImFkZC1leGlzdGluZy1idXR0b25cXFwiPkFkZCBFeGlzdGluZyBUb0RvPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCIgaWQ9XFxcInJlbW92ZS1leGlzdGluZy1idXR0b25cXFwiPlJlbW92ZSBUb0RvIGZyb20gUHJvamVjdDwvYnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwidG9kby1jYXJkXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGl0bGVcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrbGlzdFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdW1tYXJ5XFxcIj4gY2hlY2tsaXN0IGl0ZW1zPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWluZm9cXFwiPjxzcGFuPlByb2plY3Q6IDwvc3Bhbj48c3Bhbj48L3NwYW4+PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImJvdHRvbS1jZWxsXFxcIj5cXHJcXG4gICAgICAgIDxkaXY+PHNwYW4+RHVlOiA8L3NwYW4+PHNwYW4+MDEvMDIvMTkwMTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+PHNwYW4+UHJpb3JpdHk6IDwvc3Bhbj48c3Bhbj4xPC9zcGFuPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwibW9kYWwtd3JhcHBlclxcXCI+XFxyXFxuICAgIDxmb3JtIGlkPVxcXCJtb2RhbC1mb3JtXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPlRpdGxlPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJzZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgdGl0bGVcXFwiIGlkPVxcXCJ0aXRsZS1maWVsZFxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPkRlc2NyaXB0aW9uPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJzZWN0aW9uLWlucHV0XFxcIiBjb2xzPVxcXCI0MFxcXCIgcm93cz1cXFwiNVxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgICAgICAgICBpZD1cXFwiZGVzYy1maWVsZFxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+Tm90ZXM8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcInNlY3Rpb24taW5wdXRcXFwiIGNvbHM9XFxcIjQwXFxcIiByb3dzPVxcXCI1XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgbm90ZXNcXFwiXFxyXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJub3Rlcy1maWVsZFxcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbiB0d28tY2VsbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPkR1ZSBEYXRlPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwiZGF0ZVxcXCIgaWQ9XFxcImR1ZS1kYXRlLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+UHJpb3JpdHk8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgaWQ9XFxcInByaW9yaXR5LWZpZWxkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPjE8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjJcXFwiPjI8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjNcXFwiPjM8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjRcXFwiPjQ8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjVcXFwiPjU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrbGlzdC1zZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5DaGVja2xpc3QgLSBMaXN0PC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNoZWNrbGlzdC1zZWN0aW9uIG5ldy1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5DaGVja2xpc3QgLSBOZXc8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2xpc3QtbmV3LWl0ZW1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcInNlY3Rpb24taW5wdXQgY29tcGxldGUtZmllbGRcXFwiIG5hbWU9XFxcImNvbXBsZXRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidHJ1ZVxcXCI+Q29tcGxldGU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWxzZVxcXCI+Tm90IENvbXBsZXRlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPkNvbXBsZXRlPzwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrbGlzdC10ZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwibWF4aW11bSAyNTUgY2hhcmFjdGVyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5DaGVja2xpc3QgaXRlbSB0ZXh0PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImFkZC10b2RvLWJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbnRlbnQtYnV0dG9uXFxcIj5BZGQ8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJzYXZlLWJ1dHRvblxcXCIgY2xhc3M9XFxcImNvbnRlbnQtYnV0dG9uXFxcIj5TYXZlPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcImRlbGV0ZS1idXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCI+RGVsZXRlPC9idXR0b24+XFxyXFxuICAgIDwvZm9ybT5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tsaXN0LWxpc3QtaXRlbVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dCBjb21wbGV0ZS1maWVsZFxcXCIgbmFtZT1cXFwiY29tcGxldGVkXFxcIj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ0cnVlXFxcIj5Db21wbGV0ZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImZhbHNlXFxcIj5Ob3QgQ29tcGxldGU8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+Q29tcGxldGU/PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY2hlY2tsaXN0LXRleHRcXFwiIHR5cGU9XFxcInRleHRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+Q2hlY2tsaXN0IGl0ZW0gdGV4dDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vVG9Eby5qcyc7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuXHJcbiAgICAjdWlkO1xyXG5cclxuICAgICN0aXRsZTtcclxuICAgICNkZXNjcmlwdGlvbjtcclxuICAgICNub3RlcztcclxuICAgICN0b2RvcztcclxuXHJcbiAgICBzdGF0aWMgI3VpZFNlZWQgPSAwO1xyXG4gICAgc3RhdGljIHVwZGF0ZVVpZFNlZWQobmV3U2VlZCkge1xyXG4gICAgICAgIFByb2plY3QuI3VpZFNlZWQgPSBuZXdTZWVkO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFVpZFNlZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb2plY3QuI3VpZFNlZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0IGEgcHJvamVjdCBvYmplY3QuIElmIFVJRCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCBhIG5ldyB1aWQgd2lsbCBiZSBhc3NpZ25lZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5vdGVzIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IHVpZCBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBub3RlcywgdWlkKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlIHx8ICdOZXcgUHJvamVjdCc7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8ICdOZXcgUHJvamVjdCBkZXNjcmlwdGlvbic7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzIHwgXCJcIjtcclxuICAgICAgICB0aGlzLiN0b2RvcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuI3VpZCA9IHVpZCB8fCArK1Byb2plY3QuI3VpZFNlZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHsgdGhpcy4jdGl0bGUgPSBuZXdUaXRsZSB9O1xyXG4gICAgZ2V0IHRpdGxlKCkgeyByZXR1cm4gdGhpcy4jdGl0bGUgfTtcclxuXHJcbiAgICBzZXQgdG9kb3ModG9Eb0FycmF5KSB7IHRoaXMuI3RvZG9zID0gdG9Eb0FycmF5IH07XHJcbiAgICBnZXQgdG9kb3MoKSB7IHJldHVybiB0aGlzLiN0b2RvcyB9O1xyXG5cclxuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikgeyB0aGlzLiNkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uIH07XHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbiB9O1xyXG5cclxuICAgIHNldCBub3RlcyhuZXdOb3RlcykgeyB0aGlzLiNub3RlcyA9IG5ld05vdGVzIH07XHJcbiAgICBnZXQgbm90ZXMoKSB7IHJldHVybiB0aGlzLiNub3RlcyB9O1xyXG5cclxuICAgIGdldCB1aWQoKSB7IHJldHVybiB0aGlzLiN1aWQgfTtcclxuXHJcbiAgICBhZGRUb2RvKHRvRG9PYmopIHtcclxuICAgICAgICB0aGlzLiN0b2Rvcy5wdXNoKHRvRG9PYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRvZG8odG9Eb09iaikge1xyXG4gICAgICAgIHRoaXMuI3RvZG9zLnNwbGljZSh0aGlzLiN0b2Rvcy5maW5kSW5kZXgoKG8pID0+IG8udWlkID09IHRvRG9PYmoudWlkKSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGBEZXNjOiAke3RoaXMuI2Rlc2NyaXB0aW9ufVxcblxcbk5vdGVzOiAke3RoaXMuI25vdGVzfVxcblxcblRvRG9zOmA7XHJcbiAgICAgICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLiN0b2Rvcykge1xyXG4gICAgICAgICAgICBzdHIgKz0gXCJcXG5cIiArIHRvZG8udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgbGV0IHRvRG9VaWRzID0gdGhpcy4jdG9kb3MubWFwKChlbGVtZW50KSA9PiBlbGVtZW50LnVpZCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygndG9kbyB1aWRzIGluIHByb2plY3QnKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRvRG9VaWRzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy4jdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLiNkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbm90ZXM6IHRoaXMuI25vdGVzLFxyXG4gICAgICAgICAgICB0b0RvVWlkczogdG9Eb1VpZHMsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0IH07IiwiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuY29uc3QgV0hJVEVTUEFDRV9PTkxZX1JFR0VYID0gL15cXHMrJC87XHJcblxyXG4vKipcclxuICogVG9EbyBvYmplY3QgY2xhc3NcclxuICovXHJcbmNsYXNzIFRvRG8ge1xyXG5cclxuICAgIC8vIHByaXZhdGUgZmllbGRzXHJcbiAgICAjdGl0bGU7XHJcbiAgICAjZGVzY3JpcHRpb247XHJcbiAgICAjZHVlRGF0ZTtcclxuICAgICNwcmlvcml0eTtcclxuICAgICNub3RlcztcclxuICAgICNjaGVja2xpc3Q7XHJcbiAgICAjdWlkO1xyXG5cclxuICAgIHN0YXRpYyAjdWlkU2VlZCA9IDA7XHJcblxyXG4gICAgLy8gc3RhdGljIGZpZWxkc1xyXG4gICAgc3RhdGljIE1JTl9QUklPUklUWSA9IDE7XHJcbiAgICBzdGF0aWMgTUFYX1BSSU9SSVRZID0gNTtcclxuICAgIHN0YXRpYyBQUklPUklUSUVTID0gWydDcml0aWNhbCcsICdIaWdoJywgJ01lZGl1bScsICdMb3cnLCAnVW5pbXBvcnRhbnQnXTtcclxuICAgIHN0YXRpYyBNQVhfQ0hFQ0tMSVNUX1RFWFRfTEVOR1RIID0gMjU1O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBjbGFzcyBmb3IgYWxsIFRvRG8gY2xhc3Nlcy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBcclxuICAgICAqIEBwYXJhbSB7RGF0ZX0gZHVlRGF0ZSBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcmlvcml0eSBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHVuZGVmaW5lZH0gdWlkICBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIHVpZCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSB8fCAnTmV3IHRhc2snO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCAnTm8gZGVzY3JpcHRpb24gYWRkZWQnO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgbmV3IERhdGUoKTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkgfHwgVG9Eby5NQVhfUFJJT1JJVFk7XHJcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzIHx8IFwiXCI7XHJcbiAgICAgICAgdGhpcy4jY2hlY2tsaXN0ID0gW107IC8vIGRpcmVjdGx5IHNldCB0byBlbXB0eSBhcnJheVxyXG4gICAgICAgIHRoaXMuI3VpZCA9IHVpZCB8fCArK1RvRG8uI3VpZFNlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZVVpZFNlZWQobmV3U2VlZCkge1xyXG4gICAgICAgIFRvRG8uI3VpZFNlZWQgPSBuZXdTZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRVaWRTZWVkKCkgeyByZXR1cm4gVG9Eby4jdWlkU2VlZCB9O1xyXG5cclxuICAgIGdldCBjaGVja2xpc3QoKSB7IHJldHVybiB0aGlzLiNjaGVja2xpc3QgfTtcclxuXHJcbiAgICBnZXQgdWlkKCkgeyByZXR1cm4gdGhpcy4jdWlkIH07XHJcblxyXG4gICAgZ2V0IG5vdGVzKCkgeyByZXR1cm4gdGhpcy4jbm90ZXMgfTtcclxuICAgIHNldCBub3RlcyhuZXdOb3RlcykgeyB0aGlzLiNub3RlcyA9IG5ld05vdGVzIH07XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkgeyByZXR1cm4gdGhpcy4jdGl0bGUgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1RpdGxlIHRoZSBuZXcgdGl0bGUgdG8gc2V0XHJcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIG5ld1RpdGxlIGxlbmd0aCBpcyAwIG9yIGlzIG9ubHkgd2hpdGVzcGFjZVxyXG4gICAgICovXHJcbiAgICBzZXQgdGl0bGUobmV3VGl0bGUpIHtcclxuICAgICAgICBpZiAobmV3VGl0bGUubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0VSUk9SOiBUb0RvIHRpdGxlIG1heSBub3QgYmUgZW1wdHknKTtcclxuICAgICAgICBpZiAobmV3VGl0bGUubWF0Y2goV0hJVEVTUEFDRV9PTkxZX1JFR0VYKSkgdGhyb3cgbmV3IEVycm9yKCdFUlJPUjogVG9EbyB0aXRsZSBtYXkgbm90IGJlIGJsYW5rICh3aGl0ZXNwYWNlIG9ubHkpJyk7XHJcbiAgICAgICAgdGhpcy4jdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH07XHJcblxyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb24gfTtcclxuICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjKSB7IHRoaXMuI2Rlc2NyaXB0aW9uID0gbmV3RGVzYyB9O1xyXG5cclxuICAgIGdldCBkdWVEYXRlKCkgeyByZXR1cm4gdGhpcy4jZHVlRGF0ZSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0RhdGV9IG5ld0R1ZURhdGUgdGhlIG5ldyBkdWUgZGF0ZSB0byBzZXRcclxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgbmV3RHVlRGF0ZSBpcyBub3QgYSBEYXRlIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzZXQgZHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgaWYgKCEobmV3RHVlRGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdkdWUgZGF0ZSBtdXN0IGJlIGEgRGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNkdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXQgcHJpb3JpdHkoKSB7IHJldHVybiB0aGlzLiNwcmlvcml0eSB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlciB9bmV3UHJpb3JpdHlcclxuICAgICAqIEB0aHJvd3MgRXJyb3IgaWYgbmV3UHJpb3JpdHkgaXMgbGVzcyB0aGFuIFRvRG8uTUlOX1BSSU9SSVRZIG9yIGdyZWF0ZXIgdGhhbiBUb0RvLk1BWF9QUklPUklUWS5cclxuICAgICAqL1xyXG4gICAgc2V0IHByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgaWYgKG5ld1ByaW9yaXR5IDwgVG9Eby5NSU5fUFJJT1JJVFkgfHwgbmV3UHJpb3JpdHkgPiBUb0RvLk1BWF9QUklPUklUWSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByaW9yaXR5IG11c3QgYmUgJHtUb0RvLk1JTl9QUklPUklUWX0gdG8gJHtUb0RvLk1BWF9QUklPUklUWX0gKGluY2x1c2l2ZSksIGJ1dCAke25ld1ByaW9yaXR5fSB3YXMgc3BlY2lmaWVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIG5ldyBjaGVja2xpc3QgaXRlbS4gZWFjaCBpdGVtIGlzIGEgMiBsZW5ndGggYXJyYXkgY29udGFpbmluZyBhIGJvb2xlYW4gYXRcclxuICAgICAqIGluZGV4IDAgYW5kIGEgc3RyaW5nIGF0IGluZGV4IDEuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbXBsZXRlIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgXHJcbiAgICAgKiBAcmV0dXJuIHRydWUgaWYgYWRkZWQgc3VjY2Vzc2Z1bGx5LCBmYWxzZSBpZiBub3QuIFxyXG4gICAgICovXHJcbiAgICBhZGRUb0NoZWNrTGlzdChjb21wbGV0ZSwgdGV4dCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29tcGxldGUgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbXBsZXRlIHBhcmFtZXRlciBpbnZhbGlkIHR5cGU6ICcgKyB0eXBlb2YgY29tcGxldGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRleHQgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGV4dCBwYXJhbWV0ZXIgaW52YWxpZCB0eXBlOiAnICsgdHlwZW9mIGNvbXBsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID09PSAwIHx8IHRleHQubWF0Y2goV0hJVEVTUEFDRV9PTkxZX1JFR0VYKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoZWNrbGlzdCB0ZXh0IGNhbm5vdCBiZSBlbXB0eSEnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gVG9Eby5NQVhfQ0hFQ0tMSVNUX1RFWFRfTEVOR1RIKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2hlY2tsaXN0IHRleHQgY2Fubm90IGJlIGxvbmdlciB0aGFuICR7VG9Eby5NQVhfQ0hFQ0tMSVNUX1RFWFRfTEVOR1RIfSBjaGFyYWN0ZXJzYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI2NoZWNrbGlzdC5wdXNoKFtjb21wbGV0ZSwgdGV4dF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhIENoZWNrbGlzdCBpdGVtIGlmIGl0cyB0ZXh0IGlzIGVxdWFsIHRvIHBhcmFtZXRlciB0ZXh0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBcclxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgcmVtb3ZlZCBzdWNjZXNzZnVsbHksIGZhbHNlIGlmIG5vdC5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlRnJvbUNoZWNrTGlzdCh0ZXh0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNjaGVja2xpc3QubGVuZ3RoICYmICFyZW1vdmVkOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuI2NoZWNrbGlzdFtpXVsxXSA9PT0gdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jY2hlY2tsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNoZWNrbGlzdCgpIHtcclxuICAgICAgICB0aGlzLiNjaGVja2xpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYFRpdGxlOiR7dGhpcy4jdGl0bGV9XFxuRGVzY3JpcHRpb246JHt0aGlzLiNkZXNjcmlwdGlvbn1cXG5EdWUtRGF0ZToke3RoaXMuI2R1ZURhdGV9XFxuUHJpb3JpdHk6JHt0aGlzLiNwcmlvcml0eX1cXG51aWQ6JHt0aGlzLiN1aWR9YDtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsIHRvIHNlcmlhbGl6ZSB0aGlzIFRvRG8gb2JqZWN0IGludG8gSlNPTlxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHRvSlNPTigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy4jdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLiNkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbm90ZXM6IHRoaXMuI25vdGVzLFxyXG4gICAgICAgICAgICBkdWVEYXRlOiB0aGlzLiNkdWVEYXRlLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogdGhpcy4jcHJpb3JpdHksXHJcbiAgICAgICAgICAgIGNoZWNrbGlzdDogdGhpcy4jY2hlY2tsaXN0LFxyXG4gICAgICAgICAgICB1aWQ6IHRoaXMuI3VpZFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBUb0RvIH07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgc3BhY2VkLWNvbW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGJyYWNlLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuLy8gbm9kZSBtb2R1bGVzXHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcbi8vIGpzIG9iamVjdHNcclxuaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4vY2xhc3Nlcy9Ub0RvJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vY2xhc3Nlcy9Qcm9qZWN0JztcclxuaW1wb3J0IHsgc2F2ZSwgbG9hZCwgZGVsZXRlRnJvbVN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5cclxuLy8gaHRtbCB0ZW1wbGF0ZXNcclxuaW1wb3J0IHRlbXBsYXRlTW9kYWxUb0RvQ29udGFpbmVyIGZyb20gJy4vaHRtbC10ZW1wbGF0ZXMvdG9Eb01vZGFsLmh0bWwnO1xyXG5pbXBvcnQgdGVtcGxhdGVNb2RhbFRvRG9MaXN0IGZyb20gJy4vaHRtbC10ZW1wbGF0ZXMvdG9Eb01vZGFsX2xpc3QuaHRtbCc7XHJcbmltcG9ydCB0ZW1wbGF0ZUNhcmRUb0RvIGZyb20gJy4vaHRtbC10ZW1wbGF0ZXMvdG9Eb0NhcmQuaHRtbCc7XHJcbmltcG9ydCB0ZW1wbGF0ZUNhcmRQcm9qZWN0IGZyb20gJy4vaHRtbC10ZW1wbGF0ZXMvcHJvamVjdENhcmQuaHRtbCc7XHJcbmltcG9ydCB0ZW1wbGF0ZVByb2plY3RFZGl0b3IgZnJvbSAnLi9odG1sLXRlbXBsYXRlcy9wcm9qZWN0RWRpdG9yLmh0bWwnO1xyXG5cclxuLy8gZWxlbWVudHMgb2JqZWN0XHJcbmNvbnN0IGVsZW1lbnRzID0ge1xyXG4gIG1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oYW1idXJnZXInKSxcclxuICB0aGVtZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS10aGVtZScpLFxyXG4gIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxyXG4gIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLFxyXG4gIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JyksXHJcbiAgc2hvd0FsbFRvZG9zQnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1zaG93LXRvZG9zJyksXHJcbiAgc2hvd0FsbFByb2plY3RzQnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1zaG93LXByb2plY3RzJyksXHJcbiAgbWVudUV4cGFuZGluZ0J0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWV4cGFuZGluZy1idXR0b24nKSxcclxuICBtZW51QWRkVG9Eb0J0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWV4cGFuZGluZy1idXR0b24uYWRkLXRvZG8tYnV0dG9uJyksXHJcbiAgbWVudUFkZFByb2plY3RCdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1leHBhbmRpbmctYnV0dG9uLmFkZC1wcm9qZWN0LWJ1dHRvbicpLFxyXG4gIG1lbnVBZGRUb0RvVG9Qcm9qZWN0QnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbi5hZGQtdG9kby10by1wcm9qZWN0LWJ1dHRvbicpLFxyXG59O1xyXG5cclxuLy8gaW5pdGlhbGlzZSBET01cclxuKChmdW5jdGlvbiBpbml0aWFsaXNlKCkge1xyXG4gIHNldE1lbnVQb3NpdGlvbigpO1xyXG5cclxuICBpbml0QnV0dG9uRXZlbnRzKFtlbGVtZW50cy50aGVtZUJ0bl0sICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpKTtcclxuICBpbml0QnV0dG9uRXZlbnRzKFtlbGVtZW50cy5tZW51QnRuXSwgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2hvd1NlbGVjdG9yID0gJ25hdi1vcGVuJztcclxuICAgIGlmIChlbGVtZW50cy5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHNob3dTZWxlY3RvcikpIHtcclxuICAgICAgZWxlbWVudHMubmF2LmNsYXNzTGlzdC5yZW1vdmUoc2hvd1NlbGVjdG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnRzLm5hdi5jbGFzc0xpc3QuYWRkKHNob3dTZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaW5pdEJ1dHRvbkV2ZW50cyhlbGVtZW50cy5zaG93QWxsVG9kb3NCdG5zLCAoKSA9PiByZW5kZXJBbGxUb2RvcygnQWxsIFRvRG9zJykpO1xyXG4gIGluaXRCdXR0b25FdmVudHMoZWxlbWVudHMuc2hvd0FsbFByb2plY3RzQnRucywgcmVuZGVyQWxsUHJvamVjdHMpO1xyXG4gIGluaXRCdXR0b25FdmVudHMoZWxlbWVudHMubWVudUFkZFRvRG9CdG5zLCAoKSA9PiByZW5kZXJUb0RvTW9kYWwobnVsbCwgKCkgPT4gcmVuZGVyQWxsVG9kb3MoJ0FsbCBUb2RvcycpKSk7XHJcbiAgaW5pdEJ1dHRvbkV2ZW50cyhlbGVtZW50cy5tZW51QWRkUHJvamVjdEJ0bnMsICgpID0+IHJlbmRlclByb2plY3QobnVsbCkpO1xyXG5cclxuICByZW5kZXJXZWxjb21lKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRCdXR0b25FdmVudHMoYnRucywgZXZlbnRGdW5jKSB7XHJcbiAgICBmb3IgKGNvbnN0IGJ0biBvZiBidG5zKSB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50RnVuYyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXRNZW51UG9zaXRpb24oKSB7XHJcbiAgICBlbGVtZW50cy5uYXYuc3R5bGUudG9wID0gYCR7ZWxlbWVudHMuaGVhZGVyLm9mZnNldEhlaWdodCAtIDJ9cHhgO1xyXG4gICAgZWxlbWVudHMubmF2LnN0eWxlLmxlZnQgPSAnMTBweCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZWxlbWVudHMubmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcbn0pKCkpO1xyXG5cclxuLyoqXHJcbiAqIFJlbmRlciB0aGUgd2VsY29tZSBtZXNzYWdlIHRoYXQgaXMgZmlyc3Qgc2hvd24gdG8gdXNlciBvbiBwYWdlIGxvYWQuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJXZWxjb21lKCkge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIHNldENvbnRlbnRUaXRsZSgnV2VsY29tZSB0byBUb29Eb28hJyk7XHJcbiAgY29uc3Qgd2VsY29tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdlbGNvbWVEaXYudGV4dENvbnRlbnQgPSAnV2VsY29tZSwgcGxlYXNlIHVzZSB0aGUgaGVhZGVyIGJ1dHRvbnMgb3Igb3B0aW9uYWwgZHJvcCBkb3duIG1lbnUgdG8gbmF2aWdhdGUgdGhyb3VnaCB0aGlzIGFwcCEnO1xyXG4gIGVsZW1lbnRzLmNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZURpdik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBjbGVhciBhbGwgY2hpbGQgbm9kZXMgZnJvbSB0aGUgJ2NvbnRlbnQnIGRpdiAtIHJlc2V0dGluZyBpdCB0byBlbXB0eS5cclxuICovXHJcbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuICBmb3IgKGxldCBpID0gZWxlbWVudHMuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBlbGVtZW50cy5jb250ZW50LnJlbW92ZUNoaWxkKGVsZW1lbnRzLmNvbnRlbnQuY2hpbGROb2Rlc1tpXSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTG9hZCB1cCBhIGh0bWwgdGVtcGxhdGUgZnJvbSBhIGZpbGUgYW5kIHBhcnNlIGludG8gYW4gRWxlbWVudCBvYmplY3RcclxuICogQHBhcmFtIHtIVE1MVGVtcGxhdGVFbGVtZW50fSBodG1sVGVtcGxhdGVcclxuICogQHJldHVybnMgYSBIVE1MIGVsZW1lbnQgb2JqZWN0XHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVRlbXBsYXRlKGh0bWxUZW1wbGF0ZSkge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGU7XHJcbiAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBhbnkgb3BlbiBtb2RhbHNcclxuICovXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWxBY3Rpb24oKSB7XHJcbiAgY29uc3QgbW9kYWxTZWxlY3RvciA9ICcubW9kYWwtd3JhcHBlcic7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsU2VsZWN0b3IpO1xyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBtb2RhbCBldmVudCBoYW5kbGVyXHJcbiAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50XHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2xvc2VFdmVudFxyXG4gKi9cclxuZnVuY3Rpb24gb25DbG9zZU1vZGFsKGV2ZW50LCBvbkNsb3NlRXZlbnQpIHtcclxuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJyNtb2RhbC1mb3JtJykgPT09IG51bGwpIHtcclxuICAgIGNsb3NlTW9kYWxBY3Rpb24oKTtcclxuICAgIGlmIChvbkNsb3NlRXZlbnQgIT09IHVuZGVmaW5lZCkgb25DbG9zZUV2ZW50KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJlIHdoaWNoIGV4cGFuZGluZyBtZW51IGJ1dHRvbnMgdG8gc2hvd1xyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHNlbGVjdG9ycyAtIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgY3NzIGNsYXNzIHNlbGVjdG9ycyB0aGF0IGRldGVybWluZXMgd2hhdCBleHBhbmRpbmcgYnV0dG9ucyB0byBzaG93XHJcbiAqL1xyXG5mdW5jdGlvbiBjb25maWdFeHBhbmRpbmdNZW51QnRucyguLi5zZWxlY3RvcnMpIHtcclxuICBmb3IgKGNvbnN0IGJ0biBvZiBlbGVtZW50cy5tZW51RXhwYW5kaW5nQnRucykge1xyXG4gICAgY29uc3QgbWFrZUFjdGl2ZSA9IHNlbGVjdG9ycy5yZWR1Y2UoKHNlbGVjdG9yRm91bmQsIHNlbGVjdG9yKSA9PiB7IGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9yKSkgcmV0dXJuIHRydWU7IHJldHVybiBzZWxlY3RvckZvdW5kOyB9LCBmYWxzZSk7XHJcbiAgICBpZiAobWFrZUFjdGl2ZSkgeyBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7IH1cclxuICAgIGVsc2UgeyBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIHRpdGxlIG9mIHRoZSBcIi5jb250ZW50LXRpdGxlXCIgZGl2IHdoaWNoIHNpdHMgYXRvcCB0aGUgXCIuY29udGVudFwiIGRpdnMuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUaXRsZVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0Q29udGVudFRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVyIGFsbCB0b2RvIG9iamVjdHMgaW50byB0b2RvIFwiY2FyZHNcIiBhbmQgcGxhY2UgaW50byB0aGUgXCIuY29udGVudFwiIGRpdi5cclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlckFsbFRvZG9zKHRpdGxlLCBvbkNsaWNrRXZlbnQsIHByZWRpY2F0ZSkge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIHNldENvbnRlbnRUaXRsZSh0aXRsZSk7XHJcbiAgY29uZmlnRXhwYW5kaW5nTWVudUJ0bnMoJ2FkZC10b2RvLWJ1dHRvbicpO1xyXG4gIGNvbnN0IGxvYWRlZFRvZG9zID0gbG9hZCgndG9kbycpO1xyXG4gIGlmIChsb2FkZWRUb2Rvcy5sZW5ndGggIT09IDApIHtcclxuICAgIGVsZW1lbnRzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0NhcmRzKGxvYWRlZFRvZG9zLCAoKSA9PiByZW5kZXJBbGxUb2Rvcyh0aXRsZSksIG9uQ2xpY2tFdmVudCwgcHJlZGljYXRlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbXNnLnRleHRDb250ZW50ID0gXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgdG8gZG8ncyB5ZXQhXCI7XHJcbiAgICBlbGVtZW50cy5jb250ZW50LmFwcGVuZENoaWxkKG1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJ9IHR1aWQgVG9EbyB1bmlxdWUgaWRlbnRpZmllclxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNsb3NlRXZlbnQgYSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHB1aWQgUHJvamVjdCB1bmlxdWUgaWRlbnRpZmllclxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyVG9Eb01vZGFsKHR1aWQsIG9uQ2xvc2VFdmVudCwgcHVpZCkge1xyXG4gIC8vIGVuc3VyZSBtb2RhbCBkb2Vzbid0IHJlbmRlciB0d2ljZVxyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJykpIGNsb3NlTW9kYWxBY3Rpb24oKTtcclxuICBjb25zdCB0b0RvT2JqID0gKHR1aWQgPT09IG51bGwpID8gbmV3IFRvRG8oKSA6IGxvYWQoJ3RvZG8nLCB0dWlkKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFVpZCA9IHRvRG9PYmoudWlkO1xyXG4gIC8vIHNldHVwIG1vZGFsXHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICBjb25zdCBtb2RhbCA9IGdlbmVyYXRlVGVtcGxhdGUodGVtcGxhdGVNb2RhbFRvRG9Db250YWluZXIpO1xyXG4gIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1maWVsZCcpLnZhbHVlID0gdG9Eb09iai50aXRsZTtcclxuICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1maWVsZCcpLnZhbHVlID0gdG9Eb09iai5kZXNjcmlwdGlvbjtcclxuICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMtZmllbGQnKS52YWx1ZSA9IHRvRG9PYmoubm90ZXM7XHJcbiAgbW9kYWwucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlLWZpZWxkJykudmFsdWUgPSBmb3JtYXQodG9Eb09iai5kdWVEYXRlLCAneXl5eS1NTS1kZCcpO1xyXG4gIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1maWVsZCcpLnZhbHVlID0gdG9Eb09iai5wcmlvcml0eTtcclxuICByZW5kZXJDaGVja2xpc3RWaWV3KHRvRG9PYmopO1xyXG4gIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kby1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG9uQWRkTmV3Q2hlY2tsaXN0SXRlbShldmVudCkpO1xyXG4gIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb25TYXZlKGN1cnJlbnRVaWQpKTtcclxuICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZGVsZXRlRnJvbVN0b3JhZ2UoJ3RvZG8nLCBjdXJyZW50VWlkKTtcclxuICAgIC8vb25DbG9zZU1vZGFsKGV2ZW50LCBvbkNsb3NlRXZlbnQpO1xyXG4gICAgY2xvc2VNb2RhbEFjdGlvbigpO1xyXG4gICAgaWYgKG9uQ2xvc2VFdmVudCkgb25DbG9zZUV2ZW50KCk7XHJcbiAgfSk7XHJcbiAgLy8gYXBwZW5kIG1vZGFsIHRvIGJvZHlcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgb25DbG9zZU1vZGFsKGV2ZW50LCBvbkNsb3NlRXZlbnQpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBIRUxQRVIgRlVOQ1RJT05TXHJcbiAgZnVuY3Rpb24gcmVuZGVyQ2hlY2tsaXN0Vmlldyh0b2RvKSB7XHJcbiAgICBjb25zdCB7IGNoZWNrbGlzdCB9ID0gdG9kbztcclxuICAgIGNvbnN0IGNoZWNrbGlzdFNlY3Rpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LXNlY3Rpb24nKTtcclxuICAgIGlmIChjaGVja2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrbGlzdEl0ZW0gPSBnZW5lcmF0ZVRlbXBsYXRlKHRlbXBsYXRlTW9kYWxUb0RvTGlzdCk7XHJcbiAgICAgICAgY29uc3QgW2lzQ29tcGxldGUsIHRleHRdID0gY2hlY2tsaXN0W2ldO1xyXG4gICAgICAgIGNoZWNrbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWZpZWxkJykudmFsdWUgPSBpc0NvbXBsZXRlO1xyXG4gICAgICAgIGNoZWNrbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC10ZXh0JykudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIGNoZWNrbGlzdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIHAudGV4dENvbnRlbnQgPSAnTm8gQ2hlY2tsaXN0IEl0ZW1zJztcclxuICAgICAgY2hlY2tsaXN0U2VjdGlvbi5hcHBlbmRDaGlsZChwKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gb25TYXZlKCkge1xyXG4gICAgY29uc3QgdCA9IHB1bGxUb2RvKGN1cnJlbnRVaWQpO1xyXG4gICAgc2F2ZSh0KTtcclxuICAgIGlmIChwdWlkICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHB1aWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBsb2FkKCdwcm9qZWN0JywgcHVpZCk7XHJcbiAgICAgIHByb2plY3QuYWRkVG9kbyh0KTtcclxuICAgICAgc2F2ZShwcm9qZWN0KTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcclxuICAgIGNvbnN0IGNvbnQgPSBjb25maXJtKCdTYXZlZC5cXG5QcmVzcyBvayB0byBrZWVwIGVkaXRpbmcuJyk7XHJcbiAgICBpZiAoIWNvbnQpIGNsb3NlTW9kYWxBY3Rpb24oKTtcclxuICAgIGlmIChvbkNsb3NlRXZlbnQpIG9uQ2xvc2VFdmVudCgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBvbkFkZE5ld0NoZWNrbGlzdEl0ZW0oZXZlbnQpIHtcclxuICAgIGNvbnN0IGNvbXBsZXRlVmFsdWUgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LW5ldy1pdGVtIC5jb21wbGV0ZS1maWVsZCcpLnZhbHVlID09PSAndHJ1ZSc7XHJcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LW5ldy1pdGVtIC5jaGVja2xpc3QtdGV4dCcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdCA9IHB1bGxUb2RvKCk7XHJcbiAgICAgIHQuYWRkVG9DaGVja0xpc3QoY29tcGxldGVWYWx1ZSwgdGV4dEZpZWxkLnZhbHVlKTtcclxuICAgICAgb25DbG9zZU1vZGFsKGV2ZW50KTtcclxuICAgICAgc2F2ZSh0KTtcclxuICAgICAgcmVuZGVyVG9Eb01vZGFsKHQudWlkLCBvbkNsb3NlRXZlbnQsIHB1aWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGV4dEZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB0ZXh0RmllbGQucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcHVsbFRvZG8oKSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1maWVsZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1maWVsZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZS1maWVsZCcpLnZhbHVlKTtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gbW9kYWwucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWZpZWxkJykudmFsdWU7XHJcbiAgICBjb25zdCBub3RlcyA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNub3Rlcy1maWVsZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgdCA9IG5ldyBUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcGFyc2VJbnQocHJpb3JpdHksIDEwKSwgbm90ZXMsIGN1cnJlbnRVaWQpO1xyXG4gICAgZm9yIChjb25zdCBub2RlIG9mIG1vZGFsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2xpc3QtbGlzdC1pdGVtJykpIHtcclxuICAgICAgY29uc3QgY29tcGxldGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1maWVsZCcpLnZhbHVlID09PSAndHJ1ZSc7XHJcbiAgICAgIGNvbnN0IHRleHQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QtdGV4dCcpLnZhbHVlO1xyXG4gICAgICB0LmFkZFRvQ2hlY2tMaXN0KGNvbXBsZXRlLCB0ZXh0KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0NhcmRzKHRvZG9zLCBvbkNsb3NlRXZlbnQsIG9uQ2xpY2tFdmVudCwgcHJlZGljYXRlKSB7XHJcbiAgY29uc3QgdG9kb0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdG9kb0NhcmRzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZHMnKTtcclxuICBjb25zdCBsb2FkZWRQcm9qZWN0cyA9IGxvYWQoJ3Byb2plY3QnKTtcclxuICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcclxuICAgIGlmIChwcmVkaWNhdGUgPT09IHVuZGVmaW5lZCB8fCBwcmVkaWNhdGUodG9kbykpIHtcclxuICAgICAgY29uc3QgY2FyZCA9IGdlbmVyYXRlVGVtcGxhdGUodGVtcGxhdGVDYXJkVG9Ebyk7XHJcbiAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAvL2NhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSAodG9kby5kZXNjcmlwdGlvbi5sZW5ndGggPCAxNzApID8gdG9kby5kZXNjcmlwdGlvbiA6IHRvZG8uZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDE3MCkgKyAnLi4uJztcclxuICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XHJcbiAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnN1bW1hcnknKS50ZXh0Q29udGVudCA9IGAke3RvZG8uY2hlY2tsaXN0Lmxlbmd0aCA9PT0gMCA/ICdObycgOiB0b2RvLmNoZWNrbGlzdC5sZW5ndGh9IGNoZWNrbGlzdCBpdGVtJHt0b2RvLmNoZWNrbGlzdC5sZW5ndGggIT09IDEgPyAncycgOiAnJ31gO1xyXG4gICAgICBjb25zdCBjb250YWluaW5nUHJvamVjdCA9IChsb2FkZWRQcm9qZWN0cy5maW5kKHAgPT4gcC50b2Rvcy5maWx0ZXIodCA9PiB0LnVpZCA9PT0gdG9kby51aWQpLmxlbmd0aCA+IDApKTtcclxuICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pbmZvPnNwYW46bGFzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gY29udGFpbmluZ1Byb2plY3QgIT09IHVuZGVmaW5lZCA/IGNvbnRhaW5pbmdQcm9qZWN0LnRpdGxlIDogJ05vdCBpbiBhbnkgcHJvamVjdCc7XHJcbiAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1jZWxsPmRpdjpmaXJzdC1jaGlsZD5zcGFuOmxhc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGZvcm1hdCh0b2RvLmR1ZURhdGUsICdkbyBMTExMIHknKTtcclxuICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLWNlbGw+ZGl2Omxhc3QtY2hpbGQ+c3BhbjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGNhcmQub3V0ZXJIVE1MKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChvbkNsaWNrRXZlbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICA/ICgpID0+IHJlbmRlclRvRG9Nb2RhbCh0b2RvLnVpZCwgb25DbG9zZUV2ZW50KVxyXG4gICAgICAgIDogKCkgPT4gb25DbGlja0V2ZW50KHRvZG8pKTtcclxuXHJcbiAgICAgIHRvZG9DYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRvZG9DYXJkcztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQWxsUHJvamVjdHMoKSB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgc2V0Q29udGVudFRpdGxlKCdBbGwgUHJvamVjdHMnKTtcclxuICBjb25maWdFeHBhbmRpbmdNZW51QnRucygnYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcblxyXG4gIC8vZWxlbWVudHMubWVudUFkZFByb2plY3RCdG5zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyX3Byb2plY3QobnVsbCkpKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdHMgPSBsb2FkKCdwcm9qZWN0Jyk7XHJcblxyXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggIT09IDApIHtcclxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmRzJyk7XHJcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgY29uc3QgY2FyZCA9IGdlbmVyYXRlVGVtcGxhdGUodGVtcGxhdGVDYXJkUHJvamVjdCk7XHJcbiAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcclxuICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcubm90ZXMnKS50ZXh0Q29udGVudCA9IHByb2plY3Qubm90ZXM7XHJcbiAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnN1bW1hcnknKS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudG9kb3MubGVuZ3RoID09PSAwID8gJ05vJyA6IHByb2plY3QudG9kb3MubGVuZ3RofSB0b2RvJHtwcm9qZWN0LnRvZG9zLmxlbmd0aCA+PSAxID8gJ3MnIDogJyd9YDtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclByb2plY3QocHJvamVjdC51aWQpKTtcclxuICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBlbGVtZW50cy5jb250ZW50LmFwcGVuZENoaWxkKGNhcmRzKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIllvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXQhXCI7XHJcbiAgICBlbGVtZW50cy5jb250ZW50LmFwcGVuZENoaWxkKG1zZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3RVaWQpIHtcclxuICBjbGVhckNvbnRlbnQoKTtcclxuICBjb25maWdFeHBhbmRpbmdNZW51QnRucygnYWRkLXByb2plY3QtYnV0dG9uJywgJ2FkZC10b2RvLXRvLXByb2plY3QtYnV0dG9uJyk7XHJcblxyXG4gIGxldCBwcm9qZWN0T2JqO1xyXG4gIGlmIChwcm9qZWN0VWlkID09PSBudWxsKSB7XHJcbiAgICBwcm9qZWN0T2JqID0gbmV3IFByb2plY3QoKTtcclxuICAgIHNhdmUocHJvamVjdE9iaik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RPYmogPSBsb2FkKCdwcm9qZWN0JywgcHJvamVjdFVpZCk7XHJcbiAgfVxyXG4gIHNldENvbnRlbnRUaXRsZShgUHJvamVjdDogJHtwcm9qZWN0T2JqLnRpdGxlfWApO1xyXG5cclxuICBjb25zdCB7IHVpZCB9ID0gcHJvamVjdE9iajtcclxuXHJcbiAgZWxlbWVudHMubWVudUFkZFRvRG9Ub1Byb2plY3RCdG5zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVG9Eb01vZGFsKG51bGwsICgpID0+IHJlbmRlclByb2plY3QodWlkKSwgdWlkKSkpO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gZ2VuZXJhdGVUZW1wbGF0ZSh0ZW1wbGF0ZVByb2plY3RFZGl0b3IpO1xyXG4gIGNvbnN0IGJ0blBhbmVsID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0b3ItYnV0dG9uLXBhbmVsJyk7XHJcbiAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtZmllbGQnKS52YWx1ZSA9IHByb2plY3RPYmoudGl0bGU7XHJcbiAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1maWVsZCcpLnZhbHVlID0gcHJvamVjdE9iai5kZXNjcmlwdGlvbjtcclxuICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3Rlcy1maWVsZCcpLnZhbHVlID0gcHJvamVjdE9iai5ub3RlcztcclxuICBidG5QYW5lbC5iZWZvcmUoY3JlYXRlVG9Eb0NhcmRzKHByb2plY3RPYmoudG9kb3MsICgpID0+IHJlbmRlclByb2plY3QodWlkKSkpO1xyXG4gIGVsZW1lbnRzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4gIC8vY29uc29sZS5sb2cobG9hZCgncHJvamVjdCcpKTtcclxuXHJcbiAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNhdmUocHVsbFByb2plY3RGcm9tRWRpdG9yRGl2KCkpKTtcclxuICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJUb0RvTW9kYWwobnVsbCwgKCkgPT4gcmVuZGVyUHJvamVjdCh1aWQpLCB1aWQpKTtcclxuICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXHJcbiAgICBjb25zdCBkZWxldGVUb2RvcyA9IGNvbmZpcm0oJ1dvdWxkIHlvdSBsaWtlIHRvIGRlbGV0ZSBhbGwgYXNzb2NpYXRlZCB0b2Rvcz9cXG5QcmVzcyBvayB0byBkZWxldGUgYWxsIGFzc29jaWF0ZWQgdG9kb3MsIG9yIGNhbmNlbCB0byBkZWxldGUgb25seSB0aGUgcHJvamVjdCcpO1xyXG4gICAgZGVsZXRlRnJvbVN0b3JhZ2UoJ3Byb2plY3QnLCB1aWQsIGRlbGV0ZVRvZG9zKTtcclxuICAgIHJlbmRlckFsbFByb2plY3RzKCk7XHJcbiAgfSk7XHJcbiAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWV4aXN0aW5nLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyQWxsVG9kb3MoJ0Nob29zZSBhIFRvRG8gdG8gYWRkIHRvIHlvdXIgcHJvamVjdCcsICh0b2RvKSA9PiBvbkNsaWNrcy5hZGRFeGlzdGluZ1RvZG8odG9kbyksICh0b2RvKSA9PiBwcmVkaWNhdGVzLmlzTm90SW5BbnlQcm9qZWN0KHRvZG8pKSk7XHJcbiAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLWV4aXN0aW5nLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyQWxsVG9kb3MoJ0Nob29zZSBhIFRvRG8gdG8gcmVtb3ZlIGZyb20geW91ciBwcm9qZWN0JywgKHRvZG8pID0+IG9uQ2xpY2tzLnJlbW92ZVRvZG9Gcm9tUHJvamVjdCh0b2RvKSwgKHRvZG8pID0+IHByZWRpY2F0ZXMuaXNJblRoaXNQcm9qZWN0KHRvZG8pKSk7XHJcblxyXG4gIGZ1bmN0aW9uIHB1bGxQcm9qZWN0RnJvbUVkaXRvckRpdigpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWZpZWxkJykudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWZpZWxkJykudmFsdWU7XHJcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3Rlcy1maWVsZCcpLnZhbHVlO1xyXG4gICAgY29uc3QgcCA9IG5ldyBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgbm90ZXMsIHVpZCk7XHJcbiAgICBwLnRvZG9zID0gcHJvamVjdE9iai50b2RvcztcclxuICAgIHJldHVybiBwO1xyXG4gIH1cclxuXHJcbiAgbGV0IG9uQ2xpY2tzID0ge1xyXG4gICAgYWRkRXhpc3RpbmdUb2RvOiBmdW5jdGlvbiBhZGRFeGlzdGluZ1RvZG9Ob3RJbkFQcm9qZWN0VG9UaGlzUHJvamVjdCh0b2RvKSB7XHJcbiAgICAgIHByb2plY3RPYmouYWRkVG9kbyh0b2RvKTtcclxuICAgICAgc2F2ZShwcm9qZWN0T2JqKTtcclxuICAgICAgcmVuZGVyUHJvamVjdChwcm9qZWN0VWlkKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVUb2RvRnJvbVByb2plY3Q6IGZ1bmN0aW9uIHJlbW92ZUFUb2RvRnJvbVRoaXNQcm9qZWN0KHRvZG8pIHtcclxuICAgICAgcHJvamVjdE9iai5yZW1vdmVUb2RvKHRvZG8pO1xyXG4gICAgICBzYXZlKHByb2plY3RPYmopO1xyXG4gICAgICByZW5kZXJQcm9qZWN0KHByb2plY3RVaWQpO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBsZXQgcHJlZGljYXRlcyA9IHtcclxuICAgIGlzTm90SW5BbnlQcm9qZWN0OiBmdW5jdGlvbiBzaG93VG9kb09ubHlJZkl0c05vdEluQW55UHJvamVjdCh0b2RvKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcCBvZiBsb2FkKCdwcm9qZWN0JykpIHtcclxuICAgICAgICBpZiAocC50b2Rvcy5maW5kKGUgPT4gdG9kby51aWQgPT09IGUudWlkKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGlzSW5UaGlzUHJvamVjdDogZnVuY3Rpb24gc2hvd1RvZG9Pbmx5SWZJdElzSW5UaGlzUHJvamVjdCh0b2RvKSB7XHJcbiAgICAgIGlmIChwcm9qZWN0T2JqLnRvZG9zLmZpbmQoZSA9PiB0b2RvLnVpZCA9PT0gZS51aWQpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyBsZXQgb25DbGlja19hZGRFeGlzdGluZ1RvZG8gPSBmdW5jdGlvbiAodG9kbykge1xyXG4gIC8vICAgICBwcm9qZWN0T2JqLmFkZFRvZG8odG9kbyk7XHJcbiAgLy8gICAgIHNhdmUocHJvamVjdE9iaik7XHJcbiAgLy8gICAgIHJlbmRlcl9wcm9qZWN0KHByb2plY3RVaWQpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gbGV0IG9uQ2xpY2tfcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0ID0gZnVuY3Rpb24gKHRvZG8pIHtcclxuICAvLyAgICAgcHJvamVjdE9iai5yZW1vdmVUb2RvKHRvZG8pO1xyXG4gIC8vICAgICBzYXZlKHByb2plY3RPYmopO1xyXG4gIC8vICAgICByZW5kZXJfcHJvamVjdChwcm9qZWN0VWlkKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGxldCBpc05vdEluQW55UHJvamVjdFByZWRpY2F0ZSA9IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgLy8gICAgIC8vIGRpc2Nlcm4gYWxsIHRvZG9zIG5vdCBjdXJyZW50bHkgaW4gYSBwcm9qZWN0LCBhbmQgZGlzcGxheSBvbmx5IHRoZW0gdXNpbmcgdGhlIGZvbGxvd2luZyBwcmVkaWNhdGVcclxuICAvLyAgICAgZm9yIChsZXQgcCBvZiBsb2FkKCdwcm9qZWN0JykpIHtcclxuICAvLyAgICAgICAgIGlmIChwLnRvZG9zLmZpbmQoZSA9PiB0b2RvLnVpZCA9PT0gZS51aWQpKSByZXR1cm4gZmFsc2U7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBsZXQgaXNJblRoaXNQcm9qZWN0UHJlZGljYXRlID0gZnVuY3Rpb24gKHRvZG8pIHtcclxuICAvLyAgICAgLy8gZGlzY2VybiBhbGwgdG9kb3Mgbm90IGN1cnJlbnRseSBpbiBhIHByb2plY3QsIGFuZCBkaXNwbGF5IG9ubHkgdGhlbSB1c2luZyB0aGUgZm9sbG93aW5nIHByZWRpY2F0ZVxyXG4gIC8vICAgICBpZiAocHJvamVjdE9iai50b2Rvcy5maW5kKGUgPT4gdG9kby51aWQgPT09IGUudWlkKSkgcmV0dXJuIHRydWU7XHJcbiAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAvLyB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCB7IGNsZWFyQ29udGVudCwgZWxlbWVudHMsIG9uQ2xvc2VNb2RhbCwgY2xvc2VNb2RhbEFjdGlvbiwgc2V0Q29udGVudFRpdGxlLCByZW5kZXJfYWxsVG9kb3MsIGNyZWF0ZVRvRG9DYXJkcywgcmVuZGVyX3RvRG9Nb2RhbCwgcmVuZGVyX2FsbFByb2plY3RzLCByZW5kZXJfcHJvamVjdCB9O1xyXG4iLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSAnLi9jbGFzc2VzL1RvRG8uanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9jbGFzc2VzL1Byb2plY3QuanMnO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1RvRG8gfCBQcm9qZWN0fSBvYmpUb1NhdmUgXHJcbiAqIEB0aHJvd3MgTG9jYWxTdG9yYWdlRXJyb3IgaWYgbG9jYWxTdG9yYWdlIG5vdCBhY2Nlc3NpYmxlLCBvciBQYXJhbWV0ZXJFcnJvciBpZiBwYXJhbWV0ZXIgaXMgbm90IGEgVG9EbyBvciBQcm9qZWN0IG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHNhdmUob2JqVG9TYXZlKSB7XHJcblxyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkgdGhyb3cgbmV3IExvY2FsU3RvcmFnZUVycm9yKCdzYXZlJywgJ0xvY2FsIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSEgLSBzYXZlIGFjdGlvbiBub3QgY29tcGxldGUnKTtcclxuICAgIGlmIChvYmpUb1NhdmUgaW5zdGFuY2VvZiBUb0RvKSBzYXZlVG9EbyhvYmpUb1NhdmUpO1xyXG4gICAgZWxzZSBpZiAob2JqVG9TYXZlIGluc3RhbmNlb2YgUHJvamVjdCkgc2F2ZVByb2plY3Qob2JqVG9TYXZlKTtcclxuICAgIGVsc2UgdGhyb3cgbmV3IFBhcmFtZXRlckVycm9yKCdvYmpUb1NhdmUnLCAncGFyYW1ldGVyIG11c3QgYmUgYSBUb0RvIG9iamVjdCBvciBhIFByb2plY3Qgb2JqZWN0IGJ1dCB3YXMgbm90Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVRvRG8odG9Eb09iaikge1xyXG4gICAgICAgIGxldCB0b2Rvc0Zyb21TdG9yYWdlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0b2RvcyBvYmplY3QgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgdG9kb3NGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSgpLnRvZG9zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gaWYgcGFyc2UgZmFpbHMgdGhlbiBzZXQgdG8gZW1wdHkgb2JqZWN0XHJcbiAgICAgICAgICAgIHRvZG9zRnJvbVN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGtleSBvZiB0b2RvIHVpZCB0byBzdHJpbmdpZmllZCBUb0RvIG9iamVjdFxyXG4gICAgICAgIHRvZG9zRnJvbVN0b3JhZ2VbdG9Eb09iai51aWRdID0gdG9Eb09iajtcclxuICAgICAgICAvLyBzYXZlIGRhdGEgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgZ2V0U3RvcmFnZSgpLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3NGcm9tU3RvcmFnZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUb2RvIHNhdmVkOiBbdWlkOiAke3RvRG9PYmoudWlkfV0gW3RpdGxlOiAke3RvRG9PYmoudGl0bGV9XWApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2F2ZVByb2plY3QocHJvamVjdE9iaikge1xyXG4gICAgICAgIGxldCBwcm9qZWN0c0Zyb21TdG9yYWdlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0b2RvcyBvYmplY3QgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgcHJvamVjdHNGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSgpLnByb2plY3RzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gaWYgcGFyc2UgZmFpbHMgdGhlbiBzZXQgdG8gZW1wdHkgb2JqZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RzRnJvbVN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2F2ZSBhbGwgVG9Eb3MgaW4gcHJvamVjdCBzZXF1ZW50aWFsbHlcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3RPYmoudG9kb3MpIHtcclxuICAgICAgICAgICAgc2F2ZVRvRG8odG9kbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBrZXkgb2YgcHJvamVjdCB1aWQgdG8gc3RyaW5naWZpZWQgUHJvamVjdCBvYmplY3RcclxuICAgICAgICBwcm9qZWN0c0Zyb21TdG9yYWdlW3Byb2plY3RPYmoudWlkXSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RPYmopO1xyXG4gICAgICAgIC8vIHNhdmUgZGF0YSBpbiBzdG9yYWdlXHJcbiAgICAgICAgZ2V0U3RvcmFnZSgpLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNGcm9tU3RvcmFnZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IHNhdmVkOiBbdWlkOiAke3Byb2plY3RPYmoudWlkfV0gW3RpdGxlOiAke3Byb2plY3RPYmoudGl0bGV9XWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTXVsdGktdXNlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b0xvYWQgXCJ0b2RvXCIgb3IgXCJwcm9qZWN0XCJcclxuICogQHBhcmFtIHtudW1iZXJ9IHVpZCB1aWQgb2YgVG9EbyBvciBQcm9qZWN0IG9iamVjdFxyXG4gKiBAcmV0dXJuIHNpbmdsZSBpbnN0YW5jZSBvZiBUb0RvIG9yIFByb2plY3QgaWYgdWlkIGlzIHNwZWNpZmVkLCBUb0RvW10gb3IgUHJvamVjdFtdIChhbGwgc3RvcmVkKSBpZiBub3QuIFJldHVybnMgbnVsbCBpZiBzcGVjaWZpYyBwcm9qZWN0IGlzIG5vdCBmb3VuZC5cclxuICogQHRocm93cyBMb2NhbFN0b3JhZ2VFcnJvciBpZiBsb2NhbCBzdG9yYWdlIG5vdCBhY2Nlc3NpYmxlLCBvciBQYXJhbWV0ZXJFcnJvciBpZiB0b0xvYWQgc3RyaW5nIHdhcyBub3QgcmVjb2duaXNlZCBhcyB2YWxpZC5cclxuICovXHJcbmZ1bmN0aW9uIGxvYWQodG9Mb2FkLCB1aWQgPSBudWxsKSB7XHJcblxyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkgdGhyb3cgbmV3IExvY2FsU3RvcmFnZUVycm9yKCdsb2FkJywgJ0xvY2FsIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSEgLSBsb2FkIGFjdGlvbiBub3QgY29tcGxldGUnKTtcclxuICAgIGlmICh0b0xvYWQgIT09ICdwcm9qZWN0JyAmJiB0b0xvYWQgIT09ICd0b2RvJykgdGhyb3cgbmV3IFBhcmFtZXRlckVycm9yKCd0b0xvYWQnLCBgaW52YWxpZCBwYXJhbXRlciwgbXVzdCBiZSBcInRvZG9cIiBvciBcInByb2plY3RcIiBidXQgd2FzIFwiJHt0b0xvYWR9XCJgKTtcclxuXHJcblxyXG4gICAgaWYgKHRvTG9hZCA9PT0gJ3RvZG8nKSB7XHJcbiAgICAgICAgaWYgKHVpZCA9PT0gbnVsbCkgcmV0dXJuIGxvYWRUb0RvcygpO1xyXG4gICAgICAgIHJldHVybiBsb2FkVG9kbyh1aWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRvTG9hZCA9PT0gJ3Byb2plY3QnKSB7XHJcbiAgICAgICAgaWYgKHVpZCA9PT0gbnVsbCkgcmV0dXJuIGxvYWRQcm9qZWN0cygpO1xyXG4gICAgICAgIHJldHVybiBsb2FkUHJvamVjdCh1aWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3RVaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHByb2plY3RVaWQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbG9hZFByb2plY3QocHJvamVjdFVpZCkgcHJvamVjdFVJRCBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9hZGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UoKS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgICAgICBpZiAoIWxvYWRlZFByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RVaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyByZXR1cm4gbnVsbCBpZiBwcm9qZWN0IHdpdGggcHJvamVjdFVpZCBub3QgZm91bmRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcnNlZE9iaiA9IEpTT04ucGFyc2UobG9hZGVkUHJvamVjdHNbcHJvamVjdFVpZF0pO1xyXG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gbmV3IFByb2plY3QocGFyc2VkT2JqLnRpdGxlLCBwYXJzZWRPYmouZGVzY3JpcHRpb24sIHBhcnNlZE9iai5ub3RlcywgcHJvamVjdFVpZCk7XHJcbiAgICAgICAgZm9yIChsZXQgdHVpZCBvZiBwYXJzZWRPYmoudG9Eb1VpZHMpIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBsb2FkKCd0b2RvJywgdHVpZCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codCk7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmouYWRkVG9kbyh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmo7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlZFByb2plY3RzID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKCkuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICAgICAgbGV0IHByb2plY3RPYmpzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdFVJRCBpbiBsb2FkZWRQcm9qZWN0cykge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShsb2FkZWRQcm9qZWN0c1twcm9qZWN0VUlEXSk7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0T2JqID0gbmV3IFByb2plY3QocGFyc2VkT2JqLnRpdGxlLCBwYXJzZWRPYmouZGVzY3JpcHRpb24sIHBhcnNlZE9iai5ub3RlcywgcGFyc2VJbnQocHJvamVjdFVJRCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0dWlkIG9mIHBhcnNlZE9iai50b0RvVWlkcykge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE9iai5hZGRUb2RvKGxvYWRUb2RvKHR1aWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9qZWN0T2Jqcy5wdXNoKHByb2plY3RPYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnUHJvamVjdHMgbG9hZGVkJylcclxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdHMgbG9hZGVkIFtudW1iZXIgbG9hZGVkOiAke3Byb2plY3RPYmpzLmxlbmd0aH1dYCk7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0T2Jqcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgnUHJvamVjdHMgbG9hZGVkJylcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmpzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9hZFRvZG8odG9Eb1VpZCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhdHRlbXB0aW5nIHRvIGxvYWQgdG9kbyB3aXRoIHVpZDogXCIgKyB0b0RvVWlkKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG9zQWxsID0gZ2V0U3RvcmFnZSgpLmdldEl0ZW0oJ3RvZG9zJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsb2FkZWRUb2Rvc0FsbCk7XHJcblxyXG4gICAgICAgIGxldCBwYXJzZWQgPSBKU09OLnBhcnNlKGxvYWRlZFRvZG9zQWxsKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG8gPSBwYXJzZWRbdG9Eb1VpZF07XHJcblxyXG4gICAgICAgIC8vIGxldCBvYmogPSBKU09OLnBhcnNlKEpTT04ucGFyc2UobG9hZGVkVG9kb3NBbGwpW3RvRG9VaWRdKTtcclxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKG9iaik7XHJcblxyXG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvRG8obG9hZGVkVG9kby50aXRsZSwgbG9hZGVkVG9kby5kZXNjcmlwdGlvbiwgbmV3IERhdGUobG9hZGVkVG9kby5kdWVEYXRlKSwgbG9hZGVkVG9kby5wcmlvcml0eSwgbG9hZGVkVG9kby5ub3RlcywgbG9hZGVkVG9kby51aWQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxvYWRlZFRvZG8uY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgIHRvZG8uYWRkVG9DaGVja0xpc3QoaXRlbVswXSwgaXRlbVsxXSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRvZG8udG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkVG9Eb3MoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG9zSnNvbiA9IGdldFN0b3JhZ2UoKS5nZXRJdGVtKCd0b2RvcycpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobG9hZGVkVG9kb3NKc29uKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZFRvZG9zID0gSlNPTi5wYXJzZShsb2FkZWRUb2Rvc0pzb24pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyc2VkVG9kb3MpO1xyXG5cclxuICAgICAgICBsZXQgYnVpbHRUb2RvcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHR1aWQgaW4gcGFyc2VkVG9kb3MpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2Yga2V5VWlkKTtcclxuICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHBhcnNlZFRvZG9zW2tleVVpZF07XHJcbiAgICAgICAgICAgIC8vIC8vY29uc29sZS5sb2codSk7XHJcbiAgICAgICAgICAgIC8vIGxldCB0b2RvID0gbmV3IFRvRG8ob2JqLnRpdGxlLCBvYmouZGVzY3JpcHRpb24sIG5ldyBEYXRlKG9iai5kdWVEYXRlKSwgb2JqLnByaW9yaXR5LCBvYmoudWlkKTtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaXRlbSBvZiBvYmouY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b2RvLmFkZFRvQ2hlY2tMaXN0KGl0ZW1bMF0sIGl0ZW1bMV0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codG9kbyk7XHJcbiAgICAgICAgICAgIGJ1aWx0VG9kb3MucHVzaChsb2FkVG9kbyh0dWlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYnVpbHRUb2Rvcyk7XHJcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnVG9Eb3MgbG9hZGVkJylcclxuICAgICAgICBjb25zb2xlLmxvZyhgVG9Eb3MgbG9hZGVkIFtudW1iZXIgbG9hZGVkOiAke2J1aWx0VG9kb3MubGVuZ3RofV1gKTtcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIGJ1aWx0VG9kb3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoJ1RvRG9zIGxvYWRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGJ1aWx0VG9kb3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgZGF0YSBmcm9tIHN0b3JhZ2UsIGRlcGVuZGluZyBvbiBwYXJhbWV0ZXJzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b0RlbGV0ZSBlaXRoZXIgJ3RvZG8nIG9yICdwcm9qZWN0J1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdWlkIHRoZSB1aWQgb2YgZWl0aGVyIHRoZSBwcm9qZWN0IG9yIHRvZG8gdG8gZGVsZXRlIFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCB1bmRlZmluZWR9IGRlbGV0ZUFzc29jaWF0ZWRUb2RvcyBpZiBkZWxldGluZyBhIHByb2plY3QsIHRoaXMgYm9vbGVhbiByZXNwcmVzZW50cyB0aGUgdXNlcnMgY2hvaWNlIHRvIGRlbGV0ZSBhbGwgYXNzb2NpYXRlZCB0b2RvIG9iamVjdHMgZnJvbSBzdG9yYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVGcm9tU3RvcmFnZSh0b0RlbGV0ZSwgdWlkLCBkZWxldGVBc3NvY2lhdGVkVG9kb3MpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHRocm93IG5ldyBMb2NhbFN0b3JhZ2VFcnJvcignZGVsZXRlRnJvbVN0b3JhZ2UnLCAnTG9jYWwgc3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlISAtIGRlbGV0ZSBhY3Rpb24gbm90IGNvbXBsZXRlJyk7XHJcbiAgICBpZiAodG9EZWxldGUgIT09ICdwcm9qZWN0JyAmJiB0b0RlbGV0ZSAhPT0gJ3RvZG8nKSB0aHJvdyBuZXcgUGFyYW1ldGVyRXJyb3IoJ3RvRGVsZXRlJywgYGludmFsaWQgcGFyYW10ZXIsIG11c3QgYmUgXCJ0b2RvXCIgb3IgXCJwcm9qZWN0XCIgYnV0IHdhcyBcIiR7dG9EZWxldGV9XCJgKTtcclxuXHJcblxyXG4gICAgaWYgKHRvRGVsZXRlID09PSAndG9kbycpIHJldHVybiBkZWxldGVUb0RvKHVpZCk7XHJcbiAgICBpZiAodG9EZWxldGUgPT09ICdwcm9qZWN0JykgcmV0dXJuIGRlbGV0ZVByb2plY3QodWlkLCBkZWxldGVBc3NvY2lhdGVkVG9kb3MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHVpZCwgZGVsZXRlQXNzb2NpYXRlZFRvZG9zKSB7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUFzc29jaWF0ZWRUb2RvcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVBc3NvY2lhdGVkVG9kb3Mgd2FzIG5vdCBkZWZpbmVkLCBkZWZhdWx0aW5nIHRvIGZhbHNlJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUFzc29jaWF0ZWRUb2RvcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHB1aWQpO1xyXG5cclxuICAgICAgICBsZXQgbG9hZGVkUHJvamVjdHMgPSBsb2FkKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsb2FkZWRQcm9qZWN0cyk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IGxvYWRlZFByb2plY3RzLmZpbmRJbmRleChlID0+IGUudWlkID09PSBwdWlkKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGluZGV4KTtcclxuXHJcbiAgICAgICAgbGV0IHRvZG9zSW5Qcm9qZWN0VWlkcyA9IGxvYWRlZFByb2plY3RzW2luZGV4XS50b2Rvcy5tYXAoZSA9PiBlLnVpZCApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codG9kb3NJblByb2plY3RVaWRzKTtcclxuXHJcbiAgICAgICAgbG9hZGVkUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgbGV0IHRvU3RvcmUgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGxvYWRlZFByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIHRvU3RvcmVbcHJvamVjdC51aWRdID0gcHJvamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHRvU3RvcmUpO1xyXG4gICAgICAgIGdldFN0b3JhZ2UoKS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmaWVkKTtcclxuICAgICAgICBpZiAoZGVsZXRlQXNzb2NpYXRlZFRvZG9zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHR1aWQgb2YgdG9kb3NJblByb2plY3RVaWRzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUb0RvKHR1aWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG8odHVpZCkge1xyXG4gICAgICAgIC8vVE9ETyBvcHRpbWlzZSBieSBoaWRpbmcgbG9hZGluZyBwcm9qZWN0cyBiZWhpbmQgYSBjb25kaXRpb25hbCAoaWYgdG9kbyBpcyBpbiBwcm9qZWN0KT9cclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZGVkOlwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdldFN0b3JhZ2UoKS5nZXRJdGVtKCd0b2RvcycpKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG9zID0gbG9hZCgndG9kbycpO1xyXG4gICAgICAgIGxldCBsb2FkZWRQcm9qZWN0cyA9IGxvYWQoJ3Byb2plY3QnKTtcclxuXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codG9kb3MpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGxvYWRlZFRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC51aWQgPT09IHR1aWQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2luZGV4OiAnICsgaW5kZXgpO1xyXG4gICAgICAgIGxvYWRlZFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgbGV0IHRvU3RvcmUgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIGxvYWRlZFRvZG9zKSB7XHJcbiAgICAgICAgICAgIHRvU3RvcmVbdG9kby51aWRdID0gdG9kbztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvU3RvcmU6XCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codG9TdG9yZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvU3RvcmUgc3RyaW5naWZpZWQ6XCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodG9TdG9yZSkpO1xyXG4gICAgICAgIGxldCBzdHJpbmdpZmllZCA9ICBKU09OLnN0cmluZ2lmeSh0b1N0b3JlKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHJlZmVuY2VzIHRvIGRlbGV0ZWQgdG9kb3MgZnJvbSBwcm9qZWN0IGpzb24gb2JqZWN0XHJcbiAgICAgICAgbGV0IGNvbnRhaW5pbmdQcm9qZWN0ID0gbG9hZGVkUHJvamVjdHMuZmluZChwID0+IHAudG9kb3MuZmlsdGVyKHQgPT4gdC51aWQgPT09IHVpZCkubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5pbmdQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBwdWlkID0gY29udGFpbmluZ1Byb2plY3QudWlkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29udGFpbmluZyBwcm9qZWN0IHVpZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdWlkKTtcclxuICAgICAgICAgICAgbGV0IHAgPSBsb2FkKCdwcm9qZWN0JywgcHVpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgICAgICBsZXQgcHRvZG9pbmRleCA9IHAudG9kb3MuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC51aWQgPT09IHR1aWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdG9kb2luZGV4KTtcclxuICAgICAgICAgICAgcC50b2Rvcy5zcGxpY2UocHRvZG9pbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHNhdmUocCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRTdG9yYWdlKCkuc2V0SXRlbSgndG9kb3MnLCBzdHJpbmdpZmllZCk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgbG9jYWxTdG9yYWdlIGlzIGFjY2Vzc2libGUuXHJcbiAqIEByZXR1cm5zIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgaWYgbG9jYWxTdG9yYWdlIGlzIGFjY2Vzc2libGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XHJcbiAgICB2YXIgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcclxuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZSBqc29uIGZyb20gc3RvcmFnZSBzb3VyY2UgLSBjdXJyZW50bHkgbG9jYWxTdG9yYWdlXHJcbiAqIEByZXR1cm5zIGEgU3RvcmFnZSBvYmplY3QgKGFycmF5LWxpa2Ugb2JqZWN0IG9mIGtleTp2YWx1ZSBwYWlycylcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gd2luZG93Wydsb2NhbFN0b3JhZ2UnXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFyIGxvY2FsU3RvcmFnZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBjbGVhcmVkIScpXHJcbiAgICBnZXRTdG9yYWdlKCkuY2xlYXIoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByaW50IHRvIGNvbnNvbGUgYWxsIFRvRG8gb2JqZWN0cyBpbiBsb2NhbFN0b3JhZ2VcclxuICovXHJcbmZ1bmN0aW9uIGRpc3BsYXlTdG9yYWdlKCkge1xyXG4gICAgLy8gY29uc29sZS5ncm91cCgnZGlzcGxheWluZyBzdG9yYWdlJyk7XHJcbiAgICAvLyBsZXQgcyA9IEFycmF5LmZyb20obG9hZFRvRG9zKCkpIHx8IFtdO1xyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc1tpXSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCdkaXNwbGF5aW5nIHN0b3JhZ2UnKTtcclxufVxyXG5cclxuY2xhc3MgTG9jYWxTdG9yYWdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb24sIG1lc3NhZ2UpIHtcclxuICAgICAgICBzdXBlcihgJHthY3Rpb259IDogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdMb2NhbFN0b3JhZ2VFcnJvcic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBhcmFtZXRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyTmFtZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKGAke3BhcmFtZXRlck5hbWV9IDogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGBQYXJhbWV0ZXJFcnJvcmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFyU3RvcmFnZSwgZGlzcGxheVN0b3JhZ2UsIHNhdmUsIGxvYWQsIExvY2FsU3RvcmFnZUVycm9yLCBQYXJhbWV0ZXJFcnJvciwgZGVsZXRlRnJvbVN0b3JhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9jb250cm9sbGVyLmpzJztcclxuaW1wb3J0IHsgY2xlYXJTdG9yYWdlLCBzYXZlLCBsb2FkLCBkZWxldGVGcm9tU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NsYXNzZXMvUHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL2NsYXNzZXMvVG9Eby5qcyc7XHJcblxyXG5sZXQgbG9hZGVkID0ge307XHJcblxyXG4oZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcclxuICAgIC8vY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAvL2J1aWxkVGVzdERhdGEoKTtcclxuICAgIGxldCB0b2RvcyA9IGxvYWQoJ3RvZG8nKTtcclxuICAgIGxldCBwcm9qZWN0cyA9IGxvYWQoJ3Byb2plY3QnKTtcclxuICAgIHNldFVJRHModG9kb3MsIHByb2plY3RzKTtcclxuICAgIC8vIGxldCB0ID0gbmV3IFRvRG8obnVsbCwgbnVsbCwgbnVsbCwgbnVsbCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0KTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHNldFVJRHModG9kb3MsIHByb2plY3RzKSB7XHJcbiAgICBUb0RvLnVwZGF0ZVVpZFNlZWQoZGV0ZXJtaW5lZE5ld1VpZFNlZWQodG9kb3MpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVFVJRCBzZWVkOiBcIiArIFRvRG8uZ2V0VWlkU2VlZCgpKTtcclxuXHJcbiAgICBQcm9qZWN0LnVwZGF0ZVVpZFNlZWQoZGV0ZXJtaW5lZE5ld1VpZFNlZWQocHJvamVjdHMpKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUFVJRCBzZWVkOiBcIiArIFByb2plY3QuZ2V0VWlkU2VlZCgpKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZXRlcm1pbmVkTmV3VWlkU2VlZChvYmplY3RzKSB7XHJcbiAgICAgICAgbGV0IGhpZ2hlc3QgPSBvYmplY3RzLnJlZHVjZSgocCwgZWwpID0+IHtcclxuICAgICAgICAgICAgaWYgKHAgPD0gZWwudWlkKSByZXR1cm4gZWwudWlkICsgMTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICByZXR1cm4gaGlnaGVzdDtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkVGVzdERhdGEoKSB7XHJcbiAgICAvLyBhZGRUZXN0VG9Eb3NUb1N0b3JhZ2UoNyk7XHJcbiAgICBsZXQgdFByb2ogPSBuZXcgUHJvamVjdChcInB0aXRsZTFcIiwgXCJwZGVzYzFcIiwgXCJwbm90ZXMxXCIsIDU1NTUpO1xyXG4gICAgbGV0IHQxID0gbmV3IFRvRG8oXCJ0dGl0bGUxYVwiLCBcInRkZXNjMWFcIiwgbmV3IERhdGUoMSwgMSwgMSksIDEsIFwic29tZSBub3Rlc1wiLCAxMTExKTtcclxuICAgIGxldCB0MiA9IG5ldyBUb0RvKFwidHRpdGxlMWJcIiwgXCJ0ZGVzYzFiXCIsIG5ldyBEYXRlKDEsIDEsIDEpLCAxLCBcInNvbWUgbm90ZXNcIiwgMTExMik7XHJcbiAgICB0MS5hZGRUb0NoZWNrTGlzdCh0cnVlLCBcInRleHQgY2hlY2tsaXN0IGl0ZW1cIik7XHJcbiAgICB0Mi5hZGRUb0NoZWNrTGlzdChmYWxzZSwgXCJ0ZXh0IGNoZWNrbGlzdCBpdGVtXCIpO1xyXG4gICAgdDIuYWRkVG9DaGVja0xpc3QodHJ1ZSwgXCJ0ZXh0IGNoZWNrbGlzdCBpdGVtXCIpO1xyXG4gICAgdFByb2ouYWRkVG9kbyh0MSk7XHJcbiAgICB0UHJvai5hZGRUb2RvKHQyKTtcclxuICAgIHRQcm9qLmFkZFRvZG8obmV3IFRvRG8oXCJ0dGl0bGUyXCIsIFwidGRlc2MyXCIsIG5ldyBEYXRlKDIsIDIsIDIpLCAyLCBcInNvbWUgbm90ZXNcIiwgMjIyMikpO1xyXG5cclxuICAgIGxldCB0UHJvajIgPSBuZXcgUHJvamVjdChcInB0aXRsZTJcIiwgXCJwZGVzYzJcIiwgXCJwbm90ZXMyXCIsIDY2NjYpO1xyXG4gICAgdFByb2oyLmFkZFRvZG8obmV3IFRvRG8oXCJ0dGl0bGUzXCIsIFwidGRlc2MzXCIsIG5ldyBEYXRlKDMsIDMsIDMpLCAzLCBcInNvbWUgbm90ZXNcIiwgMzMzMykpO1xyXG4gICAgdFByb2oyLmFkZFRvZG8obmV3IFRvRG8oXCJ0dGl0bGU0XCIsIFwidGRlc2M0XCIsIG5ldyBEYXRlKDQsIDQsIDQpLCA0LCBcInNvbWUgbm90ZXNcIiwgNDQ0NCkpO1xyXG4gICAgc2F2ZSh0UHJvaik7XHJcbiAgICBzYXZlKHRQcm9qMik7XHJcblxyXG4gICAgbGV0IGxvbmVUMSA9IG5ldyBUb0RvKFwibm90IGluIGFueSBwcm9qZWN0IDFcIiwgXCJkZXNjcmlwdGlvbiAtIHRoaXMgb25lIGlzbnQgaW4gYSBwcm9qZWN0IDFcIi5yZXBlYXQoMTApLCBuZXcgRGF0ZSg1LCA1LCA1KSwgNSwgXCJzb21lIG5vdGVzIDFcIiwgMTMzNyk7XHJcbiAgICBzYXZlKGxvbmVUMSk7XHJcbiAgICBsZXQgbG9uZVQyID0gbmV3IFRvRG8oXCJub3QgaW4gYW55IHByb2plY3QgMlwiLCBcImRlc2NyaXB0aW9uIC0gdGhpcyBvbmUgaXNudCBpbiBhIHByb2plY3QgMlwiLCBuZXcgRGF0ZSg2LCA2LCA2KSwgNSwgXCJzb21lIG5vdGVzIDJcIiwgMTMzOCk7XHJcbiAgICBzYXZlKGxvbmVUMik7XHJcblxyXG5cclxuICAgIC8vZGVsZXRlRnJvbVN0b3JhZ2UoJ3RvZG8nLCB0Mi51aWQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhsb2FkKCd0b2RvJykpO1xyXG5cclxuICAgIC8vbGV0IHdoYXRldmVyID0gbG9hZChcInByb2plY3RcIik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHdoYXRldmVyKTtcclxuXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh3aW5kb3dbJ2xvY2FsU3RvcmFnZSddKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGxvYWQoXCJ0b2RvXCIpKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==