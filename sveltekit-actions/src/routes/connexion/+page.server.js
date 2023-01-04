import { invalid, redirect } from "@sveltejs/kit";
import data from './user.json';
import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store';
import { onMount } from 'svelte';
import { getUserSegmentation } from "./connexion";


export const utilisateur = writable('utilisateur', {
  username: null
})

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    
    const user = formData.get('user');
    const password = formData.get('password');

    const user_data = JSON.parse(JSON.stringify(data));
    let res = user_data.find(personne =>{
      if(personne.identifiant.localeCompare(user, undefined, {sensitivity: 'base'}) === 0){
        getUserSegmentation(personne);
        return personne.password.localeCompare(password, undefined, {sensitivity: 'base'}) === 0;
      }
    })

    if (res == null){
      return invalid(400, {
        error: true,
        message: 'Utilisateur non trouvé',
        user,
        password
      })
    }
    
    else{
      console.log(res)
    }
    
    throw redirect(303, '/')

    return {
      success: true,
    }
  },
}