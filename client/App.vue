<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';

const PageNotFound = { template: '<div>404</div>' };
const viewNames = ['completed', 'active', '*'];
const routes: RouteConfig[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '**', component: PageNotFound }
];

const router = new VueRouter({ routes });
Vue.use(VueRouter);

@Component({ router: router })
export default class App extends Vue {
  mixins = [VueRouter];
  title: string;

  constructor() {
    super(router);
    this.title = 'Vue TypeScript Full Stack Starter Pack';
  }
}
</script>

<style lang="scss">
  div{
    p {

    }
  }
</style>
