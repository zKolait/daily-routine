<template>
    <div id="graphs__container">
        <graph :updateGraphNumber="updateGraphNumber" />
    </div>
</template>



<script>
import Graph from '@/components/dashboard/graph'

export default {
    props: {
        updateGraphNumber: Number,
    },
    components: {
        Graph
    }
}
</script>



<style scoped>
@media screen and (min-width: 1325px) {
    #graphs__container {
        width: calc(100% - 550px);
        min-width: 500px;
        border-radius: 19px;
        margin-left: 0px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
    }
}

@media screen and (max-width: 1325px) {
    #graphs__container {
        width: 100%;
        min-width: 300px;
        border-radius: 19px;
        margin-left: 0px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
    }  
}
</style>