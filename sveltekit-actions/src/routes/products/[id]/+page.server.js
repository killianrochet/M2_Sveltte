import productsJSON from '../products.json';
import { page } from '$app/stores';
import Header from '../../../components/Header.svelte';
import { navigate } from 'svelte-routing';
import { setContext } from 'svelte';
import { getContext } from 'svelte';
import { onMount } from 'svelte';
import { writable } from 'svelte-local-storage-store'
import { get } from 'svelte/store';

