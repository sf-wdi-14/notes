#Git Collaboration

##Learning Objectives
By the end of the lesson you should be able to...


* Collaborate on a git project
* Use feature branches appropriately
* Fix merge conflicts
* Use Github's features effectively

##Collaborating on git

* Setting up a project
* Commit history
* Git Log
	* a history of all the past commits
* Diffing
	* illustrates the changed lines of code between the current state and the last commit

##Feature Branching

* A branch represents an independent line of development
* New features should be developed in a branch of the repository
* Once the feature is complete & working it can be merged into the main repository
* Commands
	* `git branch` — creates a new branch
	* `git checkout` — jumps into a specific branch
	* `git merge` — combines two branches

##Merge Conflicts

Example conflict:

```
the number of planets are
<<<<<<< HEAD
nine
=======
eight
>>>>>>> branch-a
```

##Using Github Effectively

* Blaming
	* points out who change which lines in a file and why
* Diffing (again)
	* displays the changed lines of code
* History
* Pull Requests
* Comments
* Branches
* Issues
* Wiki
* Forking




##Additional Resources
* [Become a git guru](https://www.atlassian.com/git/tutorials/)
* [How Git Works Video Overview](https://www.youtube.com/watch?v=1ffBJ4sVUb4)
* [Git deep-dive](http://think-like-a-git.net/)