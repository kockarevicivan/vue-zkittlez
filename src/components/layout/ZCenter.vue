<template>
	<div :style="computedStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZCenter',
    props: {
        vertical: Boolean,
        horizontal: Boolean
    },
    computed: {
        computedStyle() {
            let style = 'display: flex;height: 100%;';

            if(this.horizontal) style += 'justify-content: center;';
            if(this.vertical) style += 'align-items: center';

            return style;
        }
    }
}
</script>