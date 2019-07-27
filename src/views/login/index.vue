<template>
    <section id="main__container">
        <div id="login__container">
            <h1>Connexion</h1>
            <form @submit.prevent="loginAction">
                <div class="form-group">
                    <input type="email" name="email" v-model="credentials.email">
                    <label for="email" :class="{ active: credentials.email }">Email</label>
                </div>
                <div class="form-group">
                    <input type="password" name="password" v-model="credentials.password">
                    <label for="password" :class="{ active: credentials.password }">Mot de passe</label>
                </div>
                <button>Se connecter</button>
                <transition name="fade">
                    <div v-if="error" id="error__container">
                        <p>{{ error }}</p>
                    </div>
                </transition>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            credentials: {
                email: null,
                password: null,
            },
            error: null,
        }
    },
    methods: {
        async loginAction () {
            if (!this.credentials.email || !this.credentials.password) {
                return this.error = 'Veuillez remplir tous les champs.'
            }

            let response = await this.$store.dispatch('login', {
                email: this.credentials.email,
                password: this.credentials.password
            })

            if (response.success === false) {
                return this.error = response.message
            } else {
                return this.$router.push('/dashboard')   
            }
        }
    },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#error__container {
    background: #E91E63;
    color: white;
    margin-top: 15px;
    border-radius: 15px;
    padding: 5px 15px 5px 15px;
}
#error__container p {
    padding: 0px;
    margin: 0px;
}

#main__container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#login__container {
    padding-top: 75px;
    width: 350px;
    min-width: 100%;
    border-radius: 15px;
    text-align: center;
}

#login__container form {
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

#login__container form .form-group {
    width: 320px;
}

#login__container form label {
    position: relative;
    margin-top: 0px;
    top: -30px;
    font-weight: normal;
    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}

#login__container form input {
    font-size: 17px;
    margin-top: 15px;
    outline: none;
    height: 32px;
    width: 320px;
    border: none;
    border-bottom: 1px solid var(--accentColor);

    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}

#login__container form input:focus {
    border-bottom: 1px solid var(--primaryColor);
}

#login__container form .form-group input:focus + label {
    top: -50px;
}

#login__container form .form-group label.active {
    top: -50px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

#login__container form button {
    margin-top: 15px;
    cursor: pointer;
    border-radius: 15px;
    border: none;
    background: var(--primaryColor);
    color: white;
    font-size: 19px;
    font-weight: 300;
    height: 32px;
    padding: 0px 15px 0px 15px;
    outline: none;

    -webkit-box-shadow: var(--shadowBoxPrimaryColor);
    -moz-box-shadow: var(--shadowBoxPrimaryColor);
    box-shadow: var(--shadowBoxPrimaryColor);

    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}

#login__container form button:hover {
    -webkit-box-shadow: var(--shadowBoxHoveredPrimaryColor);
    -moz-box-shadow: var(--shadowBoxHoveredPrimaryColor);
    box-shadow: var(--shadowBoxHoveredPrimaryColor);
}
</style>