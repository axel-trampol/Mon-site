<template>
    <div class="club">
        <div class="page">
            <div class="navbar">

                <div class="logo">
                    <i class="icon fab fa-artstation"></i>
                </div>

                <div class="selection">
                    <router-link to="club"><h2>HOME</h2></router-link>
                    <router-link to=""><h2>ABOUT</h2></router-link>
                    <router-link to=""><h2>ARTISTS</h2></router-link>
                    <router-link to=""><h2>CONTACT</h2></router-link>
                    <i class="icon search fas fa-search"></i>
                </div>
            
                
            </div>
            <div class="present-page">
                <div class="logo2">
                    <div>
                        <img src="../assets/club/inki-logo.png" alt="logo inky">
                        <div class="consul">
                            <button>CONATCT</button>
                            <p>Pour une consultation et choisir<br/>votre prochain tatouage avec nous</p>
                        </div>
                    </div>
                    
                        
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
}
.logo {
    width: 50%;
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
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 90vh;
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
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
}
.consul button:hover {
    background-color: #2b2b2bda;
    transition: 0.3s;
}
.consul p {
    font-family: "lato";
}
</style>