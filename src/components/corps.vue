<template>
<div class="corps">
    <div class="corpus corpus1">
        <div class="box" id="box1">
            <div class="none">

            </div>
            <h1>
                About
            </h1>
            <div class="block">
                <p>Je suis un developpeur web / intégrateur en quête d'un nouveau poste basé sur Paris.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu elit in lectus imperdiet tempor sit amet sit amet sapien. Donec eget nibh sed turpis elementum dignissim. Etiam id pretium nibh. Aliquam sed dictum lacus. Integer porttitor luctus nisl, vel luctus neque molestie sed. Phasellus et sem quis lorem condimentum blandit. Aliquam laoreet risus ac nunc luctus, aliquam porttitor nisl tristique. Quisque semper nunc sit amet aliquam maximus. </p>
            </div>
            <div class="menu menu1">
                <a href="#box1">ABOUT</a>
                <a>-</a>
                <a href="#box3">WORK</a>
                <a>-</a>
                <a href="#box5">CONTACT</a>
            </div>
        </div>
        <div class="pp">
            <div></div>
            <div class="pp2"><img src="../assets/pp.png" alt="photo de l'auteur"></div>
            <div></div>
        </div>
        <div class="box" id="box2">
            <div>
                <p>Je suis un developpeur web / intégrateur en quête d'un nouveau poste basé sur Paris.</p> 
                <p>Qui sui-je ? Une jeune homme de 25 ans qui recherche l'amo.. euh non, mauvais site desolé! Un jeune homme plein de motivation passionné par le web que vous devriez embaucher.
                    Pourqoi ? Et bien parce que je suis qualifié (en tout cas suffisament pour réaliser ce site) et déterminé. Formé à la Wild Code School, je n'ai pas seulement appris le code j'ai appris à apprendre. Une qualité, et pas des moindres, car ô combien précieuse lorsque l'on intégre une nouvelle entreprise où tout, même les bases, semblent à redécouvrir.
                    Ce que je veux ? Que l'on me donne ma chance.
                    Ce que j'éspère ? Vous avoir convaincu !
                </p>
                <p class="lien_cv">Mon CV et ma lettre de motivation <router-link class="lien" to="cv" target="_blank">ici</router-link>!</p>
            </div>
           </div>
    </div>
    <div class="corpus">
        <div class="box" id="box3">
            <div class="none">

            </div>
            <h1>
                Work
            </h1>
            <div id="block2" class="block">
                <router-link to="portfolio">
                    <h1>
                        PORTFOLIO
                    </h1>
                </router-link>
                <div class="skills">
                    <i class="fab fa-vuejs"></i>
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js"></i>
                </div>
            </div>
            <div class="menu">
                <a href="#box1">ABOUT</a>
                <a>-</a>
                <a href="#box3">WORK</a>
                <a>-</a>
                <a href="#box5">CONTACT</a>
            </div>
        </div>
        <router-link to="portfolio" class="box" id="box4">
            
            <div>

            </div>
            <h1 class="portfolio">
                PORTFOLIO
                <i class="fas fa-arrow-right"></i>
            </h1>
            <h1 class="hover">
                HOVER ME !
            </h1>
            
        </router-link>
    </div>
    <div class="corpus">
        <div class="box" id="box5">
            <div class="none">

            </div>
            <h1>
                Contact
            </h1>
            <div class="block">
                 <p>
                Si vous voulez me compter parmis vos collaboarateurs et, qu'ainsi, nous puissions ensemble créer d'incroyable design - n'hesitez pas à me contacter !
                </p>
                <p>
                Je suis disponible pour des projets en freelance ou pour un emploi full-time.
                </p>
                <div class="flex-contact">
                    <div>
                        <h2>
                            Axel Trampol
                        </h2>
                        <p>
                        Developpeur front-end / Intégrateur
                        </p>
                        <a class="mail" href="mailto:axe.t@hotmil.fr">axe.t@hotmail.fr</a>
                        <p>
                        06 35 66 90 07
                        </p>
                    </div>
                    <div>
                        <p class="icon3">
                            <a target="_blank" href="https://github.com/axel-trampol"><i class="icon fab fa-github"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/axel-trampol"><i class="icon fab fa-linkedin"></i></a>
                            <a target="_blank" href="https://www.facebook.com/trampol.axel"><i class="icon fab fa-facebook-square"></i></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="menu">
                <a href="#box1">ABOUT</a>
                <a>-</a>
                <a href="#box3">WORK</a>
                <a>-</a>
                <a href="#box5">CONTACT</a>
            </div>
        </div>
        <div class="box" id="box6">
            <div>
                 <p>
                Si vous voulez me compter parmis vos collaboarateurs et, qu'ainsi, nous puissions ensemble créer d'incroyable design - n'hesitez pas à me contacter !
                </p>
                <p>
                Je suis disponible pour des projets en freelance ou pour un emploi full-time.
                </p>
                <h2>
                Axel Trampol
                </h2>
                <p>
                Developpeur front-end / Intégrateur
                </p>
                <a class="mail" href="mailto:axe.t@hotmil.fr">axe.t@hotmail.fr</a>
                <p>
                06 35 66 90 07
                </p>
                <p id="icon">
                    <a target="_blank" href="https://github.com/axel-trampol" class="icon2"><i class="icon fab fa-github"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/axel-trampol" class="icon2"><i class="icon fab fa-linkedin"></i></a>
                    <a target="_blank" href="https://www.facebook.com/trampol.axel" class="icon2"><i class="icon fab fa-facebook-square"></i></a>
                </p>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
// import pdf from 'vue-pdf'
import cv from './cv.vue'
import portfolio from './portfolio.vue'
export default {
  components: {
    portfolio,
    // pdf,
    cv
  },
  name: 'corps',
}
</script>

