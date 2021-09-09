<template>
    <section class="section active section-heigth--auto">
        <div class="section__what-doing">
            <TopLine />
            <MetaData :meta-data="SERVICES_PAGE.meta_data" />
            <div class="container">
                <h2 class="title__section title__section--gray text-center">Что мы делаем</h2>
                <div v-if="SERVICES && SERVICES.length" class="what-doing__list">
                    <div v-for="service of SERVICES" :key="service.id" class="what-doing__list-item">
                        <nuxt-link :to="`/services/${service.slug}`">{{ service.title }}</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'
import MetaData from '~/components/Meta'

export default {
    name: 'whatDoingPage',
    async fetch () {
        await this.$store.dispatch('pages/Pages', {
            state: 'services',
            url: 'services-page'
        })
        await this.$store.dispatch('cases/CasesGroup')
    },
    computed: {
        ...mapState({
            SERVICES: state => state.services,
            SERVICES_PAGE: state => state.pages.pages.services
        })
    },
    components: {
        TopLine,
        MetaData
    }
}
</script>