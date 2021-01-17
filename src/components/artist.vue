<template>
    <div class="artist">
        <div class="page">
            <div class="navbar">

                <div class="logo">
                    <i class="icon fab fa-artstation"></i>
                </div>

                <div class="selection">
                    <a><router-link to="club"><h2>HOME</h2></router-link></a>
                    <router-link to="about"><h2>ABOUT</h2></router-link>
                    <router-link to="artist"><h2 class="click">ARTISTS</h2></router-link>
                    <router-link to="contactinky"><h2>CONTACT</h2></router-link>
                    <i class="icon search fas fa-search"></i>
                </div>
            
                
            </div>
            <div class="present-page">
                <div class="flex">
                    <div>
                        <img src="../assets/club/portrait1.png" alt="Portrait">
                        
                         <p class="p1">
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                            essentially unchanged.
                        </p>
                        <p class="p2">c</p>
                         <p class="p1">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                        <button>BOOK</button>
                    </div>
                    <div>
                        <img src="../assets/club/portrait2.png" alt="Portrait">
                       
                        <p class="p1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                            essentially unchanged.
                        </p>
                       <p class="p2">c</p>
                         <p class="p1">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                        <button>BOOK</button>
                    </div>
                    <div>
                        <img src="../assets/club/portrait3.png" alt="Portrait">
                       
                        <p class="p1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                            essentially unchanged.
                        </p>
                        <p class="p2">c</p>
                        <p class="p1">
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                        <button>BOOK</button>
                    </div>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import contactinky from './contactinky.vue'
import club from './club.vue'
import about from './about.vue'
export default {
    components: {
        club,
        about,
        contactinky
    },
  name: 'artist',
}
</script>

<style scoped>
 @font-face {
	font-family: "mac";
	src: url('../assets/fonts/Macbeth-Reguler.ttf');
}
@font-face {
	font-family: "lato";
	src: url('../assets/fonts/Lato-Black.ttf');
}
.page {
    /*background-color: #f5f5f5;*/
    background-color: #2b2b2b;
    height: 100vh;
}
.artist {
    background-color: #2b2b2b;
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
.click {
    color: #ffa700!important;
}
.selection {
    display: flex;
    justify-content: space-around;
    text-decoration: none;
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
.present-page {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 90vh;
    background-color: #2b2b2b;
}
.present-page img {
    width: 400px;
    height: auto;
}
.flex {
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    background-color: #2b2b2b;
}
.flex div {
    text-align: center;
    width: 33%;
    min-width: 500px;
    margin: auto;
}
.flex div img {
    text-align: center;
}
.flex h1 {
    font-family: "Macbeth";
    font-size: 130px;
    color: rgb(255, 255, 255);
    width: 65%;
    margin: auto;
    text-align: left;
    letter-spacing: 4px;
    background-color: #2b2b2b;
}
.flex .p1 {
    
    color: rgb(255, 255, 255);
    font-family:"lato";
    width: 65%;
    margin: auto;
    text-align: left;
    background-color: #2b2b2b;
}
.p2 {
    color: #2b2b2b00;
    font-family:"lato";
    width: 50%;
    margin: auto;
    text-align: left;
    background-color: #2b2b2b;
}
.flex button {
    margin: 2em;
    background-color: #FAA700;
    font-family: "lato";
    padding: 1em;
    color: white;
    width: 20%;
    border: none;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    outline: none;
}
.flex button:hover {
    background-color: rgba(250, 167, 0, 0.795);
    transition: 0.3s;
    outline: none;
}
@media screen and (max-width: 1500px) {
    .present-page, .page {
        height: 100%;
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