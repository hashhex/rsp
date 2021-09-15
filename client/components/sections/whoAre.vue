<template>
    <section ref="section" @mouseenter="enter" class="section">
        <div class="section__who-we">
            <TopLine />
            <span class="bubble bubble-1"></span>
            <span class="bubble bubble-2"></span>
            <span class="bubble bubble-3"></span>
            <div class="container">
                <h2 class="title__section text-center">Кто мы</h2>
                <div class="description-section text-center">
                    <div v-html="markedContent"></div>
                    <div class="wrap-btn">
                        <a  @mouseleave="out" href="#" class="btn btn-arrow hover-js">
                            Наши кейсы
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TopLine from '~/components/TopLine'
import marked from 'marked'

export default {
    name: 'whoAre',
    props: {
        content: {}
    },
    computed:{
        markedContent () {
            return marked(this.content)
        }
    },
    methods: {
        enter (e) {
          console.log(e.target)
          if (e.currentTarget.classList.contains('btn-arrow')) {
            this.$refs.section.classList.add('hover')
            console.log(this.$refs.section, 'hover')
          } else {
            this.$refs.section.classList.remove('hover')
            console.log(this.$refs.section, 'unhover')
          }

        },
        out (e) {

        }
    },
    components: {
        TopLine
    }
}
</script>