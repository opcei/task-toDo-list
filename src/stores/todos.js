import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useTodos = defineStore(
  "todos",
  () => {
    const todos = ref(useLocalStorage("todos", []));

    /*
    let nextId = 0;
    const hideCompleted = ref(true);

    const addTodo = (text) => {
      this.todos.push({ id: nextId++, text, isFinished: false });
    };
    /*
    const filteredTodos = computed(() =>
      hideCompleted.value ? this.todos.filter((t) => !t.isFinished) : this.todos
    );
    const removeTodo = (value) => {
      this.todos = this.todos.filter((t) => t !== value);
    };
    const clearCompletedTodo = () => {
      for (let i = this.todos.length - 1; i >= 0; --i) {
        if (this.todos[i].isFinished) {
          this.todos.splice(i, 1);
        }
      }
    };
    */

    return {
      todos,
      //addTodo,
      //filteredTodos,
      //removeTodo,
      //clearCompletedTodo,
    };
  },
  { persist: true }
);
