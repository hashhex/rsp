<template>
  <div v-if="STAFFS" class="container">
    <div v-if="STAFFS.length" class="staffs-list">
      <div v-for="staff of STAFFS" :key="staff.id" class="staffs-list__grid">
        <nuxt-link :to="`/about/${staff.slug}`" class="staffs-list__item">
          <span :style="`background-image: url(/api/${staff.photo.url})`" class="staff-image"></span>
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