<template>
	<div class="form-item">
		<label :for="id">{{label}}</label>
		<div class="border">
			<textarea :id="id" :placeholder="placeholder"></textarea>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ZTextarea',
	props: {
		id: String,
		placeholder: String,
		label: String
	},
	methods: {}
}
</script>

<style scoped>
.form-item {
	display: block;
	width: 100%;
	margin-bottom: 10px;
}

.border {
	border: 1px solid #CCC;
}

textarea {
	min-height: 100px;
	max-height: 300px;
	width: 100%!important;
	border: none;
	outline: none!important;
	color: #222;
	padding: 15px;
	font-size: 13px;
	line-height: 20px;
}

label {
	display: inline-block;
	text-align: left;
	font-size: 13px;
	height: 15px;
	margin: 0 0 5px 2px;
}
</style>