/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/cypress-xpath@2.0.1/node_modules/cypress-xpath/src/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/cypress-xpath@2.0.1/node_modules/cypress-xpath/src/index.js ***!
  \****************************************************************************************/
/***/ (() => {

/// <reference types="cypress" />

/**
 * Adds XPath support to Cypress using a custom command.
 *
 * @see https://devhints.io/xpath
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript
 * @example
 ```js
 it('finds list items', () => {
    cy.xpath('//ul[@class="todo-list"]//li')
      .should('have.length', 3)
  })
 ```
 */
const xpath = (subject, selector, options = {}) => {
  /* global XPathResult */
  const isNumber = (xpathResult) =>
    xpathResult.resultType === XPathResult.NUMBER_TYPE;
  const numberResult = (xpathResult) => xpathResult.numberValue;

  const isString = (xpathResult) =>
    xpathResult.resultType === XPathResult.STRING_TYPE;
  const stringResult = (xpathResult) => xpathResult.stringValue;

  const isBoolean = (xpathResult) =>
    xpathResult.resultType === XPathResult.BOOLEAN_TYPE;
  const booleanResult = (xpathResult) => xpathResult.booleanValue;

  const isPrimitive = (x) =>
    Cypress._.isNumber(x) || Cypress._.isString(x) || Cypress._.isBoolean(x);

  // options to log later
  const log = {
    name: 'xpath',
    message: selector,
  };

  if (Cypress.dom.isElement(subject) && subject.length > 1) {
    throw new Error(
      'xpath() can only be called on a single element. Your subject contained ' +
        subject.length +
        ' elements.'
    );
  }

  const getValue = () => {
    let nodes = [];
    let contextNode;
    let withinSubject = cy.state('withinSubject');

    if (Cypress.dom.isElement(subject)) {
      contextNode = subject[0];
    } else if (Cypress.dom.isDocument(subject)) {
      contextNode = subject;
    } else if (withinSubject) {
      contextNode = withinSubject[0];
    } else {
      contextNode = cy.state('window').document;
    }

    let iterator = (contextNode.ownerDocument || contextNode).evaluate(
      selector,
      contextNode
    );

    if (isNumber(iterator)) {
      const result = numberResult(iterator);
      log.consoleProps = () => {
        return {
          XPath: selector,
          type: 'number',
          result,
        };
      };
      return result;
    }

    if (isString(iterator)) {
      const result = stringResult(iterator);
      log.consoleProps = () => {
        return {
          XPath: selector,
          type: 'string',
          result,
        };
      };
      return result;
    }

    if (isBoolean(iterator)) {
      const result = booleanResult(iterator);
      log.consoleProps = () => {
        return {
          XPath: selector,
          type: 'boolean',
          result,
        };
      };
      return result;
    }

    try {
      let node = iterator.iterateNext();

      while (node) {
        nodes.push(node);
        node = iterator.iterateNext();
      }

      log.consoleProps = () => {
        return {
          XPath: selector,
          result: nodes.length === 1 ? nodes[0] : nodes,
        };
      };

      return nodes;
    } catch (e) {
      console.error('Document tree modified during iteration', e);

      return null;
    }
  };

  const resolveValue = () => {
    return Cypress.Promise.try(getValue).then((value) => {
      if (!isPrimitive(value)) {
        value = Cypress.$(value);
        // Add the ".selector" property because Cypress uses it for error messages
        value.selector = selector;
      }
      return cy.verifyUpcomingAssertions(value, options, {
        onRetry: resolveValue,
      });
    });
  };

  return resolveValue().then((value) => {
    if (options.log !== false) {
      // TODO set found elements on the command log?
      Cypress.log(log);
    }
    return value;
  });
};

Cypress.Commands.add(
  'xpath',
  { prevSubject: ['optional', 'element', 'document'] },
  xpath
);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./cypress/e2e/App.cy.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cypress_xpath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-xpath */ "./node_modules/.pnpm/cypress-xpath@2.0.1/node_modules/cypress-xpath/src/index.js");
/* harmony import */ var cypress_xpath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_xpath__WEBPACK_IMPORTED_MODULE_0__);

