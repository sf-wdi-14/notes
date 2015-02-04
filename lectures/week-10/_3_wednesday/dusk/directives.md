# Directives
Lecture on directive in Angular.

# Objective
Students will be able to...

- Understand the purpose of directives
- Implement their own directives
- Distinguish between different directive restrictions
- Apply the concept of transclusion and wrapping elements
- Understand the role of linking
- Implement directive scopes
- Identify the roles of `=`, `@` and `&` for scope values

# Link
Directives usually serve three main purposes:

1. DRY up your Angular code and make it re-usable
2. Make your HTML more semantic and meaningful
3. DOM-manipulation (hard without directives)

They allow you to write custom attributes on HTML elements, or even your very own HTML elements.

# Educate and Engage
The syntax to declare a directive follows the same pattern as controllers and services:

```javascript
app.directive("nameOfDirective", function() {
  return {
  	// specifications here
  };
})
```

Note that the callback only returns an object with certain properties (which we will explore below).

## The Most Basic Directive

```javascript
app.directive("superman", function() {
  return {
    restrict: "E", // make this a new HTML element
    template: "<div>Here I am to save the day</div>"
  };
});
```

```html
<superman></superman>
```

Eventually, this will show up on your page:

```html
<div>Here I am to save the day</div>
```

Usually, it's advised to put your template into a separate file and reference it with `templateUrl` instead of `template`:

```javascript
app.directive("superman", function() {
  return {
    restrict: "E", // make this a new HTML element
    templateUrl: "path/to/template.html"
  };
})
```

What if we wanted to achieve the same result with a simple div tag, instead of inventing our own `superman` tag? We could instead decide to use the directive as an HTML attribute:

```javascript
app.directive("superman", function() {
  return {
    restrict: "A", // make this a new HTML *attribute*
    templateUrl: "path/to/template.html"
  };
})
```

Now we can achieve the same result by doing this:

```html
<div superman></div>
```

## Scope

Let's stick with the element variant for now (`E`).

What if we wanted to pass in superman's strength as an additional attribute? For example, this

```html
<superman strength="1000"></superman>
```html

should display

```html
Superman is this strong: 1000.
```

That's where scopes come into play:

```javascript
app.directive("superman", function() {
  return {
    restrict: "E", // make this a new HTML element
    templateUrl: "path/to/template.html",
    scope: {
	    strength: '@'
	  }
  };
})
```

In your template, you can now say this:

```html
<div>Superman is this strong: {{ strength }}.</div>
```

Note that the html attribute `strength`, the scope's attribute `strength`, and the expression `{{ strength }}` in the template all have to be called the same (in this case, 'strength').

The `@`-sign in our directive's scope signifies that whatever is passed into our html `strength` attributes is a string. To specify an object, use `=`, to specify a function, use `&`.

## Transclusion
Transclusion is a fancy term for wrapping html inside a directive.

Let's say we want to wrap our superman inside an `avengers` element:

```html
<avengers>
	<superman strength="1000"></superman>
</avengers>
```

```javascript
app.directive('avengers', function() {
	return {
		restrict: 'E',
		templateUrl: "path/to/template.html"
	};
});
```

```html
<!-- Template -->
These are the avengers:

<!-- How do we get our superman tag into here? -->
```

The answer: transclusion. Our wrapping directive has to have a `transclude` property set to `true`:

app.directive('avengers', function() {
	return {
		restrict: 'E',
		templateUrl: "path/to/template.html",
		transcluse: true
	};
});

And our avengers view would look like this:

```html
These are the avengers:

<div ng-transclude></div>
```

Because the `div` contains the `ng-transclude` directive, it will be filled with whatever we wrap with our `avengers` tag.

For example,

```html
<avengers>
	<ul>
		<li>Superman</li>
		<li>Hulk</li>
	</ul>
</avengers>
```

will result in:

```html
<avengers>
	These are the avengers:

	<div ng-transclude>
		<ul>
			<li>Superman</li>
			<li>Hulk</li>
		</ul>
	</div>
</avengers>
```

Similarly, we can now wrap directives inside directives:

```html
<avengers>
	<superman strength="1000"></superman>
</avengers>
```

which will result in:

```html
<avengers>
	These are the avengers:

	<div ng-transclude>
		<superman strength="1000">
			Superman is this strong: 1000.
		</superman>
	</div>
</avengers>
```

## Linking
Linking happens when the directive is loaded. It can come in handy if you need to run something once the directive has loaded:

app.directive('superman', function() {
	restrict: 'E',
	// more specifications as needed
	link: function(scope, element, attrs) {
		console.log('superman is ready!');

		// The directive's scope, element, and
		// attributes are available here
		console.log(scope, element, attrs);
	}
});

Note that the directive's `scope`, `element`, and `attributes` are available inside link function if you pass them. You could use the `element` object to manipulate the DOM.

# Active Learning
Pair up!

Using the above, improve the [library app](https://github.com/sf-wdi-14/library). Change the books list's HTML on `#/books` to look like this:

```html
<books>
	<book ng-repeat="book in books" title="book.title" year="book.year"></book>
</books>
```

The presentation should stay the same. The user should still see an unordered list.

Hints to get you started:

- You will need two directives
- You will need to make use of transclusion
- The attributes passed into the `book` tag are objects, not strings, and should be interpreted as such by the directive
- You should create a file for each directive in app/scripts/directives and include them in app/index.html at the bottom along with all other included js files

# Reflect
Explain to your partner the following concepts:

- Directive restrictions `E` and `A`
- Transclusion
- Directive scope
- Linking
- `=`, `@`, and `&` for scope values
