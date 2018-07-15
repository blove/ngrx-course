# Jest Platform

For this course we'll be using [Jest](https://jestjs.io/en/) for writing and running our tests.

* Jest is an open source testing platform created and maintained by Facebook.
* Jest uses jsdom to mock the DOM (and therefore doesn't require a browser).
* Jest runs tests in parallel.
* The Jest CLI allows you to watch, run previously failed tests, and perform snapshot testing.

> Jest is really fast!

## Installation

Install Jest via:

```bash
npm install jest @types/jest -D
yarn add jest @types/jest -D
```

## Jest Configuration

Jest is configured in the **package.json** file.
There is also a **jest-global-mocks.ts** file that we can use to mock global variables and functions when executing our tests (remember, it doesn't use a browser).

Open **package.json** and add a new `jest` configuration:

```javascript
{
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.ts",
      "!src/**/*.module.ts",
      "!src/main.ts",
      "!src/polyfills.ts",
      "!src/environments/*.ts",
      "projects/simple-store/src/lib/**/*.ts",
      "!projects/simple-store/src/lib/**/*.module.ts",
      "!projects/simple-store/src/lib/index.ts",
      "!<rootDir>/setup-jest.ts",
      "!<rootDir>/jest-global-mocks.ts"
    ],
    "coverageReporters": [
      "html",
      "text"
    ],
    "modulePathIgnorePatterns": [
      "<rootDir>/dist"
    ],
    "moduleNameMapper": {
      "^@app/(.*)": "<rootDir>/src/app/$1",
      "^@env/(.*)": "<rootDir>/src/environments/$1"
    },
    "preset": "jest-preset-angular",
    "setupTestFrameworkScriptFile": "<rootDir>/setup-jest.ts",
    "testMatch": [
      "**/+(*.)+(spec|test).+(ts)?(x)"
    ],
    "testURL": "http://localhost"
  }
}
```

Create the **setup-jest.ts** file:

```javascript
import 'jest-preset-angular';
import './jest-global-mocks';
```

Create the **jest-global-mocks.ts** file:

```javascript
global['CSS'] = null;

const mock = () => {
  let storage = {};
  return {
    getItem: key => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ''),
    removeItem: key => delete storage[key],
    clear: () => (storage = {})
  };
};
Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
      getPropertyValue: prop => {
        return '';
      }
    };
  }
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  })
});
```

## Jasmine-like

Jest has a jasmine-like API.
This means that if you're comfortable writing unit tests using Jasmine, then you'll easily be able to pick up Jest.

There are a few common exceptions:

* Use `jest.fn()` to create spies instead of `createSpy()`.
* Use `mockReturnValue()` instead of `and.returnValue()`.
* Use `jest.spyOn()` instead of `jasmine.createSpy()`.

## Execute Jest

Execute the `test` script to run Jest:

```bash
npm test
yarn test
```

You can also use a watch mode via:

```bash
npm run test:watch
yarn test:watch
```

When in watch mode you can:

* Press a to run all tests.
* Press f to run only failed tests.
* Press p to filter by a filename regex pattern.
* Press t to filter by a test name regex pattern.
* Press q to quit watch mode.
* Press Enter to trigger a test run.