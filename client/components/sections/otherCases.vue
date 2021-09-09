<template>
    <section class="other-section active section-heigth--auto">
        <div class="container">
            <h2 class="title__section">Другие кейсы</h2>
            <div v-if="OTHERS" class="show-case">

                <template v-for="other of OTHERS">
                    <div :key="other.id" class="show-case__col">
                        <cardCase :color="true" :cases="other" />
                    </div>
                </template>

                <div class="show-case__col last">
                    <nuxt-link to="/cases" class="show-case--arrow">
                        <span></span>
                        Все кейсы
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import cardCase from '~/components/cards/case'

export default {
    nema: 'otherCases',
    async fetch () {
        await this.$store.dispatch('cases/CasesExcept', this.$route.params.id)
    },
    computed: {
        ...mapState({
            OTHERS: state => state.cases.caseExcept
        })
    },
    wathc: {
        OTHERS (newVal) {
            if (newVal) {
                this.$nextTick(() => this.previewCases())
            }
        }
    },
    methods: {
        previewCases () {
            let preview_cases = document.querySelectorAll('.preview_case')

            preview_cases.forEach(item => {
                let el_transform = item.querySelector('.transform')
                let el_content = item.querySelector('.preview_case-content')
                if (el_content) {
                    this.gsap.to(el_transform, {
                        y: el_content.getBoundingClientRect().height
                    })
                }
            })
        }
    },
    mounted () {
        this.$nextTick(() => this.previewCases())
    },
    updated() {
        this.$nextTick(() => this.previewCases())
    },
    components: {
        cardCase
    }
}
</script>