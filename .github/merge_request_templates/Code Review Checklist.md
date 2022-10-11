## Code Review Checklist (Node.js)

#### Clean Code

- [ ] Check static code analyzer report for the code added/modified
- [ ] Consistent package/class names
- [ ] Classes should be small
- [ ] Functions/Methods should be small
- [ ] At least do one thing in functions/methods
- [ ] Avoid duplication of code
- [ ] Make sure the code formatting is applied

#### Security

- [ ] Input should be checked for valid data size and range
- [ ] Do not store any sensitive information on browsers
- [ ] Use Encryption for sensitive data

#### Performance

- [ ] Avoid creating unnecessary objects
- [ ] Avoid complex algorithms
- [ ] Reduce minimal the number of HTTP requests to backend server
- [ ] Remove/reduce unused JSON fields/objects in HTTP requests/responses

#### General

- [ ] Avoid creating unnecessary objects/resources
- [ ] Handle the errors, exceptional cases.
- [ ] Each file must not contain more than one Component/Controller, etc.
- [ ] The functions can appropriately handle unexpected inputs

#### Unit test

- [ ] Valid JUnit test cases for complex methods
- [ ] At least one assertion in Junit test

---

Closes <#issue>
