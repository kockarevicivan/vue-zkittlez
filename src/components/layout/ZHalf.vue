<template>
	<div class="half">
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'ZHalf'
}
</script>

<style>
.half {
    display: inline-block;
    width: 50%;
}
</style>