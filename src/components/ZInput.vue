<template>
	<div class="form-item" :style="computedStyleItem">
		<label :style="computedStyleLabel" :for="id">{{label}}</label>
		<div :style="computedStyleBorder">
			<input :id="id" :placeholder="placeholder" :style="computedStyleInput" />
		</div>
	</div>
</template>

<script>
import {config} from '../config';

export default {
	name: 'ZInput',
	props: {
		id: String,
		placeholder: String,
		label: String
	},
	methods: {

	},
	computed: {
		computedStyleItem() {
            return `				
				margin-bottom: ${config.styles.margin.small}px;
            `;
		},
		computedStyleBorder() {
            return `
				border: 1px solid ${config.styles.color.inputBorder};
				border-radius: ${config.styles.borderRadius.small}px;
            `;
        },
        computedStyleLabel() {
            return `
				font-size: ${config.styles.font.size.label}px;
				height: ${config.styles.font.size.label + 2}px;
            `;
		},
        computedStyleInput() {
			return `
				height: ${config.styles.height.inputsAndButtons}px;
				color: ${config.styles.color.text};
				padding: 0 ${config.styles.margin.medium}px;
				font-size: ${config.styles.font.size.input}px;
            `;
        }
    }
}
</script>

<style scoped>
.form-item {
	display: block;
	width: 100%;
}

input {
	width: 100%;
	border: none;
	outline: none!important;
}

label {
	display: inline-block;
	text-align: left;
	margin: 0 0 5px 2px;
}
</style>