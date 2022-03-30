<template>
  <div>
    <ul>
      <li>
        <router-link to="/task3">Task 3</router-link>
      </li>
      <li>
        <router-link to="/task4">Task 4</router-link>
      </li>
      <li>
        <router-link to="/task5">Task 5</router-link>
      </li>
      <li>
        <router-link to="/task6">Task 6</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return {

        }
    },
    
};
</script>

<style>
ul>li {
  list-style: none;
}
</style>