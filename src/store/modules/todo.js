export default {
    namespaced: true,
    state: {
        todos: [
          {id: 1, text: 'buy a car', checked: false},
          {id: 2, text: 'play game', checked: true},
        ],
      },
      mutations: {
        ADD_TODO(state, value) {
          state.todos.push({ 
            id: Math.random(),
            text: value,
            checked: false
          });
        },
        TOGGLE_TODO(state, {id, checked}) {
          const index = state.todos.findIndex(todo => {
            return todo.id === id;
          });
          state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
          // 1. 삭제 1안
          const index = state.todos.findIndex(todo => {
            return todo.id === todoId;
          });
          state.todos.splice(index, 1);
    
          // 2. 삭제 2안
          // state.todos = this.todos.filter(todo => todo.id !== todoId);
        }
      },
      actions: {
        addTodo( { commit }, value) {
          // 비동기 작업 (DB 및 연계 작업 등등...)
          setTimeout(function () {
            commit('ADD_TODO', value);
          }, 1000);
        },
        toggleTodo( { commit }, payload) {
          // 비동기 작업 (DB 및 연계 작업 등등...)
          setTimeout(function () {
            commit('TOGGLE_TODO', payload);
          }, 500);
        },
        deleteTodo( { commit }, todoId) {
          // 비동기 작업 (DB 및 연계 작업 등등...)
          setTimeout(function () {
            commit('DELETE_TODO', todoId);
          }, 500);
        },
    
      },
      modules: {
      },
      getters: {
        numberOfCompletedTodo: state => {
          return state.todos.filter(todo => todo.checked).length;
        }
      }
        
}