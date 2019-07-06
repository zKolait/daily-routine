<template>
    <section id="main__container">
        <div id="website__main__presentation" v-scroll-reveal.reset="{ delay: 50, duration: 500, distance: '50px' }">
            <h1 id="presentation__title">Réalisez vos objectifs.</h1>
            <p id="presentation__sub__title">Programmez, managez et traquez vos objectifs en seulement quelques cliques !</p>
            <router-link id="app__login__button" to="/login">
                <p>Commencer maintenant</p>
                <i class="icon ion-md-arrow-dropright"></i>
            </router-link>
            <figure>
                <img src="../../public/images/blobs.svg" alt="Decoration blobs">
            </figure>
        </div>
        <figure id="main__svg" v-scroll-reveal.reset="{ delay: 50, duration: 500, distance: '50px' }">
            <img src="../../public/images/task__list.svg" alt="Illustration de présentation">
        </figure>
    </section>
</template>

<script>
</script>

<style scoped>
#main__container {
    min-width: calc(100% - 200px);
    padding: 25px 100px 0px 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
}


#main__container #website__main__presentation {
    position: relative;
    padding: 100px 0px 5vw 0px;
    width: calc(50%);
    min-width: 690px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
}

#main__container #website__main__presentation #presentation__title {
    margin: 0;
    font-size: var(--headlineFontSize);
}
#main__container #website__main__presentation #presentation__sub__title {
    padding-right: 175px;
    margin: 20px 0px 30px 3px;
    font-size: var(--subHeadlineFontSize);
    color: var(--accentColor);
}

#main__container #website__main__presentation #app__login__button {
    margin-right: 14px;
    font-size: var(--buttonFontSize);
    background: var(--primaryColor);
    color: white;
    text-decoration: none;
    padding: 0px 10px 0px 10px;
    border-radius: 28px;
    height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;

    -webkit-box-shadow: var(--shadowBoxPrimaryColor);
    -moz-box-shadow: var(--shadowBoxPrimaryColor);
    box-shadow: var(--shadowBoxPrimaryColor);

    -webkit-transition: var(--transitionTime);
    transition: var(--transitionTime);
}
#main__container #website__main__presentation #app__login__button p {
    margin: 0px;
    font-size: var(--buttonFontSize);
}
#main__container #website__main__presentation #app__login__button i {
    margin-right: 4px;
    font-size: 24px;
    padding-top: 2px;
}
#main__container #website__main__presentation #app__login__button:hover {
    width: 245px;

    -webkit-box-shadow: var(--shadowBoxHoveredPrimaryColor);
    -moz-box-shadow: var(--shadowBoxHoveredPrimaryColor);
    box-shadow: var(--shadowBoxHoveredPrimaryColor);
}

#main__container #website__main__presentation figure {
    width: 50%;
    margin: 0;
    padding: 120px 0px 0px 0px;
}

#main__container #website__main__presentation img {
    position: relative;
    width: calc(100%);
    min-width: 300px;
}


#main__container #main__svg {
    position: absolute;
    padding-top: 100px;
    max-width: calc(50%);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    right: 100px !important;
}

#main__container #main__svg img {
    max-width: 100%;
    min-width: 700px;
}
</style>