<style scoped>
@font-face {
	font-family: "secret";
	src: url('../assets/fonts/secret.ttf');
}

@font-face {
	font-family: "kulag";
	src: url('../assets/fonts/kulag.otf');
}
@font-face {
	font-family: "bahagia";
	src: url('../assets/fonts/Bahagia.ttf');
}

    .corpus {
        display: flex;
        max-width: 100vw;
    }
    .corpus1 {
        position: relative;
    }
    .pp {
        position: absolute;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        left: 50%;
        transform: translate(-50%,0);
    }
    .pp div {
        height: 33%;
    }
    .pp img {
        clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        left: 50%;
        transform: translate(-50%,0);
        position: absolute; 
        z-index: 1;
        max-width: 120px;
    }
    #icon {
        display: flex;
    }
    #icon .icon {
        font-size: 50px;
        margin: 20px;
        color: rgba(0, 0, 0, 0.795);
        transition: 0.3s;
        cursor: pointer;
    }
    #icon .icon:hover {
        color: black;
        transition: 0.3s;
    }
    .lien {
        font-family: 'Times New Roman', Times, serif;
    }
    .lien_cv {
        font-family: 'Times New Roman', Times, serif;
    }
    .menu {
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding-bottom: 4%;
        width: 30%;
        font-size: 13px;
        font-family: "kulag";
    }
    .menu1 a {
        color: black!important;
    }
    #box1 {
        background-color: #d34b26e3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    #box2 {
        background-color: rgb(255, 251, 251);
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    #box3 {
        background-color: rgb(255, 251, 251);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        background-image: url(../assets/portfolio-pc.png);
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
        
    }
    #box4 {
        display: block;
        float: left;
        background-image: url(../assets/formule1.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        transition: 0.3s;
    }
    #box4:hover {
        cursor: pointer;
        filter: brightness(0.7);
        transition: 0.3s;
    }
    #box4:hover .hover {
        color: rgba(255, 255, 255, 0);
        transition: 0.3s;
    }
    .portfolio {
        color: rgba(255, 255, 255, 0);
        transition: 0.3s;
        font-family: "kulag";
    }
    #box4:hover .portfolio {
        color: rgb(255, 255, 255);
        transition: 0.3s;
    }
    .hover {
        font-family: "kulag";
        font-size: 20px;
        /* text-align: center; */
        color: white;
        /* width: 100%; */
        transition: 0.3s;
        padding-bottom: 4%;
    }
    #box5 {
        background-color: #2D2D2D;
         display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        color: white;
    }
    #box6 {
        background-color: rgb(255, 251, 251);
        display: flex;
        flex-direction: column;
    }
    #box6 a {
        color: #d34b26e3;
    }
  
    #box2 div {
        padding: 12%;
    }
    #box6 div {
        padding: 10%;
    }
    #box2 div :first-child {
        font-weight: bold;
    }
    .box {
        width: 50vw;
        height: 50vh;
        min-height: 500px;
    }
    h1 {
        font-family: "secret";
        font-size: 90px;
    }
    a {
        font-family: "kulag";
        cursor: pointer;
        color: #d34b26e3;
        text-decoration: none;
        font-size: 20px;
    }
    .mail {
        color: #d34b26e3;
        text-decoration: underline!important;
        font-family: "times new roman";
        font-size: 16px;
    }
    .block {
        display: none;
    }
    @media screen and (max-width: 2786px) {
        #box4 {
            -webkit-background-size: cover; /* pour anciens Chrome et Safari */
            background-size: cover;
        }
    }
     @media screen and (max-width: 1350px) {
        .pp img {
            width: 90px;
        }
        #box2 div {
            padding: 14%;
        }
    }
    @media screen and (max-width: 1200px) {
        .pp img {
            width: 90px;
        }
    }
    @media screen and (max-width: 900px) {
        .menu {
            width: 70%;
        }
        .pp img {
            display: none;
        }
        #box2 div {
            padding: 10%;
        }
    }
    @media screen and (max-width: 660px) {
        .menu {
            width: 40%;
        }
        .pp {
            display: none;
        }
        #box2 {
            display: none;
        }
        #box3 {
            background-image: url(../assets/portfolio-mobile.png);
            background-repeat: no-repeat;
            background-size: 75%;
            background-position: 0% 100%;
        }
        #box4 {
            display: none;
        }
        #box6 {
            display: none;
        }
        .none {
            display: none;
        }
        .box {
            min-height: 80vh;
        }
        .block {
            display: block;
            padding-left: 8%;
            padding-right: 8%;
            padding-bottom: 8%;
        }
        .block h1 {
            font-family: "kulag";
            font-size: 50px;
            text-align: center;
            color: rgb(0, 0, 0);
            transition: 0.3s;
        }
        .block h1:hover {
            color: rgba(0, 0, 0, 0.658);
            cursor: pointer;
            transition: 0.3s;
        }
        .block .skills {
            display: none;
            text-align: center;
            font-size: 40px;
        }
        .block :first-child {
            font-weight: bold;
        }
        .box {
            width: 100%;
        }
        h1 {
            padding-top: 6%;
        }
        .flex-contact {
            display: flex;

        }
        .icon3  {
            text-align: center;
            display: flex;
            justify-content: space-between;
            margin: 10%;
        }
        .icon3 .icon {
            font-size: 50px;
            color: white;
            transition: 0.3s;
            padding: 10%;
        }
        .icon3 a:hover .icon  {
            color: rgba(255, 255, 255, 0.534);
            transition: 0.3s;
        }
    }
    @media screen and (max-width: 500px) {
        .box {
            height: 100vh;
        }
        .icon3 .icon {
            font-size: 40px;
            color: white;
            transition: 0.3s;
            padding: 10%;
        }
    }

</style>