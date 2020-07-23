<template>
	<div class="todo-list">
		<TodoItem v-bind:title="'Todo - 1'" v-bind:description="'Description-1'" />
		<TodoItem :title="'Todo - 2'" :description="'Description-2'" />
		<TodoItem :title="'Todo - 3'" />
	</div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
	name: 'TodoList',
	components: {
		TodoItem
	}
}
</script>

<style lang="scss"></style>
