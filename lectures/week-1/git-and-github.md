# Git and GitHub
Lecture on version control with Git and GitHub

# Objective
Students will be able to...

- Understand the key concepts of version control
- Use Git to stage and commit files
- Use GitHub to collaborate online
- Use Git to push and pull changes from and to GitHub

# Link
Collaboration can be hard on a technological level. Merging changes different team members make as well as analyzing how the code of your software developed over time poses a critical problem that has to be solved.

# Educate and Engage & Active Learning
## Assignment
Pair up in groups of two. Independently create a file in `code/git/git-example.html` with the following contents:

```html
<html>
<head>
	<title>Git Example</title>
</head>
<body>
This is the first line.
###
</body>
</html>
```

Now replace the three hashes with whatever you would like. A simple sentence is good enough. Once done, send the file to your partner in an email. Have him manually merge the changes with his sentence and send it back to you. Both of you should update your file with the new version of the code.

See how hard this was? There has to be an easier way: Git.

## Is Git installed?
Try

```shell
$ git
```

If you get instructions on how to use Git, you are good to go. If you get an error, follow [these instructions](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Mac). Once done, try the above command again to see if it works.

## Initialzing a Git repository
In `code/git`, run

```shell
$ git init
```

You should see something like

```shell
Initialized empty Git repository in /Users/dch/code/sf-wdi-14/.git/
```

This will create a hidden directory called `.git` in your current directory and enable you to use Git in that directory.

## Tracking File Changes
To see the files you have edited, run

```shell
$ git status
```

Since we just initialized Git and there was already a file in the current directory (`git-example.html`), Git treats this like a new file. You should see something like this:

```shell
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   git-example.html
```

This actually already gives you a lot of information. What you need to focus on for now is the line that says 'modified'. This is a great way to keep track of what files you touched. To excactly what you wrote in each file that is listed as modified, run

```shell
$ git diff
```

Use the keys `j` and `k` to move up and down, and `q` to quit the diff view.

## Staging File Changes
What the heck does staging mean? Think of it as a shopping cart on Amazon. You have browsed through some products you would like to buy, and you put the ones that you're serious about in your shopping cart. Same for Git: Are you done changing a file? Stage it!

To stage the changes we made to `git-example.html`, run

```shell
$ git add git-example.html
```

You won't get any feedback after this. To check if it worked, run `$ git status` again, and you should see that `git-example.html` will now show up in the "Changes to be committed".

## Committing File Changes
After you put products in your shopping cart, you want to buy them, right? The equivalent of that is comitting. You commit to your purchase; in other words, you commit to the changes you made. These changes are 'done' and ready for the world to see.

You commit your staged files by running the following with a message parameter `-m`:

```shell
$ git commit -m "Create and modify the first html file"
```

The message should

- be descriptive
- start with a capital letter
- be in the present tense
- be a sentence
- start with a verb
- not have a period at the end

To view a history of all commits in your repository, run

```shell
$ git log
```

## Pushing a Commit

# Reflect

# Now and Then
