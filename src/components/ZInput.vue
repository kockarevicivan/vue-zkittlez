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
	margin-bottom: 20px;
}

.border {
	border: 1px solid #CCC;
}

input {
	height: 40px;
	width: 100%;
	border: none;
	outline: none!important;
	color: #222;
	padding: 0 20px;
}

label {
	display: inline-block;
	text-align: left;
}
</style>