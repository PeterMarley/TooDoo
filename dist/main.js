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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --margin-main: 100px;\r\n    --border-rad: 10px;\r\n    font-size: 10pt;\r\n    font-family: opensans;\r\n\r\n    --theme-color-1: #f4f9f9;\r\n    --theme-color-2: #e44232;\r\n    --theme-color-3: #d3d3d3;\r\n    --theme-accent: #fca199;\r\n\r\n    --theme-text-1: black;\r\n    --theme-text-2: white;\r\n    --theme-burger-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    --theme-change-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n\r\n    --theme-transition-speed: 1s;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed);\r\n}\r\n\r\n.dark {\r\n    --theme-color-1: #261c2c;\r\n    --theme-color-2: #3e2c41;\r\n    --theme-color-3: #5c527f;\r\n    --theme-accent: #6e85b2;\r\n\r\n    --theme-text-1: white;\r\n    --theme-text-2: black;\r\n    --theme-burger-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    --theme-change-icon: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: alfa;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: bungee;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: opensans;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n}\r\n\r\n\r\nbody {\r\n    /* html body element */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n\r\n    background-color: var(--theme-color-1);\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.main {\r\n    /* main container for content */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n\r\n.header {\r\n    /* header container */\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0px;\r\n    z-index: 2;\r\n\r\n    background-color: var(--theme-color-2);\r\n    height: 3.5rem;\r\n    font-size: 1.2rem;\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.header-title {\r\n    /* header logo */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: var(--theme-accent);\r\n    border-radius: var(--border-rad);\r\n    font-family: bungee;\r\n    font-weight: 100;\r\n    letter-spacing: 0.2rem;\r\n    text-shadow: 2px 2px 4px black;\r\n    padding: 10px;\r\n    margin: 10px;\r\n\r\n}\r\n\r\n.header-title>span {\r\n    /* header logo div */\r\n    background-color: var(--theme-accent);\r\n    border-radius: 4px;\r\n\r\n    padding: 5px 10px;\r\n}\r\n\r\n.header-body {\r\n    /* Container for header burger button and navigation buttons */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.menu-button,\r\n.menu-expanding-button {\r\n    /* header buttons - top menu, and burger menu */\r\n    position: relative;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    margin: 0px 5px;\r\n}\r\n\r\n.menu-button {\r\n    background-color: var(--theme-accent);\r\n    max-width: 150px;\r\n}\r\n\r\n.menu-button:hover {\r\n    background-color: var(--theme-color-3);\r\n    box-shadow: 2px 2px 10px var(--theme-text-2);\r\n    outline: var(--theme-text-2) solid 1px;\r\n\r\n    transition: color 0.2s;\r\n}\r\n\r\n.menu-button:active {\r\n    background-color: var(--theme-color-1);\r\n    box-shadow: 2px 2px 10px var(--theme-text-1);\r\n\r\n}\r\n\r\n.menu-expanding-button {\r\n    font-size: 0.85em;\r\n    visibility: collapse;\r\n    transition: transform 0s, visibility 0s;\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.menu-expanding-button.active {\r\n    visibility: visible;\r\n    transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out, height 0.5s ease-in-out;\r\n\r\n    padding: 2px 5px;\r\n}\r\n\r\n.header-body>.menu-expanding-button {\r\n    transform: scaleX(0);\r\n    transform-origin: left;\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button {\r\n    transform: scaleY(0);\r\n    transform-origin: top;\r\n    height: 0;\r\n}\r\n\r\n.header-body>.menu-expanding-button.active {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button.active {\r\n    height:auto;\r\n    margin: 5px 0px;\r\n    transform: scaleY(1);\r\n}\r\n\r\nbutton.hamburger {\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    background-image: var(--theme-burger-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-color: var(--theme-accent);\r\n    border: 0px\r\n        /* solid var(--bg-color-1)*/\r\n    ;\r\n    border-radius: 5px;\r\n\r\n    margin: 0px 10px;\r\n    padding: 5px;\r\n\r\n    transition: transform 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n    transform-origin: center;\r\n}\r\n\r\nbutton.hamburger:hover {\r\n    background-color: var(--theme-color-3);\r\n\r\n    transform: scale(1.2);\r\n}\r\n\r\n.change-theme {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-left: auto;\r\n}\r\n\r\n.change-theme>div {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n    background-image: var(--theme-change-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    padding: 5px;\r\n\r\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n}\r\n\r\n.change-theme>div:hover {\r\n    transform: scale(1.3);\r\n}\r\n\r\n/* CONTENT */\r\n\r\n.main>div {\r\n    width: 800px;\r\n    padding: 10px;\r\n\r\n}\r\n\r\n.content {\r\n    --content-padding: 10px;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n\r\n    overflow-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed),\r\n        transform var(--theme-transition-speed);\r\n}\r\n\r\n.content-title {\r\n    text-align: center;\r\n    border-radius: var(--border-rad);\r\n    background-color: var(--theme-accent);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.nav {\r\n\r\n    position: absolute;\r\n    overflow: hidden;\r\n    /* top: set in dom.js */\r\n\r\n    min-width: 100px;\r\n    background-color: var(--theme-color-2);\r\n    border-radius: 0px 0px 5px 5px;\r\n\r\n    padding: 5px 10px;\r\n\r\n    /*\r\n    Nav is hidden upon loading and dom.js removes .hidden class\r\n    after 200ms (corresponding to the transition time). this stops\r\n    the nav transforming to scale(0) after loading, which shows\r\n    the nav briefly - bit of a hack?!\r\n    */\r\n    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n}\r\n\r\n.nav-open {\r\n    display: inline;\r\n    transform: scaleY(1);\r\n}\r\n\r\n.nav>ul {\r\n    list-style: none;\r\n}\r\n\r\n/* ADD TODO */\r\n\r\ndiv.add-todo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px;\r\n}\r\n\r\n/* TODO CARD */\r\n.todo-cards,\r\n.project-cards {\r\n    display: grid;\r\n    gap: 10px;\r\n    justify-items: center;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.todo-cards {\r\n    grid-template: 1fr / repeat(3, 1fr);\r\n    grid-auto-rows: 1fr;\r\n}\r\n\r\n.project-cards {\r\n    grid-template: 1fr / 1fr;\r\n    grid-auto-flow: 1fr;\r\n}\r\n\r\n.todo-card,\r\n.project-card {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0);\r\n    display: grid;\r\n\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.todo-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 2fr 1fr 1fr / repeat(2, 1fr);\r\n\r\n    width: 90%;\r\n\r\n}\r\n\r\n.project-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 6rem 2fr / repeat(2, 1fr);;\r\n\r\n    width: 95%;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-card:hover,\r\n.project-card:hover {\r\n    border: 1px solid var(--theme-text-1);\r\n    box-shadow: 5px 5px 15px var(--theme-accent);\r\n}\r\n\r\n.todo-card>*,\r\n.project-card>* {\r\n    /*position of all cells bar the bottom cell is to span 2 grid tracks*/\r\n    grid-column: 2 span;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-card>.title,\r\n.project-card>.title {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.notes {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.notes,\r\n.todo-card>.description,\r\n.project-card>.description {\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n    position: relative;\r\n\r\n    padding: 10px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.checklist {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.todo-card>.checklist>.checklist-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 4fr;\r\n}\r\n\r\n.summary {\r\n    background-color: var(--theme-accent);\r\n    border-radius: 10px;\r\n    padding: 5px 10px;\r\n    margin: 5px 5px 5px 0px;\r\n}\r\n\r\n.project-card>.summary {\r\n    margin-top: 0px;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell,\r\n.todo-card>.project-info {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.project-info>span:first-child,\r\n.todo-card>.bottom-cell>div>span:nth-child(1) {\r\n    font-weight: bold;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-column: 1 / -1;\r\n}\r\n.project-card>.bottom-cell>div:first-child,\r\n.todo-card>.bottom-cell>div:first-child {\r\n    margin-right: auto;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.project {\r\n    width: 100%;\r\n}\r\n\r\n#project-form {\r\n    display: grid;\r\n}\r\n\r\n.project-editor-button-panel {\r\n    display: grid;\r\n    grid-template: 1fr /1fr;\r\n    grid-auto-columns: 1fr;\r\n    grid-auto-flow: column;\r\n    justify-items: center;\r\n    column-gap: 10px;\r\n}\r\n\r\n/* TOOL TIP */\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    /* transform: translate(-50%, -50%); */\r\n    display: none;\r\n    background-color: var(--theme-text-1);\r\n    color: var(--theme-text-2);\r\n    padding: 5px;\r\n    border-radius: var(--border-rad);\r\n}\r\n\r\n.description:hover .tooltip,\r\n.notes:hover .tooltip {\r\n    display: block;\r\n}\r\n\r\n.description:focus .tooltip,\r\n.notes:focus .tooltip {\r\n    display: none;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.modal-active {\r\n    overflow: hidden;\r\n}\r\n\r\nselect.section-input,\r\n.section-input,\r\n.content-button,\r\n.checklist-section,\r\n.checklist-text,\r\n#modal-form {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: var(--border-rad);\r\n    border: 2px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper .content-button {\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.section-label {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: calc(var(--border-rad)/3);\r\n    border: 0px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper {\r\n    --top-offset: 3.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n#modal-form {\r\n    --margin-top:calc(var(--top-offset) + 10px);\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n\r\n    width: 50%;\r\n    min-width: 265px;\r\n    max-height: calc(100vh - var(--top-offset) - var(--margin-top));\r\n    overflow: scroll;\r\n    border-radius: 10px;\r\n    color: var(--theme-text-1);\r\n\r\n    margin-top: var(--margin-top);\r\n    padding: 10px;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px 0px;\r\n}\r\n\r\n.section.two-cell {\r\n    display: grid;\r\n    grid-template: 1fr/ repeat(2, 1fr);\r\n    column-gap: 10px;\r\n}\r\n\r\n#title-field {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n#desc-field {\r\n    font-size: 1em;\r\n}\r\n\r\n.section>textarea {\r\n    resize: vertical;\r\n    font-family: inherit;\r\n}\r\n\r\n.section-label {\r\n    position: absolute;\r\n    top: -0.7em;\r\n    left: 1.5em;\r\n\r\n    /* background-color: var(--text-2); */\r\n    font-size: 0.65em;\r\n\r\n    padding: 0.05em 0.5em;\r\n}\r\n\r\n.section-input {\r\n    flex-grow: 1;\r\n\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0.8em 0.5em 0.5em 0.5em;\r\n}\r\n\r\n.checklist-section {\r\n    position: relative;\r\n\r\n    /* background-color: var(--accent); */\r\n\r\n    padding: 1.2em 1em 1em 1em;\r\n}\r\n\r\n.checklist-list-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 7fr;\r\n    column-gap: 10px;\r\n\r\n    /* margin: 12px 0px; */\r\n}\r\n\r\n.checklist-new-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 6fr 1fr;\r\n    column-gap: 10px;\r\n\r\n    margin: 12px 0px;\r\n}\r\n\r\n.new-item {\r\n    margin-top: 15px;\r\n}\r\n\r\n.checklist-section>.checklist-item>.section {\r\n    width: 100%;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.checklist-text {\r\n    width: 100%;\r\n    padding: 0px 10px;\r\n\r\n    font-size: 0.8em;\r\n\r\n    color: var(--theme-text-1);\r\n}\r\n\r\n.content-button {\r\n    width: 100%;\r\n\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    border: 0px;\r\n    border-radius: var(--border-rad);\r\n    height: 2.5rem;\r\n}\r\n\r\n\r\n.content-button:hover {\r\n    background-color: var(--theme-color-2);\r\n    transition: background-color 0.1s;\r\n}\r\n\r\n.content-button:active {\r\n    background-color: var(--theme-color-1);\r\n    transition: none;\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n    #modal-form {\r\n        width: 95%;\r\n    }\r\n    .checklist-section {\r\n        width: 95%;\r\n    }\r\n    .complete-field {\r\n        width: 75px;\r\n        font-size: 0.75em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 430px) {\r\n    .header-body .menu-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n/* HIDDEN */\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .main>div {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .main>div {\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n    .main>div {\r\n        width: 250px;\r\n    }\r\n}\r\n@media only screen and (max-width: 655px) {\r\n    .body {\r\n        height: 100vh;\r\n    }\r\n\r\n    .content {\r\n        margin: 0 10px;\r\n        flex-wrap: nowrap;\r\n    }\r\n\r\n    .todo-cards {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .todo-card,\r\n    .project-card {\r\n        width: 95%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --margin-main: 100px;\r\n    --border-rad: 10px;\r\n    font-size: 10pt;\r\n    font-family: opensans;\r\n\r\n    --theme-color-1: #f4f9f9;\r\n    --theme-color-2: #e44232;\r\n    --theme-color-3: #d3d3d3;\r\n    --theme-accent: #fca199;\r\n\r\n    --theme-text-1: black;\r\n    --theme-text-2: white;\r\n    --theme-burger-icon: url('../img/menu-dark.png');\r\n    --theme-change-icon: url('../img/moon.png');\r\n\r\n    --theme-transition-speed: 1s;\r\n}\r\n\r\n* {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed);\r\n}\r\n\r\n.dark {\r\n    --theme-color-1: #261c2c;\r\n    --theme-color-2: #3e2c41;\r\n    --theme-color-3: #5c527f;\r\n    --theme-accent: #6e85b2;\r\n\r\n    --theme-text-1: white;\r\n    --theme-text-2: black;\r\n    --theme-burger-icon: url('../img/menu-light.png');\r\n    --theme-change-icon: url('../img/sunWhite.png');\r\n}\r\n\r\n@font-face {\r\n    font-family: alfa;\r\n    src: url('../fonts/AlfaSlabOne-Regular.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: bungee;\r\n    src: url('../fonts/BungeeShade-Regular.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: opensans;\r\n    src: url('../fonts/OpenSans-VariableFont_wdth,wght.ttf');\r\n}\r\n\r\n\r\nbody {\r\n    /* html body element */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n\r\n    background-color: var(--theme-color-1);\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.main {\r\n    /* main container for content */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n\r\n.header {\r\n    /* header container */\r\n    display: flex;\r\n    position: sticky;\r\n    top: 0px;\r\n    z-index: 2;\r\n\r\n    background-color: var(--theme-color-2);\r\n    height: 3.5rem;\r\n    font-size: 1.2rem;\r\n\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.header-title {\r\n    /* header logo */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    background-color: var(--theme-accent);\r\n    border-radius: var(--border-rad);\r\n    font-family: bungee;\r\n    font-weight: 100;\r\n    letter-spacing: 0.2rem;\r\n    text-shadow: 2px 2px 4px black;\r\n    padding: 10px;\r\n    margin: 10px;\r\n\r\n}\r\n\r\n.header-title>span {\r\n    /* header logo div */\r\n    background-color: var(--theme-accent);\r\n    border-radius: 4px;\r\n\r\n    padding: 5px 10px;\r\n}\r\n\r\n.header-body {\r\n    /* Container for header burger button and navigation buttons */\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.menu-button,\r\n.menu-expanding-button {\r\n    /* header buttons - top menu, and burger menu */\r\n    position: relative;\r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n    margin: 0px 5px;\r\n}\r\n\r\n.menu-button {\r\n    background-color: var(--theme-accent);\r\n    max-width: 150px;\r\n}\r\n\r\n.menu-button:hover {\r\n    background-color: var(--theme-color-3);\r\n    box-shadow: 2px 2px 10px var(--theme-text-2);\r\n    outline: var(--theme-text-2) solid 1px;\r\n\r\n    transition: color 0.2s;\r\n}\r\n\r\n.menu-button:active {\r\n    background-color: var(--theme-color-1);\r\n    box-shadow: 2px 2px 10px var(--theme-text-1);\r\n\r\n}\r\n\r\n.menu-expanding-button {\r\n    font-size: 0.85em;\r\n    visibility: collapse;\r\n    transition: transform 0s, visibility 0s;\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.menu-expanding-button.active {\r\n    visibility: visible;\r\n    transition: transform 0.5s ease-in-out, visibility 0.5s ease-in-out, height 0.5s ease-in-out;\r\n\r\n    padding: 2px 5px;\r\n}\r\n\r\n.header-body>.menu-expanding-button {\r\n    transform: scaleX(0);\r\n    transform-origin: left;\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button {\r\n    transform: scaleY(0);\r\n    transform-origin: top;\r\n    height: 0;\r\n}\r\n\r\n.header-body>.menu-expanding-button.active {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.nav>ul>li.menu-expanding-button.active {\r\n    height:auto;\r\n    margin: 5px 0px;\r\n    transform: scaleY(1);\r\n}\r\n\r\nbutton.hamburger {\r\n    width: 25px;\r\n    height: 25px;\r\n\r\n    background-image: var(--theme-burger-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-color: var(--theme-accent);\r\n    border: 0px\r\n        /* solid var(--bg-color-1)*/\r\n    ;\r\n    border-radius: 5px;\r\n\r\n    margin: 0px 10px;\r\n    padding: 5px;\r\n\r\n    transition: transform 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n    transform-origin: center;\r\n}\r\n\r\nbutton.hamburger:hover {\r\n    background-color: var(--theme-color-3);\r\n\r\n    transform: scale(1.2);\r\n}\r\n\r\n.change-theme {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    margin-left: auto;\r\n}\r\n\r\n.change-theme>div {\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n    background-image: var(--theme-change-icon);\r\n    background-size: 80%;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border: 0px;\r\n    border-radius: 5px;\r\n\r\n    padding: 5px;\r\n\r\n    transition: 0.3s cubic-bezier(.61, -0.37, .54, 1.78);\r\n}\r\n\r\n.change-theme>div:hover {\r\n    transform: scale(1.3);\r\n}\r\n\r\n/* CONTENT */\r\n\r\n.main>div {\r\n    width: 800px;\r\n    padding: 10px;\r\n\r\n}\r\n\r\n.content {\r\n    --content-padding: 10px;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n\r\n    overflow-wrap: break-word;\r\n    overflow: hidden;\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n\r\n    transition: color var(--theme-transition-speed),\r\n        background-color var(--theme-transition-speed),\r\n        transform var(--theme-transition-speed);\r\n}\r\n\r\n.content-title {\r\n    text-align: center;\r\n    border-radius: var(--border-rad);\r\n    background-color: var(--theme-accent);\r\n    margin: 10px 0px;\r\n}\r\n\r\n.nav {\r\n\r\n    position: absolute;\r\n    overflow: hidden;\r\n    /* top: set in dom.js */\r\n\r\n    min-width: 100px;\r\n    background-color: var(--theme-color-2);\r\n    border-radius: 0px 0px 5px 5px;\r\n\r\n    padding: 5px 10px;\r\n\r\n    /*\r\n    Nav is hidden upon loading and dom.js removes .hidden class\r\n    after 200ms (corresponding to the transition time). this stops\r\n    the nav transforming to scale(0) after loading, which shows\r\n    the nav briefly - bit of a hack?!\r\n    */\r\n    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n}\r\n\r\n.nav-open {\r\n    display: inline;\r\n    transform: scaleY(1);\r\n}\r\n\r\n.nav>ul {\r\n    list-style: none;\r\n}\r\n\r\n/* ADD TODO */\r\n\r\ndiv.add-todo {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-flow: column nowrap;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px;\r\n}\r\n\r\n/* TODO CARD */\r\n.todo-cards,\r\n.project-cards {\r\n    display: grid;\r\n    gap: 10px;\r\n    justify-items: center;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.todo-cards {\r\n    grid-template: 1fr / repeat(3, 1fr);\r\n    grid-auto-rows: 1fr;\r\n}\r\n\r\n.project-cards {\r\n    grid-template: 1fr / 1fr;\r\n    grid-auto-flow: 1fr;\r\n}\r\n\r\n.todo-card,\r\n.project-card {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: 10px;\r\n    border: 1px solid rgba(0, 0, 0, 0);\r\n    display: grid;\r\n\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.todo-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 2fr 1fr 1fr / repeat(2, 1fr);\r\n\r\n    width: 90%;\r\n\r\n}\r\n\r\n.project-card {\r\n    grid-template: calc(1.2rem + 20px) 6rem 6rem 2fr / repeat(2, 1fr);;\r\n\r\n    width: 95%;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-card:hover,\r\n.project-card:hover {\r\n    border: 1px solid var(--theme-text-1);\r\n    box-shadow: 5px 5px 15px var(--theme-accent);\r\n}\r\n\r\n.todo-card>*,\r\n.project-card>* {\r\n    /*position of all cells bar the bottom cell is to span 2 grid tracks*/\r\n    grid-column: 2 span;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-card>.title,\r\n.project-card>.title {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.notes {\r\n    margin: 10px 0px;\r\n}\r\n\r\n.notes,\r\n.todo-card>.description,\r\n.project-card>.description {\r\n    background-color: var(--theme-color-3);\r\n    border-radius: 10px;\r\n    position: relative;\r\n\r\n    padding: 10px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.checklist {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.todo-card>.checklist>.checklist-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 4fr;\r\n}\r\n\r\n.summary {\r\n    background-color: var(--theme-accent);\r\n    border-radius: 10px;\r\n    padding: 5px 10px;\r\n    margin: 5px 5px 5px 0px;\r\n}\r\n\r\n.project-card>.summary {\r\n    margin-top: 0px;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell,\r\n.todo-card>.project-info {\r\n    font-size: 0.8em;\r\n}\r\n\r\n.todo-card>.project-info>span:first-child,\r\n.todo-card>.bottom-cell>div>span:nth-child(1) {\r\n    font-weight: bold;\r\n}\r\n\r\n.project-card>.bottom-cell,\r\n.todo-card>.bottom-cell {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-column: 1 / -1;\r\n}\r\n.project-card>.bottom-cell>div:first-child,\r\n.todo-card>.bottom-cell>div:first-child {\r\n    margin-right: auto;\r\n}\r\n\r\n/* PROJECT */\r\n\r\n.project {\r\n    width: 100%;\r\n}\r\n\r\n#project-form {\r\n    display: grid;\r\n}\r\n\r\n.project-editor-button-panel {\r\n    display: grid;\r\n    grid-template: 1fr /1fr;\r\n    grid-auto-columns: 1fr;\r\n    grid-auto-flow: column;\r\n    justify-items: center;\r\n    column-gap: 10px;\r\n}\r\n\r\n/* TOOL TIP */\r\n\r\n.tooltip {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    /* transform: translate(-50%, -50%); */\r\n    display: none;\r\n    background-color: var(--theme-text-1);\r\n    color: var(--theme-text-2);\r\n    padding: 5px;\r\n    border-radius: var(--border-rad);\r\n}\r\n\r\n.description:hover .tooltip,\r\n.notes:hover .tooltip {\r\n    display: block;\r\n}\r\n\r\n.description:focus .tooltip,\r\n.notes:focus .tooltip {\r\n    display: none;\r\n}\r\n\r\n/* MODAL */\r\n\r\n.modal-active {\r\n    overflow: hidden;\r\n}\r\n\r\nselect.section-input,\r\n.section-input,\r\n.content-button,\r\n.checklist-section,\r\n.checklist-text,\r\n#modal-form {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: var(--border-rad);\r\n    border: 2px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper .content-button {\r\n    background-color: var(--theme-color-3);\r\n}\r\n\r\n.section-label {\r\n    background-color: var(--theme-color-1);\r\n    border-radius: calc(var(--border-rad)/3);\r\n    border: 0px solid var(--theme-color-3);\r\n}\r\n\r\n.modal-wrapper {\r\n    --top-offset: 3.5rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n\r\n    font-size: 1rem;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n#modal-form {\r\n    --margin-top:calc(var(--top-offset) + 10px);\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n\r\n    width: 50%;\r\n    min-width: 265px;\r\n    max-height: calc(100vh - var(--top-offset) - var(--margin-top));\r\n    overflow: scroll;\r\n    border-radius: 10px;\r\n    color: var(--theme-text-1);\r\n\r\n    margin-top: var(--margin-top);\r\n    padding: 10px;\r\n}\r\n\r\n.section {\r\n    display: flex;\r\n    position: relative;\r\n\r\n    width: 100%;\r\n\r\n    margin: 10px 0px;\r\n}\r\n\r\n.section.two-cell {\r\n    display: grid;\r\n    grid-template: 1fr/ repeat(2, 1fr);\r\n    column-gap: 10px;\r\n}\r\n\r\n#title-field {\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n#desc-field {\r\n    font-size: 1em;\r\n}\r\n\r\n.section>textarea {\r\n    resize: vertical;\r\n    font-family: inherit;\r\n}\r\n\r\n.section-label {\r\n    position: absolute;\r\n    top: -0.7em;\r\n    left: 1.5em;\r\n\r\n    /* background-color: var(--text-2); */\r\n    font-size: 0.65em;\r\n\r\n    padding: 0.05em 0.5em;\r\n}\r\n\r\n.section-input {\r\n    flex-grow: 1;\r\n\r\n    color: var(--theme-text-1);\r\n\r\n    padding: 0.8em 0.5em 0.5em 0.5em;\r\n}\r\n\r\n.checklist-section {\r\n    position: relative;\r\n\r\n    /* background-color: var(--accent); */\r\n\r\n    padding: 1.2em 1em 1em 1em;\r\n}\r\n\r\n.checklist-list-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 7fr;\r\n    column-gap: 10px;\r\n\r\n    /* margin: 12px 0px; */\r\n}\r\n\r\n.checklist-new-item {\r\n    display: grid;\r\n    grid-template: 1fr/ 1fr 6fr 1fr;\r\n    column-gap: 10px;\r\n\r\n    margin: 12px 0px;\r\n}\r\n\r\n.new-item {\r\n    margin-top: 15px;\r\n}\r\n\r\n.checklist-section>.checklist-item>.section {\r\n    width: 100%;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.checklist-text {\r\n    width: 100%;\r\n    padding: 0px 10px;\r\n\r\n    font-size: 0.8em;\r\n\r\n    color: var(--theme-text-1);\r\n}\r\n\r\n.content-button {\r\n    width: 100%;\r\n\r\n    padding: 5px 10px;\r\n    margin-top: 5px;\r\n    border: 0px;\r\n    border-radius: var(--border-rad);\r\n    height: 2.5rem;\r\n}\r\n\r\n\r\n.content-button:hover {\r\n    background-color: var(--theme-color-2);\r\n    transition: background-color 0.1s;\r\n}\r\n\r\n.content-button:active {\r\n    background-color: var(--theme-color-1);\r\n    transition: none;\r\n}\r\n\r\n@media only screen and (max-width: 750px) {\r\n    #modal-form {\r\n        width: 95%;\r\n    }\r\n    .checklist-section {\r\n        width: 95%;\r\n    }\r\n    .complete-field {\r\n        width: 75px;\r\n        font-size: 0.75em;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 430px) {\r\n    .header-body .menu-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n/* HIDDEN */\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n/* MEDIA QUERIES */\r\n\r\n\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .main>div {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .main>div {\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n    .main>div {\r\n        width: 250px;\r\n    }\r\n}\r\n@media only screen and (max-width: 655px) {\r\n    .body {\r\n        height: 100vh;\r\n    }\r\n\r\n    .content {\r\n        margin: 0 10px;\r\n        flex-wrap: nowrap;\r\n    }\r\n\r\n    .todo-cards {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .todo-card,\r\n    .project-card {\r\n        width: 95%;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent),
/* harmony export */   "closeModalAction": () => (/* binding */ closeModalAction),
/* harmony export */   "createToDoCards": () => (/* binding */ createToDoCards),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "onCloseModal": () => (/* binding */ onCloseModal),
/* harmony export */   "render_allProjects": () => (/* binding */ render_allProjects),
/* harmony export */   "render_allTodos": () => (/* binding */ render_allTodos),
/* harmony export */   "render_project": () => (/* binding */ render_project),
/* harmony export */   "render_toDoModal": () => (/* binding */ render_toDoModal),
/* harmony export */   "setContentTitle": () => (/* binding */ setContentTitle)
/* harmony export */ });
/* harmony import */ var _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ToDo.js */ "./src/classes/ToDo.js");
/* harmony import */ var _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Project.js */ "./src/classes/Project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _html_templates_toDoModal_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-templates/toDoModal.html */ "./src/html-templates/toDoModal.html");
/* harmony import */ var _html_templates_toDoModal_list_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-templates/toDoModal_list.html */ "./src/html-templates/toDoModal_list.html");
/* harmony import */ var _html_templates_toDoCard_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-templates/toDoCard.html */ "./src/html-templates/toDoCard.html");
/* harmony import */ var _html_templates_projectCard_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-templates/projectCard.html */ "./src/html-templates/projectCard.html");
/* harmony import */ var _html_templates_projectEditor_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-templates/projectEditor.html */ "./src/html-templates/projectEditor.html");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
// js objects




