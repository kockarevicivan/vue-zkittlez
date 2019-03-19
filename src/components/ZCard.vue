<template>
	<div class="card" :style="computedStyle" >
        <slot></slot>
    </div>
</template>

<script>
import {config} from '../config';

export default {
    name: 'ZCard',
    computed: {
        computedStyle() {
            return `
                border-radius: ${config.styles.borderRadius.big}px;
                padding: ${config.styles.padding.big}px;
                -webkit-box-shadow: ${config.styles.boxShaddow.big};
                -moz-box-shadow: ${config.styles.boxShaddow.big};
                box-shadow: ${config.styles.boxShaddow.big};
            `;
        }
    }
}
</script>

<style scoped>
.card {
    display: block;
    width: 100%;
    background: #fcfcfc;
}
</style>