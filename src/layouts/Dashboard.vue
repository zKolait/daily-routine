<template>
    <div id="page__container">
        <landing-header :disconnect="true" />
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
}
</script>