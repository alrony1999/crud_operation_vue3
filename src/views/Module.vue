<script setup>
import store from "@/store/index.js";
import { ref, onMounted } from "vue";


let index = () => {
    console.log('index');
    store.dispatch('increment', 1);
}

let module = () => {
    console.log('student');
    store.dispatch('student/increment', 1);
}

</script>
<template >
    <div class="flex justify-around">
        <div class="flex">
            <button @click="index" class="bg-red-600 py-2 px-3 border rounded-md text-center">Click</button>
            <h1 class="bg-indigo-600 px-5 border mx-3 ">Index -> state : {{ store.getters.countindex }}</h1>

        </div>
        <div class="flex">
            <button @click="module" class="bg-green-600 py-2 px-3 border rounded-md">Click</button>
            <h1 class="bg-indigo-600 px-5 border mx-3">Student Module -> state :{{
                store.getters['student/countstudent']
            }}
            </h1>

        </div>
        {{ store.getters.studentCount }}
    </div>
</template>

<style >

</style>