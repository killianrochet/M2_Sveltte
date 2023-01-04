<script>
  import productsJSON from '../products.json';
  import { page } from '$app/stores';
  import Header from '../../../components/Header.svelte';
  import { navigate } from 'svelte-routing';
  import { setContext } from 'svelte';
  import { getContext } from 'svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte-local-storage-store';
  import * as service from './product.js';

  let product ;
  let recommended;


  function refreshPage(id){
    navigate(`/products/${id}`);
    location.reload();
  }

  const getProduct = () => {
    const products = JSON.parse(JSON.stringify(productsJSON));
    product = products.find((p) => p.id === $page.params.id);
    service.getInfoProduct(product);
    recommended = products.slice(0, 3);
  }
  getProduct();
  
</script>

<style>
    .container {
      display: flex;
      margin-top: 40px;
    }
  
    .image-container {
      width: 40%;
    }
  
    .image {
      width: 100%;
      border: 5px solid #ccc;
      box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
    }
  
    .text-container {
      width: 60%;
      margin-left: 5%;
    }
  
    h1 {
      font-size: 2em;
      margin-bottom: 20px;
    }

    .recommended {
      margin-top: 30px;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
    }

  .recommended h2 {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  .recommended .product {
  width: 25%; /* 4 produits par ligne */
  display: flex;
  align-items: center;
  margin: 0 10px 20px; /* marge supérieure et inférieure de 20 pixels, marge latérale de 10 pixels */
  }

  .recommended .product img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

    .separator{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 30px 0;
  }

  .others_product{
    position: relative;
    bottom: 0px;
    width: 100%;
    margin-top: 15%;
  }

</style>  

<Header />

  {#if product}
    <div class="container">
      <div class="image-container">
        <img class="image" src="{product.imageUrl}" alt="{product.name}" />
      </div>
      <div class="text-container">
        <h1>{product.name}</h1>
      </div>
    </div>
<div class="others_product">
    <div class="separator"></div>
        <div class="recommended">
        <h2>Produits recommandés</h2>
        {#each recommended as r}
          <div class="product" on:click={() => {
            refreshPage(r.id);
          }}> 
          <img src="{r.imageUrl}" alt="{r.name}" />
              <span>{r.name}</span>
            </div>
        {/each}
        </div>
    <div class="separator"></div>
</div>
  {:else}
    <p>Chargement en cours...</p>
  {/if}