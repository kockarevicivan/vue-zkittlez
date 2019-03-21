<template>
	<div class="form-item">
		<div class="inline-wrap">
			<input type="checkbox" id="checkbox" style="display:none"/>
			<label for="checkbox" class="toggle"><span></span></label>
		</div>
		<label for="checkbox" v-if="label" class="actual-label" >{{label}}</label> 
    </div>
</template>

<script>
export default {
	name: 'ZCheckbox',
	props: {
		id: String,
		label: String
	}
}
</script>

<style>
.form-item {
    display: block;
    width: 100%;
	margin-bottom: 15px;
}

.inline-wrap {
	display: inline-block;
}

.actual-label {
	font-size: 13px;
	vertical-align: top;
	line-height: 20px;
	margin-left: 5px;
}

.toggle {
	position: relative;
	display: block;
	width: 40px;
	height: 20px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	transform: translate3d(0, 0, 0);
}

.toggle:before {
	content: "";
	position: relative;
	top: 3px;
	left: 3px;
	width: 34px;
	height: 14px;
	display: block;
	background: #9A9999;
	border-radius: 8px;
	transition: background .2s ease;
}

.toggle span {
	position: absolute;
	top: 0;
	left: 0;
	width: 20px;
	height: 20px;
	display: block;
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
	transition: all .2s ease;
}

#checkbox:checked + .toggle:before {
	background: rgb(254, 230, 190);
}

#checkbox:checked + .toggle span {
	background: rgb(254, 200, 60);
	transform: translateX(20px);
	transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
	box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

#checkbox:checked + .toggle span:before {
	transform: scale(1);
	opacity: 0;
	transition: all .4s ease;
}

.center {
	position: absolute;
	top: calc(50% - 10px);
	left: calc(50% - 20px);
}
</style>