// html templates






// node modules


// elements object
let elements = {
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
(function initialise() {

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
    initButtonEvents(elements.showAllTodosBtns, () => render_allTodos('All ToDos'));
    initButtonEvents(elements.showAllProjectsBtns, render_allProjects);
    initButtonEvents(elements.menuAddToDoBtns, () => render_toDoModal(null, () => render_allTodos('All Todos')));
    initButtonEvents(elements.menuAddProjectBtns, () => render_project(null));

    render_welcome();

    function initButtonEvents(btns, eventFunc) {
        for (let btn of btns) {
            btn.addEventListener('click', eventFunc);
        }
    }

    function setMenuPosition() {
        elements.nav.style['top'] = (elements.header.offsetHeight - 2) + 'px';
        elements.nav.style['left'] = '10px';
        setTimeout(() => {
            elements.nav.classList.remove('hidden');
        }, 200);
    }

})();

/**
 * Render the welcome message that is first shown to user on page load.
 */
function render_welcome() {
    clearContent();
    setContentTitle('Welcome to TooDoo!');
    let welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = "Welcome!";
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
    let template = document.createElement('template');
    template.innerHTML = htmlTemplate;
    return template.content.firstElementChild;
}

/**
 * Close any open modals
 */
function closeModalAction() {
    let modalSelector = '.modal-wrapper';
    let modal = document.querySelector(modalSelector);
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
    for (let btn of elements.menuExpandingBtns) {
        let makeActive = selectors.reduce((selectorFound, selector) => { if (btn.classList.contains(selector)) return true; else return selectorFound; }, false);
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
function render_allTodos(title, onClickEvent, predicate) {
    clearContent();
    setContentTitle(title);
    configExpandingMenuBtns('add-todo-button');
    let loadedTodos = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('todo');
    if (loadedTodos.length != 0) {
        elements.content.appendChild(createToDoCards(loadedTodos, () => render_allTodos(title), onClickEvent, predicate));
    } else {
        let msg = document.createElement('div');
        msg.textContent = "You don't have any to do's yet!";
        elements.content.appendChild(msg);
    }
};

/**
 * 
 * @param {number} tuid ToDo unique identifier
 * @param {function} onCloseEvent a function that is called when the modal is closed
 * @param {number} puid Project unique identifier
 */
function render_toDoModal(tuid, onCloseEvent, puid) {
    // ensure modal doesn't render twice
    if (document.body.classList.contains('modal-active')) closeModalAction();
    let toDoObj = (tuid === null) ? new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo() : (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('todo', tuid);

    const currentUid = toDoObj.uid;
    // setup modal
    document.body.classList.add('modal-active');
    let modal = generateTemplate(_html_templates_toDoModal_html__WEBPACK_IMPORTED_MODULE_3__["default"]);
    modal.querySelector('#title-field').value = toDoObj.title;
    modal.querySelector('#desc-field').value = toDoObj.description;
    modal.querySelector('#notes-field').value = toDoObj.notes;
    modal.querySelector('#due-date-field').value = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(toDoObj.dueDate, 'yyyy-MM-dd');
    modal.querySelector('#priority-field').value = toDoObj.priority;
    renderChecklist_view(toDoObj);
    modal.querySelector('#add-todo-button').addEventListener('click', event => onAddNewChecklistItem(event));
    modal.querySelector('#save-button').addEventListener('click', () => onSave(currentUid));
    modal.querySelector('#delete-button').addEventListener('click', event => {
        console.log("DELETING");
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.deleteFromStorage)('todo', currentUid);
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
    function renderChecklist_view(toDoObj) {
        let checklist = toDoObj.checklist;
        let checklistSection = modal.querySelector('.checklist-section');
        if (checklist.length > 0) {
            for (let i = 0; i < checklist.length; i++) {
                let checklistItem = generateTemplate(_html_templates_toDoModal_list_html__WEBPACK_IMPORTED_MODULE_4__["default"]);
                checklistItem.querySelector('.complete-field').value = checklist[i][0];
                checklistItem.querySelector('.checklist-text').value = checklist[i][1];
                checklistSection.appendChild(checklistItem);
            }
        } else {
            let p = document.createElement('p');
            p.textContent = 'No Checklist Items';
            checklistSection.appendChild(p);
        }
    }
    function onSave(currentUid) {
        let t = pullTodo(currentUid);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(t);
        if (puid !== undefined && typeof puid === 'number') {
            let project = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('project', puid);
            project.addTodo(t);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(project);
        }
        let cont = confirm("Saved.\nPress ok to keep editing.");
        if (!cont) closeModalAction();
        if (onCloseEvent) onCloseEvent();
    }
    function onAddNewChecklistItem(event) {
        let completeValue = modal.querySelector('.checklist-new-item .complete-field').value == "true";
        let textField = modal.querySelector('.checklist-new-item .checklist-text');
        try {
            let t = pullTodo();
            t.addToCheckList(completeValue, textField.value);
            onCloseModal(event);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(t);
            render_toDoModal(t.uid, onCloseEvent, puid);
        } catch (error) {
            textField.setCustomValidity(error.message);
            textField.reportValidity();
        }
    }
    function pullTodo() {
        let title = modal.querySelector('#title-field').value;
        let description = modal.querySelector('#desc-field').value;
        let dueDate = new Date(modal.querySelector('#due-date-field').value);
        let priority = modal.querySelector('#priority-field').value;
        let notes = modal.querySelector('#notes-field').value;
        let t = new _classes_ToDo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(title, description, dueDate, parseInt(priority), notes, currentUid);
        for (let node of modal.querySelectorAll('.checklist-list-item')) {
            let complete = node.querySelector('.complete-field').value === 'true';
            let text = node.querySelector('.checklist-text').value;
            t.addToCheckList(complete, text);
        }
        return t;
    }
};

function createToDoCards(todos, onCloseEvent, onClickEvent, predicate) {
    let todoCards = document.createElement('div');
    todoCards.classList.add('todo-cards');
    let loadedProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('project');
    for (let todo of todos) {
        if (predicate === undefined || predicate(todo)) {
            let card = generateTemplate(_html_templates_toDoCard_html__WEBPACK_IMPORTED_MODULE_5__["default"]);
            card.querySelector('.title').textContent = todo.title;
            //card.querySelector('.description').textContent = (todo.description.length < 170) ? todo.description : todo.description.substring(0, 170) + '...';
            card.querySelector('.description').textContent = todo.description;
            card.querySelector('.summary').textContent = (todo.checklist.length === 0 ? 'No' : todo.checklist.length) + ' checklist item' + (todo.checklist.length !== 1 ? 's' : '');

            /**
             * Go through projects, checking if 
             */
            let containingProject = (loadedProjects.find(p => p.todos.filter(t => t.uid === todo.uid).length > 0));
            // let containingProjects;
            // loadedProjects.forEach(project => {
            //     if (project.todos.find())
            // });


            card.querySelector('.project-info>span:last-child').textContent = containingProject !== undefined ? containingProject.title : 'Not in any project';
            card.querySelector('.bottom-cell>div:first-child>span:last-child').textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(todo.dueDate, 'do LLLL y');
            card.querySelector('.bottom-cell>div:last-child>span:last-child').textContent = todo.priority;
            //console.log(card.outerHTML);
            card.addEventListener('click', (onClickEvent === undefined)
                ? () => render_toDoModal(todo.uid, onCloseEvent)
                : () => onClickEvent(todo));

            todoCards.appendChild(card);
        }
    }
    return todoCards;
}

function render_allProjects() {
    clearContent();
    setContentTitle('All Projects');
    configExpandingMenuBtns('add-project-button');

    //elements.menuAddProjectBtns.forEach(element => element.addEventListener('click', () => render_project(null)));

    let projects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('project');

    if (projects.length !== 0) {
        let cards = document.createElement('div');
        cards.classList.add('project-cards');
        for (let project of projects) {
            //console.log(project);
            let card = generateTemplate(_html_templates_projectCard_html__WEBPACK_IMPORTED_MODULE_6__["default"]);
            card.querySelector('.title').textContent = project.title;
            card.querySelector('.description').textContent = project.description;
            card.querySelector('.notes').textContent = project.notes;
            card.querySelector('.summary').textContent = ((project.todos.length === 0) ? "No" : project.todos.length) + " todo" + ((project.todos.length >= 1) ? "s" : "");
            card.addEventListener('click', () => render_project(project.uid));
            cards.appendChild(card);
        }
        elements.content.appendChild(cards);
    } else {
        let msg = document.createElement('div');
        msg.textContent = "You don't have any projects yet!";
        elements.content.appendChild(msg);
    }


}

function render_project(projectUid) {
    clearContent();
    configExpandingMenuBtns('add-project-button', 'add-todo-to-project-button');

    let projectObj;
    if (projectUid === null) {
        projectObj = new _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__.Project();
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(projectObj);
    } else {
        projectObj = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('project', projectUid);
    }
    setContentTitle('Project: ' + projectObj.title);

    const uid = projectObj.uid;

    elements.menuAddToDoToProjectBtns.forEach(element => element.addEventListener('click', () => render_toDoModal(null, () => render_project(uid), uid)));

    let content = generateTemplate(_html_templates_projectEditor_html__WEBPACK_IMPORTED_MODULE_7__["default"]);
    let btnPanel = content.querySelector('.project-editor-button-panel');
    content.querySelector('#title-field').value = projectObj.title;
    content.querySelector('#desc-field').value = projectObj.description;
    content.querySelector('#notes-field').value = projectObj.notes;
    btnPanel.before(createToDoCards(projectObj.todos, () => render_project(uid)));
    elements.content.appendChild(content);

    //console.log(load('project'));

    content.querySelector('#save-button').addEventListener('click', () => (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(pullProjectFromEditorDiv()));
    content.querySelector('#add-button').addEventListener('click', () => render_toDoModal(null, () => render_project(uid), uid));
    content.querySelector('#delete-button').addEventListener('click', () => {
        let deleteTodos = confirm('Would you like to delete all associated todos?\nPress ok to delete all associated todos, or cancel to delete only the project');
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.deleteFromStorage)('project', uid, deleteTodos);
        render_allProjects();
    });
    content.querySelector('#add-existing-button').addEventListener('click', () => render_allTodos('Choose a ToDo to add to your project', (todo) => onClicks.addExistingTodo(todo), (todo) => predicates.isNotInAnyProject(todo)));
    content.querySelector('#remove-existing-button').addEventListener('click', () => render_allTodos('Choose a ToDo to remove from your project',(todo) => onClicks.removeTodoFromProject(todo), (todo) => predicates.isInThisProject(todo)));

    function pullProjectFromEditorDiv() {
        let title = document.querySelector('#title-field').value;
        let description = document.querySelector('#desc-field').value;
        let notes = document.querySelector('#notes-field').value;
        let p = new _classes_Project_js__WEBPACK_IMPORTED_MODULE_1__.Project(title, description, notes, uid);
        p.todos = projectObj.todos;
        return p;
    }

    let onClicks = {
        addExistingTodo: function (todo) {
            projectObj.addTodo(todo);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(projectObj);
            render_project(projectUid);
        },
        removeTodoFromProject: function (todo) {
            projectObj.removeTodo(todo);
            (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.save)(projectObj);
            render_project(projectUid);
        }
    };

    let predicates = {
        isNotInAnyProject: function (todo) {
            for (let p of (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.load)('project')) {
                if (p.todos.find(e => todo.uid === e.uid)) return false;
            }
            return true;
        },
        isInThisProject: function (todo) {
            if (projectObj.todos.find(e => todo.uid === e.uid)) return true;
            return false;
        }
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
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.clearStorage)();
    buildTestData();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxjQUFjLFlBQVksVUFBVSxPQUFPLFVBQVUsTUFBTSxVQUFVLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxVQUFVLE9BQU8sS0FBSyxhQUFhLFlBQVksTUFBTSxLQUFLLGFBQWEsV0FBVyxTQUFTLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsYUFBYSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssWUFB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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUSxJQUFJLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWUsSUFBSSxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQzBHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlUMUc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0o7QUFDa0Q7QUFDNUI7QUFDTjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVk7QUFDaEI7QUFDQSxnQkFBZ0IsaURBQUk7QUFDcEIsbUJBQW1CLGlEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxnRUFBa0I7QUFDdEIsZ0NBQWdDLDZEQUFlO0FBQy9DO0FBQ0EsSUFBSSxzRUFBcUI7QUFDekIsZ0NBQWdDLG1FQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQU87QUFDM0IsaUJBQWlCLGtEQUFJO0FBQ3JCLGlCQUFpQixrREFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtEQUFJO0FBQzFCO0FBQ0EscUJBQXFCLHdEQUFPO0FBQzVCLHVCQUF1QixrREFBSTtBQUMzQix1QkFBdUIsa0RBQUk7QUFDM0IsSUFBSSxpREFBSTtBQUNSLElBQUksaURBQUk7QUFDUjtBQUNBLHFCQUFxQixrREFBSTtBQUN6QixJQUFJLGlEQUFJO0FBQ1IscUJBQXFCLGtEQUFJO0FBQ3pCLElBQUksaURBQUk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9odG1sLXRlbXBsYXRlcy9wcm9qZWN0Q2FyZC5odG1sIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2h0bWwtdGVtcGxhdGVzL3Byb2plY3RFZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9odG1sLXRlbXBsYXRlcy90b0RvQ2FyZC5odG1sIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2h0bWwtdGVtcGxhdGVzL3RvRG9Nb2RhbC5odG1sIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2h0bWwtdGVtcGxhdGVzL3RvRG9Nb2RhbF9saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL2NsYXNzZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9jbGFzc2VzL1RvRG8uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9tZW51LWRhcmsucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21vb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21lbnUtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3N1bldoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0FsZmFTbGFiT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQnVuZ2VlU2hhZGUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9PcGVuU2Fucy1WYXJpYWJsZUZvbnRfd2R0aCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1tYXJnaW4tbWFpbjogMTAwcHg7XFxyXFxuICAgIC0tYm9yZGVyLXJhZDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgICBmb250LWZhbWlseTogb3BlbnNhbnM7XFxyXFxuXFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMTogI2Y0ZjlmOTtcXHJcXG4gICAgLS10aGVtZS1jb2xvci0yOiAjZTQ0MjMyO1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTM6ICNkM2QzZDM7XFxyXFxuICAgIC0tdGhlbWUtYWNjZW50OiAjZmNhMTk5O1xcclxcblxcclxcbiAgICAtLXRoZW1lLXRleHQtMTogYmxhY2s7XFxyXFxuICAgIC0tdGhlbWUtdGV4dC0yOiB3aGl0ZTtcXHJcXG4gICAgLS10aGVtZS1idXJnZXItaWNvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgLS10aGVtZS1jaGFuZ2UtaWNvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG5cXHJcXG4gICAgLS10aGVtZS10cmFuc2l0aW9uLXNwZWVkOiAxcztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpLFxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciB2YXIoLS10aGVtZS10cmFuc2l0aW9uLXNwZWVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsge1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTE6ICMyNjFjMmM7XFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMjogIzNlMmM0MTtcXHJcXG4gICAgLS10aGVtZS1jb2xvci0zOiAjNWM1MjdmO1xcclxcbiAgICAtLXRoZW1lLWFjY2VudDogIzZlODViMjtcXHJcXG5cXHJcXG4gICAgLS10aGVtZS10ZXh0LTE6IHdoaXRlO1xcclxcbiAgICAtLXRoZW1lLXRleHQtMjogYmxhY2s7XFxyXFxuICAgIC0tdGhlbWUtYnVyZ2VyLWljb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIC0tdGhlbWUtY2hhbmdlLWljb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogYWxmYTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGJ1bmdlZTtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IG9wZW5zYW5zO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAvKiBodG1sIGJvZHkgZWxlbWVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTEpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICAvKiBtYWluIGNvbnRhaW5lciBmb3IgY29udGVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICAvKiBoZWFkZXIgY29udGFpbmVyICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGl0bGUge1xcclxcbiAgICAvKiBoZWFkZXIgbG9nbyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBidW5nZWU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlPnNwYW4ge1xcclxcbiAgICAvKiBoZWFkZXIgbG9nbyBkaXYgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1ib2R5IHtcXHJcXG4gICAgLyogQ29udGFpbmVyIGZvciBoZWFkZXIgYnVyZ2VyIGJ1dHRvbiBhbmQgbmF2aWdhdGlvbiBidXR0b25zICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24sXFxyXFxuLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIC8qIGhlYWRlciBidXR0b25zIC0gdG9wIG1lbnUsIGFuZCBidXJnZXIgbWVudSAqL1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLXRoZW1lLXRleHQtMik7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLXRoZW1lLXRleHQtMikgc29saWQgMXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIHZpc2liaWxpdHkgMHM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDAuNXMgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJvZHk+Lm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2PnVsPmxpLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1ib2R5Pi5tZW51LWV4cGFuZGluZy1idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXY+dWw+bGkubWVudS1leHBhbmRpbmctYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGhlaWdodDphdXRvO1xcclxcbiAgICBtYXJnaW46IDVweCAwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGhlbWUtYnVyZ2VyLWljb24pO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXI6IDBweFxcclxcbiAgICAgICAgLyogc29saWQgdmFyKC0tYmctY29sb3ItMSkqL1xcclxcbiAgICA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGFtYnVyZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZT5kaXYge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS10aGVtZS1jaGFuZ2UtaWNvbik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZT5kaXY6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRFTlQgKi9cXHJcXG5cXHJcXG4ubWFpbj5kaXYge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgLS1jb250ZW50LXBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCksXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpLFxcclxcbiAgICAgICAgdHJhbnNmb3JtIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWFjY2VudCk7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIC8qIHRvcDogc2V0IGluIGRvbS5qcyAqL1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHJcXG4gICAgLypcXHJcXG4gICAgTmF2IGlzIGhpZGRlbiB1cG9uIGxvYWRpbmcgYW5kIGRvbS5qcyByZW1vdmVzIC5oaWRkZW4gY2xhc3NcXHJcXG4gICAgYWZ0ZXIgMjAwbXMgKGNvcnJlc3BvbmRpbmcgdG8gdGhlIHRyYW5zaXRpb24gdGltZSkuIHRoaXMgc3RvcHNcXHJcXG4gICAgdGhlIG5hdiB0cmFuc2Zvcm1pbmcgdG8gc2NhbGUoMCkgYWZ0ZXIgbG9hZGluZywgd2hpY2ggc2hvd3NcXHJcXG4gICAgdGhlIG5hdiBicmllZmx5IC0gYml0IG9mIGEgaGFjaz8hXFxyXFxuICAgICovXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1vcGVuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdj51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEFERCBUT0RPICovXFxyXFxuXFxyXFxuZGl2LmFkZC10b2RvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETyBDQVJEICovXFxyXFxuLnRvZG8tY2FyZHMsXFxyXFxuLnByb2plY3QtY2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkLFxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGNhbGMoMS4ycmVtICsgMjBweCkgNnJlbSAyZnIgMWZyIDFmciAvIHJlcGVhdCgyLCAxZnIpO1xcclxcblxcclxcbiAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogY2FsYygxLjJyZW0gKyAyMHB4KSA2cmVtIDZyZW0gMmZyIC8gcmVwZWF0KDIsIDFmcik7O1xcclxcblxcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1jYXJkOmhvdmVyLFxcclxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4qLFxcclxcbi5wcm9qZWN0LWNhcmQ+KiB7XFxyXFxuICAgIC8qcG9zaXRpb24gb2YgYWxsIGNlbGxzIGJhciB0aGUgYm90dG9tIGNlbGwgaXMgdG8gc3BhbiAyIGdyaWQgdHJhY2tzKi9cXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgc3BhbjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi50aXRsZSxcXHJcXG4ucHJvamVjdC1jYXJkPi50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMge1xcclxcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsXFxyXFxuLnRvZG8tY2FyZD4uZGVzY3JpcHRpb24sXFxyXFxuLnByb2plY3QtY2FyZD4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4uY2hlY2tsaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmQ+LmNoZWNrbGlzdD4uY2hlY2tsaXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciA0ZnI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5zdW1tYXJ5IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5wcm9qZWN0LWluZm8ge1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi5wcm9qZWN0LWluZm8+c3BhbjpmaXJzdC1jaGlsZCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbD5kaXY+c3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZD4uYm90dG9tLWNlbGwsXFxyXFxuLnRvZG8tY2FyZD4uYm90dG9tLWNlbGwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbD5kaXY6Zmlyc3QtY2hpbGQsXFxyXFxuLnRvZG8tY2FyZD4uYm90dG9tLWNlbGw+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUICovXFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVkaXRvci1idXR0b24tcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLzFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT09MIFRJUCAqL1xcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0yKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uOmhvdmVyIC50b29sdGlwLFxcclxcbi5ub3Rlczpob3ZlciAudG9vbHRpcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb246Zm9jdXMgLnRvb2x0aXAsXFxyXFxuLm5vdGVzOmZvY3VzIC50b29sdGlwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUwgKi9cXHJcXG5cXHJcXG4ubW9kYWwtYWN0aXZlIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0LnNlY3Rpb24taW5wdXQsXFxyXFxuLnNlY3Rpb24taW5wdXQsXFxyXFxuLmNvbnRlbnQtYnV0dG9uLFxcclxcbi5jaGVja2xpc3Qtc2VjdGlvbixcXHJcXG4uY2hlY2tsaXN0LXRleHQsXFxyXFxuI21vZGFsLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtd3JhcHBlciAuY29udGVudC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tbGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkKS8zKTtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC13cmFwcGVyIHtcXHJcXG4gICAgLS10b3Atb2Zmc2V0OiAzLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWZvcm0ge1xcclxcbiAgICAtLW1hcmdpbi10b3A6Y2FsYyh2YXIoLS10b3Atb2Zmc2V0KSArIDEwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjY1cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3Atb2Zmc2V0KSAtIHZhcigtLW1hcmdpbi10b3ApKTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLW1hcmdpbi10b3ApO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLnR3by1jZWxsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNkZXNjLWZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uPnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWxhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0wLjdlbTtcXHJcXG4gICAgbGVmdDogMS41ZW07XFxyXFxuXFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtMik7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwLjA1ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWlucHV0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC44ZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3Qtc2VjdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTsgKi9cXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMS4yZW0gMWVtIDFlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICAvKiBtYXJnaW46IDEycHggMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LW5ldy1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgNmZyIDFmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1zZWN0aW9uPi5jaGVja2xpc3QtaXRlbT4uc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtdGV4dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgI21vZGFsLWZvcm0ge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2hlY2tsaXN0LXNlY3Rpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tcGxldGUtZmllbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxyXFxuICAgIC5oZWFkZXItYm9keSAubWVudS1idXR0b24ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBISURERU4gKi9cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVESUEgUVVFUklFUyAqL1xcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLm1haW4+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5tYWluPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAubWFpbj5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjU1cHgpIHtcXHJcXG4gICAgLmJvZHkge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNhcmRzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNhcmQsXFxyXFxuICAgIC5wcm9qZWN0LWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7O0lBRXJCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiw0REFBZ0Q7SUFDaEQsNERBQTJDOztJQUUzQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYO3NEQUNrRDtBQUN0RDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHVCQUF1Qjs7SUFFdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQiw0REFBaUQ7SUFDakQsNERBQStDO0FBQ25EOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQXdEO0FBQzVEOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0Qixh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QUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLGFBQWE7QUFDakI7O0FBRUEsa0JBQWtCOzs7O0FBSWxCO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBOztRQUVJLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1tYXJnaW4tbWFpbjogMTAwcHg7XFxyXFxuICAgIC0tYm9yZGVyLXJhZDogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB0O1xcclxcbiAgICBmb250LWZhbWlseTogb3BlbnNhbnM7XFxyXFxuXFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMTogI2Y0ZjlmOTtcXHJcXG4gICAgLS10aGVtZS1jb2xvci0yOiAjZTQ0MjMyO1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTM6ICNkM2QzZDM7XFxyXFxuICAgIC0tdGhlbWUtYWNjZW50OiAjZmNhMTk5O1xcclxcblxcclxcbiAgICAtLXRoZW1lLXRleHQtMTogYmxhY2s7XFxyXFxuICAgIC0tdGhlbWUtdGV4dC0yOiB3aGl0ZTtcXHJcXG4gICAgLS10aGVtZS1idXJnZXItaWNvbjogdXJsKCcuLi9pbWcvbWVudS1kYXJrLnBuZycpO1xcclxcbiAgICAtLXRoZW1lLWNoYW5nZS1pY29uOiB1cmwoJy4uL2ltZy9tb29uLnBuZycpO1xcclxcblxcclxcbiAgICAtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQ6IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCksXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayB7XFxyXFxuICAgIC0tdGhlbWUtY29sb3ItMTogIzI2MWMyYztcXHJcXG4gICAgLS10aGVtZS1jb2xvci0yOiAjM2UyYzQxO1xcclxcbiAgICAtLXRoZW1lLWNvbG9yLTM6ICM1YzUyN2Y7XFxyXFxuICAgIC0tdGhlbWUtYWNjZW50OiAjNmU4NWIyO1xcclxcblxcclxcbiAgICAtLXRoZW1lLXRleHQtMTogd2hpdGU7XFxyXFxuICAgIC0tdGhlbWUtdGV4dC0yOiBibGFjaztcXHJcXG4gICAgLS10aGVtZS1idXJnZXItaWNvbjogdXJsKCcuLi9pbWcvbWVudS1saWdodC5wbmcnKTtcXHJcXG4gICAgLS10aGVtZS1jaGFuZ2UtaWNvbjogdXJsKCcuLi9pbWcvc3VuV2hpdGUucG5nJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogYWxmYTtcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL0FsZmFTbGFiT25lLVJlZ3VsYXIudHRmJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogYnVuZ2VlO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvQnVuZ2VlU2hhZGUtUmVndWxhci50dGYnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBvcGVuc2FucztcXHJcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL09wZW5TYW5zLVZhcmlhYmxlRm9udF93ZHRoLHdnaHQudHRmJyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICAvKiBodG1sIGJvZHkgZWxlbWVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTEpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgICAvKiBtYWluIGNvbnRhaW5lciBmb3IgY29udGVudCAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICAvKiBoZWFkZXIgY29udGFpbmVyICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItdGl0bGUge1xcclxcbiAgICAvKiBoZWFkZXIgbG9nbyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBidW5nZWU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLXRpdGxlPnNwYW4ge1xcclxcbiAgICAvKiBoZWFkZXIgbG9nbyBkaXYgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1ib2R5IHtcXHJcXG4gICAgLyogQ29udGFpbmVyIGZvciBoZWFkZXIgYnVyZ2VyIGJ1dHRvbiBhbmQgbmF2aWdhdGlvbiBidXR0b25zICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24sXFxyXFxuLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIC8qIGhlYWRlciBidXR0b25zIC0gdG9wIG1lbnUsIGFuZCBidXJnZXIgbWVudSAqL1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMnB4IDVweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLXRoZW1lLXRleHQtMik7XFxyXFxuICAgIG91dGxpbmU6IHZhcigtLXRoZW1lLXRleHQtMikgc29saWQgMXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIHZpc2liaWxpdHkgMHM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1leHBhbmRpbmctYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDAuNXMgZWFzZS1pbi1vdXQsIGhlaWdodCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWJvZHk+Lm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2PnVsPmxpLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbiB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1ib2R5Pi5tZW51LWV4cGFuZGluZy1idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXY+dWw+bGkubWVudS1leHBhbmRpbmctYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGhlaWdodDphdXRvO1xcclxcbiAgICBtYXJnaW46IDVweCAwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGFtYnVyZ2VyIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tdGhlbWUtYnVyZ2VyLWljb24pO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXI6IDBweFxcclxcbiAgICAgICAgLyogc29saWQgdmFyKC0tYmctY29sb3ItMSkqL1xcclxcbiAgICA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwcHggMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uaGFtYnVyZ2VyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxuXFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZT5kaXYge1xcclxcbiAgICB3aWR0aDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMHB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS10aGVtZS1jaGFuZ2UtaWNvbik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoLjYxLCAtMC4zNywgLjU0LCAxLjc4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS10aGVtZT5kaXY6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRFTlQgKi9cXHJcXG5cXHJcXG4ubWFpbj5kaXYge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgLS1jb250ZW50LXBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdGhlbWUtdHJhbnNpdGlvbi1zcGVlZCksXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpLFxcclxcbiAgICAgICAgdHJhbnNmb3JtIHZhcigtLXRoZW1lLXRyYW5zaXRpb24tc3BlZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWFjY2VudCk7XFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcblxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIC8qIHRvcDogc2V0IGluIGRvbS5qcyAqL1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHJcXG4gICAgLypcXHJcXG4gICAgTmF2IGlzIGhpZGRlbiB1cG9uIGxvYWRpbmcgYW5kIGRvbS5qcyByZW1vdmVzIC5oaWRkZW4gY2xhc3NcXHJcXG4gICAgYWZ0ZXIgMjAwbXMgKGNvcnJlc3BvbmRpbmcgdG8gdGhlIHRyYW5zaXRpb24gdGltZSkuIHRoaXMgc3RvcHNcXHJcXG4gICAgdGhlIG5hdiB0cmFuc2Zvcm1pbmcgdG8gc2NhbGUoMCkgYWZ0ZXIgbG9hZGluZywgd2hpY2ggc2hvd3NcXHJcXG4gICAgdGhlIG5hdiBicmllZmx5IC0gYml0IG9mIGEgaGFjaz8hXFxyXFxuICAgICovXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1vcGVuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdj51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEFERCBUT0RPICovXFxyXFxuXFxyXFxuZGl2LmFkZC10b2RvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVE9ETyBDQVJEICovXFxyXFxuLnRvZG8tY2FyZHMsXFxyXFxuLnByb2plY3QtY2FyZHMge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmRzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkLFxcclxcbi5wcm9qZWN0LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGNhbGMoMS4ycmVtICsgMjBweCkgNnJlbSAyZnIgMWZyIDFmciAvIHJlcGVhdCgyLCAxZnIpO1xcclxcblxcclxcbiAgICB3aWR0aDogOTAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogY2FsYygxLjJyZW0gKyAyMHB4KSA2cmVtIDZyZW0gMmZyIC8gcmVwZWF0KDIsIDFmcik7O1xcclxcblxcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1jYXJkOmhvdmVyLFxcclxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4qLFxcclxcbi5wcm9qZWN0LWNhcmQ+KiB7XFxyXFxuICAgIC8qcG9zaXRpb24gb2YgYWxsIGNlbGxzIGJhciB0aGUgYm90dG9tIGNlbGwgaXMgdG8gc3BhbiAyIGdyaWQgdHJhY2tzKi9cXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgc3BhbjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi50aXRsZSxcXHJcXG4ucHJvamVjdC1jYXJkPi50aXRsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMge1xcclxcbiAgICBtYXJnaW46IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90ZXMsXFxyXFxuLnRvZG8tY2FyZD4uZGVzY3JpcHRpb24sXFxyXFxuLnByb2plY3QtY2FyZD4uZGVzY3JpcHRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2FyZD4uY2hlY2tsaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNhcmQ+LmNoZWNrbGlzdD4uY2hlY2tsaXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciA0ZnI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5zdW1tYXJ5IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbCxcXHJcXG4udG9kby1jYXJkPi5wcm9qZWN0LWluZm8ge1xcclxcbiAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jYXJkPi5wcm9qZWN0LWluZm8+c3BhbjpmaXJzdC1jaGlsZCxcXHJcXG4udG9kby1jYXJkPi5ib3R0b20tY2VsbD5kaXY+c3BhbjpudGgtY2hpbGQoMSkge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZD4uYm90dG9tLWNlbGwsXFxyXFxuLnRvZG8tY2FyZD4uYm90dG9tLWNlbGwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcclxcbn1cXHJcXG4ucHJvamVjdC1jYXJkPi5ib3R0b20tY2VsbD5kaXY6Zmlyc3QtY2hpbGQsXFxyXFxuLnRvZG8tY2FyZD4uYm90dG9tLWNlbGw+ZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQUk9KRUNUICovXFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWVkaXRvci1idXR0b24tcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLzFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUT09MIFRJUCAqL1xcclxcblxcclxcbi50b29sdGlwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS10ZXh0LTEpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0yKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uOmhvdmVyIC50b29sdGlwLFxcclxcbi5ub3Rlczpob3ZlciAudG9vbHRpcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb246Zm9jdXMgLnRvb2x0aXAsXFxyXFxuLm5vdGVzOmZvY3VzIC50b29sdGlwIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUwgKi9cXHJcXG5cXHJcXG4ubW9kYWwtYWN0aXZlIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0LnNlY3Rpb24taW5wdXQsXFxyXFxuLnNlY3Rpb24taW5wdXQsXFxyXFxuLmNvbnRlbnQtYnV0dG9uLFxcclxcbi5jaGVja2xpc3Qtc2VjdGlvbixcXHJcXG4uY2hlY2tsaXN0LXRleHQsXFxyXFxuI21vZGFsLWZvcm0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRoZW1lLWNvbG9yLTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtd3JhcHBlciAuY29udGVudC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tbGFiZWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0xKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ib3JkZXItcmFkKS8zKTtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdmFyKC0tdGhlbWUtY29sb3ItMyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC13cmFwcGVyIHtcXHJcXG4gICAgLS10b3Atb2Zmc2V0OiAzLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsLWZvcm0ge1xcclxcbiAgICAtLW1hcmdpbi10b3A6Y2FsYyh2YXIoLS10b3Atb2Zmc2V0KSArIDEwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1pbi13aWR0aDogMjY1cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS10b3Atb2Zmc2V0KSAtIHZhcigtLW1hcmdpbi10b3ApKTtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IHZhcigtLW1hcmdpbi10b3ApO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLnR3by1jZWxsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNkZXNjLWZpZWxkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uPnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWxhYmVsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IC0wLjdlbTtcXHJcXG4gICAgbGVmdDogMS41ZW07XFxyXFxuXFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtMik7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwLjA1ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWlucHV0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtdGV4dC0xKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMC44ZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3Qtc2VjdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTsgKi9cXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMS4yZW0gMWVtIDFlbSAxZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgN2ZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgICAvKiBtYXJnaW46IDEycHggMHB4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tsaXN0LW5ldy1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyLyAxZnIgNmZyIDFmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxMnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1zZWN0aW9uPi5jaGVja2xpc3QtaXRlbT4uc2VjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtdGV4dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLXRleHQtMSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBib3JkZXI6IDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZCk7XFxyXFxuICAgIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci0yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXHJcXG4gICAgI21vZGFsLWZvcm0ge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY2hlY2tsaXN0LXNlY3Rpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29tcGxldGUtZmllbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XFxyXFxuICAgIC5oZWFkZXItYm9keSAubWVudS1idXR0b24ge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBISURERU4gKi9cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVESUEgUVVFUklFUyAqL1xcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLm1haW4+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIC5tYWluPmRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAubWFpbj5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjU1cHgpIHtcXHJcXG4gICAgLmJvZHkge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNhcmRzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50b2RvLWNhcmQsXFxyXFxuICAgIC5wcm9qZWN0LWNhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDk1JTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNhcmRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0aXRsZVxcXCI+eDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcInRvb2x0aXBcXFwiPkRlc2NyaXB0aW9uPC9zcGFuPng8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibm90ZXNcXFwiPjxzcGFuIGNsYXNzPVxcXCJ0b29sdGlwXFxcIj5Ob3Rlczwvc3Bhbj54PC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInN1bW1hcnlcXFwiPnggVG9kbygncyk8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicHJvamVjdFxcXCI+XFxyXFxuICAgIDxmb3JtIGlkPVxcXCJwcm9qZWN0LWZvcm1cXFwiPlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+VGl0bGU8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcInNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB0aXRsZVxcXCIgaWQ9XFxcInRpdGxlLWZpZWxkXFxcIj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+RGVzY3JpcHRpb248L2Rpdj5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcInNlY3Rpb24taW5wdXRcXFwiIGNvbHM9XFxcIjQwXFxcIiByb3dzPVxcXCI1XFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgZGVzY3JpcHRpb25cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJkZXNjLWZpZWxkXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5Ob3RlczwvZGl2PlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgY29scz1cXFwiNDBcXFwiIHJvd3M9XFxcIjVcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcIm5vdGVzLWZpZWxkXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5Ub0RvczwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRvZG8tY2FyZHNcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWVkaXRvci1idXR0b24tcGFuZWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY29udGVudC1idXR0b25cXFwiIGlkPVxcXCJzYXZlLWJ1dHRvblxcXCI+U2F2ZSBQcm9qZWN0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCIgaWQ9XFxcImRlbGV0ZS1idXR0b25cXFwiPkRlbGV0ZSBQcm9qZWN0PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtZWRpdG9yLWJ1dHRvbi1wYW5lbFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCIgaWQ9XFxcImFkZC1idXR0b25cXFwiPkFkZCBOZXcgVG9EbzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY29udGVudC1idXR0b25cXFwiIGlkPVxcXCJhZGQtZXhpc3RpbmctYnV0dG9uXFxcIj5BZGQgRXhpc3RpbmcgVG9EbzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY29udGVudC1idXR0b25cXFwiIGlkPVxcXCJyZW1vdmUtZXhpc3RpbmctYnV0dG9uXFxcIj5SZW1vdmUgVG9EbyBmcm9tIFByb2plY3Q8L2J1dHRvbj5cXHJcXG5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XFxyXFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRvZG8tY2FyZFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpdGxlXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2xpc3RcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3VtbWFyeVxcXCI+IGNoZWNrbGlzdCBpdGVtczwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbmZvXFxcIj48c3Bhbj5Qcm9qZWN0OiA8L3NwYW4+PHNwYW4+PC9zcGFuPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib3R0b20tY2VsbFxcXCI+XFxyXFxuICAgICAgICA8ZGl2PjxzcGFuPkR1ZTogPC9zcGFuPjxzcGFuPjAxLzAyLzE5MDE8L3NwYW4+PC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PjxzcGFuPlByaW9yaXR5OiA8L3NwYW4+PHNwYW4+MTwvc3Bhbj48L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsLXdyYXBwZXJcXFwiPlxcclxcbiAgICA8Zm9ybSBpZD1cXFwibW9kYWwtZm9ybVxcXCI+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5UaXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHRpdGxlXFxcIiBpZD1cXFwidGl0bGUtZmllbGRcXFwiPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5EZXNjcmlwdGlvbjwvZGl2PlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwic2VjdGlvbi1pbnB1dFxcXCIgY29scz1cXFwiNDBcXFwiIHJvd3M9XFxcIjVcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImRlc2MtZmllbGRcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPk5vdGVzPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJzZWN0aW9uLWlucHV0XFxcIiBjb2xzPVxcXCI0MFxcXCIgcm93cz1cXFwiNVxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIG5vdGVzXFxcIlxcclxcbiAgICAgICAgICAgICAgICBpZD1cXFwibm90ZXMtZmllbGRcXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24gdHdvLWNlbGxcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5EdWUgRGF0ZTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcInNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImRhdGVcXFwiIGlkPVxcXCJkdWUtZGF0ZS1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPlByaW9yaXR5PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcInNlY3Rpb24taW5wdXRcXFwiIGlkPVxcXCJwcmlvcml0eS1maWVsZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIxXFxcIj4xPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIyXFxcIj4yPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCIzXFxcIj4zPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCI0XFxcIj40PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCI1XFxcIj41PC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2xpc3Qtc2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+Q2hlY2tsaXN0IC0gTGlzdDwvZGl2PlxcclxcblxcclxcblxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGVja2xpc3Qtc2VjdGlvbiBuZXctaXRlbVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+Q2hlY2tsaXN0IC0gTmV3PC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tsaXN0LW5ldy1pdGVtXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzZWN0aW9uLWlucHV0IGNvbXBsZXRlLWZpZWxkXFxcIiBuYW1lPVxcXCJjb21wbGV0ZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcInRydWVcXFwiPkNvbXBsZXRlPC9vcHRpb24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiZmFsc2VcXFwiPk5vdCBDb21wbGV0ZTwvb3B0aW9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uLWxhYmVsXFxcIj5Db21wbGV0ZT88L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjaGVja2xpc3QtdGV4dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIm1heGltdW0gMjU1IGNoYXJhY3RlcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbi1sYWJlbFxcXCI+Q2hlY2tsaXN0IGl0ZW0gdGV4dDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJhZGQtdG9kby1idXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCI+QWRkPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwic2F2ZS1idXR0b25cXFwiIGNsYXNzPVxcXCJjb250ZW50LWJ1dHRvblxcXCI+U2F2ZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGlkPVxcXCJkZWxldGUtYnV0dG9uXFxcIiBjbGFzcz1cXFwiY29udGVudC1idXR0b25cXFwiPkRlbGV0ZTwvYnV0dG9uPlxcclxcbiAgICA8L2Zvcm0+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrbGlzdC1saXN0LWl0ZW1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uXFxcIj5cXHJcXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcInNlY3Rpb24taW5wdXQgY29tcGxldGUtZmllbGRcXFwiIG5hbWU9XFxcImNvbXBsZXRlZFxcXCI+XFxyXFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwidHJ1ZVxcXCI+Q29tcGxldGU8L29wdGlvbj5cXHJcXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJmYWxzZVxcXCI+Tm90IENvbXBsZXRlPC9vcHRpb24+XFxyXFxuICAgICAgICA8L3NlbGVjdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPkNvbXBsZXRlPzwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvblxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNoZWNrbGlzdC10ZXh0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb24tbGFiZWxcXFwiPkNoZWNrbGlzdCBpdGVtIHRleHQ8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvRG8uanMnO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgI3VpZDtcclxuXHJcbiAgICAjdGl0bGU7XHJcbiAgICAjZGVzY3JpcHRpb247XHJcbiAgICAjbm90ZXM7XHJcbiAgICAjdG9kb3M7XHJcblxyXG4gICAgc3RhdGljICN1aWRTZWVkID0gMDtcclxuICAgIHN0YXRpYyB1cGRhdGVVaWRTZWVkKG5ld1NlZWQpIHtcclxuICAgICAgICBQcm9qZWN0LiN1aWRTZWVkID0gbmV3U2VlZDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRVaWRTZWVkKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9qZWN0LiN1aWRTZWVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdCBhIHByb2plY3Qgb2JqZWN0LiBJZiBVSUQgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgYSBuZXcgdWlkIHdpbGwgYmUgYXNzaWduZWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBub3RlcyBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyIHwgdW5kZWZpbmVkfSB1aWQgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgbm90ZXMsIHVpZCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZSB8fCAnTmV3IFByb2plY3QnO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCAnTmV3IFByb2plY3QgZGVzY3JpcHRpb24nO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcyB8IFwiXCI7XHJcbiAgICAgICAgdGhpcy4jdG9kb3MgPSBbXTtcclxuICAgICAgICB0aGlzLiN1aWQgPSB1aWQgfHwgKytQcm9qZWN0LiN1aWRTZWVkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7IHRoaXMuI3RpdGxlID0gbmV3VGl0bGUgfTtcclxuICAgIGdldCB0aXRsZSgpIHsgcmV0dXJuIHRoaXMuI3RpdGxlIH07XHJcblxyXG4gICAgc2V0IHRvZG9zKHRvRG9BcnJheSkgeyB0aGlzLiN0b2RvcyA9IHRvRG9BcnJheSB9O1xyXG4gICAgZ2V0IHRvZG9zKCkgeyByZXR1cm4gdGhpcy4jdG9kb3MgfTtcclxuXHJcbiAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHsgdGhpcy4jZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiB9O1xyXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy4jZGVzY3JpcHRpb24gfTtcclxuXHJcbiAgICBzZXQgbm90ZXMobmV3Tm90ZXMpIHsgdGhpcy4jbm90ZXMgPSBuZXdOb3RlcyB9O1xyXG4gICAgZ2V0IG5vdGVzKCkgeyByZXR1cm4gdGhpcy4jbm90ZXMgfTtcclxuXHJcbiAgICBnZXQgdWlkKCkgeyByZXR1cm4gdGhpcy4jdWlkIH07XHJcblxyXG4gICAgYWRkVG9kbyh0b0RvT2JqKSB7XHJcbiAgICAgICAgdGhpcy4jdG9kb3MucHVzaCh0b0RvT2JqKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUb2RvKHRvRG9PYmopIHtcclxuICAgICAgICB0aGlzLiN0b2Rvcy5zcGxpY2UodGhpcy4jdG9kb3MuZmluZEluZGV4KChvKSA9PiBvLnVpZCA9PSB0b0RvT2JqLnVpZCksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGxldCBzdHIgPSBgRGVzYzogJHt0aGlzLiNkZXNjcmlwdGlvbn1cXG5cXG5Ob3RlczogJHt0aGlzLiNub3Rlc31cXG5cXG5Ub0RvczpgO1xyXG4gICAgICAgIGZvciAobGV0IHRvZG8gb2YgdGhpcy4jdG9kb3MpIHtcclxuICAgICAgICAgICAgc3RyICs9IFwiXFxuXCIgKyB0b2RvLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgdG9KU09OKCkge1xyXG4gICAgICAgIGxldCB0b0RvVWlkcyA9IHRoaXMuI3RvZG9zLm1hcCgoZWxlbWVudCkgPT4gZWxlbWVudC51aWQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RvZG8gdWlkcyBpbiBwcm9qZWN0Jyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0b0RvVWlkcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuI3RpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy4jZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG5vdGVzOiB0aGlzLiNub3RlcyxcclxuICAgICAgICAgICAgdG9Eb1VpZHM6IHRvRG9VaWRzLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdCB9OyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcbmNvbnN0IFdISVRFU1BBQ0VfT05MWV9SRUdFWCA9IC9eXFxzKyQvO1xyXG5cclxuLyoqXHJcbiAqIFRvRG8gb2JqZWN0IGNsYXNzXHJcbiAqL1xyXG5jbGFzcyBUb0RvIHtcclxuXHJcbiAgICAvLyBwcml2YXRlIGZpZWxkc1xyXG4gICAgI3RpdGxlO1xyXG4gICAgI2Rlc2NyaXB0aW9uO1xyXG4gICAgI2R1ZURhdGU7XHJcbiAgICAjcHJpb3JpdHk7XHJcbiAgICAjbm90ZXM7XHJcbiAgICAjY2hlY2tsaXN0O1xyXG4gICAgI3VpZDtcclxuXHJcbiAgICBzdGF0aWMgI3VpZFNlZWQgPSAwO1xyXG5cclxuICAgIC8vIHN0YXRpYyBmaWVsZHNcclxuICAgIHN0YXRpYyBNSU5fUFJJT1JJVFkgPSAxO1xyXG4gICAgc3RhdGljIE1BWF9QUklPUklUWSA9IDU7XHJcbiAgICBzdGF0aWMgUFJJT1JJVElFUyA9IFsnQ3JpdGljYWwnLCAnSGlnaCcsICdNZWRpdW0nLCAnTG93JywgJ1VuaW1wb3J0YW50J107XHJcbiAgICBzdGF0aWMgTUFYX0NIRUNLTElTVF9URVhUX0xFTkdUSCA9IDI1NTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgY2xhc3MgZm9yIGFsbCBUb0RvIGNsYXNzZXMuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzY3JpcHRpb24gXHJcbiAgICAgKiBAcGFyYW0ge0RhdGV9IGR1ZURhdGUgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJpb3JpdHkgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcnx1bmRlZmluZWR9IHVpZCAgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCB1aWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUgfHwgJ05ldyB0YXNrJztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgJ05vIGRlc2NyaXB0aW9uIGFkZGVkJztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlIHx8IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5IHx8IFRvRG8uTUFYX1BSSU9SSVRZO1xyXG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcyB8fCBcIlwiO1xyXG4gICAgICAgIHRoaXMuI2NoZWNrbGlzdCA9IFtdOyAvLyBkaXJlY3RseSBzZXQgdG8gZW1wdHkgYXJyYXlcclxuICAgICAgICB0aGlzLiN1aWQgPSB1aWQgfHwgKytUb0RvLiN1aWRTZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVVaWRTZWVkKG5ld1NlZWQpIHtcclxuICAgICAgICBUb0RvLiN1aWRTZWVkID0gbmV3U2VlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0VWlkU2VlZCgpIHsgcmV0dXJuIFRvRG8uI3VpZFNlZWQgfTtcclxuXHJcbiAgICBnZXQgY2hlY2tsaXN0KCkgeyByZXR1cm4gdGhpcy4jY2hlY2tsaXN0IH07XHJcblxyXG4gICAgZ2V0IHVpZCgpIHsgcmV0dXJuIHRoaXMuI3VpZCB9O1xyXG5cclxuICAgIGdldCBub3RlcygpIHsgcmV0dXJuIHRoaXMuI25vdGVzIH07XHJcbiAgICBzZXQgbm90ZXMobmV3Tm90ZXMpIHsgdGhpcy4jbm90ZXMgPSBuZXdOb3RlcyB9O1xyXG5cclxuICAgIGdldCB0aXRsZSgpIHsgcmV0dXJuIHRoaXMuI3RpdGxlIH07XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUaXRsZSB0aGUgbmV3IHRpdGxlIHRvIHNldFxyXG4gICAgICogQHRocm93cyBFcnJvciBpZiBuZXdUaXRsZSBsZW5ndGggaXMgMCBvciBpcyBvbmx5IHdoaXRlc3BhY2VcclxuICAgICAqL1xyXG4gICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgaWYgKG5ld1RpdGxlLmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKCdFUlJPUjogVG9EbyB0aXRsZSBtYXkgbm90IGJlIGVtcHR5Jyk7XHJcbiAgICAgICAgaWYgKG5ld1RpdGxlLm1hdGNoKFdISVRFU1BBQ0VfT05MWV9SRUdFWCkpIHRocm93IG5ldyBFcnJvcignRVJST1I6IFRvRG8gdGl0bGUgbWF5IG5vdCBiZSBibGFuayAod2hpdGVzcGFjZSBvbmx5KScpO1xyXG4gICAgICAgIHRoaXMuI3RpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBkZXNjcmlwdGlvbigpIHsgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uIH07XHJcbiAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzYykgeyB0aGlzLiNkZXNjcmlwdGlvbiA9IG5ld0Rlc2MgfTtcclxuXHJcbiAgICBnZXQgZHVlRGF0ZSgpIHsgcmV0dXJuIHRoaXMuI2R1ZURhdGUgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtEYXRlfSBuZXdEdWVEYXRlIHRoZSBuZXcgZHVlIGRhdGUgdG8gc2V0XHJcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIG5ld0R1ZURhdGUgaXMgbm90IGEgRGF0ZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgc2V0IGR1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIGlmICghKG5ld0R1ZURhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZHVlIGRhdGUgbXVzdCBiZSBhIERhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgIH07XHJcblxyXG4gICAgZ2V0IHByaW9yaXR5KCkgeyByZXR1cm4gdGhpcy4jcHJpb3JpdHkgfTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXIgfW5ld1ByaW9yaXR5XHJcbiAgICAgKiBAdGhyb3dzIEVycm9yIGlmIG5ld1ByaW9yaXR5IGlzIGxlc3MgdGhhbiBUb0RvLk1JTl9QUklPUklUWSBvciBncmVhdGVyIHRoYW4gVG9Eby5NQVhfUFJJT1JJVFkuXHJcbiAgICAgKi9cclxuICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIGlmIChuZXdQcmlvcml0eSA8IFRvRG8uTUlOX1BSSU9SSVRZIHx8IG5ld1ByaW9yaXR5ID4gVG9Eby5NQVhfUFJJT1JJVFkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcmlvcml0eSBtdXN0IGJlICR7VG9Eby5NSU5fUFJJT1JJVFl9IHRvICR7VG9Eby5NQVhfUFJJT1JJVFl9IChpbmNsdXNpdmUpLCBidXQgJHtuZXdQcmlvcml0eX0gd2FzIHNwZWNpZmllZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgYSBuZXcgY2hlY2tsaXN0IGl0ZW0uIGVhY2ggaXRlbSBpcyBhIDIgbGVuZ3RoIGFycmF5IGNvbnRhaW5pbmcgYSBib29sZWFuIGF0XHJcbiAgICAgKiBpbmRleCAwIGFuZCBhIHN0cmluZyBhdCBpbmRleCAxLlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZSBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFxyXG4gICAgICogQHJldHVybiB0cnVlIGlmIGFkZGVkIHN1Y2Nlc3NmdWxseSwgZmFsc2UgaWYgbm90LiBcclxuICAgICAqL1xyXG4gICAgYWRkVG9DaGVja0xpc3QoY29tcGxldGUsIHRleHQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbXBsZXRlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb21wbGV0ZSBwYXJhbWV0ZXIgaW52YWxpZCB0eXBlOiAnICsgdHlwZW9mIGNvbXBsZXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RleHQgcGFyYW1ldGVyIGludmFsaWQgdHlwZTogJyArIHR5cGVvZiBjb21wbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCB8fCB0ZXh0Lm1hdGNoKFdISVRFU1BBQ0VfT05MWV9SRUdFWCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaGVja2xpc3QgdGV4dCBjYW5ub3QgYmUgZW1wdHkhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA+IFRvRG8uTUFYX0NIRUNLTElTVF9URVhUX0xFTkdUSCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENoZWNrbGlzdCB0ZXh0IGNhbm5vdCBiZSBsb25nZXIgdGhhbiAke1RvRG8uTUFYX0NIRUNLTElTVF9URVhUX0xFTkdUSH0gY2hhcmFjdGVyc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiNjaGVja2xpc3QucHVzaChbY29tcGxldGUsIHRleHRdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYSBDaGVja2xpc3QgaXRlbSBpZiBpdHMgdGV4dCBpcyBlcXVhbCB0byBwYXJhbWV0ZXIgdGV4dFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgXHJcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LCBmYWxzZSBpZiBub3QuXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZUZyb21DaGVja0xpc3QodGV4dCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jY2hlY2tsaXN0Lmxlbmd0aCAmJiAhcmVtb3ZlZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiNjaGVja2xpc3RbaV1bMV0gPT09IHRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuI2NoZWNrbGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDaGVja2xpc3QoKSB7XHJcbiAgICAgICAgdGhpcy4jY2hlY2tsaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBUaXRsZToke3RoaXMuI3RpdGxlfVxcbkRlc2NyaXB0aW9uOiR7dGhpcy4jZGVzY3JpcHRpb259XFxuRHVlLURhdGU6JHt0aGlzLiNkdWVEYXRlfVxcblByaW9yaXR5OiR7dGhpcy4jcHJpb3JpdHl9XFxudWlkOiR7dGhpcy4jdWlkfWA7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCB0byBzZXJpYWxpemUgdGhpcyBUb0RvIG9iamVjdCBpbnRvIEpTT05cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICB0b0pTT04oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuI3RpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy4jZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG5vdGVzOiB0aGlzLiNub3RlcyxcclxuICAgICAgICAgICAgZHVlRGF0ZTogdGhpcy4jZHVlRGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHRoaXMuI3ByaW9yaXR5LFxyXG4gICAgICAgICAgICBjaGVja2xpc3Q6IHRoaXMuI2NoZWNrbGlzdCxcclxuICAgICAgICAgICAgdWlkOiB0aGlzLiN1aWRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgVG9EbyB9OyIsIi8vIGpzIG9iamVjdHNcclxuaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4vY2xhc3Nlcy9Ub0RvLmpzJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vY2xhc3Nlcy9Qcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgc2F2ZSwgbG9hZCwgZGVsZXRlRnJvbVN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UuanMnO1xyXG5cclxuLy8gaHRtbCB0ZW1wbGF0ZXNcclxuaW1wb3J0IHRlbXBsYXRlTW9kYWxUb0RvX2NvbnRhaW5lciBmcm9tICcuL2h0bWwtdGVtcGxhdGVzL3RvRG9Nb2RhbC5odG1sJztcclxuaW1wb3J0IHRlbXBsYXRlTW9kYWxUb0RvX2xpc3QgZnJvbSAnLi9odG1sLXRlbXBsYXRlcy90b0RvTW9kYWxfbGlzdC5odG1sJztcclxuaW1wb3J0IHRlbXBsYXRlQ2FyZFRvRG8gZnJvbSAnLi9odG1sLXRlbXBsYXRlcy90b0RvQ2FyZC5odG1sJztcclxuaW1wb3J0IHRlbXBsYXRlQ2FyZFByb2plY3QgZnJvbSAnLi9odG1sLXRlbXBsYXRlcy9wcm9qZWN0Q2FyZC5odG1sJztcclxuaW1wb3J0IHRlbXBsYXRlUHJvamVjdEVkaXRvciBmcm9tICcuL2h0bWwtdGVtcGxhdGVzL3Byb2plY3RFZGl0b3IuaHRtbCc7XHJcblxyXG4vLyBub2RlIG1vZHVsZXNcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuLy8gZWxlbWVudHMgb2JqZWN0XHJcbmxldCBlbGVtZW50cyA9IHtcclxuICAgIG1lbnVCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oYW1idXJnZXInKSxcclxuICAgIHRoZW1lQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXRoZW1lJyksXHJcbiAgICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSxcclxuICAgIG5hdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLFxyXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKSxcclxuICAgIHNob3dBbGxUb2Rvc0J0bnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tc2hvdy10b2RvcycpLFxyXG4gICAgc2hvd0FsbFByb2plY3RzQnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1zaG93LXByb2plY3RzJyksXHJcbiAgICBtZW51RXhwYW5kaW5nQnRuczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtZXhwYW5kaW5nLWJ1dHRvbicpLFxyXG4gICAgbWVudUFkZFRvRG9CdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1leHBhbmRpbmctYnV0dG9uLmFkZC10b2RvLWJ1dHRvbicpLFxyXG4gICAgbWVudUFkZFByb2plY3RCdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1leHBhbmRpbmctYnV0dG9uLmFkZC1wcm9qZWN0LWJ1dHRvbicpLFxyXG4gICAgbWVudUFkZFRvRG9Ub1Byb2plY3RCdG5zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1leHBhbmRpbmctYnV0dG9uLmFkZC10b2RvLXRvLXByb2plY3QtYnV0dG9uJyksXHJcbn07XHJcblxyXG4vLyBpbml0aWFsaXNlIERPTVxyXG4oZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcclxuXHJcbiAgICBzZXRNZW51UG9zaXRpb24oKTtcclxuXHJcbiAgICBpbml0QnV0dG9uRXZlbnRzKFtlbGVtZW50cy50aGVtZUJ0bl0sICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpKTtcclxuICAgIGluaXRCdXR0b25FdmVudHMoW2VsZW1lbnRzLm1lbnVCdG5dLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2hvd1NlbGVjdG9yID0gJ25hdi1vcGVuJztcclxuICAgICAgICBpZiAoZWxlbWVudHMubmF2LmNsYXNzTGlzdC5jb250YWlucyhzaG93U2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRzLm5hdi5jbGFzc0xpc3QucmVtb3ZlKHNob3dTZWxlY3Rvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudHMubmF2LmNsYXNzTGlzdC5hZGQoc2hvd1NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGluaXRCdXR0b25FdmVudHMoZWxlbWVudHMuc2hvd0FsbFRvZG9zQnRucywgKCkgPT4gcmVuZGVyX2FsbFRvZG9zKCdBbGwgVG9Eb3MnKSk7XHJcbiAgICBpbml0QnV0dG9uRXZlbnRzKGVsZW1lbnRzLnNob3dBbGxQcm9qZWN0c0J0bnMsIHJlbmRlcl9hbGxQcm9qZWN0cyk7XHJcbiAgICBpbml0QnV0dG9uRXZlbnRzKGVsZW1lbnRzLm1lbnVBZGRUb0RvQnRucywgKCkgPT4gcmVuZGVyX3RvRG9Nb2RhbChudWxsLCAoKSA9PiByZW5kZXJfYWxsVG9kb3MoJ0FsbCBUb2RvcycpKSk7XHJcbiAgICBpbml0QnV0dG9uRXZlbnRzKGVsZW1lbnRzLm1lbnVBZGRQcm9qZWN0QnRucywgKCkgPT4gcmVuZGVyX3Byb2plY3QobnVsbCkpO1xyXG5cclxuICAgIHJlbmRlcl93ZWxjb21lKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEJ1dHRvbkV2ZW50cyhidG5zLCBldmVudEZ1bmMpIHtcclxuICAgICAgICBmb3IgKGxldCBidG4gb2YgYnRucykge1xyXG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudEZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRNZW51UG9zaXRpb24oKSB7XHJcbiAgICAgICAgZWxlbWVudHMubmF2LnN0eWxlWyd0b3AnXSA9IChlbGVtZW50cy5oZWFkZXIub2Zmc2V0SGVpZ2h0IC0gMikgKyAncHgnO1xyXG4gICAgICAgIGVsZW1lbnRzLm5hdi5zdHlsZVsnbGVmdCddID0gJzEwcHgnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5uYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogUmVuZGVyIHRoZSB3ZWxjb21lIG1lc3NhZ2UgdGhhdCBpcyBmaXJzdCBzaG93biB0byB1c2VyIG9uIHBhZ2UgbG9hZC5cclxuICovXHJcbmZ1bmN0aW9uIHJlbmRlcl93ZWxjb21lKCkge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBzZXRDb250ZW50VGl0bGUoJ1dlbGNvbWUgdG8gVG9vRG9vIScpO1xyXG4gICAgbGV0IHdlbGNvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdlbGNvbWVEaXYudGV4dENvbnRlbnQgPSBcIldlbGNvbWUhXCI7XHJcbiAgICBlbGVtZW50cy5jb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWVEaXYpO1xyXG59XHJcblxyXG4vKipcclxuICogY2xlYXIgYWxsIGNoaWxkIG5vZGVzIGZyb20gdGhlICdjb250ZW50JyBkaXYgLSByZXNldHRpbmcgaXQgdG8gZW1wdHkuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gZWxlbWVudHMuY29udGVudC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgZWxlbWVudHMuY29udGVudC5yZW1vdmVDaGlsZChlbGVtZW50cy5jb250ZW50LmNoaWxkTm9kZXNbaV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTG9hZCB1cCBhIGh0bWwgdGVtcGxhdGUgZnJvbSBhIGZpbGUgYW5kIHBhcnNlIGludG8gYW4gRWxlbWVudCBvYmplY3RcclxuICogQHBhcmFtIHtIVE1MVGVtcGxhdGVFbGVtZW50fSBodG1sVGVtcGxhdGUgXHJcbiAqIEByZXR1cm5zIGEgSFRNTCBlbGVtZW50IG9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVUZW1wbGF0ZShodG1sVGVtcGxhdGUpIHtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGU7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsb3NlIGFueSBvcGVuIG1vZGFsc1xyXG4gKi9cclxuZnVuY3Rpb24gY2xvc2VNb2RhbEFjdGlvbigpIHtcclxuICAgIGxldCBtb2RhbFNlbGVjdG9yID0gJy5tb2RhbC13cmFwcGVyJztcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxTZWxlY3Rvcik7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbG9zZSBtb2RhbCBldmVudCBoYW5kbGVyXHJcbiAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IFxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNsb3NlRXZlbnQgXHJcbiAqL1xyXG5mdW5jdGlvbiBvbkNsb3NlTW9kYWwoZXZlbnQsIG9uQ2xvc2VFdmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcjbW9kYWwtZm9ybScpID09PSBudWxsKSB7XHJcbiAgICAgICAgY2xvc2VNb2RhbEFjdGlvbigpO1xyXG4gICAgICAgIGlmIChvbkNsb3NlRXZlbnQgIT09IHVuZGVmaW5lZCkgb25DbG9zZUV2ZW50KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmUgd2hpY2ggZXhwYW5kaW5nIG1lbnUgYnV0dG9ucyB0byBzaG93XHJcbiAqIEBwYXJhbSAge3N0cmluZ30gc2VsZWN0b3JzIC0gYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBjc3MgY2xhc3Mgc2VsZWN0b3JzIHRoYXQgZGV0ZXJtaW5lcyB3aGF0IGV4cGFuZGluZyBidXR0b25zIHRvIHNob3dcclxuICovXHJcbmZ1bmN0aW9uIGNvbmZpZ0V4cGFuZGluZ01lbnVCdG5zKC4uLnNlbGVjdG9ycykge1xyXG4gICAgZm9yIChsZXQgYnRuIG9mIGVsZW1lbnRzLm1lbnVFeHBhbmRpbmdCdG5zKSB7XHJcbiAgICAgICAgbGV0IG1ha2VBY3RpdmUgPSBzZWxlY3RvcnMucmVkdWNlKChzZWxlY3RvckZvdW5kLCBzZWxlY3RvcikgPT4geyBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3RvcikpIHJldHVybiB0cnVlOyBlbHNlIHJldHVybiBzZWxlY3RvckZvdW5kOyB9LCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKG1ha2VBY3RpdmUpIHsgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpOyB9XHJcbiAgICAgICAgZWxzZSB7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogU2V0IHRoZSB0aXRsZSBvZiB0aGUgXCIuY29udGVudC10aXRsZVwiIGRpdiB3aGljaCBzaXRzIGF0b3AgdGhlIFwiLmNvbnRlbnRcIiBkaXZzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3VGl0bGUgXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRDb250ZW50VGl0bGUobmV3VGl0bGUpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJykudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmRlciBhbGwgdG9kbyBvYmplY3RzIGludG8gdG9kbyBcImNhcmRzXCIgYW5kIHBsYWNlIGludG8gdGhlIFwiLmNvbnRlbnRcIiBkaXYuXHJcbiAqL1xyXG5mdW5jdGlvbiByZW5kZXJfYWxsVG9kb3ModGl0bGUsIG9uQ2xpY2tFdmVudCwgcHJlZGljYXRlKSB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIHNldENvbnRlbnRUaXRsZSh0aXRsZSk7XHJcbiAgICBjb25maWdFeHBhbmRpbmdNZW51QnRucygnYWRkLXRvZG8tYnV0dG9uJyk7XHJcbiAgICBsZXQgbG9hZGVkVG9kb3MgPSBsb2FkKCd0b2RvJyk7XHJcbiAgICBpZiAobG9hZGVkVG9kb3MubGVuZ3RoICE9IDApIHtcclxuICAgICAgICBlbGVtZW50cy5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRvRG9DYXJkcyhsb2FkZWRUb2RvcywgKCkgPT4gcmVuZGVyX2FsbFRvZG9zKHRpdGxlKSwgb25DbGlja0V2ZW50LCBwcmVkaWNhdGUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1zZy50ZXh0Q29udGVudCA9IFwiWW91IGRvbid0IGhhdmUgYW55IHRvIGRvJ3MgeWV0IVwiO1xyXG4gICAgICAgIGVsZW1lbnRzLmNvbnRlbnQuYXBwZW5kQ2hpbGQobXNnKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtudW1iZXJ9IHR1aWQgVG9EbyB1bmlxdWUgaWRlbnRpZmllclxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNsb3NlRXZlbnQgYSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBtb2RhbCBpcyBjbG9zZWRcclxuICogQHBhcmFtIHtudW1iZXJ9IHB1aWQgUHJvamVjdCB1bmlxdWUgaWRlbnRpZmllclxyXG4gKi9cclxuZnVuY3Rpb24gcmVuZGVyX3RvRG9Nb2RhbCh0dWlkLCBvbkNsb3NlRXZlbnQsIHB1aWQpIHtcclxuICAgIC8vIGVuc3VyZSBtb2RhbCBkb2Vzbid0IHJlbmRlciB0d2ljZVxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKSkgY2xvc2VNb2RhbEFjdGlvbigpO1xyXG4gICAgbGV0IHRvRG9PYmogPSAodHVpZCA9PT0gbnVsbCkgPyBuZXcgVG9EbygpIDogbG9hZCgndG9kbycsIHR1aWQpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRVaWQgPSB0b0RvT2JqLnVpZDtcclxuICAgIC8vIHNldHVwIG1vZGFsXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgbGV0IG1vZGFsID0gZ2VuZXJhdGVUZW1wbGF0ZSh0ZW1wbGF0ZU1vZGFsVG9Eb19jb250YWluZXIpO1xyXG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcignI3RpdGxlLWZpZWxkJykudmFsdWUgPSB0b0RvT2JqLnRpdGxlO1xyXG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcignI2Rlc2MtZmllbGQnKS52YWx1ZSA9IHRvRG9PYmouZGVzY3JpcHRpb247XHJcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjbm90ZXMtZmllbGQnKS52YWx1ZSA9IHRvRG9PYmoubm90ZXM7XHJcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUtZmllbGQnKS52YWx1ZSA9IGZvcm1hdCh0b0RvT2JqLmR1ZURhdGUsICd5eXl5LU1NLWRkJyk7XHJcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHktZmllbGQnKS52YWx1ZSA9IHRvRG9PYmoucHJpb3JpdHk7XHJcbiAgICByZW5kZXJDaGVja2xpc3Rfdmlldyh0b0RvT2JqKTtcclxuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kby1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG9uQWRkTmV3Q2hlY2tsaXN0SXRlbShldmVudCkpO1xyXG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcignI3NhdmUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvblNhdmUoY3VycmVudFVpZCkpO1xyXG4gICAgbW9kYWwucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRFTEVUSU5HXCIpO1xyXG4gICAgICAgIGRlbGV0ZUZyb21TdG9yYWdlKCd0b2RvJywgY3VycmVudFVpZCk7XHJcbiAgICAgICAgLy9vbkNsb3NlTW9kYWwoZXZlbnQsIG9uQ2xvc2VFdmVudCk7XHJcbiAgICAgICAgY2xvc2VNb2RhbEFjdGlvbigpO1xyXG4gICAgICAgIGlmIChvbkNsb3NlRXZlbnQpIG9uQ2xvc2VFdmVudCgpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBhcHBlbmQgbW9kYWwgdG8gYm9keVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIG9uQ2xvc2VNb2RhbChldmVudCwgb25DbG9zZUV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhFTFBFUiBGVU5DVElPTlNcclxuICAgIGZ1bmN0aW9uIHJlbmRlckNoZWNrbGlzdF92aWV3KHRvRG9PYmopIHtcclxuICAgICAgICBsZXQgY2hlY2tsaXN0ID0gdG9Eb09iai5jaGVja2xpc3Q7XHJcbiAgICAgICAgbGV0IGNoZWNrbGlzdFNlY3Rpb24gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LXNlY3Rpb24nKTtcclxuICAgICAgICBpZiAoY2hlY2tsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2xpc3RJdGVtID0gZ2VuZXJhdGVUZW1wbGF0ZSh0ZW1wbGF0ZU1vZGFsVG9Eb19saXN0KTtcclxuICAgICAgICAgICAgICAgIGNoZWNrbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlLWZpZWxkJykudmFsdWUgPSBjaGVja2xpc3RbaV1bMF07XHJcbiAgICAgICAgICAgICAgICBjaGVja2xpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QtdGV4dCcpLnZhbHVlID0gY2hlY2tsaXN0W2ldWzFdO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tsaXN0U2VjdGlvbi5hcHBlbmRDaGlsZChjaGVja2xpc3RJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gJ05vIENoZWNrbGlzdCBJdGVtcyc7XHJcbiAgICAgICAgICAgIGNoZWNrbGlzdFNlY3Rpb24uYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25TYXZlKGN1cnJlbnRVaWQpIHtcclxuICAgICAgICBsZXQgdCA9IHB1bGxUb2RvKGN1cnJlbnRVaWQpO1xyXG4gICAgICAgIHNhdmUodCk7XHJcbiAgICAgICAgaWYgKHB1aWQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcHVpZCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgbGV0IHByb2plY3QgPSBsb2FkKCdwcm9qZWN0JywgcHVpZCk7XHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkVG9kbyh0KTtcclxuICAgICAgICAgICAgc2F2ZShwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbnQgPSBjb25maXJtKFwiU2F2ZWQuXFxuUHJlc3Mgb2sgdG8ga2VlcCBlZGl0aW5nLlwiKTtcclxuICAgICAgICBpZiAoIWNvbnQpIGNsb3NlTW9kYWxBY3Rpb24oKTtcclxuICAgICAgICBpZiAob25DbG9zZUV2ZW50KSBvbkNsb3NlRXZlbnQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uQWRkTmV3Q2hlY2tsaXN0SXRlbShldmVudCkge1xyXG4gICAgICAgIGxldCBjb21wbGV0ZVZhbHVlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1uZXctaXRlbSAuY29tcGxldGUtZmllbGQnKS52YWx1ZSA9PSBcInRydWVcIjtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdC1uZXctaXRlbSAuY2hlY2tsaXN0LXRleHQnKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgdCA9IHB1bGxUb2RvKCk7XHJcbiAgICAgICAgICAgIHQuYWRkVG9DaGVja0xpc3QoY29tcGxldGVWYWx1ZSwgdGV4dEZpZWxkLnZhbHVlKTtcclxuICAgICAgICAgICAgb25DbG9zZU1vZGFsKGV2ZW50KTtcclxuICAgICAgICAgICAgc2F2ZSh0KTtcclxuICAgICAgICAgICAgcmVuZGVyX3RvRG9Nb2RhbCh0LnVpZCwgb25DbG9zZUV2ZW50LCBwdWlkKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB0ZXh0RmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRleHRGaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1bGxUb2RvKCkge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1maWVsZCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXcgRGF0ZShtb2RhbC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUtZmllbGQnKS52YWx1ZSk7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gbW9kYWwucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IG5vdGVzID0gbW9kYWwucXVlcnlTZWxlY3RvcignI25vdGVzLWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IHQgPSBuZXcgVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHBhcnNlSW50KHByaW9yaXR5KSwgbm90ZXMsIGN1cnJlbnRVaWQpO1xyXG4gICAgICAgIGZvciAobGV0IG5vZGUgb2YgbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrbGlzdC1saXN0LWl0ZW0nKSkge1xyXG4gICAgICAgICAgICBsZXQgY29tcGxldGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZS1maWVsZCcpLnZhbHVlID09PSAndHJ1ZSc7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0LXRleHQnKS52YWx1ZTtcclxuICAgICAgICAgICAgdC5hZGRUb0NoZWNrTGlzdChjb21wbGV0ZSwgdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9Eb0NhcmRzKHRvZG9zLCBvbkNsb3NlRXZlbnQsIG9uQ2xpY2tFdmVudCwgcHJlZGljYXRlKSB7XHJcbiAgICBsZXQgdG9kb0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2RvQ2FyZHMuY2xhc3NMaXN0LmFkZCgndG9kby1jYXJkcycpO1xyXG4gICAgbGV0IGxvYWRlZFByb2plY3RzID0gbG9hZCgncHJvamVjdCcpO1xyXG4gICAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvcykge1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUgPT09IHVuZGVmaW5lZCB8fCBwcmVkaWNhdGUodG9kbykpIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBnZW5lcmF0ZVRlbXBsYXRlKHRlbXBsYXRlQ2FyZFRvRG8pO1xyXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuICAgICAgICAgICAgLy9jYXJkLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gKHRvZG8uZGVzY3JpcHRpb24ubGVuZ3RoIDwgMTcwKSA/IHRvZG8uZGVzY3JpcHRpb24gOiB0b2RvLmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxNzApICsgJy4uLic7XHJcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5JykudGV4dENvbnRlbnQgPSAodG9kby5jaGVja2xpc3QubGVuZ3RoID09PSAwID8gJ05vJyA6IHRvZG8uY2hlY2tsaXN0Lmxlbmd0aCkgKyAnIGNoZWNrbGlzdCBpdGVtJyArICh0b2RvLmNoZWNrbGlzdC5sZW5ndGggIT09IDEgPyAncycgOiAnJyk7XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogR28gdGhyb3VnaCBwcm9qZWN0cywgY2hlY2tpbmcgaWYgXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBsZXQgY29udGFpbmluZ1Byb2plY3QgPSAobG9hZGVkUHJvamVjdHMuZmluZChwID0+IHAudG9kb3MuZmlsdGVyKHQgPT4gdC51aWQgPT09IHRvZG8udWlkKS5sZW5ndGggPiAwKSk7XHJcbiAgICAgICAgICAgIC8vIGxldCBjb250YWluaW5nUHJvamVjdHM7XHJcbiAgICAgICAgICAgIC8vIGxvYWRlZFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAocHJvamVjdC50b2Rvcy5maW5kKCkpXHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaW5mbz5zcGFuOmxhc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGNvbnRhaW5pbmdQcm9qZWN0ICE9PSB1bmRlZmluZWQgPyBjb250YWluaW5nUHJvamVjdC50aXRsZSA6ICdOb3QgaW4gYW55IHByb2plY3QnO1xyXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tY2VsbD5kaXY6Zmlyc3QtY2hpbGQ+c3BhbjpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBmb3JtYXQodG9kby5kdWVEYXRlLCAnZG8gTExMTCB5Jyk7XHJcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1jZWxsPmRpdjpsYXN0LWNoaWxkPnNwYW46bGFzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjYXJkLm91dGVySFRNTCk7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAob25DbGlja0V2ZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICA/ICgpID0+IHJlbmRlcl90b0RvTW9kYWwodG9kby51aWQsIG9uQ2xvc2VFdmVudClcclxuICAgICAgICAgICAgICAgIDogKCkgPT4gb25DbGlja0V2ZW50KHRvZG8pKTtcclxuXHJcbiAgICAgICAgICAgIHRvZG9DYXJkcy5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9kb0NhcmRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJfYWxsUHJvamVjdHMoKSB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIHNldENvbnRlbnRUaXRsZSgnQWxsIFByb2plY3RzJyk7XHJcbiAgICBjb25maWdFeHBhbmRpbmdNZW51QnRucygnYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcblxyXG4gICAgLy9lbGVtZW50cy5tZW51QWRkUHJvamVjdEJ0bnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJfcHJvamVjdChudWxsKSkpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0cyA9IGxvYWQoJ3Byb2plY3QnKTtcclxuXHJcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgbGV0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jYXJkcycpO1xyXG4gICAgICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBnZW5lcmF0ZVRlbXBsYXRlKHRlbXBsYXRlQ2FyZFByb2plY3QpO1xyXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgICAgICAgY2FyZC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLm5vdGVzJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5vdGVzO1xyXG4gICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5JykudGV4dENvbnRlbnQgPSAoKHByb2plY3QudG9kb3MubGVuZ3RoID09PSAwKSA/IFwiTm9cIiA6IHByb2plY3QudG9kb3MubGVuZ3RoKSArIFwiIHRvZG9cIiArICgocHJvamVjdC50b2Rvcy5sZW5ndGggPj0gMSkgPyBcInNcIiA6IFwiXCIpO1xyXG4gICAgICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyX3Byb2plY3QocHJvamVjdC51aWQpKTtcclxuICAgICAgICAgICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnRzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbXNnLnRleHRDb250ZW50ID0gXCJZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0IVwiO1xyXG4gICAgICAgIGVsZW1lbnRzLmNvbnRlbnQuYXBwZW5kQ2hpbGQobXNnKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJfcHJvamVjdChwcm9qZWN0VWlkKSB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbmZpZ0V4cGFuZGluZ01lbnVCdG5zKCdhZGQtcHJvamVjdC1idXR0b24nLCAnYWRkLXRvZG8tdG8tcHJvamVjdC1idXR0b24nKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdE9iajtcclxuICAgIGlmIChwcm9qZWN0VWlkID09PSBudWxsKSB7XHJcbiAgICAgICAgcHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0KCk7XHJcbiAgICAgICAgc2F2ZShwcm9qZWN0T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdE9iaiA9IGxvYWQoJ3Byb2plY3QnLCBwcm9qZWN0VWlkKTtcclxuICAgIH1cclxuICAgIHNldENvbnRlbnRUaXRsZSgnUHJvamVjdDogJyArIHByb2plY3RPYmoudGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHVpZCA9IHByb2plY3RPYmoudWlkO1xyXG5cclxuICAgIGVsZW1lbnRzLm1lbnVBZGRUb0RvVG9Qcm9qZWN0QnRucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlcl90b0RvTW9kYWwobnVsbCwgKCkgPT4gcmVuZGVyX3Byb2plY3QodWlkKSwgdWlkKSkpO1xyXG5cclxuICAgIGxldCBjb250ZW50ID0gZ2VuZXJhdGVUZW1wbGF0ZSh0ZW1wbGF0ZVByb2plY3RFZGl0b3IpO1xyXG4gICAgbGV0IGJ0blBhbmVsID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0b3ItYnV0dG9uLXBhbmVsJyk7XHJcbiAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1maWVsZCcpLnZhbHVlID0gcHJvamVjdE9iai50aXRsZTtcclxuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcignI2Rlc2MtZmllbGQnKS52YWx1ZSA9IHByb2plY3RPYmouZGVzY3JpcHRpb247XHJcbiAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3Rlcy1maWVsZCcpLnZhbHVlID0gcHJvamVjdE9iai5ub3RlcztcclxuICAgIGJ0blBhbmVsLmJlZm9yZShjcmVhdGVUb0RvQ2FyZHMocHJvamVjdE9iai50b2RvcywgKCkgPT4gcmVuZGVyX3Byb2plY3QodWlkKSkpO1xyXG4gICAgZWxlbWVudHMuY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGxvYWQoJ3Byb2plY3QnKSk7XHJcblxyXG4gICAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjc2F2ZS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNhdmUocHVsbFByb2plY3RGcm9tRWRpdG9yRGl2KCkpKTtcclxuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvcignI2FkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlcl90b0RvTW9kYWwobnVsbCwgKCkgPT4gcmVuZGVyX3Byb2plY3QodWlkKSwgdWlkKSk7XHJcbiAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRlbGV0ZVRvZG9zID0gY29uZmlybSgnV291bGQgeW91IGxpa2UgdG8gZGVsZXRlIGFsbCBhc3NvY2lhdGVkIHRvZG9zP1xcblByZXNzIG9rIHRvIGRlbGV0ZSBhbGwgYXNzb2NpYXRlZCB0b2Rvcywgb3IgY2FuY2VsIHRvIGRlbGV0ZSBvbmx5IHRoZSBwcm9qZWN0Jyk7XHJcbiAgICAgICAgZGVsZXRlRnJvbVN0b3JhZ2UoJ3Byb2plY3QnLCB1aWQsIGRlbGV0ZVRvZG9zKTtcclxuICAgICAgICByZW5kZXJfYWxsUHJvamVjdHMoKTtcclxuICAgIH0pO1xyXG4gICAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWV4aXN0aW5nLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyX2FsbFRvZG9zKCdDaG9vc2UgYSBUb0RvIHRvIGFkZCB0byB5b3VyIHByb2plY3QnLCAodG9kbykgPT4gb25DbGlja3MuYWRkRXhpc3RpbmdUb2RvKHRvZG8pLCAodG9kbykgPT4gcHJlZGljYXRlcy5pc05vdEluQW55UHJvamVjdCh0b2RvKSkpO1xyXG4gICAgY29udGVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlLWV4aXN0aW5nLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyX2FsbFRvZG9zKCdDaG9vc2UgYSBUb0RvIHRvIHJlbW92ZSBmcm9tIHlvdXIgcHJvamVjdCcsKHRvZG8pID0+IG9uQ2xpY2tzLnJlbW92ZVRvZG9Gcm9tUHJvamVjdCh0b2RvKSwgKHRvZG8pID0+IHByZWRpY2F0ZXMuaXNJblRoaXNQcm9qZWN0KHRvZG8pKSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcHVsbFByb2plY3RGcm9tRWRpdG9yRGl2KCkge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1maWVsZCcpLnZhbHVlO1xyXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGVzLWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgbGV0IHAgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIG5vdGVzLCB1aWQpO1xyXG4gICAgICAgIHAudG9kb3MgPSBwcm9qZWN0T2JqLnRvZG9zO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvbkNsaWNrcyA9IHtcclxuICAgICAgICBhZGRFeGlzdGluZ1RvZG86IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmouYWRkVG9kbyh0b2RvKTtcclxuICAgICAgICAgICAgc2F2ZShwcm9qZWN0T2JqKTtcclxuICAgICAgICAgICAgcmVuZGVyX3Byb2plY3QocHJvamVjdFVpZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVUb2RvRnJvbVByb2plY3Q6IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmoucmVtb3ZlVG9kbyh0b2RvKTtcclxuICAgICAgICAgICAgc2F2ZShwcm9qZWN0T2JqKTtcclxuICAgICAgICAgICAgcmVuZGVyX3Byb2plY3QocHJvamVjdFVpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgcHJlZGljYXRlcyA9IHtcclxuICAgICAgICBpc05vdEluQW55UHJvamVjdDogZnVuY3Rpb24gKHRvZG8pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgcCBvZiBsb2FkKCdwcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwLnRvZG9zLmZpbmQoZSA9PiB0b2RvLnVpZCA9PT0gZS51aWQpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0luVGhpc1Byb2plY3Q6IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0T2JqLnRvZG9zLmZpbmQoZSA9PiB0b2RvLnVpZCA9PT0gZS51aWQpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gbGV0IG9uQ2xpY2tfYWRkRXhpc3RpbmdUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcclxuICAgIC8vICAgICBwcm9qZWN0T2JqLmFkZFRvZG8odG9kbyk7XHJcbiAgICAvLyAgICAgc2F2ZShwcm9qZWN0T2JqKTtcclxuICAgIC8vICAgICByZW5kZXJfcHJvamVjdChwcm9qZWN0VWlkKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBsZXQgb25DbGlja19yZW1vdmVUb2RvRnJvbVByb2plY3QgPSBmdW5jdGlvbiAodG9kbykge1xyXG4gICAgLy8gICAgIHByb2plY3RPYmoucmVtb3ZlVG9kbyh0b2RvKTtcclxuICAgIC8vICAgICBzYXZlKHByb2plY3RPYmopO1xyXG4gICAgLy8gICAgIHJlbmRlcl9wcm9qZWN0KHByb2plY3RVaWQpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGxldCBpc05vdEluQW55UHJvamVjdFByZWRpY2F0ZSA9IGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAvLyAgICAgLy8gZGlzY2VybiBhbGwgdG9kb3Mgbm90IGN1cnJlbnRseSBpbiBhIHByb2plY3QsIGFuZCBkaXNwbGF5IG9ubHkgdGhlbSB1c2luZyB0aGUgZm9sbG93aW5nIHByZWRpY2F0ZVxyXG4gICAgLy8gICAgIGZvciAobGV0IHAgb2YgbG9hZCgncHJvamVjdCcpKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChwLnRvZG9zLmZpbmQoZSA9PiB0b2RvLnVpZCA9PT0gZS51aWQpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGxldCBpc0luVGhpc1Byb2plY3RQcmVkaWNhdGUgPSBmdW5jdGlvbiAodG9kbykge1xyXG4gICAgLy8gICAgIC8vIGRpc2Nlcm4gYWxsIHRvZG9zIG5vdCBjdXJyZW50bHkgaW4gYSBwcm9qZWN0LCBhbmQgZGlzcGxheSBvbmx5IHRoZW0gdXNpbmcgdGhlIGZvbGxvd2luZyBwcmVkaWNhdGVcclxuICAgIC8vICAgICBpZiAocHJvamVjdE9iai50b2Rvcy5maW5kKGUgPT4gdG9kby51aWQgPT09IGUudWlkKSkgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgeyBjbGVhckNvbnRlbnQsIGVsZW1lbnRzLCBvbkNsb3NlTW9kYWwsIGNsb3NlTW9kYWxBY3Rpb24sIHNldENvbnRlbnRUaXRsZSwgcmVuZGVyX2FsbFRvZG9zLCBjcmVhdGVUb0RvQ2FyZHMsIHJlbmRlcl90b0RvTW9kYWwsIHJlbmRlcl9hbGxQcm9qZWN0cywgcmVuZGVyX3Byb2plY3QgfTsiLCJpbXBvcnQgeyBUb0RvIH0gZnJvbSAnLi9jbGFzc2VzL1RvRG8uanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9jbGFzc2VzL1Byb2plY3QuanMnO1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1RvRG8gfCBQcm9qZWN0fSBvYmpUb1NhdmUgXHJcbiAqIEB0aHJvd3MgTG9jYWxTdG9yYWdlRXJyb3IgaWYgbG9jYWxTdG9yYWdlIG5vdCBhY2Nlc3NpYmxlLCBvciBQYXJhbWV0ZXJFcnJvciBpZiBwYXJhbWV0ZXIgaXMgbm90IGEgVG9EbyBvciBQcm9qZWN0IG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHNhdmUob2JqVG9TYXZlKSB7XHJcblxyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkgdGhyb3cgbmV3IExvY2FsU3RvcmFnZUVycm9yKCdzYXZlJywgJ0xvY2FsIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSEgLSBzYXZlIGFjdGlvbiBub3QgY29tcGxldGUnKTtcclxuICAgIGlmIChvYmpUb1NhdmUgaW5zdGFuY2VvZiBUb0RvKSBzYXZlVG9EbyhvYmpUb1NhdmUpO1xyXG4gICAgZWxzZSBpZiAob2JqVG9TYXZlIGluc3RhbmNlb2YgUHJvamVjdCkgc2F2ZVByb2plY3Qob2JqVG9TYXZlKTtcclxuICAgIGVsc2UgdGhyb3cgbmV3IFBhcmFtZXRlckVycm9yKCdvYmpUb1NhdmUnLCAncGFyYW1ldGVyIG11c3QgYmUgYSBUb0RvIG9iamVjdCBvciBhIFByb2plY3Qgb2JqZWN0IGJ1dCB3YXMgbm90Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVRvRG8odG9Eb09iaikge1xyXG4gICAgICAgIGxldCB0b2Rvc0Zyb21TdG9yYWdlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0b2RvcyBvYmplY3QgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgdG9kb3NGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSgpLnRvZG9zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gaWYgcGFyc2UgZmFpbHMgdGhlbiBzZXQgdG8gZW1wdHkgb2JqZWN0XHJcbiAgICAgICAgICAgIHRvZG9zRnJvbVN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGtleSBvZiB0b2RvIHVpZCB0byBzdHJpbmdpZmllZCBUb0RvIG9iamVjdFxyXG4gICAgICAgIHRvZG9zRnJvbVN0b3JhZ2VbdG9Eb09iai51aWRdID0gdG9Eb09iajtcclxuICAgICAgICAvLyBzYXZlIGRhdGEgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgZ2V0U3RvcmFnZSgpLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3NGcm9tU3RvcmFnZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUb2RvIHNhdmVkOiBbdWlkOiAke3RvRG9PYmoudWlkfV0gW3RpdGxlOiAke3RvRG9PYmoudGl0bGV9XWApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2F2ZVByb2plY3QocHJvamVjdE9iaikge1xyXG4gICAgICAgIGxldCBwcm9qZWN0c0Zyb21TdG9yYWdlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGF0dGVtcHQgdG8gbG9hZCB0b2RvcyBvYmplY3QgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgcHJvamVjdHNGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UoZ2V0U3RvcmFnZSgpLnByb2plY3RzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gaWYgcGFyc2UgZmFpbHMgdGhlbiBzZXQgdG8gZW1wdHkgb2JqZWN0XHJcbiAgICAgICAgICAgIHByb2plY3RzRnJvbVN0b3JhZ2UgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2F2ZSBhbGwgVG9Eb3MgaW4gcHJvamVjdCBzZXF1ZW50aWFsbHlcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3RPYmoudG9kb3MpIHtcclxuICAgICAgICAgICAgc2F2ZVRvRG8odG9kbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBrZXkgb2YgcHJvamVjdCB1aWQgdG8gc3RyaW5naWZpZWQgUHJvamVjdCBvYmplY3RcclxuICAgICAgICBwcm9qZWN0c0Zyb21TdG9yYWdlW3Byb2plY3RPYmoudWlkXSA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RPYmopO1xyXG4gICAgICAgIC8vIHNhdmUgZGF0YSBpbiBzdG9yYWdlXHJcbiAgICAgICAgZ2V0U3RvcmFnZSgpLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNGcm9tU3RvcmFnZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IHNhdmVkOiBbdWlkOiAke3Byb2plY3RPYmoudWlkfV0gW3RpdGxlOiAke3Byb2plY3RPYmoudGl0bGV9XWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTXVsdGktdXNlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b0xvYWQgXCJ0b2RvXCIgb3IgXCJwcm9qZWN0XCJcclxuICogQHBhcmFtIHtudW1iZXJ9IHVpZCB1aWQgb2YgVG9EbyBvciBQcm9qZWN0IG9iamVjdFxyXG4gKiBAcmV0dXJuIHNpbmdsZSBpbnN0YW5jZSBvZiBUb0RvIG9yIFByb2plY3QgaWYgdWlkIGlzIHNwZWNpZmVkLCBUb0RvW10gb3IgUHJvamVjdFtdIChhbGwgc3RvcmVkKSBpZiBub3QuIFJldHVybnMgbnVsbCBpZiBzcGVjaWZpYyBwcm9qZWN0IGlzIG5vdCBmb3VuZC5cclxuICogQHRocm93cyBMb2NhbFN0b3JhZ2VFcnJvciBpZiBsb2NhbCBzdG9yYWdlIG5vdCBhY2Nlc3NpYmxlLCBvciBQYXJhbWV0ZXJFcnJvciBpZiB0b0xvYWQgc3RyaW5nIHdhcyBub3QgcmVjb2duaXNlZCBhcyB2YWxpZC5cclxuICovXHJcbmZ1bmN0aW9uIGxvYWQodG9Mb2FkLCB1aWQgPSBudWxsKSB7XHJcblxyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkgdGhyb3cgbmV3IExvY2FsU3RvcmFnZUVycm9yKCdsb2FkJywgJ0xvY2FsIHN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSEgLSBsb2FkIGFjdGlvbiBub3QgY29tcGxldGUnKTtcclxuICAgIGlmICh0b0xvYWQgIT09ICdwcm9qZWN0JyAmJiB0b0xvYWQgIT09ICd0b2RvJykgdGhyb3cgbmV3IFBhcmFtZXRlckVycm9yKCd0b0xvYWQnLCBgaW52YWxpZCBwYXJhbXRlciwgbXVzdCBiZSBcInRvZG9cIiBvciBcInByb2plY3RcIiBidXQgd2FzIFwiJHt0b0xvYWR9XCJgKTtcclxuXHJcblxyXG4gICAgaWYgKHRvTG9hZCA9PT0gJ3RvZG8nKSB7XHJcbiAgICAgICAgaWYgKHVpZCA9PT0gbnVsbCkgcmV0dXJuIGxvYWRUb0RvcygpO1xyXG4gICAgICAgIHJldHVybiBsb2FkVG9kbyh1aWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRvTG9hZCA9PT0gJ3Byb2plY3QnKSB7XHJcbiAgICAgICAgaWYgKHVpZCA9PT0gbnVsbCkgcmV0dXJuIGxvYWRQcm9qZWN0cygpO1xyXG4gICAgICAgIHJldHVybiBsb2FkUHJvamVjdCh1aWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3RVaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHByb2plY3RVaWQgIT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbG9hZFByb2plY3QocHJvamVjdFVpZCkgcHJvamVjdFVJRCBwYXJhbWV0ZXIgbXVzdCBiZSBhIG51bWJlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9hZGVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGdldFN0b3JhZ2UoKS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgICAgICBpZiAoIWxvYWRlZFByb2plY3RzLmhhc093blByb3BlcnR5KHByb2plY3RVaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyByZXR1cm4gbnVsbCBpZiBwcm9qZWN0IHdpdGggcHJvamVjdFVpZCBub3QgZm91bmRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcnNlZE9iaiA9IEpTT04ucGFyc2UobG9hZGVkUHJvamVjdHNbcHJvamVjdFVpZF0pO1xyXG4gICAgICAgIGxldCBwcm9qZWN0T2JqID0gbmV3IFByb2plY3QocGFyc2VkT2JqLnRpdGxlLCBwYXJzZWRPYmouZGVzY3JpcHRpb24sIHBhcnNlZE9iai5ub3RlcywgcHJvamVjdFVpZCk7XHJcbiAgICAgICAgZm9yIChsZXQgdHVpZCBvZiBwYXJzZWRPYmoudG9Eb1VpZHMpIHtcclxuICAgICAgICAgICAgbGV0IHQgPSBsb2FkKCd0b2RvJywgdHVpZCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codCk7XHJcbiAgICAgICAgICAgIHByb2plY3RPYmouYWRkVG9kbyh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmo7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlZFByb2plY3RzID0gSlNPTi5wYXJzZShnZXRTdG9yYWdlKCkuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICAgICAgbGV0IHByb2plY3RPYmpzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdFVJRCBpbiBsb2FkZWRQcm9qZWN0cykge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShsb2FkZWRQcm9qZWN0c1twcm9qZWN0VUlEXSk7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0T2JqID0gbmV3IFByb2plY3QocGFyc2VkT2JqLnRpdGxlLCBwYXJzZWRPYmouZGVzY3JpcHRpb24sIHBhcnNlZE9iai5ub3RlcywgcGFyc2VJbnQocHJvamVjdFVJRCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0dWlkIG9mIHBhcnNlZE9iai50b0RvVWlkcykge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdE9iai5hZGRUb2RvKGxvYWRUb2RvKHR1aWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9qZWN0T2Jqcy5wdXNoKHByb2plY3RPYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnUHJvamVjdHMgbG9hZGVkJylcclxuICAgICAgICBjb25zb2xlLmxvZyhgUHJvamVjdHMgbG9hZGVkIFtudW1iZXIgbG9hZGVkOiAke3Byb2plY3RPYmpzLmxlbmd0aH1dYCk7XHJcbiAgICAgICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0T2Jqcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgnUHJvamVjdHMgbG9hZGVkJylcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmpzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG9hZFRvZG8odG9Eb1VpZCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJhdHRlbXB0aW5nIHRvIGxvYWQgdG9kbyB3aXRoIHVpZDogXCIgKyB0b0RvVWlkKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG9zQWxsID0gZ2V0U3RvcmFnZSgpLmdldEl0ZW0oJ3RvZG9zJyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsb2FkZWRUb2Rvc0FsbCk7XHJcblxyXG4gICAgICAgIGxldCBwYXJzZWQgPSBKU09OLnBhcnNlKGxvYWRlZFRvZG9zQWxsKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG8gPSBwYXJzZWRbdG9Eb1VpZF07XHJcblxyXG4gICAgICAgIC8vIGxldCBvYmogPSBKU09OLnBhcnNlKEpTT04ucGFyc2UobG9hZGVkVG9kb3NBbGwpW3RvRG9VaWRdKTtcclxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKG9iaik7XHJcblxyXG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvRG8obG9hZGVkVG9kby50aXRsZSwgbG9hZGVkVG9kby5kZXNjcmlwdGlvbiwgbmV3IERhdGUobG9hZGVkVG9kby5kdWVEYXRlKSwgbG9hZGVkVG9kby5wcmlvcml0eSwgbG9hZGVkVG9kby5ub3RlcywgbG9hZGVkVG9kby51aWQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxvYWRlZFRvZG8uY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgIHRvZG8uYWRkVG9DaGVja0xpc3QoaXRlbVswXSwgaXRlbVsxXSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRvZG8udG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b2RvO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkVG9Eb3MoKSB7XHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG9zSnNvbiA9IGdldFN0b3JhZ2UoKS5nZXRJdGVtKCd0b2RvcycpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobG9hZGVkVG9kb3NKc29uKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcnNlZFRvZG9zID0gSlNPTi5wYXJzZShsb2FkZWRUb2Rvc0pzb24pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyc2VkVG9kb3MpO1xyXG5cclxuICAgICAgICBsZXQgYnVpbHRUb2RvcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHR1aWQgaW4gcGFyc2VkVG9kb3MpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2Yga2V5VWlkKTtcclxuICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHBhcnNlZFRvZG9zW2tleVVpZF07XHJcbiAgICAgICAgICAgIC8vIC8vY29uc29sZS5sb2codSk7XHJcbiAgICAgICAgICAgIC8vIGxldCB0b2RvID0gbmV3IFRvRG8ob2JqLnRpdGxlLCBvYmouZGVzY3JpcHRpb24sIG5ldyBEYXRlKG9iai5kdWVEYXRlKSwgb2JqLnByaW9yaXR5LCBvYmoudWlkKTtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaXRlbSBvZiBvYmouY2hlY2tsaXN0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0b2RvLmFkZFRvQ2hlY2tMaXN0KGl0ZW1bMF0sIGl0ZW1bMV0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codG9kbyk7XHJcbiAgICAgICAgICAgIGJ1aWx0VG9kb3MucHVzaChsb2FkVG9kbyh0dWlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coYnVpbHRUb2Rvcyk7XHJcbiAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnVG9Eb3MgbG9hZGVkJylcclxuICAgICAgICBjb25zb2xlLmxvZyhgVG9Eb3MgbG9hZGVkIFtudW1iZXIgbG9hZGVkOiAke2J1aWx0VG9kb3MubGVuZ3RofV1gKTtcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIGJ1aWx0VG9kb3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoJ1RvRG9zIGxvYWRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGJ1aWx0VG9kb3M7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWxldGUgZGF0YSBmcm9tIHN0b3JhZ2UsIGRlcGVuZGluZyBvbiBwYXJhbWV0ZXJzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b0RlbGV0ZSBlaXRoZXIgJ3RvZG8nIG9yICdwcm9qZWN0J1xyXG4gKiBAcGFyYW0ge251bWJlcn0gdWlkIHRoZSB1aWQgb2YgZWl0aGVyIHRoZSBwcm9qZWN0IG9yIHRvZG8gdG8gZGVsZXRlIFxyXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCB1bmRlZmluZWR9IGRlbGV0ZUFzc29jaWF0ZWRUb2RvcyBpZiBkZWxldGluZyBhIHByb2plY3QsIHRoaXMgYm9vbGVhbiByZXNwcmVzZW50cyB0aGUgdXNlcnMgY2hvaWNlIHRvIGRlbGV0ZSBhbGwgYXNzb2NpYXRlZCB0b2RvIG9iamVjdHMgZnJvbSBzdG9yYWdlXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWxldGVGcm9tU3RvcmFnZSh0b0RlbGV0ZSwgdWlkLCBkZWxldGVBc3NvY2lhdGVkVG9kb3MpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHRocm93IG5ldyBMb2NhbFN0b3JhZ2VFcnJvcignZGVsZXRlRnJvbVN0b3JhZ2UnLCAnTG9jYWwgc3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlISAtIGRlbGV0ZSBhY3Rpb24gbm90IGNvbXBsZXRlJyk7XHJcbiAgICBpZiAodG9EZWxldGUgIT09ICdwcm9qZWN0JyAmJiB0b0RlbGV0ZSAhPT0gJ3RvZG8nKSB0aHJvdyBuZXcgUGFyYW1ldGVyRXJyb3IoJ3RvRGVsZXRlJywgYGludmFsaWQgcGFyYW10ZXIsIG11c3QgYmUgXCJ0b2RvXCIgb3IgXCJwcm9qZWN0XCIgYnV0IHdhcyBcIiR7dG9EZWxldGV9XCJgKTtcclxuXHJcblxyXG4gICAgaWYgKHRvRGVsZXRlID09PSAndG9kbycpIHJldHVybiBkZWxldGVUb0RvKHVpZCk7XHJcbiAgICBpZiAodG9EZWxldGUgPT09ICdwcm9qZWN0JykgcmV0dXJuIGRlbGV0ZVByb2plY3QodWlkLCBkZWxldGVBc3NvY2lhdGVkVG9kb3MpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHVpZCwgZGVsZXRlQXNzb2NpYXRlZFRvZG9zKSB7XHJcbiAgICAgICAgaWYgKGRlbGV0ZUFzc29jaWF0ZWRUb2RvcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGVBc3NvY2lhdGVkVG9kb3Mgd2FzIG5vdCBkZWZpbmVkLCBkZWZhdWx0aW5nIHRvIGZhbHNlJyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUFzc29jaWF0ZWRUb2RvcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHB1aWQpO1xyXG5cclxuICAgICAgICBsZXQgbG9hZGVkUHJvamVjdHMgPSBsb2FkKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhsb2FkZWRQcm9qZWN0cyk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IGxvYWRlZFByb2plY3RzLmZpbmRJbmRleChlID0+IGUudWlkID09PSBwdWlkKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGluZGV4KTtcclxuXHJcbiAgICAgICAgbGV0IHRvZG9zSW5Qcm9qZWN0VWlkcyA9IGxvYWRlZFByb2plY3RzW2luZGV4XS50b2Rvcy5tYXAoZSA9PiBlLnVpZCApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codG9kb3NJblByb2plY3RVaWRzKTtcclxuXHJcbiAgICAgICAgbG9hZGVkUHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgbGV0IHRvU3RvcmUgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGxvYWRlZFByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIHRvU3RvcmVbcHJvamVjdC51aWRdID0gcHJvamVjdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHRvU3RvcmUpO1xyXG4gICAgICAgIGdldFN0b3JhZ2UoKS5zZXRJdGVtKCdwcm9qZWN0cycsIHN0cmluZ2lmaWVkKTtcclxuICAgICAgICBpZiAoZGVsZXRlQXNzb2NpYXRlZFRvZG9zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHR1aWQgb2YgdG9kb3NJblByb2plY3RVaWRzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUb0RvKHR1aWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRvRG8odHVpZCkge1xyXG4gICAgICAgIC8vVE9ETyBvcHRpbWlzZSBieSBoaWRpbmcgbG9hZGluZyBwcm9qZWN0cyBiZWhpbmQgYSBjb25kaXRpb25hbCAoaWYgdG9kbyBpcyBpbiBwcm9qZWN0KT9cclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZGVkOlwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGdldFN0b3JhZ2UoKS5nZXRJdGVtKCd0b2RvcycpKTtcclxuXHJcbiAgICAgICAgbGV0IGxvYWRlZFRvZG9zID0gbG9hZCgndG9kbycpO1xyXG4gICAgICAgIGxldCBsb2FkZWRQcm9qZWN0cyA9IGxvYWQoJ3Byb2plY3QnKTtcclxuXHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2codG9kb3MpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGxvYWRlZFRvZG9zLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC51aWQgPT09IHR1aWQpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2luZGV4OiAnICsgaW5kZXgpO1xyXG4gICAgICAgIGxvYWRlZFRvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgbGV0IHRvU3RvcmUgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCB0b2RvIG9mIGxvYWRlZFRvZG9zKSB7XHJcbiAgICAgICAgICAgIHRvU3RvcmVbdG9kby51aWRdID0gdG9kbztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvU3RvcmU6XCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codG9TdG9yZSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInRvU3RvcmUgc3RyaW5naWZpZWQ6XCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodG9TdG9yZSkpO1xyXG4gICAgICAgIGxldCBzdHJpbmdpZmllZCA9ICBKU09OLnN0cmluZ2lmeSh0b1N0b3JlKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHJlZmVuY2VzIHRvIGRlbGV0ZWQgdG9kb3MgZnJvbSBwcm9qZWN0IGpzb24gb2JqZWN0XHJcbiAgICAgICAgbGV0IGNvbnRhaW5pbmdQcm9qZWN0ID0gbG9hZGVkUHJvamVjdHMuZmluZChwID0+IHAudG9kb3MuZmlsdGVyKHQgPT4gdC51aWQgPT09IHVpZCkubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5pbmdQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBwdWlkID0gY29udGFpbmluZ1Byb2plY3QudWlkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29udGFpbmluZyBwcm9qZWN0IHVpZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdWlkKTtcclxuICAgICAgICAgICAgbGV0IHAgPSBsb2FkKCdwcm9qZWN0JywgcHVpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICAgICAgICBsZXQgcHRvZG9pbmRleCA9IHAudG9kb3MuZmluZEluZGV4KGVsZW1lbnQgPT4gZWxlbWVudC51aWQgPT09IHR1aWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdG9kb2luZGV4KTtcclxuICAgICAgICAgICAgcC50b2Rvcy5zcGxpY2UocHRvZG9pbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHNhdmUocCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRTdG9yYWdlKCkuc2V0SXRlbSgndG9kb3MnLCBzdHJpbmdpZmllZCk7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgbG9jYWxTdG9yYWdlIGlzIGFjY2Vzc2libGUuXHJcbiAqIEByZXR1cm5zIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgaWYgbG9jYWxTdG9yYWdlIGlzIGFjY2Vzc2libGUuXHJcbiAqL1xyXG5mdW5jdGlvbiBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSB7XHJcbiAgICB2YXIgc3RvcmFnZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcclxuICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZSBqc29uIGZyb20gc3RvcmFnZSBzb3VyY2UgLSBjdXJyZW50bHkgbG9jYWxTdG9yYWdlXHJcbiAqIEByZXR1cm5zIGEgU3RvcmFnZSBvYmplY3QgKGFycmF5LWxpa2Ugb2JqZWN0IG9mIGtleTp2YWx1ZSBwYWlycylcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XHJcbiAgICByZXR1cm4gd2luZG93Wydsb2NhbFN0b3JhZ2UnXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFyIGxvY2FsU3RvcmFnZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvY2FsU3RvcmFnZSBjbGVhcmVkIScpXHJcbiAgICBnZXRTdG9yYWdlKCkuY2xlYXIoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByaW50IHRvIGNvbnNvbGUgYWxsIFRvRG8gb2JqZWN0cyBpbiBsb2NhbFN0b3JhZ2VcclxuICovXHJcbmZ1bmN0aW9uIGRpc3BsYXlTdG9yYWdlKCkge1xyXG4gICAgLy8gY29uc29sZS5ncm91cCgnZGlzcGxheWluZyBzdG9yYWdlJyk7XHJcbiAgICAvLyBsZXQgcyA9IEFycmF5LmZyb20obG9hZFRvRG9zKCkpIHx8IFtdO1xyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc1tpXSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmdyb3VwRW5kKCdkaXNwbGF5aW5nIHN0b3JhZ2UnKTtcclxufVxyXG5cclxuY2xhc3MgTG9jYWxTdG9yYWdlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb24sIG1lc3NhZ2UpIHtcclxuICAgICAgICBzdXBlcihgJHthY3Rpb259IDogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdMb2NhbFN0b3JhZ2VFcnJvcic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBhcmFtZXRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyTmFtZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKGAke3BhcmFtZXRlck5hbWV9IDogJHttZXNzYWdlfWApO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGBQYXJhbWV0ZXJFcnJvcmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNsZWFyU3RvcmFnZSwgZGlzcGxheVN0b3JhZ2UsIHNhdmUsIGxvYWQsIExvY2FsU3RvcmFnZUVycm9yLCBQYXJhbWV0ZXJFcnJvciwgZGVsZXRlRnJvbVN0b3JhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi9jb250cm9sbGVyLmpzJztcclxuaW1wb3J0IHsgY2xlYXJTdG9yYWdlLCBzYXZlLCBsb2FkLCBkZWxldGVGcm9tU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NsYXNzZXMvUHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL2NsYXNzZXMvVG9Eby5qcyc7XHJcblxyXG5sZXQgbG9hZGVkID0ge307XHJcblxyXG4oZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcclxuICAgIGNsZWFyU3RvcmFnZSgpO1xyXG4gICAgYnVpbGRUZXN0RGF0YSgpO1xyXG4gICAgbGV0IHRvZG9zID0gbG9hZCgndG9kbycpO1xyXG4gICAgbGV0IHByb2plY3RzID0gbG9hZCgncHJvamVjdCcpO1xyXG4gICAgc2V0VUlEcyh0b2RvcywgcHJvamVjdHMpO1xyXG4gICAgLy8gbGV0IHQgPSBuZXcgVG9EbyhudWxsLCBudWxsLCBudWxsLCBudWxsKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHQpO1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gc2V0VUlEcyh0b2RvcywgcHJvamVjdHMpIHtcclxuICAgIFRvRG8udXBkYXRlVWlkU2VlZChkZXRlcm1pbmVkTmV3VWlkU2VlZCh0b2RvcykpO1xyXG4gICAgY29uc29sZS5sb2coXCJUVUlEIHNlZWQ6IFwiICsgVG9Eby5nZXRVaWRTZWVkKCkpO1xyXG5cclxuICAgIFByb2plY3QudXBkYXRlVWlkU2VlZChkZXRlcm1pbmVkTmV3VWlkU2VlZChwcm9qZWN0cykpO1xyXG4gICAgY29uc29sZS5sb2coXCJQVUlEIHNlZWQ6IFwiICsgUHJvamVjdC5nZXRVaWRTZWVkKCkpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRldGVybWluZWROZXdVaWRTZWVkKG9iamVjdHMpIHtcclxuICAgICAgICBsZXQgaGlnaGVzdCA9IG9iamVjdHMucmVkdWNlKChwLCBlbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocCA8PSBlbC51aWQpIHJldHVybiBlbC51aWQgKyAxO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICAgIHJldHVybiBoaWdoZXN0O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYnVpbGRUZXN0RGF0YSgpIHtcclxuICAgIC8vIGFkZFRlc3RUb0Rvc1RvU3RvcmFnZSg3KTtcclxuICAgIGxldCB0UHJvaiA9IG5ldyBQcm9qZWN0KFwicHRpdGxlMVwiLCBcInBkZXNjMVwiLCBcInBub3RlczFcIiwgNTU1NSk7XHJcbiAgICBsZXQgdDEgPSBuZXcgVG9EbyhcInR0aXRsZTFhXCIsIFwidGRlc2MxYVwiLCBuZXcgRGF0ZSgxLCAxLCAxKSwgMSwgXCJzb21lIG5vdGVzXCIsIDExMTEpO1xyXG4gICAgbGV0IHQyID0gbmV3IFRvRG8oXCJ0dGl0bGUxYlwiLCBcInRkZXNjMWJcIiwgbmV3IERhdGUoMSwgMSwgMSksIDEsIFwic29tZSBub3Rlc1wiLCAxMTEyKTtcclxuICAgIHQxLmFkZFRvQ2hlY2tMaXN0KHRydWUsIFwidGV4dCBjaGVja2xpc3QgaXRlbVwiKTtcclxuICAgIHQyLmFkZFRvQ2hlY2tMaXN0KGZhbHNlLCBcInRleHQgY2hlY2tsaXN0IGl0ZW1cIik7XHJcbiAgICB0Mi5hZGRUb0NoZWNrTGlzdCh0cnVlLCBcInRleHQgY2hlY2tsaXN0IGl0ZW1cIik7XHJcbiAgICB0UHJvai5hZGRUb2RvKHQxKTtcclxuICAgIHRQcm9qLmFkZFRvZG8odDIpO1xyXG4gICAgdFByb2ouYWRkVG9kbyhuZXcgVG9EbyhcInR0aXRsZTJcIiwgXCJ0ZGVzYzJcIiwgbmV3IERhdGUoMiwgMiwgMiksIDIsIFwic29tZSBub3Rlc1wiLCAyMjIyKSk7XHJcblxyXG4gICAgbGV0IHRQcm9qMiA9IG5ldyBQcm9qZWN0KFwicHRpdGxlMlwiLCBcInBkZXNjMlwiLCBcInBub3RlczJcIiwgNjY2Nik7XHJcbiAgICB0UHJvajIuYWRkVG9kbyhuZXcgVG9EbyhcInR0aXRsZTNcIiwgXCJ0ZGVzYzNcIiwgbmV3IERhdGUoMywgMywgMyksIDMsIFwic29tZSBub3Rlc1wiLCAzMzMzKSk7XHJcbiAgICB0UHJvajIuYWRkVG9kbyhuZXcgVG9EbyhcInR0aXRsZTRcIiwgXCJ0ZGVzYzRcIiwgbmV3IERhdGUoNCwgNCwgNCksIDQsIFwic29tZSBub3Rlc1wiLCA0NDQ0KSk7XHJcbiAgICBzYXZlKHRQcm9qKTtcclxuICAgIHNhdmUodFByb2oyKTtcclxuXHJcbiAgICBsZXQgbG9uZVQxID0gbmV3IFRvRG8oXCJub3QgaW4gYW55IHByb2plY3QgMVwiLCBcImRlc2NyaXB0aW9uIC0gdGhpcyBvbmUgaXNudCBpbiBhIHByb2plY3QgMVwiLnJlcGVhdCgxMCksIG5ldyBEYXRlKDUsIDUsIDUpLCA1LCBcInNvbWUgbm90ZXMgMVwiLCAxMzM3KTtcclxuICAgIHNhdmUobG9uZVQxKTtcclxuICAgIGxldCBsb25lVDIgPSBuZXcgVG9EbyhcIm5vdCBpbiBhbnkgcHJvamVjdCAyXCIsIFwiZGVzY3JpcHRpb24gLSB0aGlzIG9uZSBpc250IGluIGEgcHJvamVjdCAyXCIsIG5ldyBEYXRlKDYsIDYsIDYpLCA1LCBcInNvbWUgbm90ZXMgMlwiLCAxMzM4KTtcclxuICAgIHNhdmUobG9uZVQyKTtcclxuXHJcblxyXG4gICAgLy9kZWxldGVGcm9tU3RvcmFnZSgndG9kbycsIHQyLnVpZCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGxvYWQoJ3RvZG8nKSk7XHJcblxyXG4gICAgLy9sZXQgd2hhdGV2ZXIgPSBsb2FkKFwicHJvamVjdFwiKTtcclxuICAgIC8vY29uc29sZS5sb2cod2hhdGV2ZXIpO1xyXG5cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHdpbmRvd1snbG9jYWxTdG9yYWdlJ10pO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2cobG9hZChcInRvZG9cIikpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9