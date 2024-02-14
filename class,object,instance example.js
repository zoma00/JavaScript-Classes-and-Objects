// Define a class named Animal
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

// Create an instance of the Animal class
const cat = new Animal('Cat', 'Meow');

// Create an object based on the instance created
const dog = {
  name: 'Dog',
  sound: 'Woof',
  makeSound: function() {
    console.log(this.sound);
  }
};

// Call the makeSound method from the cat instance
cat.makeSound();

// Call the makeSound method from the dog object
dog.makeSound();



/*

Explain the differences between classes and objects regarding the code construction , 
funcion in the script and when to use it for creating programs?
------------------------------------------------------------------------------------------
Classes and objects are fundamental concepts in object-oriented programming.
Here are the key differences between classes and objects in JavaScript:

1. **Code Construction**:
-----------------------------
   - **Classes**: 
   ---------------
   Classes serve as blueprints for creating objects. They define the structure 
   and behavior that objects of that class will have. Classes encapsulate data (properties) and
   behavior (methods) that are common to all instances of that class.
   
   - **Objects**:
   ---------------
   Objects are instances of classes or standalone instances with properties and
   methods. Objects are created based on a class or defined independently.
                                                    ---------------------

2. **Functions in the Script**:
-----------------------------------------------------------
   - **Classes**:
   ----------------
   Classes can contain constructor methods for initializing object instances and
   other methods to define behavior. Classes can also inherit properties and methods from other 
   classes using inheritance.
   
   - **Objects**:
   --------------
   Objects can have methods defined within them, which are functions 
   (Object can contain functions but classes no it is a blue print for the objects)
   ------------------------------------------------------------------
   associated 
   with the object to perform specific tasks.

3. **When to Use**:
--------------------------------------------------------------------------------------
   - **Classes**:
   ---------------
   Use classes when you want to create multiple objects with the same structure 
   and behavior. Classes provide a way to create reusable templates for creating objects with
   similar characteristics.
   - **Objects**: 
   --------------------
   Use objects when you need specific instances with unique data and behavior. 
   Objects are useful for representing individual entities or instances in your program.
   -------                --------------------------------------------------------------  

   
Summary:******************
----------------
In summary, classes provide a blueprint for creating objects with shared characteristics,
while objects represent individual instances with specific properties and behaviors.
Classes are used for creating reusable templates, 
while objects are used for representing specific entities or instances in a program.

The choice between classes and objects depends on the design requirements of your program and
whether you need to create multiple instances with shared characteristics or individual 
instances with unique characteristics.


In JavaScript, the `menu` object is not considered a class; it is an instance of the `Object` class. Objects in JavaScript 
are instances of the `Object` class by default. Classes in JavaScript are a way to create blueprints for objects, but the 
`menu` object itself is an instance of the `Object`
class.
*/