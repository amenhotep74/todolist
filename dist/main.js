/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let arrayDefault = [];\r\n\r\n// Create a todo object with a constructor \r\nfunction Todo(title, description, dueDate, project) {\r\n    this.title = title,\r\n    this.description = description, \r\n    this.dueDate = dueDate,\r\n    this.project = project\r\n    \r\n}\r\n// add book to array \r\nfunction addBookToArray(Todo) {\r\n    arrayDefault.push(Todo);\r\n}\r\n\r\n\r\n// create a todo \r\naddBookToArray(new Todo(\"Take Out Trash\", \"description\", \"1/3/2019\", \"default\"));\r\naddBookToArray(new Todo(\"Walk Dog\", \"description\", \"1/3/2018\", \"default\"));\r\n\r\nconsole.log(Todo);\r\nconsole.log(arrayDefault);\r\n\r\n// to retrieve all info about an object \r\nTodo.prototype.info = function() {\r\n    return `${this.title}`;\r\n}\r\n\r\n// for each object in the array export to an li on the page \r\nfunction renderTodo() {\r\n    var demo = document.querySelector(\"#demo\");\r\n    demo.innerHTML = \"\";\r\n    const todos = arrayDefault.map((todo, index) => createLi(todo, index));\r\n    todos.forEach(todo => demo.appendChild(todo));\r\n}\r\n\r\nfunction createLi(todo, index) {\r\n    const ul = document.createElement('ul');\r\n    ul.dataset.index = index;\r\n    const li = document.createElement('li');\r\n    li.innerHTML = todo.info();\r\n    ul.appendChild(li);\r\n\r\n    // create delete button \r\n    const deleteButton = document.createElement(\"button\");\r\n    deleteButton.textContent = \"DELETE\";\r\n    deleteButton.onclick = () => {\r\n        removeTodoFromArray(index);\r\n        // re render todo\r\n        renderTodo();\r\n    };\r\n    li.appendChild(deleteButton);\r\n    return ul;\r\n}\r\n\r\n// from the object from the array\r\nfunction removeTodoFromArray(index) {\r\n    arrayDefault.splice(index, 1);\r\n}\r\n\r\n// When todo delete button is clicked on \r\nfunction deleteTodo(ev) {\r\n    // alert(\"delete button clicked!\");\r\n    // console.log the element that was clicked\r\n    console.log(ev.currentTarget);\r\n}\r\n\r\nrenderTodo();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });