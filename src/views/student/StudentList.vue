<script setup>
import store from "@/store/index.js";
import Modal from '@/components/Modal.vue';
import StudentForm from '@/views/student/StudentForm.vue';
import { ref, reactive, onMounted } from 'vue';

let showModal = ref(false);
let students = reactive(store.state.students);
let initialValue = null;

let showAddForm = () => {
    initialValue = {
        id: '',
        name: '',
        age: ''
    };
    showModal.value = true;
}
let showEditForm = (student) => {
    initialValue = student;
    showModal.value = true;
}

let submitFormHandeler = () => {
    showModal.value = false;

}
let deleteStudent = (student) => {
    if (confirm("Are you sure")) {
        store.dispatch('deleteStudent', student);
    }

}

</script>
<template>
    <Modal :visible="showModal" @close="showModal = false">
        <StudentForm :initialValue="initialValue" @submit="submitFormHandeler" />
    </Modal>
    <div class="flex flex-col items-center ">
        <div class="flex justify-between items-center  w-80 h-16 text-lg font-semibold text-white">
            <h1 class="ml-2">Student List</h1>
            <button @click="showAddForm"
                class="px-2 py-1 bg-indigo-400 rounded-md hover:bg-gray-900 hover:text-indigo-500">Add Student</button>
        </div>
        <div class="shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="student in students" :key="student.id"
                        class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">

                        <td class="px-6 py-4">
                            {{ student.id }}
                        </td>
                        <td class="px-6 py-4">
                            {{ student.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ student.age }}
                        </td>
                        <td class="px-6 py-4 space-x-3">
                            <span @click="showEditForm(student)"
                                class="font-medium text-blue-600 dark:text-blue-500 hover:text-blue-800">Edit</span>

                            <span @click="deleteStudent(student)"
                                class="font-medium text-red-600 dark:text-red-500 hover:text-red-800">Delete</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<style scoped>

</style>