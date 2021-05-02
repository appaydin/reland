/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/assets/scss/app.scss\");\n// Import APP Saas\n\n$(function () {\n  /**\n   * Magnific Popup - Image Gallery\n   */\n  $('div.magnific').magnificPopup({\n    delegate: 'a',\n    type: 'image',\n    gallery: {\n      enabled: true\n    },\n    mainClass: 'mfp-with-zoom',\n    zoom: {\n      enabled: true,\n      duration: 300,\n      easing: 'ease-in-out',\n      opener: function opener(openerElement) {\n        return openerElement.is('img') ? openerElement : openerElement.find('img');\n      }\n    }\n  });\n  /**\n   * Bootstrap Dropdown\n   */\n\n  $('.dropdown-toggle').dropdown();\n  $('.dropdown').on('show.bs.dropdown', function () {\n    $(this).find('.dropdown-menu').first().stop(true, true).fadeIn(200);\n  }).on('hide.bs.dropdown', function () {\n    $(this).find('.dropdown-menu').first().stop(true, true).fadeOut(200);\n  });\n  /**\n   * Tooltips\n   */\n\n  $(function () {\n    $('[data-toggle=\"tooltip\"]').tooltip();\n  });\n  /**\n   * Navbar Fixed\n   */\n\n  var navbar = document.querySelector(\".navbar\");\n  var sticky = navbar.offsetTop + 400;\n\n  window.onscroll = function () {\n    if (window.pageYOffset > sticky) {\n      navbar.classList.add(\"fixed\");\n    } else {\n      navbar.classList.remove(\"fixed\");\n    }\n  };\n  /**\n   * Responsive Navigation\n   */\n\n\n  $('.nav-responsive > .toggle').click(function () {\n    list = $(this).next();\n\n    if (list.hasClass('show')) {\n      list.removeClass('show').slideUp('fast');\n    } else {\n      list.addClass('show').slideDown('fast');\n    }\n  });\n  /**\n   * Contact Form Ajax Submit\n   */\n\n  /*    $('.ajaxForm').submit(function (e) {\n          e.preventDefault();\n          let form = $(this);\n          let loading = form.find('.loading');\n          let button = form.find('[type=submit]');\n  \n          $.ajax({\n              url: form.attr('action'),\n              method: 'POST',\n              data: form.serialize(),\n              beforeSend: function () {\n                  loading.html('<svg class=\"spinner\" viewBox=\"0 0 50 50\"><circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle></svg>');\n                  loading.show();\n                  form.find('.invalid-feedback').remove();\n                  form.find('.is-invalid').removeClass('is-invalid');\n                  button.prop('disabled', true)\n              },\n              success: function (response) {\n                  if (response.status === 'success') {\n                      setTimeout(function () {\n                          loading.html('<svg fill=\"#5abe01\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg>');\n                          form.find(':input').prop('disabled', true);\n                      }, 600);\n                  } else {\n                      setTimeout(function () {\n                          loading.html('<svg fill=\"#dc3545\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 352 512\"><path d=\"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z\"></path></svg>');\n                          form.find(':input').prop('disabled', false);\n  \n                          // Set Error\n                          for (var name in response.form) {\n                              form.find('#' + name).toggleClass('is-invalid').after('<div class=\"invalid-feedback\">' + response.form[name] + '</div>');\n                          }\n                      }, 600);\n                  }\n              }\n          })\n      })*/\n});\n\n//# sourceURL=webpack://reland/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/scss/app.scss":
/*!**********************************!*
  !*** ./src/assets/scss/app.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"dist/app.css\");\n\n//# sourceURL=webpack://reland/./src/assets/scss/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;