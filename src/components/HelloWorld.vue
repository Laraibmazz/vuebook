<template>
  <div class="hello">
    <div v-for="a in a" :key="a.id">
      <a href=""> {{ a.id }}: {{ a.title }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      a: 1,
    };
  },
  async mounted() {
    var get = await fetch("http://localhost:3000/posts");
    var full = await get.json();
    await console.log(full);
    this.$data.a = full;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
