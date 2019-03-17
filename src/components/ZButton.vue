<template>
	<button>{{text}}</button>
</template>

<script>
export default {
	name: 'ZButton',
	props: {
		text: String
	}
}
</script>

<style scoped>
button {
	height: 40px;
	border: none;
	background-color: #FEC83C;
	color: #FFF;
	padding: 0 15px;
	margin-bottom: 20px;
}
</style>