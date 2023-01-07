<style>
	.form-container {
	  display: flex;
	  justify-content: center;
	  margin-top: 60px;
	}
  </style>
  
  <script>
	import Header from '../../components/Header.svelte';
	import { enhance, applyAction } from '$app/forms';
	import Alert from '../../lib/components/Alert.svelte';
	import { onMount } from 'svelte';
	import data from './user.json';


	export let form;
	export let test;
	const user_data = JSON.parse(JSON.stringify(data));
	console.log(user_data);

	test = 15;
	let value;

	let connected;
	connected = !!(localStorage.getItem("Utilisateur"));

	function storeUser(){
		const input = document.getElementById('userInput');
		value = input.value;
		localStorage.setItem("Utilisateur", value);
		for (const obj of user_data){
			if(obj.identifiant === value && obj.hasOwnProperty('segmentation')){
				localStorage.setItem("Segmentation", JSON.stringify(obj.segmentation));
				break;
			}
		}
	}
  </script>
  


  <Header />
  <div class="form-container">
	<form
	  method="POST"
	  action="?/create"
	  class="w-full flex flex-col max-w-xs"
	  use:enhance={({ form }) => {
		// Before form submission to server
		return async ({ result, update }) => {
		  // After form submission to server
		  if (result.type === 'success') {
			form.reset();
		  }
		  if (result.type === 'invalid') {
			await applyAction(result);
		  }
		  update();
		};
	  }}
	>
	<div class="form-control w-full max-w-xs">
		<label for="user" class="label">
		  <span class="label-text">Nom d'utilisateur</span>
		</label>
  
		<input
		  id="userInput"
		  type="text"
		  name="user"
		  value={form?.user ?? ''}
		  class="input input-primary input-bordered w-full max-w-xs"
		/>
	  </div>
	  <div class="form-control w-full max-w-xs">
		<label for="password" class="label">
		  <span class="label-text">Mot de passe</span>
		</label>
		<input
		  type="password"
		  name="password"
		  value={form?.password ?? ''}
		  class="input input-primary input-bordered w-full max-w-xs"
		/>
	  </div>
	  <button class="mt-4 btn btn-primary w-full max-w-xs" on:click={storeUser}>Se connecter</button>
	  {#if form?.error}
		<Alert message={form?.message} />
	  {/if}
	</form>
  </div>