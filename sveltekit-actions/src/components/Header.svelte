
<style>
    nav {
    position: fixed; /* ajoutez cette ligne */
    top: 0; /* ajoutez cette ligne */
    left: 0; /* ajoutez cette ligne */
    right: 0; /* ajoutez cette ligne */
    background-color: #333;
    color: #fff;
    }
  
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
  
    nav li {
      flex: 1;
      text-align: center;
    }
  
    nav a {
      display: block;
      padding: 20px;
      color: #fff;
      text-decoration: none;
    }
  
    nav a:hover {
      background-color: #444;
    }

    .bandeau{
      position: absolute;
      z-index: 2;
    }
  </style>

  
<div class="bandeau">
  <nav>
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/products">Liste des produits</a></li>
      {#if typeof localStorage !== "undefined" && localStorage.getItem("Utilisateur")}
        <li><a href="/">Déconnexion</a></li>
      {:else}
        <li><a href="/connexion">Se connecter</a></li>
      {/if}
    </ul>
  </nav>
</div>