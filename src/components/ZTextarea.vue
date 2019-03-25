<template>
	<div class="form-item" :style="computedStyleItem">
		<label :style="computedStyleLabel" :for="id">{{label}}</label>
		<div class="border" :style="computedStyleBorder">
			<textarea v-on:keyup="$emit('keyup', $refs.textareaElement.value)" ref="textareaElement" :style="computedStyleTextarea" :id="id" :placeholder="placeholder"></textarea>
		</div>
	</div>
</template>

<script>
import {config} from '../config';

export default {
	name: 'ZTextarea',
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
        computedStyleTextarea() {
			return `
				color: ${config.styles.color.text};
				max-height: 300px;
				padding: ${config.styles.padding.small}px;
				font-size: ${config.styles.font.size.input}px;
				line-height: ${config.styles.font.size.input + 7}px;
            `;
        }
    }
}
</script>

<style>
.form-item {
	display: block;
	width: 100%;
}

.border {
	overflow: hidden;
}

.form-item > .border > textarea {
	width: 100%!important;
	min-height: 100px;
	border: none;
	outline: none!important;
}

.form-item > .border > label {
	display: inline-block;
	text-align: left;
	margin: 0 0 5px 2px;
}
</style>