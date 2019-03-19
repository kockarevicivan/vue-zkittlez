<template>
	<div id="app">
		<ZHeader />
		<ZCenter vertical horizontal>
			<ZQuarter>
				<ZCard>
					<div>
						<h1>Test form</h1>

						<ZInput id="fullName" @keyup="onFullName" placeholder="Full name" label="Full name" />
						<ZInput id="email" placeholder="E-mail" label="E-mail" />
						<ZInput id="address" placeholder="Address" label="Address" />
						<ZTextarea id="message" placeholder="Message" label="Message" />

						<ZCheckbox />

						<ZWorld />

						<ZButton @click="buttonClick" text="Click me" />
					</div>
				</ZCard>
			</ZQuarter>
		</ZCenter>
	</div>
</template>

<script>
import ZCenter from './components/layout/ZCenter.vue';
import ZQuarter from './components/layout/ZQuarter.vue';
import ZInput from './components/ZInput.vue';
import ZTextarea from './components/ZTextarea.vue';
import ZButton from './components/ZButton.vue';
import ZCard from './components/ZCard.vue';
import ZCheckbox from './components/ZCheckbox.vue';
import ZHeader from './components/ZHeader.vue';
import ZWorld from './components/illustrations/ZWorld.vue';

export default {
	name: 'app',
	components: {
		ZCenter,
		ZQuarter,
		ZInput,
		ZTextarea,
		ZButton,
		ZCard,
		ZCheckbox,
		ZHeader,
		ZWorld
	},
	methods: {
		onFullName(value) {
			alert(value);
		},
		buttonClick() {
			alert('Button clicked!');
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
	padding: 0;
}

h1 {
	margin-bottom: 20px;
}

#app {
	height: 1100px;
}
</style>