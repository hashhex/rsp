<template>
    <section class="section">
        <div class="section__main">
            <TopLine />

            <div class="container">
                <div v-html="markedData(header)" class="content__main">
                </div>
              <div class="show-case show-case--sm">
                <div class="show-case__col last ">
                  <nuxt-link to="/cases" class="show-case--arrow">
                    <span></span>
                    Все кейсы
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="container block-sm"></div>
            <div class="container hidden-sm">
                <ShowCase :color="true" />
            </div>

        </div>
    </section>
</template>

<script>
import marked from 'marked'
import TopLine from '~/components/TopLine'
import ShowCase from '~/components/showCase'

export default {
    name: 'sectionMain',
    props: {
        header: {}
    },
    components: {
        TopLine,
        ShowCase
    },
    methods: {
        markedData (data) {
            return marked(data)
        }
    }
}
</script>