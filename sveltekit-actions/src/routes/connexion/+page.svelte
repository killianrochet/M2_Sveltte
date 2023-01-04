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
	export let form;
	export let test;


	test = 15;
	let value;

	let connected;
	connected = !!(localStorage.getItem("Utilisateur"));
	console.log(connected);

	function storeUser(){
		const input = document.getElementById('userInput');
		value = input.value;
		localStorage.setItem("Utilisateur", value);
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