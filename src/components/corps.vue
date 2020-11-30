<template>
<div class="corps">
    <div class="corpus">
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
        <div class="box" id="box2">
            <div>
                <p>Je suis un developpeur web / intégrateur en quête d'un nouveau poste basé sur Paris.</p> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu elit in lectus imperdiet tempor sit amet sit amet sapien. Donec eget nibh sed turpis elementum dignissim. Etiam id pretium nibh. Aliquam sed dictum lacus. Integer porttitor luctus nisl, vel luctus neque molestie sed. Phasellus et sem quis lorem condimentum blandit. Aliquam laoreet risus ac nunc luctus, aliquam porttitor nisl tristique. Quisque semper nunc sit amet aliquam maximus. </p>
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
                            <a target="_blank" href="https://fr.linkedin.com/in/axel-trampol?challengeId=AQGU5OiS3eMx8QAAAXUs_TdFQRdknDnSCltw0cFxZAqe8bvYhbPWHTMJ5KpG11lb-i-XqBPN6i8OfIC8149_X_DlIDXnUDlCng&submissionId=a3b729b6-ba35-3e16-7f8c-46a620553826"><i class="icon fab fa-linkedin"></i></a>
                            <a target="_blank"><i class="icon fab fa-twitter"></i></a>
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
                    <a target="_blank" href="https://fr.linkedin.com/in/axel-trampol?challengeId=AQGU5OiS3eMx8QAAAXUs_TdFQRdknDnSCltw0cFxZAqe8bvYhbPWHTMJ5KpG11lb-i-XqBPN6i8OfIC8149_X_DlIDXnUDlCng&submissionId=a3b729b6-ba35-3e16-7f8c-46a620553826" class="icon2"><i class="icon fab fa-linkedin"></i></a>
                    <a target="_blank" class="icon2"><i class="icon fab fa-twitter"></i></a>
                </p>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import portfolio from './portfolio.vue'
export default {
  components: {
    portfolio
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
    #icon {
        display: flex;
    }
    #icon .icon {
        font-size: 50px;
        margin: 20px;
        color: black;
    }
    .icon2 :hover {
        cursor: pointer;
        color: rgba(0, 0, 0, 0.712);
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
        background-color: rgb(255,0,72);
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
        color: rgb(255,0,72);
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
        color: rgb(255,0,72);
        text-decoration: none;
        font-size: 20px;
    }
    .mail {
        color: rgb(255,0,72);
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
    @media screen and (max-width: 900px) {
        .menu {
            width: 70%;
        }
    }
    @media screen and (max-width: 660px) {
        .menu {
            width: 40%;
        }
        #box2 {
            display: none;
        }
        #box3 {
            background-image: url(../assets/portofolio-mobile.png);
            background-repeat: no-repeat;
            background-size: 100%;
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
            padding: 10%;
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

</style>