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

import store from './store'

export default {
	name: 'App',
	components: {
		TodoList, TodoCreate
	},
	data(){
		return{
			todos: store.state.todos
		}
	},
	created(){
		this.todos = store.dispatch('initStore')
	},
	methods:{
		createTodo(todo){
			store.dispatch('createTodo', todo)
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
	background-color: #47ca47 !important;
}
.is-warning {
	background-color: #ffa753 !important;
}
.is-danger {
	background-color: #ff5a5a !important;
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
		min-height: 200px;
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
