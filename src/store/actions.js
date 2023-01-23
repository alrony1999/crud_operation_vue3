export function addStudent({ commit }, student) {
  commit("addStudent", student);
}
export function updateStudent({ commit }, student) {
  commit("updateStudent", student);
}
export function deleteStudent({ commit }, student) {
  commit("deleteStudent", student);
}
