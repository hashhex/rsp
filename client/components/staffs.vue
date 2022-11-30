<template>
  <div v-if="STAFFS" class="container">
    <div v-if="STAFFS.length" class="staffs-list">
      <div v-for="staff of STAFFS" :key="staff.id" class="staffs-list__grid">
        <nuxt-link :to="`/about/${staff.id}`" class="staffs-list__item">
          <span v-if="staff.photo" :style="`background-image: url(${backend + staff.photo.url})`" class="staff-image"></span>
          <span class="name">{{ staff.name }}</span>
          <span class="post">{{ staff.post }}</span>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'staffs',
  data () {
    return {
      backend: process.env.backend
    }
  },
  async fetch () {
    await this.$store.dispatch('Staffs')
  },
  computed: {
    ...mapState({
      STAFFS: state => state.staffs
    })
  }
}
</script>