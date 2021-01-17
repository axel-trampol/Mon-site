<template>
    <div class="about">
        <div class="page">
            <div class="navbar">

                <div class="logo">
                    <i class="icon fab fa-artstation"></i>
                </div>

                <div class="selection">
                    <router-link to="club"><h2>HOME</h2></router-link>
                    <router-link to="about"><h2 class="click">ABOUT</h2></router-link>
                    <router-link to="artist"><h2>ARTISTS</h2></router-link>
                    <router-link to="contactinky"><h2>CONTACT</h2></router-link>
                    <i class="icon search fas fa-search"></i>
                </div>
            
                
            </div>
            <div class="present-page present-page2">
                <div class="logo2">
                    <div class="para">
                        <img src="../assets/club/texte1.png" alt="logo inky">
                        <div class="consul">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                 quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                 dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                                 sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                                 dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>
                            <p>
                                Neque porro 
                                 quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                                 adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                 labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="image">
                    <!-- <img src="../assets/club/tatouage.png" alt="personne tatouée"> -->
                </div>
            </div>
            <div class="present-page1">
                <div class="logo1">
                    <div class="para1">
                        <img src="../assets/club/texte3.png" alt="logo inky">
                        <div class="consul1">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                 quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                 dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                                 sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                                 dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>
                            <p>
                                Neque porro 
                                 quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                                 adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                 labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="image">
                    <!-- <img src="../assets/club/tatouage.png" alt="personne tatouée"> -->
                </div>
            </div>
            <div class="present-page present-page3">
                <div class="logo2">
                    <div class="para">
                        <img src="../assets/club/texte2.png" alt="logo inky">
                        <div class="consul">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                 quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                 dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                                 sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
                                 dolores eos qui ratione voluptatem sequi nesciunt. 
                            </p>
                            <p>
                                Neque porro 
                                 quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                                 adipisci velit, sed quia non numquam eius modi tempora incidunt ut
                                 labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="image">
                    <!-- <img src="../assets/club/tatouage.png" alt="personne tatouée"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import artist from './artist.vue'
import club from './club.vue'
import contactinky from './contactinky.vue'
export default {
    components: {
        artist,
        club,
        contactinky
    },
  name: 'about',
}
</script>

<style scoped>
@font-face {
	font-family: "lato";
	src: url('../assets/fonts/Lato-Black.ttf');
}
.page {
    /*background-color: #f5f5f5;*/
    background-color: white;
    height: 100vh;
}
.about {
    width: 100%;
}
.navbar {
    display: flex;
    color: white;
    justify-content: space-between;
    padding-top: 4vh;
    padding-bottom: 4vh;
    padding-left: 4vh;
    padding-right: 4vh;
    font-family: "lato";
    background-color: #2b2b2b;
    font-size: 10px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.479));
    position: relative;
    /* height: 5vh; */
    /* width: 100%; */
}
.logo {
    width: 50%;
}
a {
    text-decoration: none;
}
.click {
    color: #ffa700!important;
}
.selection {
    display: flex;
    justify-content: space-around;
    width: 50%;
}
.selection h2 {
    color: white;
    text-decoration: none;
    transition: 0.3s;
}
.selection h2:hover {
    color: #ffa700;
    text-decoration: none;
    transition: 0.3s;
}
.search {
    transition: 0.3s;
}
.search:hover {
    color: #ffa700;
    transition: 0.3s;
    cursor: pointer;
}
.icon {
    font-size: 18px;
}
.present-page1 {
    background-color: white;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    background-image: url(../assets/club/about-image2.jpg);
    background-repeat: no-repeat;
    background-position: bottom left 15%;
    background-size: 40%;
}
.logo1 {
    height: 100%;
    width: 50%;
    margin-left: 50%;
    display: flex;
    justify-content: center;
}
.present-page {
    width: 100%;
    background-color: #2b2b2b;
    display: flex;
    justify-content: space-around;
    background-image: url(../assets/club/tatouage.jpg);
    background-repeat: no-repeat;
}
.present-page2 {
 background-image: url(../assets/club/about-image1.jpg);
 background-size: 45%;
 background-position: bottom right 15%;
 height: 91vh;
}
.present-page3 {
 background-image: url(../assets/club/about-image3.jpg);
 background-size: 40%;
background-position: bottom right 15%;
height: 100vh;
}
.logo2 {
    height: 100%;
    width: 50%;
    margin-right: 50%;
    display: flex;
    justify-content: center;
}
.logo2 img {
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    width: 50%;
}
.logo1 img {
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
    width: 50%;
}
.logo2 div {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.logo1 div {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.para {
    margin: auto;
}
.para1 {
    margin: auto;
}
.consul {
    width: 50%;
    margin: auto;
}
.consul1 {
    width: 50%;
    margin: auto;
}
.consul p {
    font-family: "lato";
    color: white;
}
.consul1 p {
    font-family: "lato";
    color: black;
}
@media screen and (max-width: 1450px) {
    .present-page1, .present-page2, .present-page3 {
        background-size: 700px;
    }
}
@media screen and (max-width: 1300px) {
    .present-page1, .present-page2, .present-page3 {
        background-image: none;
    }
    .logo1 {
        width: 100%;
        margin-left: 0%;
    }
    .logo2 {
        width: 100%;
        margin-right: 0%;
    }
}
@media screen and (max-width: 1250px) {
    .navbar {
        justify-content: space-around;
    }
    .logo {
        display: none;
    }
    .selection {
        width: 100%;
    }
    .icon {
        display: none;
    }
}
@media screen and (max-width: 500px) {
    .selection {
        font-size: 8px;
    }
}
</style>