<script>
    import axios from 'axios';

    export default {
    name: "ProjectView",
    data() {
        return {
            project: [],
        }
    },
    methods: {
        getProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
            .then( response => {
                // handle success
                console.log(response);
                this.project = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        },
    },
    created() {
        this.getProject();
    }
    }
</script>

<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <h5 class="card-header">Project {{ project.id }}</h5>
                    <div class="card-body">
                        <h2 class="card-title">{{ project.name }}</h2>
                        <p class="card-text">{{ project.description }}</p>
                        <p class="card-text">
                            <div class="fw-bold mb-1">Technologies:</div>
                            <span class="me-2" v-for="technology in project.technologies">
                                <img :src="technology.img_url" style="width: 30px"> {{ technology.name }}
                            </span>
                        </p>
                        <p class="card-text"><span class="fw-bold">Type:</span> {{ project.type.name }}</p>
                        <p class="card-text"><span class="fw-bold">Day To Make:</span> {{ project.day_to_make }}</p>
                        <p class="card-text"><span class="fw-bold">Main Languages:</span> {{ project.main_languages }}</p>
                        <p class="card-text">
                            <div class="fw-bold">Repository Url:</div> 
                            <a href="{{ project.repo_url }}" target="_blank" class="link-underline link-underline-opacity-0">{{ project.repo_url }}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>