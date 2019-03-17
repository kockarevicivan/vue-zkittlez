<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<ZInput id="email" placeholder="E-mail" label="E-mail" />
		<ZButton text="Click me" />
	</div>
</template>

<script>
import ZInput from './components/ZInput.vue'
import ZButton from './components/ZButton.vue'

export default {
	name: 'app',
	components: {
		ZInput,
		ZButton
	}
}
</script>

<style>
* {
	box-sizing: border-box;
}
</style>