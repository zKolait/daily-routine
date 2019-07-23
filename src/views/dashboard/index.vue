<template>
    <section id="main__container">
        <!-- <a id="add__objective">
            <p>Ajouter un objectif</p>
            <i class="icon ion-md-add"></i>
        </a> -->
        <div id="items__container">
            <objectives />
            <graphs />
        </div>
    </section>
</template>



<script>
import Objectives from '@/components/dashboard/objectives'
import Graphs from '@/components/dashboard/graphs'

export default {
    components: {
        Objectives,
        Graphs,
    }
}
</script>



<style scoped>
@media screen and (min-width: 900px) {
    #main__container {
        min-width: calc(100% - 250px);
        padding: 25px 100px 0px 100px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    } 
}
@media screen and (max-width: 900px) {
    #main__container {
        min-width: 100%;
        padding: 25px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
    } 
}

/* #add__objective {
    margin-bottom: 25px;
    margin-left: 10px;
    background: var(--primaryColor);
    border-radius: 19px;
    height: 38px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    -webkit-box-shadow: var(--shadowBoxPrimaryColor);
    -moz-box-shadow: var(--shadowBoxPrimaryColor);
    box-shadow: var(--shadowBoxPrimaryColor);

    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}

#add__objective p {
    margin: 0px 10px 0px 10px;
    font-size: 19px;
}
#add__objective i {
    margin: 0px 10px 0px 0px;
    font-size: 19px;
}

#add__objective:hover {
    -webkit-box-shadow: var(--shadowBoxHoveredPrimaryColor);
    -moz-box-shadow: var(--shadowBoxHoveredPrimaryColor);
    box-shadow: var(--shadowBoxHoveredPrimaryColor);  
} */

#items__container {
    margin-left: 20px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}

</style>