<template>
    <div class="log">
        <div class="modal">
            <form action="/ma-page-de-traitement" method="post">
                <div class="titre">
                    <h1>Login</h1>
                    <router-link to="baroudeur"><p>Retour à la page d'acceuil</p></router-link>
                </div>
                <div>
                    <input required type="text" id="name" name="user_name" placeholder="Identifiant">
                </div>
                <div>
                    <input required id="text" placeholder="Mot de passe">
                </div>
                <div class="button">
                    <button>Se connecter</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import baroudeur from './baroudeur.vue'
export default {
    components: {
        baroudeur
    },
  name: 'log',
}
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/3da966b77957c72127bc87110d71c340?family=Footlight+MT+Light);
    .log {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;
        font-family: "Footlight MT Light";
        background-image:url("https://images3.alphacoders.com/750/75027.jpg");
    background-color: white;
    }
    .modal {
        background-color: white;
        width: 80%;
        max-width: 500px;
        margin: auto;
        display: flex;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.623);
        
    }
    .titre {
        text-align: center;
        padding: 2em;
    }
    .titre h1 {
        padding: 1em;
    }
    .titre p {
        color: black;
    }

form {
    padding: 3em;
}

form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 300px;
  box-sizing: border-box;

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
  padding: 10px;
  border-radius: 2px;
}

input:focus, textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour aligner les champs texte multi‑ligne avec leur étiquette */
  vertical-align: top;

  /* Pour donner assez de place pour écrire du texte */
  height: 5em;
}
.button {
    display: flex;
    justify-content: center;
}
button {
    padding: 10px;
    border-radius: 2px;
    width: 100%;
    background-color: rgb(80, 82, 80);
    border: none;
    font-size: 1em;
    color: white;
}

</style>