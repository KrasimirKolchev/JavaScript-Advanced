class Organization {
    constructor (name, budget) {
        this.name = name;
        this.employees = [];
        this.budget = Number(budget);
        this.departments = {
            marketing: this.budget * 0.4,
            finance: this.budget * 0.25,
            production: this.budget * 0.35
        };
    }

    get departmentsBudget() {
        return {
            marketing: this.departments['marketing'],
            finance: this.departments['finance'],
            production: this.departments['production']
        };
    }

    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= salary) {
            this.departments[department] -= salary;
            this.employees.push({
                employeeName,
                department,
                salary
            });
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }
        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
    }

    employeeExists(employeeName) {
        let empIndex = this.employees.findIndex(e => e.employeeName === employeeName);

        if (empIndex > -1) {
            return `Mr./Mrs. ${employeeName} is part of the ${this.employees[empIndex].department} department.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    leaveOrganization(employeeName) {
        let empIndex = this.employees.findIndex(e => e.employeeName === employeeName);

        if (empIndex > -1) {
            this.departments[this.employees[empIndex].department] += this.employees[empIndex].salary;
            this.employees.splice(empIndex, 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    status() {
        let output = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let markNames = [];
        this.employees.filter(a => a.department === 'marketing').sort((a, b) => b.salary - a.salary).map(e => markNames.push(e.employeeName));
        output += `\nMarketing | Employees: ${markNames.length}: ${markNames.join(', ')} | Remaining Budget: ${this.departmentsBudget['marketing']}`;
        let finNames = [];
        this.employees.filter(a => a.department === 'finance').sort((a, b) => b.salary - a.salary).map(e => finNames.push(e.employeeName));
        output += `\nFinance | Employees: ${finNames.length}: ${finNames.join(', ')} | Remaining Budget: ${this.departmentsBudget['finance']}`;
        let prodNames = [];
        this.employees.filter(a => a.department === 'production').sort((a, b) => b.salary - a.salary).map(e => prodNames.push(e.employeeName));
        output += `\nProduction | Employees: ${prodNames.length}: ${prodNames.join(', ')} | Remaining Budget: ${this.departmentsBudget['production']}`;

        return output;
    }
}


let organization = new Organization('SoftUni', 20000);

console.log(organization.add('Peter', 'marketing', 1300));
console.log(organization.add('Peter1', 'marketing', 1100));
console.log(organization.add('Peter2', 'marketing', 1200));
console.log(organization.add('Robert', 'production', 1300));
console.log(organization.add('Robert1', 'production', 1100));
console.log(organization.add('Robert2', 'production', 1200));
console.log(organization.add('Ivan', 'finance', 1300));
console.log(organization.add('Ivan1', 'finance', 1100));
console.log(organization.add('Ivan2', 'finance', 1200));
console.log(organization.leaveOrganization('Peter'));
console.log(organization.status());
