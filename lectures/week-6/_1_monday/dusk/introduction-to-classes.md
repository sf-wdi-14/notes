# Introduction to Classes

## Objectives

- understand the difference between an object and a class
- define and instantiate a class 
- use instance methods and instance variables
- use the `initialize` method 
- define getters and setters 
- use attr_* 
- understand class methods, class variables, and self 

### Objective vs. Class

An object represents an abstract thing, usually with some sort of behavior (methods). A class, in turn, can create many objects with the same behavior (methods). 

### Define and Instantiate a Class

Classes include three basic components: the reserved word `class`, a name of the class, and the reserve word `end`. Focus on the name of the function: it begins with a capital letter, which represents a constant--something doesn't necessary change. 

```ruby 
class Minion
end
```

To create instances of our class, we will create a variable and assign it the return value of `Minion.new`, which is an object. 

```ruby
minion = Minion.new
minion
```

### Instance methods and instance variables

We are able to create instances of a `Minion`, but our instances currently hold marginal value. We need, in turn, to use instance methods and instance variables. An instance method represents a function that is acessible to every instance of a class. To create an instance method, we must use the following syntax inside the definition of our class: 

```ruby 
class Minion
  def name
    "Dave"
  end
end
```

The syntax of an instance method typically includes four components: the reserved word `def`, a method name, a body, and the reserved word `end`.

At this moment, all instances of a `Minion` have the same name. Let's make the method `name` dynamic and utilize instance variables.

An instance variable--which begin with the `@` symbol--has the capability of storing data for each instance of a class. This may seem unclear at this moment, so an example will help: 

```ruby 
class Minion
  def name(my_name)
    @name = my_name
  end

  def say_name
    @name
  end
end

minion_one = Minion.new
minion_one.name("George")
minion_one.say_name

minion_two = Minion.new
minion_two.name("Jesus")
minion_two.say_name
```

Every time an instance of `Minion` is created, it will have its own instance variable named `@name`.


### initialize 

In Ruby there's a built-in method named `initialize`. This method is invoked every time a class is instantiated. Let's prove that this is true with the creation of a method named `initialize`. 

```ruby 
class Minion
  def initialize
    puts "We just created a new Minion!"
  end
  
  def name(my_name)
    @name = my_name
  end

  def say_name
    puts @name
  end
end

george = Minion.new("George")
dave   = Minion.new("Dave")
```

If we apply this new knowledge, we can re-write our class definition to give a minion a name during instance creation. 

```ruby 
class Minion
  def initialize(my_name)
    @name = my_name
  end

  def say_name
    @name
  end
end

minion = Minion.new("George")
minion.say_name
```

### Getters and Setters

Up to this moment, we've been utilizing instance methods and instance variables to set (`initialize`) and get (`say_name`) data. Let's rename our methods to be more semantically meaningful. 

```ruby 
class Minion
  def initialize(name)
    @name = name
  end

  def name
    @name
  end
end

minion = Minion.new("George")
minion.name
``` 

Great, at this moment we have a getter named `name`. We our getter, we can access a minion's name with dot notation and the method `name`. 

In regards to our setter method, which is used to set data, we have a problem. At present, we can only set a minion's name during instance creation. With this design, we don't have a way to update a minion's name. To achieve this goal, we will have to use a special syntax: 

```ruby 
class Minion
  def initialize(name)
    @name = name
  end

  def name=(name)
    @name = name
  end

  def name
    @name
  end
end

minion = Minion.new("George")
minion.name
minion.name=("Phil")
minion.name
``` 

Now this works, but there is a nicer way to set names. This new approach includes a term named 'syntactic sugar,' which is a way to write our code with a different and relatively easier to use syntax. 

```ruby 
class Minion
  def initialize(name)
    @name = name
  end

  def name=(name)
    @name = name
  end

  def name
    @name
  end
end

minion = Minion.new("George")
minion.name
minion.name = "Phil"
minion.name
``` 

Take a moment to notice the difference above. 

### attr_*

If we add more methods to our class, we will start to notice a lot of repetition: 

```ruby 
class Minion
  def initialize(name)
    @name = name
  end

  def name=(name)
    @name = name
  end

  def name
    @name
  end

  def age=(age)
    @age = age
  end

  def age
    @age
  end
end
``` 

Every getter has a method with a name (`name` and `age`) that is included in the instance variable (`@name` and `@age`). The same is true for setters.  

Ruby provides a syntax to shorten this common pattern: attributes. Attributes allow for the introduction of a different syntax for creating getters and setters. Let's demonstrate this with creating a getter for `name`. 


```ruby 
class Minion
  attr_reader :name

  def init(name)
    @name = name
  end

  def name=(name)
    @name = name
  end

  def age=(age)
    @age = age
  end

  def age
    puts @age
  end
end

jj = Minion.new("JJ")
jj.name 
``` 

`attr_reader` does the same thing as our former method `name`. We can also use this shorthand syntax to create setters with attributes: 

```ruby 
class Minion
  attr_reader :name
  attr_writer :name

  def initialize(name)
    @name = name
  end

  def age=(age)
    @age = age
  end

  def age
    @age
  end
end
```

Finally, if we have both a getter (reader) and setter (writer), we can use attr_accessor: 

```ruby 
class Minion
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def age=(age)
    @age = age
  end

  def age
    puts @age
  end
end
```

Now, there may be moments where we want to get or set data associated with all instances of a class. In this case, we need to explore class methods and class variables. 


### Class Methods, Class Variables, and Self
Class methods and class variables are used when data pertains to more than just an instance of a class. Let's imagine that we want to keep count of all minions that were instantiated. 


```ruby 
class Minion
  attr_accessor :name
  @@count = 0

  def initialize(name)
    @name = name
    @@count = @@count + 1
  end

  def self.count
    @@count
  end

  def age=(age)
    @age = age
  end

  def age
    @age
  end
end

dave = Minion.new("Dave")
Minion.count
var phil = MInion.new("Phil")
Minion.count 
```

Two things are happening at this moment. First, we are definining a class variable--which begins with a double `@` symbol. This variable will exist throughout all instances of a mininon. Next, we are defining a method on the class `Minion` using the keyword `self`. We will explore `self` more during the next several days. For now, know that if you place the word `self` next to a method name, it places the method not on instances of a class; rather, the method is on the class. 