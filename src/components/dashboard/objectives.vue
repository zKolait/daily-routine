<template>
    <div id="objectives__container">
        <h2>Objectifs journaliers</h2>
        <objective />
        <objective />
    </div>
</template>



<script>
import Objective from '@/components/dashboard/objective'

export default {
    components: {
        Objective
    }
}
</script>



<style scoped>
#items__container #objectives__container {
    width: calc(50% - 12.5px);
    border-radius: 19px;
    margin-right: 12.5px;
    background: #efefef;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
</style>