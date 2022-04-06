import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useTodos = defineStore(
  "todos",
  () => {
    const todos = ref(useLocalStorage("todos", []));
    /*state: () => ({
      todos: ref(useLocalStorage("todos", ["123"])),
    }),

    if (localStorage.getItem("todosState")) {
      pinia.state.value.todos = JSON.parse(localStorage.getItem("todosState"))
    }

  watch(
    () => pinia.state.value.todos
    (state) => {
      localStorage.setItem("todosState", JSON.stringify(state))
    },
    { deep: true }
  );*/
    return {
      todos,
    };
  },
  {
    persist: true,
  }
);
