<template>
    <div class="club">
        <div class="page">
            <div class="navbar">

                <div class="logo">
                    <i class="icon fab fa-artstation"></i>
                </div>

                <div class="selection">
                    <router-link to="club"><h2 class="click">HOME</h2></router-link>
                    <router-link to="about"><h2>ABOUT</h2></router-link>
                    <router-link to="artist"><h2>ARTISTS</h2></router-link>
                    <router-link to="contactinky"><h2>CONTACT</h2></router-link>
                    <i class="icon search fas fa-search"></i>
                </div>
            
                
            </div>
            <div class="present-page">
                <div class="logo2">
                    <div>
                        <img src="../assets/club/inki-logo.png" alt="logo inky">
                        <div class="consul">
                            <router-link to="contactinky"><button>CONATCT</button></router-link>
                            <p>Pour une consultation et choisir<br/>votre prochain tatouage avec nous</p>
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
import contactinky from './contactinky.vue'
import about from './about.vue'
export default {
    components: {
        artist,
        about,
        contactinky
    },
  name: 'club',
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
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 90vh;
    background-image: url(../assets/club/tatouage.jpg);
    background-repeat: no-repeat;
    background-position: bottom right 15%;
    background-size: contain;


}
.logo2 {
    height: 100%;
    width: 50%;
    margin-right: 50%;/* A ENLEVER*/
    display: flex;
    justify-content: center;
}
.logo2 img {
    margin-top: auto;
    margin-right: auto;
    margin-left: auto;
    margin-top: 0;
}
.logo2 div {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.consul {
    text-align: center;
    padding-top: 15%;
}
.consul button {
    font-family: "lato";
    padding: 1em;
    background-color:#2b2b2b;
    color: white;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    outline: none;
}
.consul button:hover {
    background-color: #2b2b2bda;
    transition: 0.3s;
    outline: none;
}
.consul p {
    font-family: "lato";
}
@media screen and (max-width: 1700px) {
        .present-page {
            background-size: 800px;
            background-position: bottom right;
        }
    }
@media screen and (max-width: 1250px) {
    .present-page {
        background-size: 700px;
        background-position: bottom right;
    }
}
@media screen and (max-width: 1250px) {
    .present-page {
        background-image: none;
    }
    .logo2 {
        width: 100%;
        margin: auto!important;

    }
    .logo2 img {
        width: 500px;
    }
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
@media screen and (max-width: 800px) {
     .logo2 img {
        width: 400px;
    }
}
@media screen and (max-width: 500px) {
     .logo2 img {
        width: 300px;
    }
    .selection {
        font-size: 8px;
    }
}
</style>