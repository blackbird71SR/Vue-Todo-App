<template>
	<div class="todo-item">
		<div class="todo-item-container">
			<div class="todo-item-content-title">{{ title }}</div>
			<div class="todo-item-content-description">{{ description }}</div>
		</div>
		<button v-on:click="editTodo" class="app-button is-warning">Edit</button>
		<button v-on:click="deleteTodo" class="app-button is-danger">Delete</button>
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		title: {
			type: String,
			required: true,
			default: 'Default Title'
		},
		description: {
			type: String,
			required: false
		}
	},
	methods:{
		editTodo(){
			alert('Edit Todo');
		},
		deleteTodo(){
			alert('Delete Todo')
		}
	}
}
</script>

<style lang="scss">
.app-button {
	font-size: 15px;
	&.is-warning {
		margin-right: 5px;
		margin-top: 10px;
	}
}
.todo {
	&-item {
		background-color: gray;
		min-height: 70px;
		margin: 10px;
		padding: 10px;
		color: white;
		border-radius: 5px;
		font-size: 23px;

		&-content {
			margin-bottom: 10px;

			&-title {
				font-weight: bold;
			}

			&-description {
				font-size: 19px;
			}
		}
	}
}
</style>
