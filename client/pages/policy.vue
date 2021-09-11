<template>
    <div>
        <section class="section active section-heigth--auto">
            <section v-if="POLICY"  class="section-policy">
                <TopLine />
                <div class="container">
                    <div v-html="contentMarked(POLICY.content)"></div>
                </div>
                <MetaData :meta-data="POLICY.meta_data" />
            </section>
        </section>
        <Footer :active="'active non-shadow'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'
import TopLine from '~/components/TopLine'
import Footer from '~/components/sections/footer'
import MetaData from '~/components/Meta'

export default {
    name: 'policyPage',
    async fetch () {
        await this.$store.dispatch('pages/Pages', {
            state: 'policy',
            url: 'policy-page'
        })
    },
    computed: {
        ...mapState({
            POLICY: state => state.pages.pages.policy
        })
    },
    methods: {
        contentMarked (content) {
            return marked(content)
        }
    },
    components: {
        TopLine,
        Footer,
        MetaData
    }
}
</script>