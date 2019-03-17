<template>
	<div id="app">
		<ZCenter>
			<ZHalf>
				<form>
					<h1>Test form</h1>

					<ZInput id="fullName" placeholder="Full name" label="Full name" />
					<ZInput id="email" placeholder="E-mail" label="E-mail" />
					<ZInput id="address" placeholder="Address" label="Address" />

					<ZButton text="Click me" />
				</form>
			</ZHalf>
		</ZCenter>
	</div>
</template>

<script>
import ZCenter from './components/layout/ZCenter.vue';
import ZHalf from './components/layout/ZHalf.vue';
import ZInput from './components/ZInput.vue';
import ZButton from './components/ZButton.vue';

export default {
	name: 'app',
	components: {
		ZCenter,
		ZHalf,
		ZInput,
		ZButton
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
</style>