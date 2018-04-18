<template>
  <div>
    <div>
      <h1>{{title}}</h1>
      <button type="button" name="button" v-on:click="getUsers()">Get Users</button>
      <ul>
        <li v-for="user in users">
          {{user.username}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { userService } from '../user.service.ts';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {  }
})
export default class Home extends Vue {
  title: string;
  users:any = [];

  constructor() {
    super();
    this.title = "Home";
  }

  getUsers() {
    console.log(`[Home] getUsers()`);
    userService
      .getAllUsers()
      .then(value => {
        console.log(`[Home] getAllUsers .then() ${value.data.data}`);

        this.users = value.data.data;
      })
      .catch();
  }
}
</script>

<style lang="scss" scoped>
    div {
      p {

      }
    }

</style>
