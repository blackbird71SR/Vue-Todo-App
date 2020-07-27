import Vue from 'vue'

const store = {
	state: {
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
	},
	actions: {
		createTodo(state, todo) {
			todo._id = Math.random()
				.toString(36)
				.substr(2, 7)
			state.todos.push(todo)
		},
		updateTodo(state, todoToUpdate) {
			const index = state.todos.findIndex((todo) => {
				return todo._id === todoToUpdate._id
			})
			Vue.set(state.todos, index, todoToUpdate)
		},
		deleteTodo(state, todoId) {
			const index = state.todos.findIndex((todo) => {
				return todo._id === todoId
			})
			state.todos.splice(index, 1)
		}
	}
}

store.dispatch = function(action, payload) {
	if (!this.actions[action]) throw new Error(`Action ${action} is not defined`)
	return this.actions[action](this.state, payload)
}

export default store
