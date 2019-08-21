<template>
  <div class="home">
    <hero></hero>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/sections/Hero'

export default {
  name: 'home',
  components: {
    Hero
  }
}
</script>
