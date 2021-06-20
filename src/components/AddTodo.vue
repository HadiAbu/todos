<template>
    Add Todo:
    <form @submit="onSubmit">
        <input type="text" v-model="text" />
        <input  type="submit" value='Add Todo'/>
        {{ text }}
    </form>
</template>

<script>
// import { ref } from '@vue/reactivity';
import { mapActions } from 'vuex';

export default{
    name: 'AddTodo',
    data(){
        return{
            text: ""
        }
    },
    methods:{
        ...mapActions(['addTodo']), 
        onSubmit(e){
            e.preventDefault();
            this.addTodo(this.text);
        }
    }
}
</script>
<style scoped>
    form{
        display: grid;
        grid-template-columns: 6fr 1fr;
        gap: 10px ;
    }
</style>