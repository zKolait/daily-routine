<template>
    <div id="main__container">
        <div id="main__container__content">
            <h1>Découvrez l'outil ultime pour planifier vos journées.</h1>
            <p>En quelques clics seulement définissez des objectifs quotidients, dépassez et challengez vous simplement !</p>
            <a href="" class="button primary">Commencer</a>
        </div>
        <figure>
            <img src="../../public/images/user__tasks__list.svg" alt="">
        </figure>
    </div>
</template>

<script>
</script>

<style scoped>
@media screen and (min-width: 1675px) {
    #main__container {
        position: relative;
        width: 100%;
        height: 700px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
    }

    #main__container #main__container__content {
        margin-left: 50px;
        margin-top: 100px;
        width: 700px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    #main__container #main__container__content h1 {
        font-weight: bold;
        font-size: 42px;
    }

    #main__container #main__container__content p {
        width: 500px;
        font-weight: 500;
        color: #25222C;
        margin: 0 0 20px 0;
    }

    #main__container figure {
        margin-right: 100px;
        height: 500px;
    }

    #main__container figure img {
        height: 700px;
    }
}

@media screen and (max-width: 1675px) and (min-width: 1400px) {
    #main__container {
        position: relative;
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    }

    #main__container #main__container__content {
        position: absolute;
        left: 50px;
        width: 700px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    #main__container #main__container__content h1 {
        font-weight: bold;
        font-size: 42px;
    }

    #main__container #main__container__content p {
        width: 500px;
        font-weight: 500;
        color: #25222C;
        margin: 0 0 20px 0;
    }

    #main__container figure {
        margin: 0;
        position: absolute;
        height: 500px;
        right: 25px;
    }

    #main__container figure img {
        position: relative;
        top: 100px;
        height: 500px;
    }
}



@media screen and (max-width: 1400px) and (min-width: 1024px) {
    #main__container {
        position: relative;
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    }

    #main__container #main__container__content {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 700px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    #main__container #main__container__content h1 {
        font-weight: bold;
        font-size: 42px;
    }

    #main__container #main__container__content p {
        width: 500px;
        font-weight: 500;
        color: #25222C;
        margin: 0 0 20px 0;
    }

    #main__container figure {
        position: absolute;
        top: 100px;
        right: 0;
        height: 400px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    #main__container figure img {
        max-width: calc(100% - 510px);
        min-width: 520px;
    }

}


/* 1300 - infinite */
/* @media screen and (min-width: 1300px) {
    #discover__section {
        position: relative;
        width: 100%;
        height: 700px;
        overflow: hidden;
    }

    #discover__content {
        top: 175px;
        left: 100px;
        position: absolute;
        z-index: 2;
        text-align: start;
        display: flex;
        justify-content: center;
        align-items: flex;
        flex-direction: column;
        width: 500px;
    }
    #discover__content h2 {
        width: 100%;
        font-size: 42px;
        margin: 0;
    }
    #discover__content p {
        width: 100%;
        font-size: 18px;
    }
    #discover__content a {
        background: #38d39f;
        text-decoration: none;
        color: white;
        padding: 6px 20px 6px 20px;
        border-radius: 4px;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        width: 72px;
    }
    #discover__content a:hover {
        background: #58daaf;
    }

    #discover__image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 100px;
        height: 700px;
        width: 900px;
        max-width: calc(100% - 600px);
    } 

    #discover__image img {
        max-height: 700px;
        max-width: 100%;
    }
}

/* 950 - 1300 */
/* @media screen and (max-width: 1300px) and (min-width: 950px) {
    #discover__section {
        position: relative;
        width: 100%;
        height: 700px;
        overflow: hidden;
    }

    #discover__content {
        top: 50px;
        left: 100px;
        position: absolute;
        z-index: 2;
        text-align: start;
        display: flex;
        justify-content: center;
        align-items: flex;
        flex-direction: column;
        width: 500px;
    }
    #discover__content h2 {
        width: 100%;
        font-size: 42px;
        margin: 0;
    }
    #discover__content p {
        width: 100%;
        font-size: 18px;
    }
    #discover__content a {
        background: #38d39f;
        text-decoration: none;
        color: white;
        padding: 6px 20px 6px 20px;
        border-radius: 4px;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        width: 72px;
    }
    #discover__content a:hover {
        background: #58daaf;
    }

    #discover__image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        right: 100px;
        bottom: 0px;
        height: 700px;
        max-width: calc(100% - 400px);
        max-height: 540px;
    } 

    #discover__image img {
        max-height: 540px;
        width: 100%;
        min-width: 700px;
    }
} */

/* 700 - 950 */
/* @media screen and (max-width: 950px) and (min-width: 700px) {
    #discover__section {
        position: relative;
        width: 100%;
        height: 600px;
        overflow: hidden;
    }

    #discover__content {
        top: 50px;
        left: 50px;
        position: absolute;
        z-index: 2;
        text-align: start;
        display: flex;
        justify-content: center;
        align-items: flex;
        flex-direction: column;
        width: 500px;
        max-width: calc(100% - 100px);
    }
    #discover__content h2 {
        width: 100%;
        font-size: 32px;
        margin: 0;
    }
    #discover__content p {
        width: 100%;
        font-size: 17px;
    }
    #discover__content a {
        background: #38d39f;
        text-decoration: none;
        color: white;
        padding: 6px 20px 6px 20px;
        border-radius: 4px;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        width: 72px;
    }
    #discover__content a:hover {
        background: #58daaf;
    }

    #discover__image {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 100%;
        height: 600px;
    } 

    #discover__image img {
        width: 100%;
        max-height: 400px;
    }
} */

/* infinite - 750 */
/* @media screen and (max-width: 750px) {
    #discover__section {
        position: relative;
        width: calc(100% - 30px);
        height: 500px;
        overflow: hidden;
        margin-left: 15px;
    }

    #discover__content {
        top: 50px;
        left: 0px;
        position: absolute;
        z-index: 2;
        text-align: start;
        display: flex;
        justify-content: center;
        align-items: flex;
        flex-direction: column;
        width: 100%;
    }
    #discover__content h2 {
        width: 100%;
        font-size: 24px;
        margin: 0;
    }
    #discover__content p {
        width: 100%;
        max-width: 500px;
        font-size: 17px;
    }
    #discover__content a {
        background: #38d39f;
        text-decoration: none;
        color: white;
        padding: 6px 20px 6px 20px;
        border-radius: 4px;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        width: 72px;
    }
    #discover__content a:hover {
        background: #58daaf;
    }

    #discover__image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        margin: 0px 10px 0px 10px;
        bottom: 0px;
        width: 100%;
        height: 300px;
    } 

    #discover__image img {
        width: 100%;
        max-height: 300px;
    }
} */

</style>