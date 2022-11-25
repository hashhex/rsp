<template>
    <div>
        <section class="section active section-heigth--auto">
            <section v-if="CASES" class="section-cases">
                <TopLine />
                <MetaData :meta-data="CASES.meta_data" />
                <div class="container">
                    <h1 class="title__section title__section--gray">{{ CASES.meta_data.title }}</h1>

                    <div class="filter-cases">
                        <div v-if="SERVICES" class="filter-cases--control">
                            <ul>
                                <li v-for="service of SERVICES" :key="service.id">
                                    <a @click.prevent="filterHandler(service.slug)" :class="activeFilter.includes(service.slug) ? `active ${service.color}` : service.color"  >{{ service.title }}<span @click.stop="deletFilter(service.slug)"></span></a>
                                </li>
                            </ul>
                        </div>
                        <div class="filter-cases--content">
                            <div class="show-case">
                                <template v-for="cases of CASES_ELEMENTS">
                                        <template v-if="activeFilter.includes(cases.service.slug)">
                                            <div  :key="cases.id" class="show-case__col">
                                                <CardCase :cases="cases" />
                                            </div>
                                        </template>
                                        <template v-if="!activeFilter.length">
                                            <div  :key="cases.id" class="show-case__col">
                                                <CardCase :cases="cases" />
                                            </div>
                                        </template>
                                </template>
                                    
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </section>
        <Footer :active="'active non-shadow'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'
import MetaData from '~/components/Meta'
import Footer from '~/components/sections/footer'
import CardCase from '~/components/cards/case'

export default {
    name: 'casesPage',
    async fetch () {
        await this.$store.dispatch('pages/Pages', {
            state: 'cases',
            url: 'cases-page'
        })
        await this.$store.dispatch('cases/Cases')
    },
    data () {
        return {
            activeFilter: []
        }
    },
    computed: {
        ...mapState({
            CASES: state => state.pages.pages.cases,
            SERVICES: state => state.services,
            CASES_ELEMENTS: state => state.cases.cases
        })
    },
    watch: {
        // '$route.query' (newVal) {
        //     if (newVal) {
        //         this.filterHandler()
        //     }
        // }
    },
    methods: {
        filterHandler (filter) {
            this.activeFilter.push(filter)
        },
        deletFilter (filter) {
            this.activeFilter = this.activeFilter.filter(item => item !== filter)
        }
    },
    mounted () {
      if (this.SERVICES) {
        this.SERVICES.forEach(item => {
          this.activeFilter.push(item.slug)
        })
      }
    },
    components: {
        TopLine,
        MetaData,
        Footer,
        CardCase
    }
}
</script>