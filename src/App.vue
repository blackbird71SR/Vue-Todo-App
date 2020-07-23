<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <div class="todo-list">
          <div class="todo-item">
            <div class="todo-item-container">
              <div class="todo-item-content-title">Todo-1</div>
              <div class="todo-item-content-description">Very Important 1!</div>
            </div>
          </div>
          <div class="todo-item">
            <div class="todo-item-container">
              <div class="todo-item-content-title">Todo-2</div>
              <div class="todo-item-content-description">Very Important 2!</div>
            </div>
          </div>
          <div class="todo-item">
            <div class="todo-item-container">
              <div class="todo-item-content-title">Todo-3</div>
              <div class="todo-item-content-description">Very Important 3!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todo-wrapper{
  display: flex;
  justify-content: center;
  width: 100%;
}
.todo-container{
  width:400px;
  min-height: 400px;
  background-color: #ededed;
  border-radius: 5px;
}
.todo-item{
  background-color: gray;
  min-height:70px;
  margin: 10px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  font-size: 23px;
}

.todo-item-content-title{
  font-weight: bold;
}

.todo-item-content-description{
  font-size: 19px;
}
</style>
