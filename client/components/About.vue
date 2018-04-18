<template>
  <div>
    <transition name="fade">
      <h1>About</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import { userService } from '../user.service';
import { Model } from '../model';

@Component({
  components: {  }
})
export default class About extends Vue {
  constructor() {
    super();
  }
}
</script>

<style lang="scss" scoped>
    div {
      p {

      }
    }

</style>
