<template>
    <div class="gallerie">
        <div class="background">
            <div class="navbar">
                <div class="flex">
                    <router-link to="baroudeur"><a href="" title="Où suis-je en ce moment ?"><i class="icon fas fa-map-signs"></i></a></router-link>
                    <router-link to="gallerie"><a href="" title="La galerie"><i class="icon fas fa-photo-video"></i></a></router-link>
                    <router-link to="/" title="Site pro"><i class="icon fas fa-laptop-code"></i></router-link>
                    <router-link to="log"><a href="" title="Log toi ! Enfin..si t'es vip"><i class="icon fa fa-user-secret"></i></a></router-link>
                </div>
            </div>
            <img src="../assets/baroudeur/castle.jpg" alt="background avec logo du site">
        </div>

        <div class="destination">
            <h1>La galerie du baroudeur</h1>
            <p>Photos réalisées avec amour</p>
            
                <div class="masonry">
                    <div class="item">
                        le 7 mars 2020, Édimbourg
                        <img src="https://media.altphotos.com/cache/images/2017/07/14/17/752/flock-sheep-mountains.jpg">
                    </div>
                    <div class="item">
                        12 juin 2020, chartres
                        <img src="https://static.wixstatic.com/media/f47843_c85c617f3dd245b79b8707d71c4056b2~mv2.jpg/v1/fill/w_540,h_500,al_c,q_90/f47843_c85c617f3dd245b79b8707d71c4056b2~mv2.jpg">
                    </div>
                    <div class="item">
                        30 juillet 2020, Toulouse
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg">
                    </div>
                    <div class="item">
                        19 octobre 2019, Londres
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/LondonMidlandHotel-PS01.JPG/800px-LondonMidlandHotel-PS01.JPG">
                    </div>
                    <div class="item">
                        7 juin 2019, Oulan-Bator
                        <img src="https://www.allibert-trekking.com/iconographie/92/PA1_kirghizie-aventure-nomade.jpg">
                    </div>
                    <div class="item">
                        01 juin 2019, Paris
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg">
                    </div>
                    <div class="item">
                        3 frevrier 2019, Reykjavik
                        <img src="https://www.visitscotland.com/wsimgs/visitscotland_26543130589_1655603748.jpg">
                    </div>
                    <div class="item">
                        21 decembre 2018, Oxford
                        <img src="https://www.greaterlondonproperties.co.uk/wp-content/uploads/2019/04/London_Underground_History.jpg">
                    </div>
                    <div class="item">
                        5 novenbre 2018, New York
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg">
                    </div>
                    <div class="item">
                        2 novembre 2018, Brooklyn
                        <img src="https://blog.hifrance.org/website/wp-content/uploads/2015/04/StreetArt_74492390_WEB600%C2%A9deizmat-Fotolia-734x479.jpg">
                    </div>
                    <div class="item">
                        15 mai 2018, Jackson
                        <img src="https://www.nomade-aventure.com/Content/img/header-carousel/video-home-xl.jpg">
                    </div>
                        <div class="item">
                        11 avril 2018, Lacanau
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg">
                    </div>
                </div>

        </div>

    </div>
</template>

<script>
    import log from './log.vue'
    export default {
        components: {
            log
        },
        name: "gallerie",
    }
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/3da966b77957c72127bc87110d71c340?family=Footlight+MT+Light);
    .gallerie {
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
    .gallerie img {
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



    .masonry { /* Masonry container */
        -webkit-column-count: 4;
        -moz-column-count:4;
        column-count: 4;
        -webkit-column-gap: 1em;
        -moz-column-gap: 1em;
        column-gap: 1em;
        margin: 1.5em;
        padding: 0;
        -moz-column-gap: 1.5em;
        -webkit-column-gap: 1.5em;
        column-gap: 1.5em;
        font-size: .85em;
}
.item {
    display: inline-block;
    background: #fff;
    padding: 1em;
    margin: 0 0 1.5em;
    width: 100%;
	-webkit-transition:1s ease all;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 2px 2px 4px 0 #ccc;
}
.item img{
    max-width:100%;
    min-width: 100%;
    }

    @media only screen and (max-width: 320px) {
    .masonry {
        -moz-column-count: 1;
        -webkit-column-count: 1;
        column-count: 1;
    }
}

@media only screen and (min-width: 321px) and (max-width: 768px){
    .masonry {
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
    }
}
@media only screen and (min-width: 769px) and (max-width: 1200px){
    .masonry {
        -moz-column-count: 3;
        -webkit-column-count: 3;
        column-count: 3;
    }
}
@media only screen and (min-width: 1201px) {
    .masonry {
        -moz-column-count: 4;
        -webkit-column-count: 4;
        column-count: 4;
    }
}
</style>

