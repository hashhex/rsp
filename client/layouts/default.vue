<template>
    <div class="site">
        <Preload v-if="!load" />
        <nuxt />
    </div>
</template>

<script>
import Preload from '~/components/preload'
export default {
  name: "default",
  data () {
    return {
      load: false
    }
  },
  components: {
    Preload
  },
  mounted () {
    setTimeout(() => {
      this.load = true
    }, 1000)
  }
}
</script>