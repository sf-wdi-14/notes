# Directives Lab
1: Make the following code:

```html
<person age="50" name="John Doe">
	<p>Let me introduce to you:</p>
</person>
```

produce the following output:

```html
<person age="50" name="John Doe">
	<p>Let me introduce to you:</p>
	<div ng-transclude>
		John Doe, 50 years old!
	</div>
</person>
```

using an Angular directive.

2: Also, whenever you hover over the directive with your mouse, it should alert a greeting. Do not use jQuery or selectors for this.


## Solution
Directive:

```javascript
app.directive('person', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'path/to/template.html',
		scope: {
			age: '@',
			name: '@'
		},
		link: function(scope, element, attrs) {
			element.bind('mouseenter', function() {
				alert('Hello!');
			});
		}
	};
});
```

Template:

```html
<div ng-transclude></div>
{{ name }}, {{ age }} years old!
```
