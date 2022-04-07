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
        <div class="counter-todo">{{ filteredTodos.length }}</div>
      </div>
      <div class="list">
        <ul>
          <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.isFinished" />
            <span :class="{ isFinished: todo.isFinished }">
              {{ todo.text }}
            </span>
            <button @click="removeTodo(todo)">Remove</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="buttons">
      <button @click="(showComplete = false), (showActive = false)">All</button>
      <button @click="(showComplete = true), (showActive = false)">
        Complete
      </button>
      <button @click="(showComplete = false), (showActive = true)">
        unComplete
      </button>
      <button @click="clearCompletedTodo()">Clear Completed To Do</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodos } from "@/stores/todos";

const store = useTodos();
const newTodo = ref("");
let nextId = 0;

const showComplete = ref(false);
const showActive = ref(false);

/*
function addTodo() {
  if (newTodo.value !== "") {
    store.addTodo({ id: nextId++, text: newTodo.value, isFinished: false });
  }
  newTodo.value = "";
}
function removeTodo(todo) {
  store.removeTodo(todo);
}
*/

function addTodo() {
  if (newTodo.value !== "") {
    store.todos.push({
      id: nextId++,
      text: newTodo.value,
      isFinished: false,
    });
  }
  newTodo.value = "";
}
function removeTodo(todo) {
  store.todos = store.todos.filter((t) => t !== todo);
}
function finished() {
  return store.todos.filter((todo) => todo.isFinished);
}
function unfinished() {
  return store.todos.filter((todo) => !todo.isFinished);
}
const filteredTodos = computed(() => {
  if (showComplete.value) {
    return finished();
  } else if (showActive.value) {
    return unfinished();
  }
  return store.todos;
});
function clearCompletedTodo() {
  for (let i = store.todos.length - 1; i >= 0; --i) {
    if (store.todos[i].isFinished) {
      store.todos.splice(i, 1);
    }
  }
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

  form
    height: 30px
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

  .buttons
    display: flex

    align-self: center

    button
      display: flex
      justify-content: center

    .disabled
      display: none

.header-todo-list
  border-bottom: 0.5px solid black

.isFinished
  //text-decoration: line-through
  color: hsl(208, 100%, 86%)
</style>
