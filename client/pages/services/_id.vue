<template>
    <div>
        <section class="section active section-heigth--auto">
            <section v-if="service" class="section-services">
                <TopLine />
                <MetaData :meta-data="service.meta_data" />
                <div class="container">
                    <div class="header-block">
                        <h1>{{ service.title }}</h1>
                        <p>{{ service.description }}</p>
                    </div>

                    <template v-if="GROUP_CASES && GROUP_CASES.length">
                        <div  class="filter-cases">
                            <div class="filter-cases--content">
                                <div  class="show-case">
                                    <div v-for="item of GROUP_CASES" :key="item.id" class="show-case__col">
                                        <cardCase :cases="item" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else-if="GROUP_CASES && !GROUP_CASES.length">
                      <p></p>
                    </template>
                    <template v-else>
                        Загрузка...
                    </template>
                </div>

            </section>
        </section>
        <OtherCases />
        <Footer :active="'active non-shadow'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'
import cardCase from '~/components/cards/case'
import OtherCases from '~/components/sections/otherCases'
import Footer from '~/components/sections/footer'
import MetaData from '~/components/Meta'

export default {
    name: 'serviceItemPage',
    async fetch () {
        [ this.service ] = this.SERVICES.filter(item => item.slug === this.$route.params.id)
        await this.$store.dispatch('cases/CasesGroup', this.$route.params.id)
    },
    data () {
        return {
            service: null
        }
    },
    computed: {
        ...mapState({
            SERVICES: state => state.services,
            GROUP_CASES: state => state.cases.casesGroup
        })
    },
    components: {
        TopLine,
        cardCase,
        Footer,
        OtherCases,
        MetaData
    }
}
</script>