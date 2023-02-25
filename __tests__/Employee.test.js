const Employee = require('../lib/Employee')

test ("Can make employee object from class", () => {
    const employee = new Employee()
    expect(typeof employee).toBe('object')

});

test ("Can set name, id, email", () => {
    const employee = new Employee ('Bob', 1234, 'test@gmail.com')
    expect (employee.name).toBe('Bob')
    expect (employee.id).toBe(1234)
    expect (employee.email).toBe('test@gmail.com')
});

test ("Can get name using getName()", () => {
    const employee = new Employee ('Bob', 1234, 'test@gmail.com')
    expect(employee.getName()).toBe('Bob')

});

test ("Can get id using getId()", () => {
    const employee = new Employee ('Bob', 1234, 'test@gmail.com')
    expect(employee.getId()).toBe(1234)

});

test ("Can get role using getRole()", () => {
    const employee = new Employee ('Bob', 1234, 'test@gmail.com')
    expect(employee.getRole()).toBe('Employee')

});

test ("Can get email using getEmail()", () => {
    const employee = new Employee ('Bob', 1234, 'test@gmail.com')
    expect(employee.getEmail()).toBe('test@gmail.com')

});

