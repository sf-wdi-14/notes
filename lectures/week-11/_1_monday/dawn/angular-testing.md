# Angular Testing
Lecture on testing an Angular app.

# Objective
Students will be able to...

- Implement service, controller, filter, and directive tests using grunt
- Test drive their Angular app

# Link
Knowing how important test driven development is, how do we apply it to an Angular app?

# Educate and Engage
When creating your app with Yeoman, it comes with a `test` app by default. You can run the tests by running `$ grunt test`. This command will run all your files in `test/spec` using the testing framework [Jasmine](https://github.com/jasmine/jasmine).

Testing an Angular app is *very* simple. The syntax is very similar to Mocha and RSpec (which we both already know), and always follows the same pattern:

```javascript
'use strict';

describe('Something', function() {
	beforeEach(module('appName'));

	it('does something', inject(function(inject something here) {
		// write expectation here
	}));
});
```

The only two things that are new in here are:

1. Requiring the app module to make the app's controllers, filters, services, directives etc. available
2. Injecting the controller, filter, service, directive etc. you want to test into your test

You will always need to include the app module in your tests. Once you have injected what you want to test (e.g., a filter), you have everything you need to write powerful tests.

Good to know: Files you add to `app/scripts` will automatically be loaded for your tests, even if they're in subdirectories.

## Example Tests
### Example filter test

```javascript
'use strict';

describe('Filter: Reverse', function() {
	beforeEach(module('angularTestsApp'));

	beforeEach(inject(function($filter, reverseFilter) {}));

	it('has a reverse filter', function($filter) {
		expect($filter('reverse')).not.toBeNull();
	});

	it('reverses a given string', function(reverseFilter) {
		expect(reverseFilter('hello')).toEqual('olleh');
	});
});
```

### Example controller test
```javascript
describe('Controller: MainCtrl', function () {
  beforeEach(module('angularTestsApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
```

### Example directive test
```javascript
describe("Directive: plain", function() {
	var element;
	var $scope;

	beforeEach(module("angularTestsApp"));
	
	beforeEach(inject(function($compile, $rootScope) {
		$scope = $rootScope;
		element = angular.element("<div plain></div>");
		$compile(element)($rootScope)
	}));

	describe("plain", function() {
		it("adds a class of plain", function() {
			expect(element.hasClass("plain")).toBe(true);
		})
	})
})
```

### Example service test
```javascript
'use strict';

describe('Service: Book', function() {
	beforeEach(module("angularTestsApp"));

	var $injector,
			Book;

	beforeEach(inject(function() {
		$injector = angular.injector(['angularTestsApp']);
		Book = $injector.get('Book');
	}));

	describe('#all()', function() {
		it('returns an empty array', function() {
			expect(Book.all()).toEqual([]);
		});
	});
});
```

You can also find these tests in this [example repo](https://github.com/sf-wdi-14/angular-example-tests).

# Active Learning
## Analyze above test examples
Describe what the above code snippets test. Try and understand what each line does. Also, try and answer the following questions:

1. What do all tests have in common?
2. What behavior is unique to each test?
3. Which part of each test is setup, which part contains the actual assertions?

## Code Along
Let's build a TODO list together! We will test drive it.

# Reflect
- [Angular's official testing guide](https://docs.angularjs.org/guide/unit-testing)
- [Tutorial: Testing overview](https://egghead.io/lessons/angularjs-testing-overview)
- [Tutorial: Testing directives](https://egghead.io/lessons/angularjs-unit-testing-a-directive)
- [e2e testing](https://code.angularjs.org/1.2.26/docs/guide/e2e-testing)

# Now and Then
You will want to test drive every Angular app you build. It will make your app more solid and robust, and you really know for sure that everything is working as intended, simply by typing `$ grunt test`.

Combined with a test driven Rails backend that your app can communicate with, we can add another point to the list of advantages of separating your front end app from an API-only backend: **running tests concurrently**. Acceptance tests tend to be rather slow in Rails, so letting your front end handle them instead can make them faster. At the very least, you will be able to test your backend and your front end concurrently - simply by having two terminal windows open and running `$ rspec` in your Rails project, and `$ grunt test` in your Angular app.
