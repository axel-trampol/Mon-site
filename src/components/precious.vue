<template>
    <div class="precious">
        <div class="present-page">
            <div class="image">
                <img src="../assets/precious/hero-logo.png" alt="logo mariage">
            </div>
            <!-- <div onclick="pla()" class="play-music">
              on
            </div> -->
            <audio id="music" loop="loop">
                  <source src="../assets/precious/take-my-name.mp3" type="audio/mpeg">
              </audio>
        </div>
        <div class="maries">
          <div class="flex">
            <div>
              <img class="couple homme" src="../assets/precious/homme.png" alt="marié">
              <h2>JACK WILSON</h2>
            </div>
            <img class="and" src="../assets/precious/and.png" alt="et">
            <div>
              <img class="couple femme" src="../assets/precious/femme.png" alt="femme">
              <h2>ROSE MARIE</h2>
            </div>
          </div>
          <h1>Sont sur le point de se marier</h1>
          <p>Le 14 Fevrier, 2021 - Bali, Indonésie</p>
        </div>

        <div class="countdown-wrapper">
            <div id="countdown-text">
              <div class="timer">
                <div id="daysTicker" class="countdown"></div>
                <div class="counter-text">Jours</div>
              </div>
              <div class="timer">
                <div id="hoursTicker" class="countdown"></div>
                <div class="counter-text">Heures</div>
              </div>
              <div class="timer">
                <div id="minsTicker" class="countdown"></div>
                <div class="counter-text">Minutes</div>
              </div>
              <div class="timer">
                <div id="secsTicker" class="countdown"></div>
                <div class="counter-text">Secondes</div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>





export default {
  name: 'precious',
}

function pla() {  
  document.getElementById("music").play;
}

// Set the date we're counting down to
var countDownDate = new Date("Feb 14, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  
  //Zeros
var hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));  
  
var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
  // Display the result in the element with id="demo"
  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minsTicker").innerHTML = minutes;
  document.getElementById("secsTicker").innerHTML = seconds;
  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE CAMPAIGN BEGINS";
  }
}, 1000);

</script>

<style scoped>
  @font-face {
    font-family: "alex";
    src: url('../assets/fonts/alex.ttf');
  }
  .present-page {
    background: url("../assets/precious/hero3.jpg") no-repeat center fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;
    /* display: flex; */
    /* flex-direction: column; */
    /* display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; */
  }
  .image img {
    width: 300px;
  }
  .image {
    background-color: rgba(130, 160, 150, 0.3);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .maries {
    width: 100%;
    min-height: 400px;
    background-color: white;
  }
  .flex {
    display: flex;
    justify-content: space-around;
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 70px;
  }
  .and {
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    width: 150px;
  }
  .maries h1 {
    color:#dcc8b4;
    font-family: "alex";
    font-size: 56px;
    font-weight: 400;
    text-align: center;
    padding-top: 70px;
  }
  .maries p {
    color:rgb(136, 136, 136);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 70px;
    margin: 0!important;
  }
  .flex h2 {
    font-size: 17px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #888888;
    font-weight: 400;
    text-align: center;
  }
  .countdown-wrapper {
    position: relative;
    width: 100%;
    background-color: #eaf3f0;
    height: 200px;
    color:rgb(136, 136, 136);
  }

  #countdown, #countdown-text {
    width: 600px;
    font-family:'Times New Roman', Times, serif;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:rgb(136, 136, 136);
    text-align: center;
    display: flex;
    justify-content: space-around;
  }        
  .countdown {
    font-size: 60px;
    color:rgb(136, 136, 136);
    text-align: center;
  }
  .counter-text {
    font-size: 20px;
    color:rgb(136, 136, 136);
    text-align: center;
  }
  .timer {
    display: inline-block;
    margin: 10px;
  }
  @media screen and (max-width: 800px) {
        .couple {
            width: 200px;
        }
        .and {
            width: 100px;
        }
        .flex {
          justify-content: center;
          width: 100%;
        }
    }
    @media screen and (max-width: 550px) {
        .countdown {
          font-size: 30px;
        }
        .counter-text {
          font-size: 15px;
        }
        #countdown, #countdown-text {
          width: 100%;
        }
    }
    @media screen and (max-width: 525px) {
        .flex {
          flex-direction: column;
          align-items: center;
        }
        .and {
          margin-top: 20px;
          margin-bottom: 20px;
        }
    }
</style>