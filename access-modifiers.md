# Access Modifiers in TypeScript OOP

## Introduction

Object-Oriented Programming (OOP) organizes code around classes and objects. TypeScript provides access modifiers to control where class properties and methods can be accessed. Its main modifiers are `public`, `private`, `protected`, and `readonly`.

## Types of Access Modifiers

**1. Public:** A public property or method can be accessed from anywhere, including outside the class. It is the default access level in TypeScript.

**2. Private:** A private property or method can be accessed only inside the class where it is declared. It cannot be accessed directly from outside that class or from a subclass.

**3. Protected:** A protected property or method can be accessed inside its own class and by subclasses. It cannot be accessed directly through an instance from outside the class.

**4. Readonly:** The `readonly` modifier prevents a property from being reassigned after it has been initialized. It can be initialized where it is declared or inside the constructor.

## Practical Example

```typescript
class Vehicle {
    public brand: string;
    protected speed: number;
    private engineNumber: string;
    readonly modelYear: number;

    constructor(
        brand: string,
        speed: number,
        engineNumber: string,
        modelYear: number
    ) {
        this.brand = brand;
        this.speed = speed;
        this.engineNumber = engineNumber;
        this.modelYear = modelYear;
    }
}

class Car extends Vehicle {
    accelerate(): void {
        this.speed += 10; // Allowed: speed is protected
    }
}

const myCar = new Car("Toyota", 60, "ENG-9988", 2024);
myCar.brand = "Honda"; // Allowed
// myCar.speed = 100; // Error: speed is protected
// myCar.modelYear = 2025; // Error: modelYear is readonly
```

## Conclusion

Access modifiers support encapsulation by controlling how class members are accessed or changed. Using them appropriately makes TypeScript code easier to organize, maintain, and understand.
