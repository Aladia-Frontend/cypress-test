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
/*!**********************************!*\
  !*** ./cypress/e2e/NavBar.cy.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cypress_xpath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cypress-xpath */ "./node_modules/.pnpm/cypress-xpath@2.0.1/node_modules/cypress-xpath/src/index.js");
/* harmony import */ var cypress_xpath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cypress_xpath__WEBPACK_IMPORTED_MODULE_0__);

describe("NavBar Component Tests", () => {
    context("Desktop Viewport", () => {
        beforeEach(() => {
            cy.viewport(1200, 800); // Desktop viewport
            cy.visit("/"); // Ensure NavBar is visible
        });
        it("Checks navigation buttons using CSS Selectors on Desktop", () => {
            cy.get("nav").should("exist");
            cy.get("nav button").should("have.length.at.least", 1);
            cy.get("nav button").each(($btn) => {
                cy.wrap($btn).should("be.visible");
            });
        });
        it("Navigates using the first button on Desktop", () => {
            cy.get("nav button").first().click();
            // You may need to adjust the expected URL or behavior
            cy.url().should("not.eq", "/");
        });
        it("Checks elements using XPath on Desktop", () => {
            cy.xpath("//nav//button").should("have.length.at.least", 1);
        });
    });
    context("Mobile Viewport", () => {
        beforeEach(() => {
            cy.viewport(320, 568); // Mobile viewport
            cy.visit("/");
        });
        it("Checks navigation buttons using CSS Selectors on Mobile", () => {
            cy.get("nav").should("exist");
            cy.get("nav button").should("have.length.at.least", 1);
            cy.get("nav button").each(($btn) => {
                cy.wrap($btn).should("be.visible");
            });
        });
        it("Navigates using the first button on Mobile", () => {
            cy.get("nav button").first().click();
            cy.url().should("not.eq", "/");
        });
        it("Checks elements using XPath on Mobile", () => {
            cy.xpath("//nav//button").should("have.length.at.least", 1);
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUUsR0FBRyxFQUFFO1lBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3MtdGVzdC8uL25vZGVfbW9kdWxlcy8ucG5wbS9jeXByZXNzLXhwYXRoQDIuMC4xL25vZGVfbW9kdWxlcy9jeXByZXNzLXhwYXRoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXRlc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2N5cHJlc3MtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY3lwcmVzcy10ZXN0Ly4vY3lwcmVzcy9lMmUvTmF2QmFyLmN5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XG5cbi8qKlxuICogQWRkcyBYUGF0aCBzdXBwb3J0IHRvIEN5cHJlc3MgdXNpbmcgYSBjdXN0b20gY29tbWFuZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZGV2aGludHMuaW8veHBhdGhcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9JbnRyb2R1Y3Rpb25fdG9fdXNpbmdfWFBhdGhfaW5fSmF2YVNjcmlwdFxuICogQGV4YW1wbGVcbiBgYGBqc1xuIGl0KCdmaW5kcyBsaXN0IGl0ZW1zJywgKCkgPT4ge1xuICAgIGN5LnhwYXRoKCcvL3VsW0BjbGFzcz1cInRvZG8tbGlzdFwiXS8vbGknKVxuICAgICAgLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAzKVxuICB9KVxuIGBgYFxuICovXG5jb25zdCB4cGF0aCA9IChzdWJqZWN0LCBzZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIC8qIGdsb2JhbCBYUGF0aFJlc3VsdCAqL1xuICBjb25zdCBpc051bWJlciA9ICh4cGF0aFJlc3VsdCkgPT5cbiAgICB4cGF0aFJlc3VsdC5yZXN1bHRUeXBlID09PSBYUGF0aFJlc3VsdC5OVU1CRVJfVFlQRTtcbiAgY29uc3QgbnVtYmVyUmVzdWx0ID0gKHhwYXRoUmVzdWx0KSA9PiB4cGF0aFJlc3VsdC5udW1iZXJWYWx1ZTtcblxuICBjb25zdCBpc1N0cmluZyA9ICh4cGF0aFJlc3VsdCkgPT5cbiAgICB4cGF0aFJlc3VsdC5yZXN1bHRUeXBlID09PSBYUGF0aFJlc3VsdC5TVFJJTkdfVFlQRTtcbiAgY29uc3Qgc3RyaW5nUmVzdWx0ID0gKHhwYXRoUmVzdWx0KSA9PiB4cGF0aFJlc3VsdC5zdHJpbmdWYWx1ZTtcblxuICBjb25zdCBpc0Jvb2xlYW4gPSAoeHBhdGhSZXN1bHQpID0+XG4gICAgeHBhdGhSZXN1bHQucmVzdWx0VHlwZSA9PT0gWFBhdGhSZXN1bHQuQk9PTEVBTl9UWVBFO1xuICBjb25zdCBib29sZWFuUmVzdWx0ID0gKHhwYXRoUmVzdWx0KSA9PiB4cGF0aFJlc3VsdC5ib29sZWFuVmFsdWU7XG5cbiAgY29uc3QgaXNQcmltaXRpdmUgPSAoeCkgPT5cbiAgICBDeXByZXNzLl8uaXNOdW1iZXIoeCkgfHwgQ3lwcmVzcy5fLmlzU3RyaW5nKHgpIHx8IEN5cHJlc3MuXy5pc0Jvb2xlYW4oeCk7XG5cbiAgLy8gb3B0aW9ucyB0byBsb2cgbGF0ZXJcbiAgY29uc3QgbG9nID0ge1xuICAgIG5hbWU6ICd4cGF0aCcsXG4gICAgbWVzc2FnZTogc2VsZWN0b3IsXG4gIH07XG5cbiAgaWYgKEN5cHJlc3MuZG9tLmlzRWxlbWVudChzdWJqZWN0KSAmJiBzdWJqZWN0Lmxlbmd0aCA+IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAneHBhdGgoKSBjYW4gb25seSBiZSBjYWxsZWQgb24gYSBzaW5nbGUgZWxlbWVudC4gWW91ciBzdWJqZWN0IGNvbnRhaW5lZCAnICtcbiAgICAgICAgc3ViamVjdC5sZW5ndGggK1xuICAgICAgICAnIGVsZW1lbnRzLidcbiAgICApO1xuICB9XG5cbiAgY29uc3QgZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgbGV0IG5vZGVzID0gW107XG4gICAgbGV0IGNvbnRleHROb2RlO1xuICAgIGxldCB3aXRoaW5TdWJqZWN0ID0gY3kuc3RhdGUoJ3dpdGhpblN1YmplY3QnKTtcblxuICAgIGlmIChDeXByZXNzLmRvbS5pc0VsZW1lbnQoc3ViamVjdCkpIHtcbiAgICAgIGNvbnRleHROb2RlID0gc3ViamVjdFswXTtcbiAgICB9IGVsc2UgaWYgKEN5cHJlc3MuZG9tLmlzRG9jdW1lbnQoc3ViamVjdCkpIHtcbiAgICAgIGNvbnRleHROb2RlID0gc3ViamVjdDtcbiAgICB9IGVsc2UgaWYgKHdpdGhpblN1YmplY3QpIHtcbiAgICAgIGNvbnRleHROb2RlID0gd2l0aGluU3ViamVjdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dE5vZGUgPSBjeS5zdGF0ZSgnd2luZG93JykuZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgbGV0IGl0ZXJhdG9yID0gKGNvbnRleHROb2RlLm93bmVyRG9jdW1lbnQgfHwgY29udGV4dE5vZGUpLmV2YWx1YXRlKFxuICAgICAgc2VsZWN0b3IsXG4gICAgICBjb250ZXh0Tm9kZVxuICAgICk7XG5cbiAgICBpZiAoaXNOdW1iZXIoaXRlcmF0b3IpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBudW1iZXJSZXN1bHQoaXRlcmF0b3IpO1xuICAgICAgbG9nLmNvbnNvbGVQcm9wcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBYUGF0aDogc2VsZWN0b3IsXG4gICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKGl0ZXJhdG9yKSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc3RyaW5nUmVzdWx0KGl0ZXJhdG9yKTtcbiAgICAgIGxvZy5jb25zb2xlUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWFBhdGg6IHNlbGVjdG9yLFxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmIChpc0Jvb2xlYW4oaXRlcmF0b3IpKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBib29sZWFuUmVzdWx0KGl0ZXJhdG9yKTtcbiAgICAgIGxvZy5jb25zb2xlUHJvcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgWFBhdGg6IHNlbGVjdG9yLFxuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IG5vZGUgPSBpdGVyYXRvci5pdGVyYXRlTmV4dCgpO1xuXG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlID0gaXRlcmF0b3IuaXRlcmF0ZU5leHQoKTtcbiAgICAgIH1cblxuICAgICAgbG9nLmNvbnNvbGVQcm9wcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBYUGF0aDogc2VsZWN0b3IsXG4gICAgICAgICAgcmVzdWx0OiBub2Rlcy5sZW5ndGggPT09IDEgPyBub2Rlc1swXSA6IG5vZGVzLFxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG5vZGVzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RvY3VtZW50IHRyZWUgbW9kaWZpZWQgZHVyaW5nIGl0ZXJhdGlvbicsIGUpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVzb2x2ZVZhbHVlID0gKCkgPT4ge1xuICAgIHJldHVybiBDeXByZXNzLlByb21pc2UudHJ5KGdldFZhbHVlKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBDeXByZXNzLiQodmFsdWUpO1xuICAgICAgICAvLyBBZGQgdGhlIFwiLnNlbGVjdG9yXCIgcHJvcGVydHkgYmVjYXVzZSBDeXByZXNzIHVzZXMgaXQgZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIHZhbHVlLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3kudmVyaWZ5VXBjb21pbmdBc3NlcnRpb25zKHZhbHVlLCBvcHRpb25zLCB7XG4gICAgICAgIG9uUmV0cnk6IHJlc29sdmVWYWx1ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiByZXNvbHZlVmFsdWUoKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgIGlmIChvcHRpb25zLmxvZyAhPT0gZmFsc2UpIHtcbiAgICAgIC8vIFRPRE8gc2V0IGZvdW5kIGVsZW1lbnRzIG9uIHRoZSBjb21tYW5kIGxvZz9cbiAgICAgIEN5cHJlc3MubG9nKGxvZyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSk7XG59O1xuXG5DeXByZXNzLkNvbW1hbmRzLmFkZChcbiAgJ3hwYXRoJyxcbiAgeyBwcmV2U3ViamVjdDogWydvcHRpb25hbCcsICdlbGVtZW50JywgJ2RvY3VtZW50J10gfSxcbiAgeHBhdGhcbik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiY3lwcmVzcy14cGF0aFwiO1xuXG5kZXNjcmliZShcIk5hdkJhciBDb21wb25lbnQgVGVzdHNcIiwgKCkgPT4ge1xuICBjb250ZXh0KFwiRGVza3RvcCBWaWV3cG9ydFwiLCAoKSA9PiB7XG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICBjeS52aWV3cG9ydCgxMjAwLCA4MDApOyAvLyBEZXNrdG9wIHZpZXdwb3J0XG4gICAgICBjeS52aXNpdChcIi9cIik7IC8vIEVuc3VyZSBOYXZCYXIgaXMgdmlzaWJsZVxuICAgIH0pO1xuXG4gICAgaXQoXCJDaGVja3MgbmF2aWdhdGlvbiBidXR0b25zIHVzaW5nIENTUyBTZWxlY3RvcnMgb24gRGVza3RvcFwiLCAoKSA9PiB7XG4gICAgICBjeS5nZXQoXCJuYXZcIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgICBjeS5nZXQoXCJuYXYgYnV0dG9uXCIpLnNob3VsZChcImhhdmUubGVuZ3RoLmF0LmxlYXN0XCIsIDEpO1xuICAgICAgY3kuZ2V0KFwibmF2IGJ1dHRvblwiKS5lYWNoKCgkYnRuKSA9PiB7XG4gICAgICAgIGN5LndyYXAoJGJ0bikuc2hvdWxkKFwiYmUudmlzaWJsZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoXCJOYXZpZ2F0ZXMgdXNpbmcgdGhlIGZpcnN0IGJ1dHRvbiBvbiBEZXNrdG9wXCIsICgpID0+IHtcbiAgICAgIGN5LmdldChcIm5hdiBidXR0b25cIikuZmlyc3QoKS5jbGljaygpO1xuICAgICAgLy8gWW91IG1heSBuZWVkIHRvIGFkanVzdCB0aGUgZXhwZWN0ZWQgVVJMIG9yIGJlaGF2aW9yXG4gICAgICBjeS51cmwoKS5zaG91bGQoXCJub3QuZXFcIiwgXCIvXCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJDaGVja3MgZWxlbWVudHMgdXNpbmcgWFBhdGggb24gRGVza3RvcFwiLCAoKSA9PiB7XG4gICAgICBjeS54cGF0aChcIi8vbmF2Ly9idXR0b25cIikuc2hvdWxkKFwiaGF2ZS5sZW5ndGguYXQubGVhc3RcIiwgMSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnRleHQoXCJNb2JpbGUgVmlld3BvcnRcIiwgKCkgPT4ge1xuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgY3kudmlld3BvcnQoMzIwLCA1NjgpOyAvLyBNb2JpbGUgdmlld3BvcnRcbiAgICAgIGN5LnZpc2l0KFwiL1wiKTtcbiAgICB9KTtcblxuICAgIGl0KFwiQ2hlY2tzIG5hdmlnYXRpb24gYnV0dG9ucyB1c2luZyBDU1MgU2VsZWN0b3JzIG9uIE1vYmlsZVwiLCAoKSA9PiB7XG4gICAgICBjeS5nZXQoXCJuYXZcIikuc2hvdWxkKFwiZXhpc3RcIik7XG4gICAgICBjeS5nZXQoXCJuYXYgYnV0dG9uXCIpLnNob3VsZChcImhhdmUubGVuZ3RoLmF0LmxlYXN0XCIsIDEpO1xuICAgICAgY3kuZ2V0KFwibmF2IGJ1dHRvblwiKS5lYWNoKCgkYnRuKSA9PiB7XG4gICAgICAgIGN5LndyYXAoJGJ0bikuc2hvdWxkKFwiYmUudmlzaWJsZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoXCJOYXZpZ2F0ZXMgdXNpbmcgdGhlIGZpcnN0IGJ1dHRvbiBvbiBNb2JpbGVcIiwgKCkgPT4ge1xuICAgICAgY3kuZ2V0KFwibmF2IGJ1dHRvblwiKS5maXJzdCgpLmNsaWNrKCk7XG4gICAgICBjeS51cmwoKS5zaG91bGQoXCJub3QuZXFcIiwgXCIvXCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJDaGVja3MgZWxlbWVudHMgdXNpbmcgWFBhdGggb24gTW9iaWxlXCIsICgpID0+IHtcbiAgICAgIGN5LnhwYXRoKFwiLy9uYXYvL2J1dHRvblwiKS5zaG91bGQoXCJoYXZlLmxlbmd0aC5hdC5sZWFzdFwiLCAxKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==