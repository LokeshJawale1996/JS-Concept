# OOP In Programming

### Object-oriented programming (OOP) is a programming paradigm based on the concept of objects

### We use objects modal (describe) real world or abstract features

### Objects may contain data (properties) and code (methods) .By using objects ,we pack data and the corresponding behiviour into one block.

### In OOP,are building blocks of applications ,and interact with one another

### Interactions happen through a public interface (API) :methods that the code outside of the object can access and use to communicate with the object.

### OOP was developed with the goal of organizing code.to make it more flexible and esier to maintain.


# class

### like a blueprint from which we can create new objects

### it can have multiple instances

# How do we actually design classes? 
# How do we modal real-world data into classes?

## Priciple 1 Abstraction

### Ignoring or hiding details that don't matter,allowing us to get an overview perspective of the living we're implementing ,instead of messing with details that don't allow really matter to our implementation.

### showing only essential things.

## Priciple 2 Encapsulation.

### Keeping properties and methods private inside the class, so they not accessible from ouside the class.Some methods can be expressed as a public interface(API).

## Priciple 3 Inheritance.

### when we are two classes closely together when we can extract features from parent class to child class then it is inheritance

### Making all properties and methods of a certain class available to a child class. forming a hierarchical relationship between classes.This allows us to reuse common logic and to model real-world relationships.

## Priciple 4 Polymorphism.

### A child  class can overwrite a method it inherited from a parent class.[it's more comples that ,but enough for our purposes]

# OOP in JS :Prototypes

### Objects are linked to prototype object;
### Prototypal inheritanceL The prototype contains methods (behaviour) that are accessible to all objects linked to that prototype.

### Bahaviour is delegated to the linked prototype object.

### Array.prototype is the prototype of all objects we craete in javaScript.therefore, all arrays have acccess to the map() method!

## Three ways implementing prototypal Inheritance in JavaScript.

### 1 Constructor functions
#### Technique to create objects from functions
#### This is how built-in objects

### 2 ES6 classes
#### Modern alternative to constructor function syntax;
#### "Syntactic sugar": behind the scenes,ES6 classes work exactly like constrcutor functions;

#### Modern alternative to constructor function syntax.
#### "syntactic sugar" behind the scenes.ES6 classes work exactly like constructor functions
#### ES6 classes do NOT behave like classes in "classical OOP" (last lecture)

 ## 3 Object.create()
 


