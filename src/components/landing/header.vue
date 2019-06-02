<template>
    <header>
        <a id="header__content">
            <h2>Daymanager</h2>
        </a>
        <div id="header__nav">
            <ul>
                <li>
                    <a href="" class="button secondary">Se connecter</a>
                </li>
                <li>
                    <a href="" class="button primary">S'inscrire</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    header #header__content {
        cursor: pointer;
        margin-left: 50px;
        width: 230px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }

    /* header #header__content img {

    } */

    header #header__content h2 {
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0.225em;        
        color: #25222C;
        text-transform: uppercase;
        transition: 0.3s;
    }

    header #header__content h2::after {
        content: '';
        position: absolute;
        top: 92px;
        margin-left: -170px;
        width: 170px;
        height: 2px;
        -webkit-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    header #header__content:hover h2::after {
        background: #38D39F;
        -webkit-transform: translateY(-5px);
        -ms-transform: translateY(-5px);
        transform: translateY(-5px);

    }
    header #header__nav {
        margin-right: 50px;
        width: 320px;
        height: 75px;
    }

    header #header__nav ul {
        width: 320px;
        height: 75px;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    header #header__nav ul li {
        
    }
</style>
