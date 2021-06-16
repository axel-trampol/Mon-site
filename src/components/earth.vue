<template>
    <div class="earth">
        <div class="eleph">
            <div class="logo">
                <img src="../assets/baroudeur/bbc.png" alt="bbc logo">
            </div>
            <div class="flex">
                <div>
                    <i class="btn-navigation fas fa-bars"></i>
                </div>
                <!-- <div>
                    <img src="../assets/baroudeur/bbc.png" alt="bbc logo">
                </div> -->
                <div class="miniflex">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div class="info">
                <div class="para">
                    <p>
                        “Décrire les passions n'est rien ; il suffit de naître 
                        un peu chacal, un peu vautour, un peu panthère.”
                    </p>
                </div>
                <div class="button">
                    <h3>DECOUVRIR</h3>
                </div>
                <div class="rappel">
                    <h2>SOUTH AMERICA - <span><router-link to="/terre">AFRICA </router-link></span></h2>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import terre from './terre.vue'
export default {
    components: {
    terre
  },
  name: 'earth',
}
</script>

<style scoped>
    .eleph {
        background: url("../assets/baroudeur/jungle1.jpg") no-repeat center fixed;
        height: 100vh;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    .flex div {
        color: white;
    }
    .miniflex {
        display: flex;
        justify-content: space-around;
    }
    .flex i {
        cursor: pointer;
        font-size: 20px;
    }
    .miniflex i {
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
        font-size: 20px;
    }
    .logo {
        display: flex;
        justify-content: center;
        position: relative;
    }
    .logo img {
        position: absolute;
        width: 160px;
        padding: 10px;
    }
    .info {
        display: flex;
        justify-content: space-around;
        color: white;
        bottom: 0;
        position: fixed;
        width: 100%;
        align-items: baseline;
    }
    .info div {
        width: 30%;
    }
    .button {
        text-align: center;
    }
    h3 {
        border: solid white 2px;
        width: 200px;
        padding: 10px;
        margin: auto;
        cursor: pointer;
        transition: 0.3s;
    }
    h3:hover {
        color: rgba(255, 255, 255, 0.63);
        border: solid rgba(255, 255, 255, 0.575) 2px;
        transition: 0.3s;
    }
    .rappel {
        text-align: right;
    }
    .info p {
        width: 80%;
    }
    h2 a {
        color: white;
        font-size: 15px;
        text-decoration: none;
    }
    h2 span {
        font-size: 15px;
        cursor: pointer;
        transition: 0.3s;
    }
    h2 a:hover {
        color: rgba(255, 255, 255, 0.63);
        transition: 0.3s;
    }
    @media (orientation: portrait) {
        .eleph {
            background: url("../assets/baroudeur/jungle2.jpg") no-repeat center fixed;
            background-size: cover;
        }
    }
    @media screen and (max-width: 725px) {
        .rappel {
            display: none;
        }
        .para {
            display: none;
        }
        .button {
            padding: 15px;
            width: 100%;
        }
        h3 {
            width: 100%;
        }
    }
    @media screen and (max-width: 570px) {
        .miniflex {
            display: none;
        }
    }
    @media screen and (max-width: 450px) {
        .eleph {
            background: url("../assets/baroudeur/jungle3.jpg") no-repeat center fixed;
            background-size: cover;
        }
    }
    @media screen and (max-width: 375px) {
        h3 {
            font-size: 1em;
        }
    }
</style>