<template>
    <header>
        <router-link to="/" id="app__title">
            <i class="icon ion-md-checkmark"></i>
            <h2>Dailyroutine</h2>
        </router-link>
        <router-link to="/login" id="app__login__button">
            <p>Se connecter</p>
            <i class="icon ion-md-arrow-dropright"></i>
        </router-link>
    </header>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style scoped>
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
</style>
