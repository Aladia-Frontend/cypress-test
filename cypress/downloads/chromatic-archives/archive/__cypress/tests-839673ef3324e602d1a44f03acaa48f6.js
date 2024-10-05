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
/*!********************************!*\
  !*** ./cypress/e2e/Home.cy.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cypress_xpath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-xpath */ "./node_modules/.pnpm/cypress-xpath@2.0.1/node_modules/cypress-xpath/src/index.js");
/* harmony import */ var cypress_xpath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_xpath__WEBPACK_IMPORTED_MODULE_0__);

describe("Home Page Tests", () => {
    context("Desktop Viewport", () => {
        beforeEach(() => {
            cy.viewport(1200, 800); // Desktop viewport
            cy.visit("/"); // Assuming the home page is at the root path
        });
        it("Checks elements using CSS Selectors on Desktop", () => {
            cy.get(".hello h1").should("exist");
            cy.get(".hello p").should("exist");
            cy.get(".hello h3").should("have.length", 3);
            cy.get(".hello ul").should("have.length", 3);
            cy.get(".hello ul li a").should("have.length.at.least", 5);
        });
        it("Checks elements using XPath on Desktop", () => {
            cy.xpath("//div[contains(@class, 'hello')]/h1").should("exist");
            cy.xpath("//div[contains(@class, 'hello')]//p").should("exist");
            cy.xpath("//div[contains(@class, 'hello')]//h3").should("have.length", 3);
            cy.xpath("//div[contains(@class, 'hello')]//ul").should("have.length", 3);
            cy.xpath("//div[contains(@class, 'hello')]//ul//li//a").should("have.length.at.least", 5);
        });
    });
    context("Mobile Viewport", () => {
        beforeEach(() => {
            cy.viewport(320, 568); // Mobile viewport
            cy.visit("/");
        });
        it("Checks elements using CSS Selectors on Mobile", () => {
            cy.get(".hello h1").should("exist");
            cy.get(".hello p").should("exist");
            cy.get(".hello h3").should("have.length", 3);
            cy.get(".hello ul").should("have.length", 3);
            cy.get(".hello ul li a").should("have.length.at.least", 5);
        });
        it("Checks elements using XPath on Mobile", () => {
            cy.xpath("//div[contains(@class, 'hello')]/h1").should("exist");
            cy.xpath("//div[contains(@class, 'hello')]//p").should("exist");
            cy.xpath("//div[contains(@class, 'hello')]//h3").should("have.length", 3);
            cy.xpath("//div[contains(@class, 'hello')]//ul").should("have.length", 3);
            cy.xpath("//div[contains(@class, 'hello')]//ul//li//a").should("have.length.at.least", 5);
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLEVBQUU7WUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxNQUFNLENBQzVELHNCQUFzQixFQUN0QixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3MtdGVzdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jeXByZXNzLXhwYXRoQDIuMC4xL25vZGVfbW9kdWxlcy9jeXByZXNzLXhwYXRoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0Ly4vY3lwcmVzcy9lMmUvSG9tZS5jeS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxuXG4vKipcbiAqIEFkZHMgWFBhdGggc3VwcG9ydCB0byBDeXByZXNzIHVzaW5nIGEgY3VzdG9tIGNvbW1hbmQuXG4gKlxuICogQHNlZSBodHRwczovL2RldmhpbnRzLmlvL3hwYXRoXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvSW50cm9kdWN0aW9uX3RvX3VzaW5nX1hQYXRoX2luX0phdmFTY3JpcHRcbiAqIEBleGFtcGxlXG4gYGBganNcbiBpdCgnZmluZHMgbGlzdCBpdGVtcycsICgpID0+IHtcbiAgICBjeS54cGF0aCgnLy91bFtAY2xhc3M9XCJ0b2RvLWxpc3RcIl0vL2xpJylcbiAgICAgIC5zaG91bGQoJ2hhdmUubGVuZ3RoJywgMylcbiAgfSlcbiBgYGBcbiAqL1xuY29uc3QgeHBhdGggPSAoc3ViamVjdCwgc2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAvKiBnbG9iYWwgWFBhdGhSZXN1bHQgKi9cbiAgY29uc3QgaXNOdW1iZXIgPSAoeHBhdGhSZXN1bHQpID0+XG4gICAgeHBhdGhSZXN1bHQucmVzdWx0VHlwZSA9PT0gWFBhdGhSZXN1bHQuTlVNQkVSX1RZUEU7XG4gIGNvbnN0IG51bWJlclJlc3VsdCA9ICh4cGF0aFJlc3VsdCkgPT4geHBhdGhSZXN1bHQubnVtYmVyVmFsdWU7XG5cbiAgY29uc3QgaXNTdHJpbmcgPSAoeHBhdGhSZXN1bHQpID0+XG4gICAgeHBhdGhSZXN1bHQucmVzdWx0VHlwZSA9PT0gWFBhdGhSZXN1bHQuU1RSSU5HX1RZUEU7XG4gIGNvbnN0IHN0cmluZ1Jlc3VsdCA9ICh4cGF0aFJlc3VsdCkgPT4geHBhdGhSZXN1bHQuc3RyaW5nVmFsdWU7XG5cbiAgY29uc3QgaXNCb29sZWFuID0gKHhwYXRoUmVzdWx0KSA9PlxuICAgIHhwYXRoUmVzdWx0LnJlc3VsdFR5cGUgPT09IFhQYXRoUmVzdWx0LkJPT0xFQU5fVFlQRTtcbiAgY29uc3QgYm9vbGVhblJlc3VsdCA9ICh4cGF0aFJlc3VsdCkgPT4geHBhdGhSZXN1bHQuYm9vbGVhblZhbHVlO1xuXG4gIGNvbnN0IGlzUHJpbWl0aXZlID0gKHgpID0+XG4gICAgQ3lwcmVzcy5fLmlzTnVtYmVyKHgpIHx8IEN5cHJlc3MuXy5pc1N0cmluZyh4KSB8fCBDeXByZXNzLl8uaXNCb29sZWFuKHgpO1xuXG4gIC8vIG9wdGlvbnMgdG8gbG9nIGxhdGVyXG4gIGNvbnN0IGxvZyA9IHtcbiAgICBuYW1lOiAneHBhdGgnLFxuICAgIG1lc3NhZ2U6IHNlbGVjdG9yLFxuICB9O1xuXG4gIGlmIChDeXByZXNzLmRvbS5pc0VsZW1lbnQoc3ViamVjdCkgJiYgc3ViamVjdC5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ3hwYXRoKCkgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIGEgc2luZ2xlIGVsZW1lbnQuIFlvdXIgc3ViamVjdCBjb250YWluZWQgJyArXG4gICAgICAgIHN1YmplY3QubGVuZ3RoICtcbiAgICAgICAgJyBlbGVtZW50cy4nXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIGxldCBub2RlcyA9IFtdO1xuICAgIGxldCBjb250ZXh0Tm9kZTtcbiAgICBsZXQgd2l0aGluU3ViamVjdCA9IGN5LnN0YXRlKCd3aXRoaW5TdWJqZWN0Jyk7XG5cbiAgICBpZiAoQ3lwcmVzcy5kb20uaXNFbGVtZW50KHN1YmplY3QpKSB7XG4gICAgICBjb250ZXh0Tm9kZSA9IHN1YmplY3RbMF07XG4gICAgfSBlbHNlIGlmIChDeXByZXNzLmRvbS5pc0RvY3VtZW50KHN1YmplY3QpKSB7XG4gICAgICBjb250ZXh0Tm9kZSA9IHN1YmplY3Q7XG4gICAgfSBlbHNlIGlmICh3aXRoaW5TdWJqZWN0KSB7XG4gICAgICBjb250ZXh0Tm9kZSA9IHdpdGhpblN1YmplY3RbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHROb2RlID0gY3kuc3RhdGUoJ3dpbmRvdycpLmRvY3VtZW50O1xuICAgIH1cblxuICAgIGxldCBpdGVyYXRvciA9IChjb250ZXh0Tm9kZS5vd25lckRvY3VtZW50IHx8IGNvbnRleHROb2RlKS5ldmFsdWF0ZShcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgY29udGV4dE5vZGVcbiAgICApO1xuXG4gICAgaWYgKGlzTnVtYmVyKGl0ZXJhdG9yKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gbnVtYmVyUmVzdWx0KGl0ZXJhdG9yKTtcbiAgICAgIGxvZy5jb25zb2xlUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWFBhdGg6IHNlbGVjdG9yLFxuICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc1N0cmluZyhpdGVyYXRvcikpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHN0cmluZ1Jlc3VsdChpdGVyYXRvcik7XG4gICAgICBsb2cuY29uc29sZVByb3BzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFhQYXRoOiBzZWxlY3RvcixcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoaXNCb29sZWFuKGl0ZXJhdG9yKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYm9vbGVhblJlc3VsdChpdGVyYXRvcik7XG4gICAgICBsb2cuY29uc29sZVByb3BzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFhQYXRoOiBzZWxlY3RvcixcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBub2RlID0gaXRlcmF0b3IuaXRlcmF0ZU5leHQoKTtcblxuICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgbm9kZSA9IGl0ZXJhdG9yLml0ZXJhdGVOZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIGxvZy5jb25zb2xlUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWFBhdGg6IHNlbGVjdG9yLFxuICAgICAgICAgIHJlc3VsdDogbm9kZXMubGVuZ3RoID09PSAxID8gbm9kZXNbMF0gOiBub2RlcyxcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEb2N1bWVudCB0cmVlIG1vZGlmaWVkIGR1cmluZyBpdGVyYXRpb24nLCBlKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc29sdmVWYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gQ3lwcmVzcy5Qcm9taXNlLnRyeShnZXRWYWx1ZSkudGhlbigodmFsdWUpID0+IHtcbiAgICAgIGlmICghaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gQ3lwcmVzcy4kKHZhbHVlKTtcbiAgICAgICAgLy8gQWRkIHRoZSBcIi5zZWxlY3RvclwiIHByb3BlcnR5IGJlY2F1c2UgQ3lwcmVzcyB1c2VzIGl0IGZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YWx1ZS5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGN5LnZlcmlmeVVwY29taW5nQXNzZXJ0aW9ucyh2YWx1ZSwgb3B0aW9ucywge1xuICAgICAgICBvblJldHJ5OiByZXNvbHZlVmFsdWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gcmVzb2x2ZVZhbHVlKCkudGhlbigodmFsdWUpID0+IHtcbiAgICBpZiAob3B0aW9ucy5sb2cgIT09IGZhbHNlKSB7XG4gICAgICAvLyBUT0RPIHNldCBmb3VuZCBlbGVtZW50cyBvbiB0aGUgY29tbWFuZCBsb2c/XG4gICAgICBDeXByZXNzLmxvZyhsb2cpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0pO1xufTtcblxuQ3lwcmVzcy5Db21tYW5kcy5hZGQoXG4gICd4cGF0aCcsXG4gIHsgcHJldlN1YmplY3Q6IFsnb3B0aW9uYWwnLCAnZWxlbWVudCcsICdkb2N1bWVudCddIH0sXG4gIHhwYXRoXG4pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcImN5cHJlc3MteHBhdGhcIjtcblxuZGVzY3JpYmUoXCJIb21lIFBhZ2UgVGVzdHNcIiwgKCkgPT4ge1xuICBjb250ZXh0KFwiRGVza3RvcCBWaWV3cG9ydFwiLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBjeS52aWV3cG9ydCgxMjAwLCA4MDApOyAvLyBEZXNrdG9wIHZpZXdwb3J0XG4gICAgICBjeS52aXNpdChcIi9cIik7IC8vIEFzc3VtaW5nIHRoZSBob21lIHBhZ2UgaXMgYXQgdGhlIHJvb3QgcGF0aFxuICAgIH0pO1xuXG4gICAgaXQoXCJDaGVja3MgZWxlbWVudHMgdXNpbmcgQ1NTIFNlbGVjdG9ycyBvbiBEZXNrdG9wXCIsICgpID0+IHtcbiAgICAgIGN5LmdldChcIi5oZWxsbyBoMVwiKS5zaG91bGQoXCJleGlzdFwiKTtcbiAgICAgIGN5LmdldChcIi5oZWxsbyBwXCIpLnNob3VsZChcImV4aXN0XCIpO1xuICAgICAgY3kuZ2V0KFwiLmhlbGxvIGgzXCIpLnNob3VsZChcImhhdmUubGVuZ3RoXCIsIDMpO1xuICAgICAgY3kuZ2V0KFwiLmhlbGxvIHVsXCIpLnNob3VsZChcImhhdmUubGVuZ3RoXCIsIDMpO1xuICAgICAgY3kuZ2V0KFwiLmhlbGxvIHVsIGxpIGFcIikuc2hvdWxkKFwiaGF2ZS5sZW5ndGguYXQubGVhc3RcIiwgNSk7XG4gICAgfSk7XG5cbiAgICBpdChcIkNoZWNrcyBlbGVtZW50cyB1c2luZyBYUGF0aCBvbiBEZXNrdG9wXCIsICgpID0+IHtcbiAgICAgIGN5LnhwYXRoKFwiLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnaGVsbG8nKV0vaDFcIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgICBjeS54cGF0aChcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2hlbGxvJyldLy9wXCIpLnNob3VsZChcImV4aXN0XCIpO1xuICAgICAgY3kueHBhdGgoXCIvL2Rpdltjb250YWlucyhAY2xhc3MsICdoZWxsbycpXS8vaDNcIikuc2hvdWxkKFwiaGF2ZS5sZW5ndGhcIiwgMyk7XG4gICAgICBjeS54cGF0aChcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2hlbGxvJyldLy91bFwiKS5zaG91bGQoXCJoYXZlLmxlbmd0aFwiLCAzKTtcbiAgICAgIGN5LnhwYXRoKFwiLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnaGVsbG8nKV0vL3VsLy9saS8vYVwiKS5zaG91bGQoXG4gICAgICAgIFwiaGF2ZS5sZW5ndGguYXQubGVhc3RcIixcbiAgICAgICAgNVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29udGV4dChcIk1vYmlsZSBWaWV3cG9ydFwiLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBjeS52aWV3cG9ydCgzMjAsIDU2OCk7IC8vIE1vYmlsZSB2aWV3cG9ydFxuICAgICAgY3kudmlzaXQoXCIvXCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJDaGVja3MgZWxlbWVudHMgdXNpbmcgQ1NTIFNlbGVjdG9ycyBvbiBNb2JpbGVcIiwgKCkgPT4ge1xuICAgICAgY3kuZ2V0KFwiLmhlbGxvIGgxXCIpLnNob3VsZChcImV4aXN0XCIpO1xuICAgICAgY3kuZ2V0KFwiLmhlbGxvIHBcIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgICBjeS5nZXQoXCIuaGVsbG8gaDNcIikuc2hvdWxkKFwiaGF2ZS5sZW5ndGhcIiwgMyk7XG4gICAgICBjeS5nZXQoXCIuaGVsbG8gdWxcIikuc2hvdWxkKFwiaGF2ZS5sZW5ndGhcIiwgMyk7XG4gICAgICBjeS5nZXQoXCIuaGVsbG8gdWwgbGkgYVwiKS5zaG91bGQoXCJoYXZlLmxlbmd0aC5hdC5sZWFzdFwiLCA1KTtcbiAgICB9KTtcblxuICAgIGl0KFwiQ2hlY2tzIGVsZW1lbnRzIHVzaW5nIFhQYXRoIG9uIE1vYmlsZVwiLCAoKSA9PiB7XG4gICAgICBjeS54cGF0aChcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2hlbGxvJyldL2gxXCIpLnNob3VsZChcImV4aXN0XCIpO1xuICAgICAgY3kueHBhdGgoXCIvL2Rpdltjb250YWlucyhAY2xhc3MsICdoZWxsbycpXS8vcFwiKS5zaG91bGQoXCJleGlzdFwiKTtcbiAgICAgIGN5LnhwYXRoKFwiLy9kaXZbY29udGFpbnMoQGNsYXNzLCAnaGVsbG8nKV0vL2gzXCIpLnNob3VsZChcImhhdmUubGVuZ3RoXCIsIDMpO1xuICAgICAgY3kueHBhdGgoXCIvL2Rpdltjb250YWlucyhAY2xhc3MsICdoZWxsbycpXS8vdWxcIikuc2hvdWxkKFwiaGF2ZS5sZW5ndGhcIiwgMyk7XG4gICAgICBjeS54cGF0aChcIi8vZGl2W2NvbnRhaW5zKEBjbGFzcywgJ2hlbGxvJyldLy91bC8vbGkvL2FcIikuc2hvdWxkKFxuICAgICAgICBcImhhdmUubGVuZ3RoLmF0LmxlYXN0XCIsXG4gICAgICAgIDVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=