<template>
  <div>
    <section  class="section active section-heigth--auto">
      <section class="section--staff-item">
        <TopLine />
        <MetaData v-if="STAFF" :meta-data="STAFF.meta_data" />
        <div v-if="STAFF" class="container">
          <div class="staff-item--block">
            <div class="content-image">
              <span v-if="STAFF.photo" :style="`background-image: url(${backend + STAFF.photo.url})`" class="staff-image"></span>
            </div>

            <div class="content">
                <div class="name">{{ STAFF.name }}</div>
                <div class="post">{{ STAFF.post }}</div>
                <div v-if="STAFF.pdf" class="link-file">
                  <a target="_blank" :href="`${backend + STAFF.pdf.url}`">Скачать CV</a>
                </div>
                <div v-html="markedContent(STAFF.content)"  class="text"></div>
            </div>
          </div>
        </div>
        <div v-else class="container">
          Ни найдено.
        </div>
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
import marked from 'marked'

export default {
  name: 'staffItem',
  data () {
    return {
      backend: process.env.backend
    }
  },
  async fetch () {
    await this.$store.dispatch('StaffItem', this.$route.params.slug)
  },
  computed: {
    ...mapState({
      STAFFS: state => state.staffs,
      STAFF: state => state.staffItem
    })
  },
  methods: {
    markedContent (text) {
      return marked(text)
    }
  },
  components: {
    TopLine,
    Footer,
    MetaData
  }
}
</script>