<template>
	<header>
        <img src="../assets/images/logo.png" />
        <a href="#">Welcome to Zkittlez!</a>
    </header>
</template>

<script>
export default {
	name: 'ZHeader'
}
</script>

<style>
header {
    display: flex;
    height: 100px;
    background: #fcfcfc;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
}

header > img {
    display: inline-block;
    height: 20px;
    padding-left: 40px;
}

header > a {
    text-decoration: none;
    font-weight: 800;
    padding-left: 10px;
    color: #FEC83C;
}
</style>