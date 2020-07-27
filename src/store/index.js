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
	createTodo(todo) {
		todo._id = Math.random()
			.toString(36)
			.substr(2, 7)
		this.state.todos.push(todo)
	}
}

export default store
