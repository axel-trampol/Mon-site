<template>
  <div class="pied">
    <div class="container">
        <div>

        </div>
        <div class="center">
          <h1>High Five</h1>
        </div>
        <div class="end">
          <div class="end2">
            <a href="#tete"><i class="arrow fas fa-arrow-circle-up"></i></a>
          </div>
          
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pied',
}
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
@font-face {
	font-family: "bahagia";
	src: url('../assets/fonts/Bahagia.ttf');
}

.pied {
  height: 100%;
  max-width: 100%;
}
.container {
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  background-color: #d34b26e3;
  width: 100%;
  height: 100%;
  background-size: cover;
  color: black;
  background-image: url(../assets/main2.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.container div {
  width: 33vw;
}
.center {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.center h1 {
  font-size: 180px;
  color: white;
  text-align: center;
  font-family: "secret";
}
.end {
  display: flex; 
  flex-direction: column-reverse;
  /* justify-content: flex-end; */
  text-align:right;
  color: black;
  transition: 0.3s;
}
.end2 {
  display: flex;
  justify-content: flex-end;
}
.end2 a {
  padding-right: 4%;
  padding-bottom: 4%;
}
.arrow {
  color: rgba(0, 0, 0, 0.555);
  transition: 0.3s;
  font-size: 100px;
  text-align:right;
}
.arrow:hover {
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 0.3s;
}
@media screen and (max-width: 1500px) {
    /* .container {
        -webkit-background-size: 600px; 
        background-size: 600px;
        } */
    .center h1 {
      font-size: 130px;
    }
}
@media screen and (max-width: 950px) {
    /* .container {
        -webkit-background-size: 500px; 
        background-size: 500px;
    } */
    .center h1 {
      font-size: 100px;
    }
    .arrow {
      font-size: 80px;
    }
}
@media screen and (max-width: 600px) {
    /* .container {
        -webkit-background-size: 400px; 
        background-size: 400px;
    } */
    .center h1 {
      font-size: 90px;
    }
    .arrow {
      font-size: 60px;
    }
}

</style>