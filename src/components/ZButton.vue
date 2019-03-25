<template>
	<button :style="computedStyle" v-on:click="$emit('click')">{{text}}</button>
</template>

<script>
import {config} from '../config';

export default {
	name: 'ZButton',
	props: {
		text: String
	},
	computed: {
        computedStyle() {
            return `
				border-radius: ${config.styles.borderRadius.small}px;
				padding: 0 ${config.styles.padding.small}px;
				height: ${config.styles.height.inputsAndButtons}px;
				background-color: ${config.styles.color.primary};
				color: ${config.styles.color.textInverted};
				margin-bottom: ${config.styles.margin.medium}px;
            `;
        }
    }
}
</script>

<style>
button {
	display: block;
	width: 100%;
	outline: none!important;
	border: none;
	cursor: pointer;
	font-weight: 600;
}
</style>