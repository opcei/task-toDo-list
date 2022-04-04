import { defineStore } from "pinia";

export const useTodos = defineStore("main", {
  state: () => ({
    todos: [],
  }),
});
