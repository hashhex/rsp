<template>
    <section class="section">
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
                        <a @mouseenter="enter" @mouseout="out" href="#" class="btn btn-arrow hover-js">
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
            e.currentTarget.closest('.section').classList.add('hover')
        },
        out (e) {
            e.currentTarget.closest('.section').classList.remove('hover')
        }
    },
    components: {
        TopLine
    }
}
</script>