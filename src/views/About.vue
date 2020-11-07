<template>
  <div class="about">
    <h1>{{ a }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 21
    }
  },
  async mounted() {
    var fet = await fetch('http://localhost:3000/route/index/2')
    await console.log(fet)
  }
}
</script>