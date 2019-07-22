<template>
    <section id="objectives__container">
        <div id="add__objective__container">
            <form id="add__objective__form" @submit.prevent="addObjective" :class="{ valid__objective : objective }">
                <input id="add__objective__input" type="text" name="objective" placeholder="Ajouter un objectif" v-model="objective" autocomplete="off">
                <button><i class="icon ion-md-add"></i></button>
            </form>
        </div>
        <div id="objectives__items__container">
            <objective v-for="objective in objectives" v-bind:key="objective.index" v-bind:objective="objective" @deleteItem="deleteObjective(objective)"/>
        </div>
        <div id="objectives__description">

        </div>
    </section>
</template>



<script>
import Objective from '@/components/dashboard/objective'

export default {
    components: {
        Objective
    },
    data () {
        return {
            objective: null,
            objectives: [
                {
                    title: 'Faire 50 pompes',
                    completed: false,
                },
                {
                    title: 'Dessiner un plan',
                    completed: true,
                }
            ],
        }
    },
    mounted () {
        // Get API
        // Set this.objectives
    },
    methods: {
        addObjective () {
            let objective = {
                title: this.objective,
                completed: false,
            }

            // Add on API

            // Add on UI
            this.objectives.push(objective)
            this.objective = ''
        },
        editObjective () {

        },
        deleteObjective (objective) {
            // Update API

            // Update UI
            let index = this.objectives.findIndex((item) => item == objective)
            this.objectives.splice(index, 1)
        },
    }
}
</script>



<style scoped>
::placeholder {
  color: white;
  opacity: 1;
}
:-ms-input-placeholder {
  color: white;
}
::-ms-input-placeholder {
  color: white;
}

#objectives__container {
    width: 500px;
    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}

#add__objective__container {
    width: 500px;
    height: 38px;
    background: var(--primaryColor);
    border-radius: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

#add__objective__container input {
    position: relative;
    top: -1px;
    height: 38px;
    border: none;
    background: none; 
    color: white;
    font-size: 19px;
    outline: none; 
    width: 443px;
    padding-left: 19px;
}
#add__objective__container button {
    position: relative;
    top: 2px;
    right: 2px;
    height: 38px;  
    border: none;
    background: none;
    color: #ededed;
    font-size: 24px;
    outline: none;
    cursor: pointer;
    width: 38px;

    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);   
}

#add__objective__container .valid__objective button {
    color: white;
    font-size: 28px;
    top: 3.25px;
}


#objectives__items__container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}


#objectives__description {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}
</style>