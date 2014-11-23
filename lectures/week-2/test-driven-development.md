# Test Driven Development (TDD)
Lecture on test driven development.

# Objective
Students will be able to...

- Understand the core concepts behind test driven development
- Write their own tests in JavaScript using Mocha and Chai
- Submit a pull request from a branch that automatically runs the tests on GitHub

# Link
TDD may seems counter-intuitive at first, but is actually something you do automatically when you develop a new feature. When writing software, you have to make sure you fulfill the requirements and don't break existing code. TDD is there to ensure just that.

> If it's worth building, it's worth testing. If it's not worth testing, why are you wasting your time working on it?

# Educate and Engage
## Software development environments
Software development happens in three different environments:

- Development
- Test
- Production

Development is the environment in which feature code is written.
Test is the environment in which feature code is tested.
Production is the environment in which live features are presented to the public (e.g., a website on a server).

## Order Of These Environments
An intuitive guess would be that the order development, test, and production is already correct. After all, a feature has to be developed before it can be tested, and then deployed into production.

While this *can* certainly be done in that order, it is by no means the best order. A better order is:

1. Test
2. Development
3. Production

This order is called Test Driven Development. *It can be hard to keep up, but it is what distinguishes a mediocre programmer from an excellent programmer.*

## The Heart of TDD
From [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development):

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards.

This can be narrowed down into the following steps (mostly taken from [Wikipedia](http://en.wikipedia.org/wiki/Test-driven_development)):

1. Add an initially failing test
In test-driven development, each new feature begins with writing a test. This is a differentiating feature of test-driven development versus writing unit tests *after* the code is written: it makes the developer focus on the requirements before writing the code, a subtle but important difference.

2. Run all tests and see if the new one fails
This validates that the test harness is working correctly, that the new test does not mistakenly pass without requiring any new code, and that the required feature does not already exist. This step also tests the test itself, in the negative: it rules out the possibility that the new test always passes, and therefore is worthless. The new test should also fail for the expected reason. This step increases the developer's confidence that he/she is testing the right thing, and passes only in intended cases.

3. Write some code
Write just enough feature code to make the test pass. At this stage, the code does not have to be elegant or clean at all, since it will be refactored later on this process.

4. Run tests
If all test cases now pass, the programmer can be confident that the new code meets the test requirements, and does not break or degrade any existing features. If they do not, the new code must be adjusted until they do.

5. Refactor code
Feature code has to be maintained and refactored regularly. Since the feature code is now backed by tests, the programmer can be confident to refactor without breaking features. After refactoring, the tests should be run to ensure full functionality. Refactoring code does not change a feature; it merely improves the syntax and writing of certain lines of code without changing it's result.

(6. Repeat)
Repeat for every feature. Eventually, the programmer will have a solid, test-backed feature base. Automated tests allow him/her to test that all features run as expected in a matter of seconds, at least minutes (depending on the product's size).

This whole process can be visualized like this:

![TDD cycle](http://1minus1.com/userstorage/images/dev_graphs_testdrivendev.jpg)

## TDD For JavaScript
For JavaScript, we are going to use [Chai JS](http://chaijs.com/guide/).

# Active Learning

Check out [this repo](https://github.com/sf-wdi-14/test-driven-development).

We will do two of the following exercises together, and the rest you will do independently.

- reverseString()
- isPrime()
- mergeArrays
- factorial
- modulo

# Reflect
Reflect on the advantages and disadvantages of test driven development. Raise any questions/concerns you may have.

# Now and Then
We will test drive most of the lectures and assignments from now on. You will either clone assignment repos that have tests already prepared inside them, or sometimes you may even have to write your own tests.
