<template>
  <div class="tete" id="tete">
    <div class="container">
      
        <h2 class="titre">DEVELOPPEUR FRONT-END - INTEGRATEUR</h2>
        
        <h1>Axel Trampol</h1>
        

        <div class="menu">
          <a href="#box1">ABOUT</a>
          <a>-</a>
          <a href="#box3">WORK</a>
          <a>-</a>
          <a href="#box5">CONTACT</a>
        </div>
      
      
    </div>
    <corps></corps>
    <pied></pied>
  </div>
</template>

<script>
import corps from './corps.vue'
import pied from './pied.vue'
export default {
  components: {
    corps,
    pied
  },
  name: 'tete',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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

img {
  
  width: 20vw;
  margin: auto;
}

.tete {
  height: 100%;
  max-width: 100%;
}
.titre {
  padding-top: 2%;
  color: #d34b26e3;
}
.container {
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(34, 34, 34);
  width: 100%;
  height: 100%;
  background-size: cover;
  color: white;
  background-image: url(../assets/main.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.menu {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
  color: #d34b26e3;
  font-size: 13px;
  width: 20%;
  font-family: "kulag";
}
h1 {
  font-family: "secret";
  font-size: 180px;
  
}
h2 {
  font-family: "kulag";
}
a {
  font-family: "kulag";
  cursor: pointer;
  color: #d34b26e3;
  text-decoration: none;
  font-size: 20px;
}
@media screen and (max-width: 1500px) {
    /* .container {
        -webkit-background-size: 770px; 
        background-size: 770px;
        } */
}
@media screen and (max-width: 900px) {
    /* .container {
        -webkit-background-size: 550px; 
        background-size: 550px;
    } */
    h1 {
      font-size: 100px;
    }
    .menu {
      width: 40%;
    }
}
@media screen and (max-width: 650px) {
    .menu {
      width: 50%;
    }
}
@media screen and (max-width: 600px) {
    /* .container {
      -webkit-background-size: 400px; 
      background-size: 400px;
    } */
    h1 {
      font-size: 80px;
    }
}

</style>
