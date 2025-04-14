export default function createIteratorObject(report) {
  // report.allEmployees is an object whose values are arrays of names
  const employees = [];
  for (const deptEmployees of Object.values(report.allEmployees)) {
    employees.push(...deptEmployees);
  }
  // Return the array itself—it’s iterable, so for…of works
  return employees;
}
