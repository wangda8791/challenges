<template>
  <div id="app">
    <transition 
      name="fade" 
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
    name: 'App',
    components: {
    }
}

</script>

<style lang="scss">
#app {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  max-width: 640px;
  min-width: 320px;
  margin: auto;
  padding-bottom: 40px;
  font-size: 0.7em;
  color: $text-color;
  text-align: center;
}
</style>
