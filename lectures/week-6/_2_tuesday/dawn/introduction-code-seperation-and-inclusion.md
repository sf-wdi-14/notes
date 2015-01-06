# Introduction to Code Seperation and Inclusion

## Objectives
Students will be able to...

- seperate code into several files
- require code in another file 
- describe and use inheritance
- describe the inheritance chain
- describe use modules with `include` and `prepend`
- describe the method look-up chain

### Seperate Code into Files

Using one file for all your code can become unwieldly. Instead, move related code into a different file. A good example is using a file for every class. 

```ruby
# person.rb 
class Person
end
```

### Require Code from Other Files

Code in different files can be loaded into a file with one of the following reserve words: 

- `require`
- `require_relative`
- `load`

There are important differences between these three keywords. Here are the most important differences

```ruby
# needs the dot
require("./person.rb")

# implied dot
require_relative("person.rb")

# needs the dot
load("./person.rb")
```

`require` and `load` appear to be the same, but the are not. This difference becomes clearer when requiring and loading files in IRB. `require` will load a file once; even when a file is later changed and saved, the same IRB session will not load the updated version. `load`, however, will always reload a file. When experimenting with code and frequently changing a file, use `load`. 

### Inheritance

In Ruby, inheritance describes an approach to sharing instance methods between classes. At most, a class can directly inherit from one class.

Here's the syntax: 

```ruby
class Parent
end

class Child < Parent
end
```

In the above code block, `Child` is inheriting instance methods from `Parent`. To phrase in another way, `Parent` is the super-class of `Child`; `Child` is the sub-class of `Parent`. 

### The Inheritance Chain
In instances where the super-class and sub-class contain instance methods with the same name, only one of these methods will be used. We can determine which method with an understanding of the inheritance chain. 

```ruby
class Parent
  def talk
  end
end

class Child < Parent
  def talk
  end
end
```

If we invoke talk on an instance of `Child`, `Child`'s definition of `talk` is invoked. In other words, the method included in the immediate class is used first, then we climb the inheritance chain and search in the super-classes for any methods with a particular name. 


### Modules
Another way of including instance methods in a class involves modules. Modules have very similar syntax to classes; however, modules replace the reserve word `class` with `module`. 

```ruby
module Jump
  def low
  end

  def high
  end
```

To include this module into a class, we can use one of two reserve words: 

- `include`
- `prepend`

```ruby
class Person
  include Jump
end
```
 
Alternatively: 

```ruby
class Person
  prepend Jump
end
```

Both `include` and `prepend` include a module's instance methods into a class. The difference between them can be found in the method look-up chain. 


### Method Look-up Chain
When a module and a class have instance methods with the same name, the following heirarchy is considered when determining the method to invoke. 

- prepend
- class
- include
