<template>
	<div>
        <img src="https://timedotcom.files.wordpress.com/2017/08/slack_mark_web-copy.png" />
        <a href="#">Welcome to Zkittlez!</a>
    </div>
</template>

<script>
export default {
	name: 'ZHeader'
}
</script>

<style scoped>
div {
    display: flex;
    height: 100px;
    background: #fcfcfc;
    border-bottom: 1px solid #f0f0f0;
    align-items: center;
}

img {
    display: inline-block;
    height: 30px;
    padding-left: 40px;
}

a {
    text-decoration: none;
    font-weight: 800;
    padding-left: 10px;
    color: #FEC83C;
}
</style>