<script setup>
import store from "@/store/index.js";
import { ref, reactive, computed, watch, onUpdated } from 'vue';
import * as yup from 'yup';

const emit = defineEmits(['submit']);

const props = defineProps({
    initialValue: {
        type: Object,
        default: {
            id: "",
            name: "",
            age: ""
        }
    }
})

let student = ref({
    id: props.initialValue.id,
    name: props.initialValue.name,
    age: props.initialValue.age
});

watch(() => props.initialValue, (newValue) => {

    student.value = {
        id: newValue.id,
        name: newValue.name,
        age: newValue.age
    };
})
let type = computed(() => {
    return student.value.id != '' ? 'edit' : 'create';
})



let errors = reactive({
    name: "",
    age: ""
})

let Form = yup.object().shape({
    name: yup.string().required(),
    age: yup.string().required(),
});

let submitForm = () => {
    errors.name = "";
    errors.age = "";
    Form.validate(student.value, { abortEarly: false })
        .then(() => {
            if (type == 'create') {
                console.log('hi');
                student.value.id = store.getters.totalStudents + 1;
                store.dispatch('addStudent', student.value);
            } else {
                store.dispatch('updateStudent', student.value);
            }
            emit('submit');
        })
        .catch((err) => {
            err.inner.forEach((error) => {
                errors[error.path] = error.message;
            });
        })
}
</script>
<template lang="">
        <h1 class="font-extrabold text-center mb-16">{{type=='create'?'Add New Student':'Edit Student Info'}}</h1>

        <form @submit.prevent="submitForm">
            <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " v-model="student.name" />
                    <label for="name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                         <p class="text-red-600 text-lg font-semibold" v-if="errors.name">{{ errors.name }}</p>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" name="age" id="age"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " v-model="student.age" />
                    <label for="age"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                        <p class="text-red-600 text-lg font-semibold" v-if="errors.age">{{ errors.age }}</p>
                </div>
            </div>
            <div class="flex justify-end mr-6">
                <button type="submit"
                    class="px-6 py-2 bg-gray-600 text-white border rounded-md text-sm text-semibold hover:bg-gray-800">{{type=='create'?'Add':'Update'}}</button>
            </div>

        </form>
</template>

<style lang=""> 
</style>