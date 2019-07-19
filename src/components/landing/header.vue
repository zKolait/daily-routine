<template>
    <header>
        <router-link to="/" id="app__title">
            <i class="icon ion-md-checkmark"></i>
            <h2>Dailyroutine</h2>
        </router-link>
        <router-link to="/login" id="app__login__button" v-if="(checkRoute() && !isLogged || headerType === 'register')">
            <p>Se connecter</p>
            <i class="icon ion-md-arrow-dropright"></i>
        </router-link>
        <router-link to="/register" id="app__login__button" v-if="headerType === 'login'">
            <p>S'enregistrer</p>
            <i class="icon ion-md-arrow-dropright"></i>
        </router-link>
        <router-link to="/dashboard" id="app__login__button" v-if="headerType === null && isLogged">
            <p>Dashboard</p>
            <i class="icon ion-md-arrow-dropright"></i>
        </router-link>
    </header>
</template>

<script>
import cookies from 'vue-cookies';

export default {
    data () {
        return {
            headerType: null,
            isLogged: false,
        }
    },
    mounted () {
        console.log('mounted');
        if (cookies.get('x-hp')) {
            this.isLogged = true
        } else {
            this.isLogged = false
        }

        this.checkRoute()
    },
    methods: {
        checkRoute() {
            if (this.$route.path.includes('login')) {
                this.headerType = 'login'

                return false
            } else if (this.$route.path.includes('register')) {
                this.headerType = 'register'

                return false
            } else {
                this.headerType = null

                return true
            }
        }
    },
}
</script>

<style scoped>
@media screen and (min-width: 900px) {
    header {
        height: 100px;
        padding: 0px 100px 0px 100px;
        /* background: var(--primaryColor); */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header a {
        text-decoration: none;
    }

    header #app__title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    header #app__title h2 {
        font-size: var(--titleFontSize);
        font-weight: 300;
        color: var(--accentColor);
        background: none;
    }
    header #app__title i {
        position: relative;
        font-size: 32px;
        width: 33px !important;
        height: 38px;
        margin: 0px 10px 0px 10px;
        color: white;
        border-radius: 24px;
        padding: 3px 0px 0px 8px;
        background: var(--primaryColor);

        -webkit-box-shadow: var(--shadowBoxPrimaryColor);
        -moz-box-shadow: var(--shadowBoxPrimaryColor);
        box-shadow: var(--shadowBoxPrimaryColor);

        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }
    header #app__title:hover i {
        -webkit-box-shadow: var(--shadowBoxHoveredPrimaryColor);
        -moz-box-shadow: var(--shadowBoxHoveredPrimaryColor);
        box-shadow: var(--shadowBoxHoveredPrimaryColor);   
    }


    header #app__login__button {
        margin-right: 14px;
        font-size: var(--buttonFontSize);
        background: var(--accentColor);
        color: white;
        text-decoration: none;
        padding: 0px 15px 0px 15px;
        border-radius: 28px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;

        -webkit-box-shadow: var(--shadowBoxAccentColor);
        -moz-box-shadow: var(--shadowBoxAccentColor);
        box-shadow: var(--shadowBoxAccentColor);

        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }
    header #app__login__button p {
        margin: 0px;
    }
    header #app__login__button i {
        margin-left: 10px;
        font-size: 24px;
        padding-top: 2px;
    }
    header #app__login__button:hover {
        -webkit-box-shadow: var(--shadowBoxHoveredAccentColor);
        -moz-box-shadow: var(--shadowBoxHoveredAccentColor);
        box-shadow: var(--shadowBoxHoveredAccentColor);
    }
}






