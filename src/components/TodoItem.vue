<template>
	<div v-if="!editMode" class="todo-item">
		<div class="todo-item-container">
			<div class="todo-item-content-title">{{ title }}</div>
			<div class="todo-item-content-description">{{ description }}</div>
		</div>
		<button v-on:click="editMode = true" class="app-button is-warning">Edit</button>
		<button v-on:click="deleteTodo" class="app-button is-danger">Delete</button>
	</div>
	<div v-else class="todo-item">
		<form action class="app-form">
			<div class="form-control">
				<label for="title" class="label">Title</label>
				<input v-model="todo.title" type="text" name="title" class="form-input" />
			</div>
			<div class="form-control">
				<label for="description" class="label">Description</label>
				<textarea v-model="todo.description" name="description" cols="30" rows="5"></textarea>
			</div>
			<button v-on:click.prevent="editTodo" class="app-button is-warning">Update</button>
			<button v-on:click.prevent="editMode = false" class="app-button is-danger">Cancel</button>
		</form>
	</div>
</template>

<script>
import store from '../store'

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
		},
		_id:{
			type:String,
			required:true
		}
	},
	data(){
		return{
			editMode:false,
			todo:{
				_id: this._id,
				title: this.title,
				description: this.description
			}
		}
	},
	methods:{
		editTodo(){
			this.editMode = true
			store.dispatch('updateTodo',{...this.todo})
			this.editMode = false
		},
		deleteTodo(){
			store.dispatch('deleteTodo',this.todo._id)
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
