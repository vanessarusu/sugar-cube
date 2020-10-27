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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _knowYourSkin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowYourSkin */ "./src/js/knowYourSkin.js");
/* harmony import */ var _servicesAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicesAccordion */ "./src/js/servicesAccordion.js");



(function () {
  var pageIds = {
    knowYourSkin: "108",
    services: "92"
  }; // change to switch cases

  if (document.querySelector("body.page-id-".concat(pageIds.knowYourSkin))) {
    var kys = Object(_knowYourSkin__WEBPACK_IMPORTED_MODULE_0__["default"])();
    kys.init();
  } else if (document.querySelector("body.page-id-".concat(pageIds.services))) {
    var sa = Object(_servicesAccordion__WEBPACK_IMPORTED_MODULE_1__["default"])();
    sa.init();
  }

  var hamburgerMenu = document.querySelector('button.hamburger-container');
  var mobileMenu = document.querySelector('.fl-page-nav-collapse.navbar-collapse');
  hamburgerMenu.addEventListener('click', toggleNav, false);

  function toggleNav() {
    if (mobileMenu.classList.contains('in')) {
      hamburgerMenu.classList.toggle('navbar-open');
    } else {
      hamburgerMenu.classList.toggle('navbar-open');
    }
  } // site credits


  console.clear();
  console.log('%cSite Credits: Designed by www.lwdg.ca, developed by www.vanessarusu.com', 'color: #76bc21; font-size: 14px;');
})();

/***/ }),

/***/ "./src/js/knowYourSkin.js":
/*!********************************!*\
  !*** ./src/js/knowYourSkin.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var knowYourSkin = function knowYourSkin() {
  var growthCycleDiagram = document.querySelector("#growthCycleDiagram");
  var SVGPhases = growthCycleDiagram.querySelectorAll("svg .phase-bg");
  var growthCycleTabs = document.querySelectorAll("#growthCycleTabs .fl-tabs-labels .fl-tabs-label");
  var SVGActiveClass = "active";
  var tabsActiveClass = "fl-tab-active";

  function forceSVGClick(index) {
    setTimeout(function () {
      var elmToCheck = document.querySelector("svg [data-index=\"".concat(index, "\"]"));

      if (!elmToCheck.classList.contains(SVGActiveClass)) {
        elmToCheck.dispatchEvent(new Event('click'));
      }
    }, 0);
  }

  function forceTabClick(index) {
    setTimeout(function () {
      var elmToCheck = document.querySelector("#growthCycleTabs [data-index=\"".concat(index, "\"]"));

      if (!elmToCheck.classList.contains(tabsActiveClass)) {
        elmToCheck.click();
      }
    }, 0);
  }

  function init() {
    styleTabs();
    SVGPhases.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var clickedElm = e.target; // highlight the correct phase in svg

        SVGPhases.forEach(function (elm) {
          elm.classList.contains("active") ? elm.classList.remove("active") : "";
          elm.getAttribute("id") === clickedElm.getAttribute("id") ? elm.classList.add("active") : "";
        });
        forceTabClick(clickedElm.getAttribute("data-index"));
      });
    }); // when the tab is clicked force a click on the corresponding svg phase

    growthCycleTabs.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var diagramIndex = e.target.getAttribute("data-index");
        forceSVGClick(diagramIndex);
      });
    });
  }

  function styleTabs() {
    growthCycleTabs.forEach(function (el) {
      var array = el.innerHTML.split(" ");
      var lastWord = array[array.length - 1];

      if (!isNaN(lastWord)) {
        array.pop();
        var newHeading = "".concat(array.join(' '), "<span class=\"phase-number\">").concat(lastWord, "</span>");
        el.innerHTML = newHeading;
      }
    });
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (knowYourSkin);

/***/ }),