@media screen and (max-width: 900px) and (min-width: 600px) {
    header {
        height: 100px;
        padding: 0px 10px 0px 10px;
        /* background: var(--primaryColor); */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header a {
        text-decoration: none;
    }

    header #app__title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    header #app__title h2 {
        font-size: var(--titleFontSize);
        font-weight: 300;
        color: var(--accentColor);
        background: none;
    }
    header #app__title i {
        position: relative;
        font-size: 32px;
        width: 33px !important;
        height: 38px;
        margin: 0px 10px 0px 10px;
        color: white;
        border-radius: 24px;
        padding: 3px 0px 0px 8px;
        background: var(--primaryColor);

        -webkit-box-shadow: var(--shadowBoxPrimaryColor);
        -moz-box-shadow: var(--shadowBoxPrimaryColor);
        box-shadow: var(--shadowBoxPrimaryColor);

        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }
    header #app__title:hover i {
        -webkit-box-shadow: var(--shadowBoxHoveredPrimaryColor);
        -moz-box-shadow: var(--shadowBoxHoveredPrimaryColor);
        box-shadow: var(--shadowBoxHoveredPrimaryColor);   
    }


    header #app__login__button {
        margin-right: 14px;
        font-size: var(--buttonFontSize);
        background: var(--accentColor);
        color: white;
        text-decoration: none;
        padding: 0px 15px 0px 15px;
        border-radius: 28px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;

        -webkit-box-shadow: var(--shadowBoxAccentColor);
        -moz-box-shadow: var(--shadowBoxAccentColor);
        box-shadow: var(--shadowBoxAccentColor);

        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }
    header #app__login__button p {
        margin: 0px;
    }
    header #app__login__button i {
        margin-left: 10px;
        font-size: 24px;
        padding-top: 2px;
    }
    header #app__login__button:hover {
        -webkit-box-shadow: var(--shadowBoxHoveredAccentColor);
        -moz-box-shadow: var(--shadowBoxHoveredAccentColor);
        box-shadow: var(--shadowBoxHoveredAccentColor);
    }
}



@media screen and (max-width: 600px) {
    header {
        height: 100px;
        padding: 0px 5px 0px 5px;
        /* background: var(--primaryColor); */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header a {
        text-decoration: none;
    }

    header #app__title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    header #app__title h2 {
        font-size: 19px;
        font-weight: 300;
        color: var(--accentColor);
        background: none;
    }
    header #app__title i {
        position: relative;
        font-size: 32px;
        width: 33px !important;
        height: 38px;
        margin: 0px 10px 0px 10px;
        color: white;
        border-radius: 24px;
        padding: 3px 0px 0px 8px;
        background: var(--primaryColor);

        -webkit-box-shadow: var(--shadowBoxPrimaryColor);
        -moz-box-shadow: var(--shadowBoxPrimaryColor);
        box-shadow: var(--shadowBoxPrimaryColor);

        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }
    header #app__title:hover i {
        -webkit-box-shadow: var(--shadowBoxHoveredPrimaryColor);
        -moz-box-shadow: var(--shadowBoxHoveredPrimaryColor);
        box-shadow: var(--shadowBoxHoveredPrimaryColor);   
    }


    header #app__login__button {
        margin-right: 0px;
        font-size: 16px;
        background: var(--accentColor);
        color: white;
        text-decoration: none;
        padding: 0px 15px 0px 15px;
        border-radius: 28px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;

        -webkit-box-shadow: var(--shadowBoxAccentColor);
        -moz-box-shadow: var(--shadowBoxAccentColor);
        box-shadow: var(--shadowBoxAccentColor);

        -webkit-transition: var(--transitionTime);
        transition: var(--transitionTime);
    }
    header #app__login__button p {
        margin: 0px;
    }
    header #app__login__button i {
        margin-left: 7px;
        font-size: 24px;
        padding-top: 2px;
    }
    header #app__login__button:hover {
        -webkit-box-shadow: var(--shadowBoxHoveredAccentColor);
        -moz-box-shadow: var(--shadowBoxHoveredAccentColor);
        box-shadow: var(--shadowBoxHoveredAccentColor);
    }
}
</style>
