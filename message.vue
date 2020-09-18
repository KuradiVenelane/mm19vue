<template>
    <div>
        <input type="text" v-model="message" @keydown.enter="add" @keydown.delete="items = []"> 
        <button @click="add"> Add </button>
        <button @click="items = []">Clear All</button> 
        <ul>
            <li v-for="item in items" :key="item">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items: []
        }
    },
    methods: {
        add(){
            if(this.message!='') {  
                this.items.push(this.message);
                this.message="";
            }
        }
    }
}
</script>