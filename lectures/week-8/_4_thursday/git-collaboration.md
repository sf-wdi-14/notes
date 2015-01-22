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

####Blaming

* Points out who change which lines in a file and why [example](https://github.com/sf-wdi-14/rails-review/blame/master/app/controllers/articles_controller.rb)

####Diffing (again)

* Displays the changed lines of code [example](https://github.com/sf-wdi-14/rails-review/commit/06f2e972016d421f4aff9c170cbf335a4bcde552)

####History

* Shows a history of the git commits [example](https://github.com/sf-wdi-14/rails-review/commits/master)

####Comments

* At the bottom of a specific commit you may leave a comment and @mention a user


####Pull Requests

* Enables one to submit code to any public repository that the owner can choose to merge in


####Branches

* Enables one to view all the branches in a repository
* Ideal for collaborating between individuals in a single team
* [example](https://github.com/sf-wdi-14/rails-review/branches)

####Issues

* Anyone can submit an issue for a public repo that the owner will be made aware of
* Issues are open by anyone if they have identified a problem in the code
* Issues are closed once the problem is solved
* [Example](https://github.com/sf-wdi-14/rails-review/issues)

####Wiki

* Typically used for more advanced documentation for your library; aka an expanded readme
* Also keep in mind, you can use it for whatever suits your needs best
* [Example](https://github.com/sf-wdi-14/rails-review/wiki)
* Also [Divise's Wiki](https://github.com/plataformatec/devise/wiki)

####Forking

* Creates a remote clone that you now own which you can make changes to
* This is particularly useful for open source projects
* Forking is great for collaborating between separate teams 

##Additional Resources
* [Become a git guru](https://www.atlassian.com/git/tutorials/)
* [How Git Works Video Overview](https://www.youtube.com/watch?v=1ffBJ4sVUb4)
* [Git deep-dive](http://think-like-a-git.net/)