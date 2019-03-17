<template>
	<div class="form-item">
		<label :for="id">{{label}}</label>
		<div class="border">
			<input :id="id" :placeholder="placeholder" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'ZInput',
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

input {
	height: 44px;
	width: 100%;
	border: none;
	outline: none!important;
	color: #222;
	padding: 0 15px;
	font-size: 13px;
}

label {
	display: inline-block;
	text-align: left;
	font-size: 13px;
	height: 15px;
	margin: 0 0 5px 2px;
}
</style>