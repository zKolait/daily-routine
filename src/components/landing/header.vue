<template>
    <header>
        <a id="header__content">
            <h2>Dailyroutine</h2>
        </a>
        <nav id="header__nav">
            <ul class="large">
                <li>
                    <a href="" class="button secondary">Se connecter</a>
                </li>
                <li>
                    <a href="" class="button primary">S'inscrire</a>
                </li>
            </ul>
            <ul class="little">
                <li>
                    <a @click="phoneMenu = !phoneMenu">
                        <i class="icon ion-md-menu"></i>
                    </a>
                    <transition name="fade">
                        <nav id="phone__menu" v-if="phoneMenu">
                            <ul>
                                <li>
                                    <a href="">Se connecter</a>
                                </li>
                                <li>
                                    <a href="">S'inscrire</a>
                                </li>
                            </ul>
                        </nav>
                    </transition>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data () {
        return {
            phoneMenu: false
        }
    }
}
</script>

<style scoped>
    .little {
        display: none !important;
    }

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
        margin-left: -182px;
        width: 180px;
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

    @media screen and (max-width: 1024px) and (min-width: 650px) {
        header #header__nav ul li a {
            font-size: 15px;
        }

        header #header__nav {
            margin-right: 50px;
            width: 300px;
            height: 75px;
        }

        header #header__nav ul {
            width: 300px;
            height: 75px;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
            padding: 0;
        }
    }

    @media screen and (max-width: 650px) {
        .large {
            display: none !important;
        }

        .little {
            display: block !important;
        }

        header #header__content {
            cursor: pointer;
            margin-left: 15px;
            width: 230px;
            height: 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }



        header #header__nav {
            margin-right: 10px;
            width: 150px;
            height: 75px;
        }

        header #header__nav ul.little {
            width: 150px;
            height: 75px;
            list-style: none;
            display: flex !important;
            justify-content: flex-end !important;
            align-items: center !important;
            margin: 0;
            padding: 0;
        }

        header #header__nav ul li a {
            cursor: pointer;
            margin-right: 5px;
            font-size: 20px;
            color: black;
            text-decoration: none;
        }

        header #header__nav ul li i {
            position: relative;
            z-index: 10;
            font-size: 42px;
            color: #38D39F;
            transition: 0.3s;
        }

        header #header__nav ul li i:hover {
            position: relative;
            z-index: 10;
            font-size: 42px;
            color: #29bc8b;
        }

        header #phone__menu {
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        header #phone__menu ul {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        header #phone__menu ul li {
            height: 50px;
            margin: 10px 0 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        header #phone__menu ul li a {
            height: 50px;
            margin: 10px 0 10px 0;
        }

        header #phone__menu ul li a {
            font-weight: 700;
            font-size: 18px;
            letter-spacing: 0.225em;        
            color: #25222C;
            text-transform: uppercase;
            transition: 0.3s;
        }

        header #phone__menu ul li a:hover {
            height: 50px;
            color: #38D39F;
        }
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
