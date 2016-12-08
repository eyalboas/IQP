function Collector() {
    var data = require("./iqp_exam.json");
    var employeesArray = [];

    this.collectAllEmployees = function (callback) {
        for (var index = 0; index < data.SubDepartments.length; index++) {
            collectDepartmentEmployees(data.SubDepartments[index]);
        }
        return callback(employeesArray);
    };

    function collectDepartmentEmployees(department) {
        var departmentEmployees = [];
        var managerObj = {};
        if (department.Manager) {
            managerObj.firsyName = department.Manager.FirstName;
            managerObj.lastyName = department.Manager.LastName;
            departmentEmployees.push(managerObj);
        }
        if (department.Employees) {
            var employees = department.Employees;
            for (var j = 0; j < employees.length; j++) {
                var employeeObj = {};
                employeeObj.FirstName = employees[j].FirstName;
                employeeObj.lastName = employees[j].LastName;
                departmentEmployees.push(employeeObj);
            }
        }

        if (!department.SubDepartments) {
            employeesArray = employeesArray.concat(departmentEmployees);
            return employeesArray;
        }
        var subDepartments = department.SubDepartments;
        for (var i = 0; i < subDepartments.length; i++) {
            collectDepartmentEmployees(subDepartments[i]);
        }

        employeesArray = employeesArray.concat(departmentEmployees);
        return employeesArray;
    }
}

module.exports = new Collector();