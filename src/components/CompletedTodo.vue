<template>
    <div>
        <h3>
            Completed Todo: {{ numberOfCompletedTodo }}
            <!-- {{ todos }} -->
        </h3>
    </div>
  
</template>

<script>
export default {
    // props: {
    //     todos: {
    //         type: Array,
    //         required: true
    //     }
    // },

    computed: {
        // todos() {
        //     return this.$store.state.todos;
        // },
        numberOfCompletedTodo() {
            // return this.todos.filter(todo => todo.checked).length;
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    }

}
</script>

<style>

</style>