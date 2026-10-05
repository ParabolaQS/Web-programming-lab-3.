# University Course Management System

## Assignment 3 - Web Programming Fall 2026.

This project implements a small university course management and grading system using JavaScript.

## File Organization

- `models.js` - Contains the `Student` ES6 class. It uses `Object.defineProperty()` to make each student's ID read-only and non-configurable. It also provides methods for adding courses and calculating a student's average.
- `database.js` - Simulates an asynchronous database/API using `setTimeout()` with a 2-second delay and a callback.
- `analytics.js` - Contains the analytical functions:
  - `calculateClassAverage()`
  - `findTopStudent()` using `reduce()`
  - `filterStudents()` as a higher-order function using a callback
- `main.js` - Entry point that fetches the data, converts raw objects into `Student` instances, tests ID immutability, and prints the analytics report.

## Running the Project

The project uses ES6 modules. If Node.js treats `.js` files as CommonJS on your system, run:

```bash
node --experimental-default-type=module main.js
```

The program waits two seconds to simulate the database request and then prints the results.

## Expected Result

The program demonstrates:  

1. Asynchronous callbacks with `setTimeout()`.
2. ES6 class syntax.
3. An immutable `id` property created with `Object.defineProperty()`.
4. Array methods such as `map()`, `filter()`, `find()`, `some()`, and `reduce()`.
5. A higher-order filtering function.
6. Analytical calculations over student/course data.

## Challenges Faced

The main challenges were working with asynchronous callback-based data fetching and making sure the raw database objects were converted into real `Student` class instances before running the analytics. Another important part was using `Object.defineProperty()` correctly so that the student ID cannot be changed or deleted.
# Web-programming-lab-3.
