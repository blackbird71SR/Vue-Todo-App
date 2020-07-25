<template>
	<div>
		<div class="app-button" v-on:click="openModal">Create</div>
		<div class="modal" :class="{'is-active': isOpen}">
			<div class="modal-content">
				<span class="close" v-on:click="closeModal">&times;</span>
				<p>Modal Window</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:'Modal',
	data(){
		return{
			isOpen:false
		}
	},
	methods:{
		openModal(){
			this.isOpen = true
		},
		closeModal(){
			this.isOpen = false
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