/***/ "./src/js/servicesAccordion.js":
/*!*************************************!*\
  !*** ./src/js/servicesAccordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var servicesAccordion = function servicesAccordion() {
  function init() {
    var accordionHeadings = document.querySelectorAll('.servicesAccordion .fl-accordion-button-label');
    accordionHeadings.forEach(function (el) {
      var array = el.innerHTML.split(" ");
      var lastWord = array[array.length - 1];

      if (lastWord.indexOf("$") !== -1) {
        array.pop();
        var newHeading = "<span class=\"title\"> ".concat(array.join(' '), " </span><span class=\"service-price\">").concat(lastWord, "</span>");
        el.innerHTML = newHeading;
      }
    });
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (servicesAccordion);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMva25vd1lvdXJTa2luLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlc0FjY29yZGlvbi5qcyJdLCJuYW1lcyI6WyJwYWdlSWRzIiwia25vd1lvdXJTa2luIiwic2VydmljZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJreXMiLCJpbml0Iiwic2EiLCJzZXJ2aWNlc0FjY29yZGlvbiIsImhhbWJ1cmdlck1lbnUiLCJtb2JpbGVNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU5hdiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiZ3Jvd3RoQ3ljbGVEaWFncmFtIiwiU1ZHUGhhc2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImdyb3d0aEN5Y2xlVGFicyIsIlNWR0FjdGl2ZUNsYXNzIiwidGFic0FjdGl2ZUNsYXNzIiwiZm9yY2VTVkdDbGljayIsImluZGV4Iiwic2V0VGltZW91dCIsImVsbVRvQ2hlY2siLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmb3JjZVRhYkNsaWNrIiwiY2xpY2siLCJzdHlsZVRhYnMiLCJmb3JFYWNoIiwiZWwiLCJlIiwiY2xpY2tlZEVsbSIsInRhcmdldCIsImVsbSIsInJlbW92ZSIsImdldEF0dHJpYnV0ZSIsImFkZCIsImRpYWdyYW1JbmRleCIsImFycmF5IiwiaW5uZXJIVE1MIiwic3BsaXQiLCJsYXN0V29yZCIsImxlbmd0aCIsImlzTmFOIiwicG9wIiwibmV3SGVhZGluZyIsImpvaW4iLCJhY2NvcmRpb25IZWFkaW5ncyIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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U0FBSCxDQUFhQyxLQUFiLENBQW1CLEdBQW5CLENBQVo7QUFDQSxVQUFJQyxRQUFRLEdBQUdILEtBQUssQ0FBQ0EsS0FBSyxDQUFDSSxNQUFOLEdBQWEsQ0FBZCxDQUFwQjs7QUFFQSxVQUFHRCxRQUFRLENBQUNPLE9BQVQsQ0FBaUIsR0FBakIsTUFBMEIsQ0FBQyxDQUE5QixFQUFpQztBQUM3QlYsYUFBSyxDQUFDTSxHQUFOO0FBQ0EsWUFBSUMsVUFBVSxvQ0FBMkJQLEtBQUssQ0FBQ1EsSUFBTixDQUFXLEdBQVgsQ0FBM0IsbURBQWlGTCxRQUFqRixZQUFkO0FBQ0FaLFVBQUUsQ0FBQ1UsU0FBSCxHQUFlTSxVQUFmO0FBQ0g7QUFDSixLQVREO0FBVUg7O0FBRUQsU0FBTztBQUNIN0MsUUFBSSxFQUFFQTtBQURILEdBQVA7QUFHSCxDQWxCRDs7QUFvQmVFLGdGQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IGtub3dZb3VyU2tpbiBmcm9tICcuL2tub3dZb3VyU2tpbic7XG5pbXBvcnQgc2VydmljZXNBY2NvcmRpb24gZnJvbSAnLi9zZXJ2aWNlc0FjY29yZGlvbic7XG5cbihmdW5jdGlvbigpe1xuICAgIHZhciBwYWdlSWRzID0ge1xuICAgICAgICBrbm93WW91clNraW46IFwiMTA4XCIsXG4gICAgICAgIHNlcnZpY2VzOiBcIjkyXCJcbiAgICB9XG4gICAgXG4gICAgLy8gY2hhbmdlIHRvIHN3aXRjaCBjYXNlc1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMua25vd1lvdXJTa2lufWApKSB7XG4gICAgICAgIGNvbnN0IGt5cyA9IGtub3dZb3VyU2tpbigpO1xuICAgICAgICBreXMuaW5pdCgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5LnBhZ2UtaWQtJHtwYWdlSWRzLnNlcnZpY2VzfWApKSB7XG4gICAgICAgIGNvbnN0IHNhID0gc2VydmljZXNBY2NvcmRpb24oKTtcbiAgICAgICAgc2EuaW5pdCgpO1xuICAgIH1cblxuXG5cbiAgICB2YXIgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oYW1idXJnZXItY29udGFpbmVyJyk7XG4gICAgdmFyIG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmwtcGFnZS1uYXYtY29sbGFwc2UubmF2YmFyLWNvbGxhcHNlJyk7XG4gICAgXG4gICAgaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdiwgZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuXG4gICAgICAgIGlmKG1vYmlsZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbicpKSB7XG4gICAgICAgICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci1vcGVuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzaXRlIGNyZWRpdHNcbiAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coJyVjU2l0ZSBDcmVkaXRzOiBEZXNpZ25lZCBieSB3d3cubHdkZy5jYSwgZGV2ZWxvcGVkIGJ5IHd3dy52YW5lc3NhcnVzdS5jb20nLCAnY29sb3I6ICM3NmJjMjE7IGZvbnQtc2l6ZTogMTRweDsnKTtcbn0pKCk7IiwiY29uc3Qga25vd1lvdXJTa2luID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ3Jvd3RoQ3ljbGVEaWFncmFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncm93dGhDeWNsZURpYWdyYW1cIik7XG4gICAgdmFyIFNWR1BoYXNlcyA9IGdyb3d0aEN5Y2xlRGlhZ3JhbS5xdWVyeVNlbGVjdG9yQWxsKFwic3ZnIC5waGFzZS1iZ1wiKTtcbiAgICB2YXIgZ3Jvd3RoQ3ljbGVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNncm93dGhDeWNsZVRhYnMgLmZsLXRhYnMtbGFiZWxzIC5mbC10YWJzLWxhYmVsXCIpO1xuICAgIHZhciBTVkdBY3RpdmVDbGFzcz0gXCJhY3RpdmVcIjtcbiAgICB2YXIgdGFic0FjdGl2ZUNsYXNzID0gXCJmbC10YWItYWN0aXZlXCI7XG5cbiAgICBmdW5jdGlvbiBmb3JjZVNWR0NsaWNrKGluZGV4KSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWxtVG9DaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN2ZyBbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBpZighZWxtVG9DaGVjay5jbGFzc0xpc3QuY29udGFpbnMoU1ZHQWN0aXZlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgZWxtVG9DaGVjay5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApOyAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcmNlVGFiQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbG1Ub0NoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dyb3d0aEN5Y2xlVGFicyBbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgICAgICAgICBpZighZWxtVG9DaGVjay5jbGFzc0xpc3QuY29udGFpbnModGFic0FjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgICAgIGVsbVRvQ2hlY2suY2xpY2soKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBzdHlsZVRhYnMoKTtcbiAgICAgICAgU1ZHUGhhc2VzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBjbGlja2VkRWxtID0gZS50YXJnZXQ7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHRoZSBjb3JyZWN0IHBoYXNlIGluIHN2Z1xuICAgICAgICAgICAgICAgIFNWR1BoYXNlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsbSkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgID8gZWxtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBlbG0uZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IGNsaWNrZWRFbG0uZ2V0QXR0cmlidXRlKFwiaWRcIilcbiAgICAgICAgICAgICAgICAgICAgPyBlbG0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgZm9yY2VUYWJDbGljayhjbGlja2VkRWxtLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gd2hlbiB0aGUgdGFiIGlzIGNsaWNrZWQgZm9yY2UgYSBjbGljayBvbiB0aGUgY29ycmVzcG9uZGluZyBzdmcgcGhhc2VcbiAgICAgICAgZ3Jvd3RoQ3ljbGVUYWJzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHZhciBkaWFncmFtSW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgICAgICAgICAgICAgIGZvcmNlU1ZHQ2xpY2soZGlhZ3JhbUluZGV4KTsgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3R5bGVUYWJzKCkge1xuICAgICAgICBncm93dGhDeWNsZVRhYnMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gZWwuaW5uZXJIVE1MLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgIHZhciBsYXN0V29yZCA9IGFycmF5W2FycmF5Lmxlbmd0aC0xXTtcbiAgICAgICAgICAgIGlmKCFpc05hTihsYXN0V29yZCkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wb3AoKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SGVhZGluZyA9IGAke2FycmF5LmpvaW4oJyAnKX08c3BhbiBjbGFzcz1cInBoYXNlLW51bWJlclwiPiR7bGFzdFdvcmR9PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gbmV3SGVhZGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGtub3dZb3VyU2tpbjsiLCJjb25zdCBzZXJ2aWNlc0FjY29yZGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIGFjY29yZGlvbkhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2VzQWNjb3JkaW9uIC5mbC1hY2NvcmRpb24tYnV0dG9uLWxhYmVsJyk7XG4gICAgICAgIGFjY29yZGlvbkhlYWRpbmdzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIHZhciBhcnJheSA9IGVsLmlubmVySFRNTC5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICB2YXIgbGFzdFdvcmQgPSBhcnJheVthcnJheS5sZW5ndGgtMV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGxhc3RXb3JkLmluZGV4T2YoXCIkXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdIZWFkaW5nID0gYDxzcGFuIGNsYXNzPVwidGl0bGVcIj4gJHthcnJheS5qb2luKCcgJyl9IDwvc3Bhbj48c3BhbiBjbGFzcz1cInNlcnZpY2UtcHJpY2VcIj4ke2xhc3RXb3JkfTwvc3Bhbj5gO1xuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IG5ld0hlYWRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlc0FjY29yZGlvbjsiXSwic291cmNlUm9vdCI6IiJ9