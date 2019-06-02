<template>
    <div id="page__container">
        <landing-header />
        <main>
            <slot />
        </main>
        <landing-footer />
    </div>
</template>

<script>
import LandingHeader from '@/components/landing/header'
import LandingFooter from '@/components/landing/footer'

export default {
    components: { LandingHeader, LandingFooter }
}
</script>

<style scoped>
    #page__container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    main {
        width: 100%;
        height: 700px;
    }
</style>
