<template>
    <div>
        <h5>
            <!-- [[ Todo List ]]
            <div v-for="todo in todos" :key="todo.id" >
                {{ todo.text }}
            </div> <br> -->
            [[ User List ]]
            <div v-for="user in users" :key="user.id" >
                {{ user.name }}
            </div>
        </h5>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            // users: []
        }
    },
    created() {
        this.getUsers();
    },
    computed: {
        // ...mapState([
        //     // 'todos',
        //     'users'
        // ]),
        // ...mapState({people: 'users'}),
        ...mapState({
            users: state => state.user.users
        }),
        // users() {
        //     return this.$store.state.users;
        // },
        // todos() {
        //     return this.$store.state.todos;
        // },
    },
    methods: {
        ...mapActions('user', ['getUsers']),
        // getUsers() {
        //     this.$store.dispatch('getUsers');
        //     // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        //     //     this.users = res.data;
        //     // });
        // }
    }

}
</script>

<style>

</style>