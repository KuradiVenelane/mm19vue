<template>
    <div class="tabs">
        <ul>
            <li v-for="(title,index) in titles" 
            :key="index"
            :class="{"is-active": index == active}"
            @click="active=index"
            <a>{{title}}</a></li>
</template>
<script>
export default {
    data(){
        return {
            titles: ["games","books","shows","music"]
            active: 0
        }
    }
}
</script>