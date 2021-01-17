<template>
    <div class="baroudeur">
        <div class="background">
            <div class="navbar">
                <div class="flex">
                    <img class="baroudeurlogo" src="../assets/baroudeur/logofinal.png" alt="logo du baroudeur">
                    <!-- <router-link to="gallerie"><a href="" title="La galerie"><i class="icon fas fa-photo-video"></i></a></router-link> -->
                    <!-- <router-link to="log"><a href="" title="Log toi ! Enfin..si t'es vip"><i class="icon fa fa-user-secret"></i></a></router-link> -->
                </div>
            </div>
            <div class="entete">
                <h1>LE P'TIT BAROUDEUR</h1>
                
                <h3>Join the travel</h3>
            </div>
            <div class="forme"></div>
            <!-- <img src="../assets/baroudeur/road.jpg" alt="background avec logo du site"> -->
            
        </div>
        <div class="destination">
            <h1>ABOUT US</h1>
            <div class="paragraphe">
                <p class="para para1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged.
                </p>
                <p class="para para1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged.
                </p>
            </div>
        </div>
        <div class="triangles">
            <div class="first">

            </div>
            <div class="second">

            </div>
        </div>
        <div class="news">
            <h1>NEWS</h1>
            <!-- <img src="../assets/baroudeur/angeterre.jpg" alt="background avec logo du site"> -->
            <div></div>
            <div class="footer">

            </div>
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
        /* font-family: "Footlight MT Light"; */
        width: 100%;
        background-color: white;
    }
    .background {
        background-image: url(../assets/baroudeur/cote.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .background h1 {
        text-align: center;
        color: white;
    }
    .background h3 {
        text-align: center;
        color: white;
    }
    .forme {
        clip-path: polygon(50% 95%, 100% 20%, 100% 100%, 0 100%, 0 20%);
        background-color: white;
        height: 25vh;
        width: 100%;
    }
    .navbar {
        display: flex;
        /* clip-path: polygon(0 25%, 100% 0%, 100% 75%, 0% 100%); */
        justify-content: space-around;
        width: 100%;
        height: 10%;
        position: relative;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        width: 100%;
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
        /* display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;              CECI CENTRER HYPER BIEN AU MILIEU DE LA PAGE*/
        height: 100vh;
    }
    .destination h1 {
        text-decoration-style: wavy;
        text-decoration: wavy;
        font-family: 'Times New Roman', Times, serif;
        text-align: center;
        padding-top: 10%;
    }
    .triangles {
        height: 200vh;
    }
    .first {
        background-image: url(../assets/baroudeur/first.jpg);
        height: 100vh;
        clip-path: polygon(0 35%, 100% 0%, 100% 100%, 0% 100%);
        background-size: cover;
    }
    .second {
        background-image: url(../assets/baroudeur/second.jpg);
        height: 100vh;
        clip-path: polygon(0 0%, 100% 35%, 100% 65%, 0% 100%);
        background-size: cover;
        margin-top: -40vh;
    }
    .news {
        width: 100%;
        height: 100vh;
        background-image: url(../assets/baroudeur/bas.png);
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .news img {
        width: 400px;
    }
    .footer {
        height: 25vh;
        background-color: rgb(49, 47, 47);
        clip-path: polygon(50% 60%, 100% 10%, 100% 100%, 0 100%, 0 10%);
    }
    .entete {
        width: 100%;
    }
    .baroudeurlogo {
        width: 130px;
        height: 130px;
    }

</style>