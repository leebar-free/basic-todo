<template>
    <div>
        <input 
            v-model="todoText"
            type="text" 
            class="w-100 p-2" 
            placeholder="Type todo"
            @keyup.enter="addTodo"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            // console.log("addTodo :: " + e.target.value);
            // this.$emit('add-todo', e.target.value);
            // this.$store.commit('ADD_TODO', e.target.value); // commit -> mutations, dispatch -> actions
            this.$store.dispatch('todo/addTodo', e.target.value); // commit -> mutations, dispatch -> actions
            this.todoText = '';
        },
    }
}
</script>

<style>

</style>