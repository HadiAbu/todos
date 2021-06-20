import {createStore} from "vuex";

import axios from "axios";

export default createStore({
  state: {
    todos:[]
  },
  getters:{    
    allTodos: (state) => state.todos 
  },
  actions: {
    //we don't call mutations directly, we mutate the state using commit
    fetchTodos: async ({commit}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
                
        commit('setTodos', res.data);
    },
    addTodo: async ({commit}, title, completed= false) =>{
      const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {title, completed});
    
      commit('newTodo', res.data);
    },
    deleteTodo: async ({commit}, id) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

      commit('removeTodo', id);

    },
    updateTodo: async ({commit}, updatedTodo) => {
      if(updatedTodo.id<200){
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)

        console.log(res.data);

        commit('updateTodo', res.data);
      }else{
        commit('updateTodo', updatedTodo);
      }
    },
    filterTodos: async ( {commit}, e) => {
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
        );
      const res =await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

      commit('setTodos', res.data);
    }
  },
  mutations: {    //syncronous
    setTodos: (state, payload) => state.todos = payload  ,
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo=> todo.id!==id),
    updateTodo: (state, uptd) => {
      const i = state.todos.findIndex(todo => todo.id === uptd.id);
      if (i !== -1) {
          state.todos.splice(i, 1, uptd);
        }    
      }
  },
  modules: {},
});
