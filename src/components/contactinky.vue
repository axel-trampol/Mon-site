<template>
    <div class="contactinky">
        <div class="page">
            <div class="navbar">

                <div class="logo">
                    <i class="icon fab fa-artstation"></i>
                </div>

                <div class="selection">
                    <router-link to="club"><h2 >HOME</h2></router-link>
                    <router-link to="about"><h2>ABOUT</h2></router-link>
                    <router-link to="artist"><h2>ARTISTS</h2></router-link>
                    <router-link to="contactinky"><h2 class="click">CONTACT</h2></router-link>
                    <i class="icon search fas fa-search"></i>
                </div>
            
                
            </div>
            <div class="present-page">
                <div class="image">
                    <img src="../assets/club/contact.png" alt="image contact">
                    <p class="blanc">Vous avez votre prochain tatouage en tête?<br/>oou vous voulez une consultation avec l'un de nos artists?<br/>Alons-y.</p>
                    <p class="orange">254 Adresse Completement Fictive, Ville Random<br/>778-555-8373</p>
                </div>
                <div class="formulaire">
                    <form action="/ma-page-de-traitement" method="post">
                        <div>
                            <input required type="text" id="name" name="user_name" placeholder="Votre nom">
                        </div>
                        <div class="miniflex">
                            <div>
                                <input required id="text" placeholder="Adresse email">
                            </div>
                            <div>
                                <input required id="text" placeholder="Numero de telephone">
                            </div>
                        </div>
                        <div>
                            <textarea name="" id=""  rows="10" required placeholder="Votre message"></textarea>
                        </div>
                        <div class="button">
                            <button>ENVOYER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import artist from './artist.vue'
import club from './club.vue'
import about from './about.vue'
export default {
    components: {
        artist,
        club,
        about
    },
  name: 'contactinky',
}
</script>

<style scoped>

@font-face {
	font-family: "lato";
	src: url('../assets/fonts/Lato-Black.ttf');
}
.page {
    /*background-color: #f5f5f5;*/
    background-color: #2b2b2b;
    height: 100vh;
}
.navbar {
    display: flex;
    color: white;
    justify-content: space-between;
    padding: 4em;
    font-family: "lato";
    background-color: #2b2b2b;
    font-size: 10px;
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.479));
}
.logo {
    width: 50%;
}
a {
    text-decoration: none;
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
.click {
    color: #ffa700!important;
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
.present-page {
    background-color:#2b2b2b;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
}
.present-page div {
    
    margin-top: auto;
    margin-bottom: auto;
}
.formulaire {
    width: 30%;
    max-width: 800px;
}
form input {
    width: 100%;
    padding: 15px;
    border: solid white 1px;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #ffa60000;
    color: white;
    outline: none;
}
form textarea {
    width: 100%;
    padding: 15px;
    border: solid white 1px;
    border-radius: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #ffa60000;
    color: white;
    outline: none;
}
form div {
    width: 100%;
}
.miniflex {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.miniflex div {
    width: 45%;
    margin: 0;
}
button {
    padding: 15px;
    width: 30%;
    background-color:#ffa700;
    color: white;
    border: none;
    border-radius: 20px;
    margin: auto;
    outline: none;
    text-align: center;
    transition: 0.3s;
    font-family: "lato";
}
.button {
    display: flex;
    width: 100%;
    justify-content: center;
    font-family: "lato";
}
button:hover {
    background-color: #ffa600b9;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
}
.image {
    text-align: center;
    width: 30%;
    padding: 20px;
}
.image img {
    width: 60%;
}
.image p {
    font-family: "lato";
}
.orange {
    color: #ffa700;
}
.blanc {
    color: white;
}
@media screen and (max-width: 1350px) {
    .image {
        width: 500px;
    }
    .formulaire {
        width: 500px;
        padding-right: 40px;
    }
    .present-page {
        flex-wrap: wrap;
    }
}
@media screen and (max-width: 1080px) {
    .image {
        width: 500px;
        margin-bottom: 50px!important;
    }
    .formulaire {
        width: 500px;
        margin-top: 50px!important;
    }
    .present-page {
        flex-wrap: wrap;
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
    .present-page, .page, .contactinky {
        height: 100%;
    }
}
@media screen and (max-width: 500px) {
    .selection {
        font-size: 8px;
    }
    .formulaire {
        margin-left: 12px;
        margin-right: 8px;
    }
    .button {
        margin-bottom: 20px!important;
        padding-left: 15px;
    }
    .button button {
        width: 300px;
    }
}
</style>