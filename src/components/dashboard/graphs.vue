<template>
    <div id="graphs__container">
        <!-- <graph />
        <graph /> -->
    </div>
</template>



<script>
import Graph from '@/components/dashboard/graph'

export default {
    components: {
        Graph
    }
}
</script>



<style scoped>
#graphs__container {
    width: calc(50% - 12.5px);
    border-radius: 19px;
    margin-left: 12.5px;
    background: #efefef;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}
</style>