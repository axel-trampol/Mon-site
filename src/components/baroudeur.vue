<template>
    <div class="baroudeur">
        <div class="background">
            <div class="navbar">
                <div class="flex">
                    <router-link to="baroudeur"><a href="" title="Où suis-je en ce moment ?"><i class="icon fas fa-map-signs"></i></a></router-link>
                    <router-link to="gallerie"><a href="" title="La galerie"><i class="icon fas fa-photo-video"></i></a></router-link>
                    <router-link to="/" title="Site pro"><i class="icon fas fa-laptop-code"></i></router-link>
                    <router-link to="log"><a href="" title="Log toi ! Enfin..si t'es vip"><i class="icon fa fa-user-secret"></i></a></router-link>
                </div>
            </div>
            <img src="../assets/baroudeur/road.jpg" alt="background avec logo du site">
        </div>
        <div class="destination">
            <h1>La destination du baroudeur</h1>
            <p>T'as loupé un épisode ?</p>
            <img src="../assets/baroudeur/angeterre.jpg" alt="image de la destination">
        </div>
    </div>
</template>

<script>
import gallerie from './gallerie.vue'
import log from './log.vue'
export default {
  components: {
    gallerie,
    log

  },
  name: 'baroudeur',
}
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/3da966b77957c72127bc87110d71c340?family=Footlight+MT+Light);
    .baroudeur {
        font-family: "Footlight MT Light";
        width: 100%;
        background-color: white;
    }
    /* .background {
        background-image: url(../assets/baroudeur/road.jpg);
        background-size: contain;
        width: 100%;
        height: 100%;
    } */
    .baroudeur img {
        width: 100%;
        height: auto;
    }
    .navbar {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 10%;
        position: relative;
    }
    .flex {
        display: flex;
        justify-content: space-around;
        width: 50%;
        position: absolute;
    }
    .flex a {
        padding: 4%;
    }
    .icon {
        color: rgba(255, 255, 255, 0.9);
        font-size: 2em;
        /* filter: drop-shadow(0 0 0.10rem rgb(0, 0, 0)); */
        transition: 0.5s;
    }
    .icon:hover {
        cursor: pointer;
        color:rgb(255, 255, 255, 1)
    }
    .destination {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .destination h1 {
        margin-top: 10%;
    }
    .destination img {
        width: 65%;
        height: auto;
        margin: auto;
    }
</style>