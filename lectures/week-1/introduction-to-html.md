# Intro to HTML
Lecture on HTML basics

# Objective
Students will be able to...

- Understand html tags and their meaning
- Build a basic 'about me' page

# Link
HTML stands for Hyper-Text Markup Language. It is was most websites use to display text, images, links, and other things. You will write HTML to create websites, so in a way, HTML is the first tool that you will learn to become a professional webdeveloper. It is very easy to learn, and every webdeveloper knows it.

# Educate and Engage & Active Learning
Our goal for this lecture is to create a basic about me page. It will look something like this:

<img src="http://i.imgur.com/RVeyzCm.png">

Code along!

Every HTML document is just a file with a `.html` extension. In your terminal, navigate to sf-wdi-14/notes/lectures/week-1/about-me-pages and create a file called `firstname.html` (replace "firstname") with your actual first name.

Put the following code inside:

```html
<html>
<head>
	<title></title>
</head>
<body>

</body>
</html>
```

Every html document has to have these tags. It's always wrapped by `html` tags. The first two tags inside the `html` tags are the `head` and the `body`. The head contains meta information such as the `title`, which will appear at the top of the browser window, and the body contains the actual contents of the webpage.

**Fist to five**

*Gradually code along to replicate dennis.html*

# Reflect
Tags that were covered:

- `html` - Indicates that this document contains html
- `head` - Contains meta information about the page; at least a title
- `body` - Contains the actual content of the page
- `h1` - Big heading
- `h2` - Slightly smaller heading
- `p` - Paragraph of text
- `section` - Separates the different contents of your page contextually
- `img` - Image
- `em` - Cursive text
- `ul` - Unordered list (with nested `li` tags for each list item)
- `ol` - Ordered list (with nested `li` tags for each list item)
- `a` - Link (a for anchor)
- `br` - Line break (self closing)

# Now and Then
HTML will be your friend throughout your carrier as web developer. We will come back to the about me pages later to style them with CSS.

Finishing up, please stage and commit your changes and push them to your fork of wdi-sf-14, then submit a pull request.
