<template>
	<Modal ref="modal">
		<form action class="app-form">
			<div class="form-control">
				<label for="title" class="label">Title</label>
				<input v-model="form.title" type="text" name="title" class="form-input" />
			</div>
			<div class="form-control">
				<label for="description" class="label">Description</label>
				<textarea v-model="form.description" name="description" cols="30" rows="5"></textarea>
			</div>
			<div class="app-error">
				<div class="form-error">{{formError}}</div>
			</div>
			<button v-on:click="submitForm" type="button" class="app-button is-primary">Confirm</button>
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
      },
      formError:''
		}
  },
  computed:{
    isFormValid(){
      return this.form.title.length > 8 && this.form .description.length > 10 ? true : false
    },
    modal(){
      return this.$refs.modal
    }
  },
	methods:{
		submitForm(){
      if (this.isFormValid) {
        this.formError = ''
        this.$emit('formSubmitted', {...this.form})
        this.modal.close()
        this.resetForm() 
      }else{
        this.formError = 'Form Error!Title needs to be longer than 8 characters and description needs to be longer than 10 characters.'
      }
    },
    resetForm(){
      this.form.title = ''
      this.form.description = ''
    }
	}
}
</script>

<style scoped>
.form-error{
  margin-bottom: 10px;
}
.app-error{
  color:red;
  font-weight: bold;
}
</style>