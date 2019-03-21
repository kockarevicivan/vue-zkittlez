<template>
	<div class="quarter">
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'ZQuarter'
}
</script>

<style>
.quarter {
    display: inline-block;
    width: 25%;
}
</style>