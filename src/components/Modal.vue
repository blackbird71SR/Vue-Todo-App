<template>
	<div class="modal" :class="{'is-active': isOpen}">
		<div class="modal-content">
			<span class="close" v-on:click="emitCloseModal">&times;</span>
			<p>Modal Window</p>
		</div>
	</div>
</template>

<script>
export default {
	name:'Modal',
	props:{
		isOpen:{
			type:Boolean,
			required:true
		}
	},
	methods:{
		emitCloseModal(){
			this.$emit('modalClosed',
			//{value:'we are testing!'}
		)
		}
	}
}
</script>

<style lang='scss' scoped>
.close {
	color: #aaa;
	float: right;
	font-size: 20px;
	font-weight: bold;
	line-height: 8px;
	&:hover {
		cursor: pointer;
	}
}
.modal {
	display: none;
	position: fixed;
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto; //enable scroll if needed
	background-color: rgba(0, 0, 0, 0.4);

	&.is-active {
		display: block;
	}
}
.modal-content {
	background-color: #fefefe;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
}
</style>