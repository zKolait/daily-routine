<template>
    <div class="item__container">
        <div class="item__bar" @click="checkObjective" :class="{validatedObjective: objective.completed}">
            <p>{{ objective.description }}</p>
            <div class="item__checker">
                <i class="icon ion-md-checkmark"></i>
            </div>
        </div>
        <div class="item__delete" @click="deleteItem()" v-if="!objective.loading && !sending">
            <i class="icon ion-md-trash"></i>
        </div>
        <div class="lds-ripple" v-if="objective.loading || sending"><div></div><div></div></div>
    </div>
</template>



<script>
const api = require('@/api/api').default;

export default {
    props: {
        objective: Object,
        required: true,
    },
    data () {
        return {
            sending: false,
        }
    },
    methods: {
        async checkObjective() {
            if (!this.objective._id || this.sending) {
                return
            }

            // Update UI
            this.objective.completed = !this.objective.completed

            // Update API
            let update = {
                completed: this.objective.completed
            }

            this.sending = true
            await api.tasks.checkTask(this.objective._id, update)
            this.sending = false
        },
        deleteItem() {
            // Update UI & API
            this.$emit('deleteItem', this.objective._id)
        }
    }
}
</script>



<style scoped>
.item__container {
    max-width: 500px;
    width: 100%;
    min-width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item__bar {
    margin: 3px 0px 5px 0px;
    width: calc(100% - 50px);
    background: #FFA726;
    border-radius: 19px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    cursor: pointer;
    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}

.item__bar p {
    margin-left: 20px;
}

.item__bar .item__checker {
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: white;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
    animation-name: not__checked;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}

.item__bar.validatedObjective {
    background: #4CAF50; 
}
.item__bar.validatedObjective .item__checker {
    animation: none;
}
.item__bar.validatedObjective .item__checker i {
    color: #4CAF50;
    font-size: 24px;
    position: relative;
    top: -4px;
    left: 2px;
}

.item__delete {
    background: var(--primaryColor);
    color: white;
    width: 38px;
    height: 38px;
    border-radius: 19px;
    cursor: pointer;
}
.item__delete i {
    top: 7px;
    left: 12.5px;
    position: relative;
    font-size: 21px;
}



.lds-ripple {
  display: inline-block;
  position: relative;
  width: 38px;
  height: 38px;
}
.lds-ripple div {
  position: absolute;
  border: 8px solid var(--primaryColor);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1.75s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.75s;
}
@keyframes lds-ripple {
  0% {
    top: 12px;
    left: 12px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -4px;
    left: -4px;
    width: 30px;
    height: 30px;
    opacity: 0;
  }
}




@media screen and (max-width: 1225px) and (min-width: 900px) {
    .item__container {
        max-width: 100%;
    }
}

@media screen and (max-width: 900px) {
    .item__container {
        max-width: 100%;
    }
}


@keyframes not__checked {
  0%   { left: 0px;}
  50%  { left: 0px;}
  51%  { left: 1px; top: 0px }
  52%  { left: -1px; top: 2px }
  53%  { left: 2px; top: -1px }
  54%  { left: -2px; top: 0px }
  55%  { left: 0px;}
  100% { left: 0px;}
}
</style>