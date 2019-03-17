<template>
	<div>
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'ZHalf'
}
</script>

<style scoped>
div {
    display: inline-block;
    width: 50%;
}
</style>