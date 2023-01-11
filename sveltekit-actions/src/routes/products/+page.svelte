<script>
  import productsJSON from './products.json';
  import Header from '../../components/Header.svelte';
  import * as service from './products.js';

  const products = JSON.parse(JSON.stringify(productsJSON));
  const userSegmentation = JSON.parse(localStorage.getItem("Segmentation"));
</script>

<style>
  #cards-container {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr)); /* 3 colonnes de 300 pixels minimum et 1 fraction de la largeur restante */
    grid-gap: 2%; /* espace entre chaque carte */
    margin-top: 5%;
  }

  .card {
    width: 100%; /* la largeur de chaque carte sera définie par grid-template-columns */
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20%;
    padding: 10%;
  }
</style>

<Header />
<div id="cards-container" class="grid grid-cols-3">
  {#each products as product}
  <div on:click={() => service.getProduct(product, userSegmentation)} bind:this={product.value}>
    <a href={`/products/${product.id}`} class="card">
      <h2 class="text-xl font-bold">{product.name}</h2>
      <p class="text-lg font-bold">Marque : {product.brand}</p>
      <img src="{product.imageUrl}" alt="{product.name}" class="w-full">
    </a>
  </div>
  {/each}
</div>