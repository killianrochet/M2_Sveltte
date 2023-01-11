
<script>
	import Header from '../components/Header.svelte';
</script>

<style>
	h2{
		margin-top: 50%;
	}
@media only screen and (max-width: 600px) {
	h2{
		margin-top: 10%;
	}

	
}
</style>

<Header />
<div class="sm:mx-auto sm:w-full sm:max-w-md">
	<div class="flex flex-col gap-4 items-center">
		<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
			BIENVENUE
		</h2>
	</div>
</div>
