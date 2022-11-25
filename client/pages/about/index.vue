<template>
  <div>
    <section class="section active section-heigth--auto">
      <section v-if="ABOUT" class="section-about">
        <TopLine />
        <MetaData :meta-data="ABOUT.meta_data" />
        <div class="container">
          <div class="header-block">
            <h1>{{ ABOUT.title }}</h1>
            <p>{{ ABOUT.description }}</p>
          </div>
        </div>

        <Staffs />

      </section>
    </section>
    <Footer :active="'active non-shadow'" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'
import Footer from '~/components/sections/footer'
import MetaData from '~/components/Meta'
import Staffs from '~/components/staffs'

export default {
  name: 'aboutPage',
  async fetch () {
    await this.$store.dispatch('pages/Pages', {
      state: 'about',
      url: 'who-are-we-page'
    })
  },
  computed: {
    ...mapState({
      ABOUT: state => state.pages.pages.about
    })
  },
  components: {
    TopLine,
    Footer,
    MetaData,
    Staffs
  }
}
</script>