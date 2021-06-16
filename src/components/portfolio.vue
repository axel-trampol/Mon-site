<template>
    <div class="portfolio">
        <div class="port">
          <h1 class="titre">
            Portfolio
          </h1>
          <p>CES SITES SONT CONCUS AVEC LE FRAMEWOK VUE.JS ET BEAUCOUP D<span>'</span>AMOUR, IL SONT DISPONIBLE SUR <a href="https://github.com/axel-trampol" target="blank">MON GITHUB</a></p>
          <p>P.S: FULL RESPONSIVE OF COURSE !</p>
          <div class="polaroid">
            <router-link to="/terre" target="_blank">
            <div slot="image" style="background-image: url(../assets/bbc.png)" data-src='../assets/bbc.png' />
      <img slot="preloader" src="../assets/loader.gif" />
      <div slot="error">error message</div>
            </router-link>
            <!--<a href="https://axel-trampol.github.io/sacha/" target="blank">
              <img src="../assets/chat.png" alt="polaroid">
            </a>-->
            <a href="https://green-digital.fr/#/" target="blank">
              <img src="../assets/green.png" alt="polaroid">
            </a>
            <a href="https://axel-trampol.github.io/Mariage/" target="_blank">
              <img src="../assets/precious.png" alt="polaroid">
            </a>
            <router-link to="/club" target="_blank">
              <img src="../assets/tatouage.png" alt="polaroid">
            </router-link>
          </div>
          



          <div id="home">
             <router-link class="home" to="/">GO BACK TO HOME</router-link>
          </div>
         
        </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
import club from './club.vue'
import terre from './terre.vue'

  export default {
    components: {
      club,
      terre,
       'vue-load-image': VueLoadImage
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }

import VueLoadImage from 'vue-load-image'


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

.portfolio {
  background-color: rgb(34, 34, 34);
}

.port {
  /*background-image: url(../assets/portfolio-page.png);
  background-color: rgb(34, 34, 34);
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: left;*/
  background-color: rgb(34, 34, 34);
  width: 100vw;
  height: 100vh;
}

.port .titre {
  font-size: 180px;
  text-align: center;
  /*writing-mode: vertical-lr;
  text-orientation: upright;*/
  font-family: "secret";
  color: white;
  padding-top: 4%;
}

.polaroid {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100vw;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgb(34, 34, 34);
  margin-top: 3%;
}

.polaroid img {
  width: 300px;
  margin: 2%;
  min-width: 300px;
  min-height: 300px;
  transition: 0.3s;
}

.polaroid img:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.3s;
}

p {
  color: #d34b26e3;
  font-family: "kulag";
  text-align: center;
  font-size: 20px;
}

p a {
  text-decoration: underline;
  color: #d34b26e3;
}

p a:hover {
  text-decoration: underline;
  color: #d34b26e3;
  cursor: pointer;
}

.home {
  color: #d34b26e3;
  text-align: center;
  text-decoration: none;
  font-family: "kulag";
  font-size: 20px;
}

#home {
  display: flex;
  justify-content: center;
}

.home:hover {
  color: #d34b26e3;
  text-decoration: underline; 
}

.slide img {
  width: 80vw;
}

#home {
  padding-bottom: 20px;
}

span {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
@media screen and (max-width: 1370px) {
        .polaroid img:hover {
          transform: scale(1);
        }
    }
@media screen and (max-width: 500px) {
        .port .titre {
          font-size: 130px;
        }
    }

  @media screen and (max-width: 350px) {
      .port .titre {
        font-size: 110px;
      }
  }

</style>