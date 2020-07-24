<template>
	<div class="todo-list">
		<TodoItem
			v-for="todo in todos"
			:key="todo._id"
			:title="todo.title"
			:description="todo.description"
		/>
	</div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
	name: 'TodoList',
	components: {
		TodoItem
	},
	props:{
		todos:{
			required: true,
			type: Array
		}
	}
}
</script>

<style lang="scss" scoped>
.todo-list {
	flex: 1;
}
</style>
