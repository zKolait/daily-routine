<template>
    <div id="page__container">
        <landing-header :key="headerKey"/>
        <main>
            <slot/>
        </main>
        <landing-footer />
    </div>
</template>

<script>
import LandingHeader from '@/components/landing/header'
import LandingFooter from '@/components/landing/footer'

export default {
    components: { 
        LandingHeader, 
        LandingFooter 
    },
    data() {
        return {
            headerKey: 0,
        }
    },
    watch: {
        '$route' (to, from) {
            this.headerKey++
        }
    }
}
</script>

<style scoped>
</style>
