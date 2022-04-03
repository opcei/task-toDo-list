<template>
  <div class="todo">
    <form @submit.prevent="addTodo">
      <div class="add-todo">
        <input v-model="newTodo" placeholder="What needs to be done?" />
        <button @keyup.enter="enterClicked()">Add ToDo</button>
      </div>
    </form>
    <div class="todos-list">
      <div class="header-todo-list">
        <span class="todo-header">To Do</span>
        <div class="counter-todo">{{ filteredTodo.length }}</div>
      </div>
      <div class="list">
        <ul>
          <li v-for="todo in filteredTodo" :key="todo.id">
            <input type="checkbox" v-model="todo.done" />
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
    <button class="hide-button" @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Show all" : "hideCompleted" }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([]);

function addTodo() {
  if (newTodo.value !== "") {
    todos.value.push({ id: id++, text: newTodo.value, done: false });
  }
  newTodo.value = "";
}
const filteredTodo = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});
function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<style scoped lang="sass">
$font-size: 15pt
$padding: 10px

.todo
  width: 700px
  margin: 3em auto
  border: 0.5px solid black
  box-sizing: border-box
  border-radius: 7px
  overflow: hidden
  font-size: $font-size

  display: flex
  flex-direction: column

  .hide-button
    width: 150px

    display: flex
    justify-content: center
    align-self: center

  form
    padding: $padding
    background-color: hsl(203, 94%, 61%)

    display: flex
    justify-content: center
    align-items: center

    .add-todo
      height: 15px

      display: flex
      flex-direction: row

      input
        width: 250px
        height: 100%
        padding: 2px
        margin-right: 5px
        border: 0.5px solid black

        display: flex
        align-items: center

      button
        display: flex
        align-items: center

  .todos-list
    padding: $padding

    .header-todo-list
      display: flex
      flex-direction: row
      justify-content: space-between

    .list
      ul
        li
          display: flex
          flex-direction: row
          justify-content: space-between

          span
            flex-grow: 1
            text-align: left
            margin-left: 10px
.header-todo-list
  border-bottom: 0.5px solid black
.done
  text-decoration: line-through
  color: hsl(208, 100%, 86%)
</style>
