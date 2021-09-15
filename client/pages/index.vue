<template>
  <div>
    <div v-if="INDEX_PAGE" class="ds-parent">
      <MetaData 
        :meta-data="INDEX_PAGE.meta_data"
      />
      <div class="ds-container">
        <Main :header="INDEX_PAGE.header" />
        <whatDoing />
        <whoAre :content="INDEX_PAGE.who_are" />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Main from '~/components/sections/main'
import whatDoing from '~/components/sections/whatDoing'
import whoAre from '~/components/sections/whoAre'
import Footer from '~/components/sections/footer'
import MetaData from '~/components/Meta'


export default {
  name: 'indexPage',
  async fetch () {
    await this.$store.dispatch('pages/Pages', {
      state: 'index',
      url: 'index-page'
    })
  },
  computed: {
    ...mapState({
      INDEX_PAGE: state => state.pages.pages.index
    }),
    INDEX () {
      return this.INDEX_PAGE
    }
  },
  components: {
    Main,
    whatDoing,
    whoAre,
    Footer,
    MetaData
  },
  watch: {
    INDEX (newVal) {
      if (newVal) {
        this.$nextTick(() => this.scrollPage());
      }
    }
  },
  methods: {
    scrollPage () {
      const scrollingSections = () => {
          let sections = document.querySelectorAll('.section')
          if (!sections) {
              return false
          }
              if (!document.querySelector('.ds-container')) {
                  return false
              }
              
              var slide = new DoSlide('.ds-container', {/* configurations */})
              btnUpPage(slide)

              slide.onBeforeChange((curIndex, lastIndex, cur, last) => {
                this.$store.commit('BURGER', false)
              })
      }
      function btnUpPage (slide) {
          let button = document.querySelector('.btn-up')

          if (!button) {
              return false
          }

          button.addEventListener('click', () => {
              if (document.querySelector('.ds-parent')) {
                  slide.go(0)
              } else {
                  window.scrollTo(0,0)
              }
          })
      }
      scrollingSections()
    }
  },
  mounted () {
    if (this.INDEX_PAGE) {
      this.$nextTick(() => this.scrollPage());
    }
  }
}
</script>
