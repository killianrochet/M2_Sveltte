import { invalid, redirect } from "@sveltejs/kit";
import data from './user.json';
import { writable } from 'svelte-local-storage-store';
import { get } from 'svelte/store';
import { onMount } from 'svelte';


export let user_segmentation;

export function getUserSegmentation(personne){
  user_segmentation = personne.segmentation;
  console.log(user_segmentation);
} 
