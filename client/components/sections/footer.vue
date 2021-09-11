<template>
    <section :class="active" class="section">
        <div class="section__footer">
            <template v-if="!active">
                <TopLine />
            </template>
            <div class="container">
                <ul class="list-footer">
                    <li>{{ SETTINGS.address }}</li>
                    <li><a :href="`tel:${SETTINGS.phone}`">{{ SETTINGS.phone }}</a></li>
                    <li><a :href="`mailto:${SETTINGS.email}`">{{ SETTINGS.email }}</a></li>
                    <li><nuxt-link to="/policy">Политика конфиденциальности</nuxt-link></li>
                </ul>
            </div>
            <div class="wrap-btn">
                <div @click="btnUp" class="btn-up">
                    <span></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'

export default {
    name: 'sectionFooter',
    props: {
        active: {}
    },
    computed: {
        ...mapState({
            SETTINGS: state => state.settings
        })
    },
    methods: {
        btnUp () {
            window.scrollTo(0,0)
        }
    },
    components: {
        TopLine
    }
}
</script>