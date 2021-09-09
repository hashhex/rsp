<template>
    <section class="section">
        <div class="section__main">
            <TopLine />

            <div class="container">
                <div v-html="markedData(header)" class="content__main">
                </div>
            </div>

            <div class="container">
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