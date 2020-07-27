import Vue from 'vue'
const INITIAL_DATA = {
	todos: [
		{
			_id: '1',
			title: 'Todo-1',
			description: 'Go to the forest near the zoo...'
		},
		{
			_id: '2',
			title: 'Todo-2',
			description: 'Go to the forest near the zoo...'
		},
		{
			_id: '3',
			title: 'Todo-3',
			description: 'Go to the forest near the zoo...'
		}
	]
}

const store = {
	state: {
		toods: []
	},
	actions: {
		initStore(state) {
			const todos = localStorage.getItem('my_todos')
			if (!todos) {
				Vue.set(state, 'todos', INITIAL_DATA.todos)
			} else {
				Vue.set(state, 'todos', JSON.parse(todos))
			}
			return state.todos
		},
		createTodo(state, todo) {
			todo._id = Math.random()
				.toString(36)
				.substr(2, 7)
			state.todos.push(todo)
			return state.todos
		},
		updateTodo(state, todoToUpdate) {
			const index = state.todos.findIndex((todo) => {
				return todo._id === todoToUpdate._id
			})
			Vue.set(state.todos, index, todoToUpdate)
			return state.todos
		},
		deleteTodo(state, todoId) {
			const index = state.todos.findIndex((todo) => {
				return todo._id === todoId
			})
			state.todos.splice(index, 1)
			return state.todos
		}
	}
}

function persistData(value) {
	const stringifiedValue = JSON.stringify(value)
	localStorage.setItem('my_todos', stringifiedValue)
}

store.dispatch = function(action, payload) {
	if (!this.actions[action]) throw new Error(`Action ${action} is not defined`)
	const result = this.actions[action](this.state, payload)
	if (!result) return
	persistData(result)
	return result
}

export default store
