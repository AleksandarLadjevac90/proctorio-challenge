export default function getEmployeesSalaries(order) {

	const employees = [
        {
            "id":"1",
            "name" : "John Doe"
        },
        {
            "id":"4",
            "name" : "Peter Jones"
        },
        {
            "id":"3",
            "name" : "Jack Johnson"
        },
        {
            "id":"2",
            "name" : "Ron Morris"
        }
    ];
    const salaries = [
        {
            "employeeId" : "1",
            "salary": "1500"
        },
        {
            "employeeId" : "2",
            "salary": "150"
        },
        {
            "employeeId" : "3",
            "salary": null 
        },
        {
            "employeeId" : "4",
            "salary": "1780"
        }
    ];
    const arr = [];

    salaries.forEach(salary => {
        employees.forEach(employee => {
            if (employee.id === salary.employeeId) {
                arr.push({
                    name: employee.name,
                    salary: salary.salary ? salary.salary : '0'
                });
            }
        });
    });

    if (order === "ASC") {
        arr.sort((a, b) => {
            return a.salary - b.salary;
        });
    } else if (order === "DESC") {
        arr.sort((a, b) => {
            return b.salary - a.salary;
        });
    }

    return arr;
}

getEmployeesSalaries("ASC");