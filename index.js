const employee = {
    name: "john",
    streetAddress: "1101 coker drive",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedObj = { ...employee };
    updatedObj[key] = value;
    return updatedObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedObj = { ...employee };
    delete updatedObj[key];
    return updatedObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}