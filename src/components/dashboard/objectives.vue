<template>
    <section id="objectives__container">
        <div id="objectives__wrapper">
            <div id="add__objective__container">
                <form id="add__objective__form" @submit.prevent="addObjective" :class="{ valid__objective : objective }">
                    <input id="add__objective__input" type="text" name="objective" placeholder="Ajouter un objectif" v-model="objective" autocomplete="off">
                    <button><i class="icon ion-md-add"></i></button>
                </form>
            </div>
            <div id="objectives__items__container">
                <objective v-for="objective in objectives" v-bind:key="objective.index" v-bind:objective="objective" @deleteItem="deleteObjective(objective)"/>
            </div>
        </div>
        <ul id="objectives__description">
            <li><h2>Comment ça marche ?</h2></li>
            <li><p>- Ajouter un objectif quotidien.</p></li>
            <li><p>- Restez concis exemple: "Faire 50 pompes".</p></li>
            <li><p>- Cochez la case chaque jour quand elle est accomplie.</p></li>
            <li><p>- Traquez vos réussites avec les graphiques.</p></li>
        </ul>
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


#objectives__description {
    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    margin: 0px 0px 75px 2px;
    list-style: none;
}
#objectives__description p {
    margin: 5px 0px 0px 0px;
}


@media screen and (min-width: 1325px) {
    #objectives__container {
        margin-right: 50px;
        width: 500px;
        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }

    #objectives__wrapper {
        margin-bottom: 25px;
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
}



@media screen and (max-width: 1325px) and (min-width: 1225px) {
    #objectives__container {
        margin-right: 25px;
        width: 100%;
        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        margin-bottom: 50px;
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
        margin: 0px 0px 0px 50px;
    }
    #objectives__description h2 {
        margin-top: 0;
    }
}



@media screen and (max-width: 1225px) and (min-width: 900px) {
    #objectives__container {
        width: 100%;
        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 50px;
    }

    #objectives__wrapper {
        width: 100%;
        margin-bottom: 25px;
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
        margin: 0;
        padding: 0;
    }
}



@media screen and (max-width: 900px) {
    #objectives__container {
        max-width: 100%;
        width: 100%;
        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }

    #objectives__wrapper {
        width: 100%;
        margin-bottom: 25px;
    }

    #add__objective__container {
        width: 100%;
        height: 38px;
        background: var(--primaryColor);
        border-radius: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 25px;
    }

    #add__objective__container form {
        width: 100%;
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
        width: calc(100% - 57px);
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
}
</style>