<script>
    import AppHeader from './components/AppHeader.vue';
    import axios from 'axios';

    export default {
    name: "AppVue",
    components: { AppHeader }
}
</script>

<template>
    <AppHeader/>
    <RouterView></RouterView>
</template>

<style lang="scss">

</style>