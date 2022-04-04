<template>
  <div id="nav">
    <router-link to="/toDoList">ToDo List</router-link>
    <router-link to="/empty">Empty</router-link>
  </div>
  <router-view />
</template>

<style scoped lang="sass">
div
  width: 300px
  margin: 3em auto
  font-size: 20pt

  display: flex
  flex-direction: row
  justify-content: space-between
</style>
