#Auth in Rails

##Learning Objectives
By the end of today you should be able to...

* 

##Terminology



###Sesssion

##Step 1 — New App

##Step 2 — More..

* Has secure password; part of the [bcrypt](https://rubygems.org/gems/bcrypt-ruby) gem

```
class User < ActiveRecord::Base
  has_secure_password
end
```


##Ref

[Auth](https://github.com/wdi-sf-fall/notes/tree/master/week_07_rails_continued/day_02_associations_and_auth/dusk_auth)