<template>
	<Modal>
		<form action class="app-form">
			<div class="form-control">
				<label for="title" class="label">Title</label>
				<input v-model="form.title" type="text" name="title" class="form-input" />
			</div>
			<div class="form-control">
				<label for="description" class="label">Description</label>
				<textarea v-model="form.description" name="description" cols="30" rows="5"></textarea>
			</div>
			<button v-on:click="createTodo" type="button" class="app-button is-primary">Confirm</button>
		</form>
	</Modal>
</template>

<script>
import Modal from '../components/Modal'
export default {
  name:'TodoCreate',
  components:{
    Modal
  },
  data(){
		return{
			form:{
				title:'',
				description:''
			}
		}
	},
	methods:{
		createTodo(){
			console.log(this.form)
		}
	}
}
</script>

<style>

</style>