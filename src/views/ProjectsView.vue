<script>
    import axios from 'axios';
    import ProjectCard from '@/components/ProjectCard.vue';

    export default {
    name: "ProjectsView",
    components: { ProjectCard },
    data() {
        return {
            projectsData: [],
        }
    },
    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
            .then( response => {
                // handle success
                console.log(response);
                this.projectsData = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center mb-3">
                <h1>All Projects</h1>
            </div>
            <div class="col-4" v-for="projectData in projectsData">
                <ProjectCard :projectData="projectData" @click="$router.push({ name: 'projects.show', params: { id: projectData.id} })" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>