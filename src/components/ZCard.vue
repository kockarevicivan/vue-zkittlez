<template>
	<div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default {
	name: 'ZCard'
}
</script>

<style scoped>
.card {
    display: block;
    width: 100%;
    padding: 20px;
    -webkit-box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.2);
}
</style>