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

**Fist to five**

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

This actually already gives you a lot of information. What you need to focus on for now is the line that says 'modified'. This is a great way to keep track of what files you touched.

**Fist to five**

To excactly what you wrote in each file that is listed as modified, run

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

**Fist to five**

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
- be formal (correct spelling, grammar, and punctuation, formal language, etc)

To view a history of all commits in your repository, run

```shell
$ git log
```

**Fist to five**

## Pushing a Commit
So far, so good. Everything you have done so far is local - how do you get to collaborate? The most common tool for collaboration is GitHub.

### Assignment

Don't worry, you won't know what everything means in the following section. Try to be resourceful! Look up keywords on Google and try figure things out yourself. If you struggle for too long, let one of the instructors know and they will help you.

Go ahead and sign up on [github.com](https://www.github.com) if you haven't done so yet. Then, in your groups of two, one of you (person a) should create a new repository and invite your partner (person b) to collaborate on it (you can do that in the repository settings).

Person a should then push their code to the GitHub repository they just created. Person b should clone that repository into a new local directory.

Now you can both make changes to the local repository without interfering with each other's work. Both of you should make some arbitrary changes, stage, commit, and then push. You will see how GitHub magically merges everything for you. If you want the latest code from the repository on GitHub, run

```shell
$ git pull
```

**Last Step**
1. In your `code` directory, run

```shell
mkdir sf-wdi-14
cd sf-wdi-14
```

2. Go to https://github.com/sf-wdi-14/notes and fork the repository.
3. Clone your fork

# Reflect
One of the students please summarize what they learned. Raise questions/concerns. Discuss usage of Git and GitHub openly.

# Now and Then
As we have seen, Git and GitHub are powerful tools for collaboration. They will be your friends throughout your professional life as developer and we will use them throughout this course. As a matter of fact, most assignments will from now on be built in [this repository](https://github.com/sf-wdi-14/notes).
