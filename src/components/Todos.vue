<template>
    <div>
        <h2>
            Todos
        </h2>
        <div class="todos">
            <div @dblclick="doubleClickTodo(todo)" class="todo"
               v-bind:class="{'is-complete':todo.completed}"
               v-for="todo in allTodos" :key="todo.id" >
                {{ todo.title }}
                <i @click="deleteTodo(todo.id)"  class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default{
        name:'Todos',
        methods:{
            ...mapActions(['fetchTodos','deleteTodo','updateTodo']),
            doubleClickTodo(todo){
                const updated = {
                    id: todo.id,
                    title: todo.title,
                    completed: !todo.completed
                }
                console.log(updated);
                this.updateTodo(updated);
            }
        },
        computed: mapGetters(['allTodos']),
        created(){ //lifecycle, before render method
            this.fetchTodos();
        }
    }

</script>

<style  scoped>
.todo{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 5px;
    justify-content: center;
    align-items: center;
}
i{ color: red; }

.todos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.todo{
    border: 1px solid rgb(71, 57, 57);
    background: rgb(176, 199, 140);
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
}
.complete {
  background: #35495e;
}
.incomplete {
  background: rgb(176, 199, 140);
}
.is-complete {
  background: #35495e;
  color: #fff;
}

</style>