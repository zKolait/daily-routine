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
export default {
    
}
</script>