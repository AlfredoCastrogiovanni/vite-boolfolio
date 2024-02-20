<script>
    export default {
    name: "AppHeader"
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand fw-bold text-uppercase">Portfolio</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </button>
                            <ul class="dropdown-menu">
                                <li><RouterLink to="/projects" class="dropdown-item">All Projects</RouterLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>