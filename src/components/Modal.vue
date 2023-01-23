<!-- <script setup>
defineProps({
    show: Boolean
})
</script>
<template >
    <div v-if="show" class="modal-mask">
        <div class="modal-container">
            <header>
                <slot name="header"></slot>
            </header>
            <div>
                <slot></slot>
            </div>
            <footer class="modal-footer">
                <slot name="footer">
                    <button @click="$emit('close')">Close</button>
                </slot>

            </footer>
        </div>
    </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}

.modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 5px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: .8rem;
}

.modal-footer button {
    background-color: #ddd;
    padding: .25rem .75rem;
    border-radius: 20px;
}

.modal-footer button:hover {
    background: rgb(143, 138, 138);
}
</style> -->
<template>
    <Teleport to="body">
        <el-dialog v-model="localVisible" :width="width">
            <slot></slot>
        </el-dialog>
    </Teleport>
</template>

<script lang="js">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Modal",
    emits: ['close'],
    props: {
        width: {
            type: String,
            default: "50%",
        },
        visible: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            localVisible: this.visible,
        };
    },
    watch: {
        visible(newVal) {
            this.localVisible = newVal;
        },
        localVisible(newVal) {
            if (newVal == false) {
                this.$emit('close');
            }
        }
    }
});
</script>
<style scoped>

</style>
