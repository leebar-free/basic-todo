<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!-- <CompletedTodo :todos="todos" /> -->
    <CompletedTodo  />
    <AddTodo />
    <hr>
    <TodoList />
    <UserList />

    <!-- {{ todos }} -->

  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
import UserList from '@/components/UserList.vue';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
  data() {
    return {
      todoText: '',
      // todos: [
      //   {id: 1, text: 'buy a car', checked: false},
      //   {id: 2, text: 'play game', checked: true},
      // ]
    }
  },

  methods: {
    // addTodo(value) {
    //   console.log("addTodo :: " + value);
      // this.todos.push({ 
      //   id: Math.random(),
      //   text: value,
      //   checked: false
      // });
    //   this.todoText = '';
    // },
    // toggleCheckbox( {id, checked} ) {
    //   console.log(id, checked);
    //   const index = this.todos.findIndex(todo => {
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
    // deleteTodo(id) {
      // 1. 삭제 1안
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);

      // 2. 삭제 2안
      // this.todos = this.todos.filter(todo => todo.id !== id);
    // }
  }
  
}
</script>
