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
	display: block;
	width: 100%;
	height: 44px;
	border: none;
	background-color: #FEC83C;
	color: #FFF;
	padding: 0 15px;
	margin-bottom: 20px;
	cursor: pointer;
	font-weight: 600;
}
</style>