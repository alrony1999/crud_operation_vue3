export function addStudent(state, student) {
  state.students.push(student);
}
export function updateStudent(state, student) {
  for (let item of state.students) {
    if (item.id == student.id) {
      item.name = student.name;
      item.age = student.age;
    }
  }
}
export function deleteStudent(state, student) {
  let index;

  state.students.forEach((item, i) => {
    if (item.id == student.id) {
      index = i;
    }
  });

  state.students.splice(index, 1);
}
