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
            <div class="present-page">
                
            </div>
            <div class="present-page2">
                
            </div>
            <div class="present-page3">
                
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
.present-page {
    background-color: #2b2b2b;
    height: 91vh;
}
.present-page2 {
    background-color: white;
    height: 100vh;
}
.present-page3 {
    background-color: #2b2b2b;
    height: 100vh;
}
</style>