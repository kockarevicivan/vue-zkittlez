<template>
	<div id="app">
		<ZCenter>
			<ZThird>
				<ZCard>
					<div>
						<h1>Test form</h1>

						<ZInput id="fullName" @keyup="onFullName" placeholder="Full name" label="Full name" />
						<ZInput id="email" placeholder="E-mail" label="E-mail" />
						<ZInput id="address" placeholder="Address" label="Address" />
						<ZTextarea id="message" placeholder="Message" label="Message" />

						<ZButton @click="buttonClick" text="Click me" />
					</div>
				</ZCard>
			</ZThird>
		</ZCenter>
	</div>
</template>

<script>
import ZCenter from './components/layout/ZCenter.vue';
import ZThird from './components/layout/ZThird.vue';
import ZInput from './components/ZInput.vue';
import ZTextarea from './components/ZTextarea.vue';
import ZButton from './components/ZButton.vue';
import ZCard from './components/ZCard.vue';

export default {
	name: 'app',
	components: {
		ZCenter,
		ZThird,
		ZInput,
		ZTextarea,
		ZButton,
		ZCard
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
</style>