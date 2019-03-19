<template>
	<div id="app">
		<ZHeader />
		<ZCenter horizontal>
			<ZHalf>
				<ZSpacer />

				<ZCard>
					<div>
						<h1>Test form</h1>

						<ZInput id="fullName" @keyup="onFullName" placeholder="Full name" label="Full name" />
						<ZInput id="email" placeholder="E-mail" label="E-mail" />
						<ZInput id="address" placeholder="Address" label="Address" />
						<ZTextarea id="message" placeholder="Message" label="Message" />

						<ZSpacer line />

						<ZCheckbox label="I agree to Zkittlez's terms and conditions." />

						<ZCenter horizontal>
							<ZHalf>
								<ZWorld />
							</ZHalf>
						</ZCenter>

						<ZSpacer />

						<ZButton @click="buttonClick" text="Click me" />
					</div>
				</ZCard>

				<ZSpacer />
			</ZHalf>
		</ZCenter>
	</div>
</template>

<script>
import ZCenter from './components/layout/ZCenter.vue';
import ZHalf from './components/layout/ZHalf.vue';
import ZSpacer from './components/ZSpacer.vue';
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
		ZHalf,
		ZSpacer,
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
	height: 800px;
}
</style>