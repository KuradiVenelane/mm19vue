<template>
    <tabs></tabs>
</template>
<script>
import tabs from './tabs.vue';
export default {
    components: {
        tabs: tabs
    },
    data() {
        return {
            headers: ["games","books","shows","music"]
        }
    }
})
</script>