<template>
    <section class="section">
        <div class="section__what-doing">
            <TopLine />

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

export default {
    name: 'sectionWhatDoing',
    computed: {
        ...mapState({
            SERVICES: state => state.services
        })
    },
    components: {
        TopLine
    }
}
</script>