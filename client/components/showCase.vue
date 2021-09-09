<template>
    <div class="show-case">
        <template v-if="!CASES_PREVIEW">
            <div class="show-case__col">
                Загрузка...
            </div>
        </template>
        <template v-if="CASES_PREVIEW && CASES_PREVIEW.length">
            <div v-for="cases of CASES_PREVIEW" :key="cases.id" class="show-case__col">
                <cardCase :color="color" :cases="cases" />
            </div>
        </template>
        <template v-else>
            <div class="show-case__col"></div>
        </template>
        <div class="show-case__col last">
            <nuxt-link to="/cases" class="show-case--arrow">
                <span></span>
                Все кейсы
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import cardCase from '~/components/cards/case'

export default {
    name: 'showCase',
    props: {
        color: {
            type: Boolean
        }
    },
    async fetch () {
        await this.$store.dispatch('cases/CasesPreview')
    },
    computed: {
        ...mapState({
            CASES_PREVIEW: state => state.cases.casesPrivew
        })
    },
    components: {
        cardCase
    },
    wathc: {
        CASES_PREVIEW (newVal) {
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
    }
}
</script>