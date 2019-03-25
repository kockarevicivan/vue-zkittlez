<template>
	<hr :style="computedStyle" />
</template>

<script>

export default {
    name: 'ZSpacer',
    props: {
        line: Boolean
    },
    computed: {
        computedStyle() {

            let styles = `
                height: 1px;
                border-top: 1px solid #ccc;
            `;

            return this.line ? styles : '';
        }
    }
}
</script>

<style>
hr {
    display: block;
    border: 0;
    padding: 0;
    margin: 20px 3px;
}
</style>