describe("App Component Tests", () => {
    context("Desktop Viewport", () => {
        beforeEach(() => {
            cy.viewport(1200, 800); // Desktop viewport
            cy.visit("/");
        });
        it("Verifies that NavBar is displayed on Desktop", () => {
            cy.get("nav").should("exist").and("be.visible");
        });
        it("Verifies that the Home page is displayed on Desktop", () => {
            cy.get(".hello").should("exist");
        });
        it("Navigates to About page on Desktop", () => {
            cy.get("nav button").contains("About").click();
            cy.url().should("include", "/about");
            cy.get(".about h1").should("contain.text", "About Us");
        });
        it("Checks elements using XPath on Desktop", () => {
            cy.xpath("//nav").should("exist");
            cy.xpath("//div[@id='app']").should("exist");
        });
    });
    context("Mobile Viewport", () => {
        beforeEach(() => {
            cy.viewport(320, 568); // Mobile viewport
            cy.visit("/");
        });
        it("Verifies that NavBar is displayed on Mobile", () => {
            cy.get("nav").should("exist").and("be.visible");
        });
        it("Verifies that the Home page is displayed on Mobile", () => {
            cy.get(".hello").should("exist");
        });
        it("Navigates to About page on Mobile", () => {
            cy.get("nav button").contains("About").click();
            cy.url().should("include", "/about");
            cy.get(".about h1").should("contain.text", "About Us");
        });
        it("Checks elements using XPath on Mobile", () => {
            cy.xpath("//nav").should("exist");
            cy.xpath("//div[@id='app']").should("exist");
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLEVBQUU7WUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeXByZXNzLXRlc3QvLi9ub2RlX21vZHVsZXMvLnBucG0vY3lwcmVzcy14cGF0aEAyLjAuMS9ub2RlX21vZHVsZXMvY3lwcmVzcy14cGF0aC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2N5cHJlc3MtdGVzdC8uL2N5cHJlc3MvZTJlL0FwcC5jeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG4vKipcbiAqIEFkZHMgWFBhdGggc3VwcG9ydCB0byBDeXByZXNzIHVzaW5nIGEgY3VzdG9tIGNvbW1hbmQuXG4gKlxuICogQHNlZSBodHRwczovL2RldmhpbnRzLmlvL3hwYXRoXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvSW50cm9kdWN0aW9uX3RvX3VzaW5nX1hQYXRoX2luX0phdmFTY3JpcHRcbiAqIEBleGFtcGxlXG4gYGBganNcbiBpdCgnZmluZHMgbGlzdCBpdGVtcycsICgpID0+IHtcbiAgICBjeS54cGF0aCgnLy91bFtAY2xhc3M9XCJ0b2RvLWxpc3RcIl0vL2xpJylcbiAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMylcbiAgfSlcbiBgYGBcbiAqL1xuY29uc3QgeHBhdGggPSAoc3ViamVjdCwgc2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAvKiBnbG9iYWwgWFBhdGhSZXN1bHQgKi9cbiAgY29uc3QgaXNOdW1iZXIgPSAoeHBhdGhSZXN1bHQpID0+XG4gICAgeHBhdGhSZXN1bHQucmVzdWx0VHlwZSA9PT0gWFBhdGhSZXN1bHQuTlVNQkVSX1RZUEU7XG4gIGNvbnN0IG51bWJlclJlc3VsdCA9ICh4cGF0aFJlc3VsdCkgPT4geHBhdGhSZXN1bHQubnVtYmVyVmFsdWU7XG5cbiAgY29uc3QgaXNTdHJpbmcgPSAoeHBhdGhSZXN1bHQpID0+XG4gICAgeHBhdGhSZXN1bHQucmVzdWx0VHlwZSA9PT0gWFBhdGhSZXN1bHQuU1RSSU5HX1RZUEU7XG4gIGNvbnN0IHN0cmluZ1Jlc3VsdCA9ICh4cGF0aFJlc3VsdCkgPT4geHBhdGhSZXN1bHQuc3RyaW5nVmFsdWU7XG5cbiAgY29uc3QgaXNCb29sZWFuID0gKHhwYXRoUmVzdWx0KSA9PlxuICAgIHhwYXRoUmVzdWx0LnJlc3VsdFR5cGUgPT09IFhQYXRoUmVzdWx0LkJPT0xFQU5fVFlQRTtcbiAgY29uc3QgYm9vbGVhblJlc3VsdCA9ICh4cGF0aFJlc3VsdCkgPT4geHBhdGhSZXN1bHQuYm9vbGVhblZhbHVlO1xuXG4gIGNvbnN0IGlzUHJpbWl0aXZlID0gKHgpID0+XG4gICAgQ3lwcmVzcy5fLmlzTnVtYmVyKHgpIHx8IEN5cHJlc3MuXy5pc1N0cmluZyh4KSB8fCBDeXByZXNzLl8uaXNCb29sZWFuKHgpO1xuXG4gIC8vIG9wdGlvbnMgdG8gbG9nIGxhdGVyXG4gIGNvbnN0IGxvZyA9IHtcbiAgICBuYW1lOiAneHBhdGgnLFxuICAgIG1lc3NhZ2U6IHNlbGVjdG9yLFxuICB9O1xuXG4gIGlmIChDeXByZXNzLmRvbS5pc0VsZW1lbnQoc3ViamVjdCkgJiYgc3ViamVjdC5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3hwYXRoKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgc2luZ2xlIGVsZW1lbnQuIFlvdXIgc3ViamVjdCBjb250YWluZWQgJyArXG4gICAgICAgIHN1YmplY3QubGVuZ3RoICtcbiAgICAgICAgJyBlbGVtZW50cy4nXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIGxldCBjb250ZXh0Tm9kZTtcbiAgICBsZXQgd2l0aGluU3ViamVjdCA9IGN5LnN0YXRlKCd3aXRoaW5TdWJqZWN0Jyk7XG5cbiAgICBpZiAoQ3lwcmVzcy5kb20uaXNFbGVtZW50KHN1YmplY3QpKSB7XG4gICAgICBjb250ZXh0Tm9kZSA9IHN1YmplY3RbMF07XG4gICAgfSBlbHNlIGlmIChDeXByZXNzLmRvbS5pc0RvY3VtZW50KHN1YmplY3QpKSB7XG4gICAgICBjb250ZXh0Tm9kZSA9IHN1YmplY3Q7XG4gICAgfSBlbHNlIGlmICh3aXRoaW5TdWJqZWN0KSB7XG4gICAgICBjb250ZXh0Tm9kZSA9IHdpdGhpblN1YmplY3RbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHROb2RlID0gY3kuc3RhdGUoJ3dpbmRvdycpLmRvY3VtZW50O1xuICAgIH1cblxuICAgIGxldCBpdGVyYXRvciA9IChjb250ZXh0Tm9kZS5vd25lckRvY3VtZW50IHx8IGNvbnRleHROb2RlKS5ldmFsdWF0ZShcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgY29udGV4dE5vZGVcbiAgICApO1xuXG4gICAgaWYgKGlzTnVtYmVyKGl0ZXJhdG9yKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyUmVzdWx0KGl0ZXJhdG9yKTtcbiAgICAgIGxvZy5jb25zb2xlUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWFBhdGg6IHNlbGVjdG9yLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc1N0cmluZyhpdGVyYXRvcikpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHN0cmluZ1Jlc3VsdChpdGVyYXRvcik7XG4gICAgICBsb2cuY29uc29sZVByb3BzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFhQYXRoOiBzZWxlY3RvcixcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKGl0ZXJhdG9yKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYm9vbGVhblJlc3VsdChpdGVyYXRvcik7XG4gICAgICBsb2cuY29uc29sZVByb3BzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFhQYXRoOiBzZWxlY3RvcixcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBub2RlID0gaXRlcmF0b3IuaXRlcmF0ZU5leHQoKTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgbm9kZSA9IGl0ZXJhdG9yLml0ZXJhdGVOZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGxvZy5jb25zb2xlUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWFBhdGg6IHNlbGVjdG9yLFxuICAgICAgICAgIHJlc3VsdDogbm9kZXMubGVuZ3RoID09PSAxID8gbm9kZXNbMF0gOiBub2RlcyxcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEb2N1bWVudCB0cmVlIG1vZGlmaWVkIGR1cmluZyBpdGVyYXRpb24nLCBlKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc29sdmVWYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gQ3lwcmVzcy5Qcm9taXNlLnRyeShnZXRWYWx1ZSkudGhlbigodmFsdWUpID0+IHtcbiAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gQ3lwcmVzcy4kKHZhbHVlKTtcbiAgICAgICAgLy8gQWRkIHRoZSBcIi5zZWxlY3RvclwiIHByb3BlcnR5IGJlY2F1c2UgQ3lwcmVzcyB1c2VzIGl0IGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YWx1ZS5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN5LnZlcmlmeVVwY29taW5nQXNzZXJ0aW9ucyh2YWx1ZSwgb3B0aW9ucywge1xuICAgICAgICBvblJldHJ5OiByZXNvbHZlVmFsdWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gcmVzb2x2ZVZhbHVlKCkudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAob3B0aW9ucy5sb2cgIT09IGZhbHNlKSB7XG4gICAgICAvLyBUT0RPIHNldCBmb3VuZCBlbGVtZW50cyBvbiB0aGUgY29tbWFuZCBsb2c/XG4gICAgICBDeXByZXNzLmxvZyhsb2cpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0pO1xufTtcblxuQ3lwcmVzcy5Db21tYW5kcy5hZGQoXG4gICd4cGF0aCcsXG4gIHsgcHJldlN1YmplY3Q6IFsnb3B0aW9uYWwnLCAnZWxlbWVudCcsICdkb2N1bWVudCddIH0sXG4gIHhwYXRoXG4pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcImN5cHJlc3MteHBhdGhcIjtcblxuZGVzY3JpYmUoXCJBcHAgQ29tcG9uZW50IFRlc3RzXCIsICgpID0+IHtcbiAgY29udGV4dChcIkRlc2t0b3AgVmlld3BvcnRcIiwgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgY3kudmlld3BvcnQoMTIwMCwgODAwKTsgLy8gRGVza3RvcCB2aWV3cG9ydFxuICAgICAgY3kudmlzaXQoXCIvXCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJWZXJpZmllcyB0aGF0IE5hdkJhciBpcyBkaXNwbGF5ZWQgb24gRGVza3RvcFwiLCAoKSA9PiB7XG4gICAgICBjeS5nZXQoXCJuYXZcIikuc2hvdWxkKFwiZXhpc3RcIikuYW5kKFwiYmUudmlzaWJsZVwiKTtcbiAgICB9KTtcblxuICAgIGl0KFwiVmVyaWZpZXMgdGhhdCB0aGUgSG9tZSBwYWdlIGlzIGRpc3BsYXllZCBvbiBEZXNrdG9wXCIsICgpID0+IHtcbiAgICAgIGN5LmdldChcIi5oZWxsb1wiKS5zaG91bGQoXCJleGlzdFwiKTtcbiAgICB9KTtcblxuICAgIGl0KFwiTmF2aWdhdGVzIHRvIEFib3V0IHBhZ2Ugb24gRGVza3RvcFwiLCAoKSA9PiB7XG4gICAgICBjeS5nZXQoXCJuYXYgYnV0dG9uXCIpLmNvbnRhaW5zKFwiQWJvdXRcIikuY2xpY2soKTtcbiAgICAgIGN5LnVybCgpLnNob3VsZChcImluY2x1ZGVcIiwgXCIvYWJvdXRcIik7XG4gICAgICBjeS5nZXQoXCIuYWJvdXQgaDFcIikuc2hvdWxkKFwiY29udGFpbi50ZXh0XCIsIFwiQWJvdXQgVXNcIik7XG4gICAgfSk7XG5cbiAgICBpdChcIkNoZWNrcyBlbGVtZW50cyB1c2luZyBYUGF0aCBvbiBEZXNrdG9wXCIsICgpID0+IHtcbiAgICAgIGN5LnhwYXRoKFwiLy9uYXZcIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgICBjeS54cGF0aChcIi8vZGl2W0BpZD0nYXBwJ11cIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnRleHQoXCJNb2JpbGUgVmlld3BvcnRcIiwgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgY3kudmlld3BvcnQoMzIwLCA1NjgpOyAvLyBNb2JpbGUgdmlld3BvcnRcbiAgICAgIGN5LnZpc2l0KFwiL1wiKTtcbiAgICB9KTtcblxuICAgIGl0KFwiVmVyaWZpZXMgdGhhdCBOYXZCYXIgaXMgZGlzcGxheWVkIG9uIE1vYmlsZVwiLCAoKSA9PiB7XG4gICAgICBjeS5nZXQoXCJuYXZcIikuc2hvdWxkKFwiZXhpc3RcIikuYW5kKFwiYmUudmlzaWJsZVwiKTtcbiAgICB9KTtcblxuICAgIGl0KFwiVmVyaWZpZXMgdGhhdCB0aGUgSG9tZSBwYWdlIGlzIGRpc3BsYXllZCBvbiBNb2JpbGVcIiwgKCkgPT4ge1xuICAgICAgY3kuZ2V0KFwiLmhlbGxvXCIpLnNob3VsZChcImV4aXN0XCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJOYXZpZ2F0ZXMgdG8gQWJvdXQgcGFnZSBvbiBNb2JpbGVcIiwgKCkgPT4ge1xuICAgICAgY3kuZ2V0KFwibmF2IGJ1dHRvblwiKS5jb250YWlucyhcIkFib3V0XCIpLmNsaWNrKCk7XG4gICAgICBjeS51cmwoKS5zaG91bGQoXCJpbmNsdWRlXCIsIFwiL2Fib3V0XCIpO1xuICAgICAgY3kuZ2V0KFwiLmFib3V0IGgxXCIpLnNob3VsZChcImNvbnRhaW4udGV4dFwiLCBcIkFib3V0IFVzXCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJDaGVja3MgZWxlbWVudHMgdXNpbmcgWFBhdGggb24gTW9iaWxlXCIsICgpID0+IHtcbiAgICAgIGN5LnhwYXRoKFwiLy9uYXZcIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgICBjeS54cGF0aChcIi8vZGl2W0BpZD0nYXBwJ11cIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=