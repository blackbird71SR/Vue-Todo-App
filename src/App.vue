<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<TodoList :todos="todos" />
				<div class="todo-create-btn-container">
					<TodoCreate @formSubmitted="createTodo" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoCreate from './components/TodoCreate'
export default {
	name: 'App',
	components: {
		TodoList, TodoCreate
	},
	data(){
		return{
			todos:[
				{
					_id:"1",
					title:"Todo-1",
					description:"Go to the forest near the zoo..."
				},
				{
					_id:"2",
					title:"Todo-2",
					description:"Go to the forest near the zoo..."
				},
				{
					_id:"3",
					title:"Todo-3",
					description:"Go to the forest near the zoo..."
				}
			]	
		}
	},
	methods:{
		createTodo(todo){
			this.todos.push(todo)
		}
	}
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

.is-primary {
	background-color: greenyellow !important;
}

.todo {
	&-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	&-container {
		display: flex;
		flex-direction: column;
		width: 400px;
		min-height: 400px;
		background-color: #ededed;
		border-radius: 5px;
	}
	&-create-btn-container {
		margin: 10px;
	}
}
.app-button {
	font-size: 20px;
	padding: 10px;
	border-radius: 5px;
	background-color: #795899;
	color: white;
	font-weight: bold;

	&:hover {
		cursor: pointer;
	}
}

.app-form {
	.label {
		display: block;
		font-size: 18px;
		font-weight: bold;
	}

	.form-input {
		padding: 10px;
		font-size: 17px;
	}

	.form-control {
		margin-bottom: 15px;
	}
}
</style>
