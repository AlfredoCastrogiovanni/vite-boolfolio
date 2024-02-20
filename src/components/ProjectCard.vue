<script>
    export default {
    name: "ProjectCard",
    props: {
        'projectData': Object,
    }
    }
</script>

<template>
    <div class="card">
        <h5 class="card-header">Project {{ projectData.id }}</h5>
        <div class="card-body">
            <h2 class="card-title">{{ projectData.name }}</h2>
            <p class="card-text">{{ projectData.description }}</p>
            <p class="card-text">
                <div class="fw-bold mb-1">Technologies:</div>
                <span class="me-2" v-for="technology in projectData.technologies">
                    <img :src="technology.img_url" style="width: 30px"> {{ technology.name }}
                </span>
            </p>
            <p class="card-text"><span class="fw-bold">Type:</span> {{ projectData.type.name }}</p>
            <p class="card-text"><span class="fw-bold">Day To Make:</span> {{ projectData.day_to_make }}</p>
            <p class="card-text"><span class="fw-bold">Main Languages:</span> {{ projectData.main_languages }}</p>
            <p class="card-text">
                <div class="fw-bold">Repository Url:</div> 
                <a href="{{ projectData.repo_url }}" target="_blank" class="link-underline link-underline-opacity-0">{{ projectData.repo_url }}</a>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>