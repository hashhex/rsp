<template>
    <div :class="!color ? '' : cases.service.color" class="preview_case">
        <div class="transform">
            <div class="preview_case-date">{{ $moment(cases.date).format('YYYY') }}</div>
            <div class="preview_case-title">
                <div class="type">{{ cases.service.title }}</div>
                <div class="name">{{ cases.title }}</div>
            </div>
        </div>
        <div class="preview_case-content">
            <div class="description">
                {{ cases.preview_text }}
            </div>
            <nuxt-link :to="`/cases/${cases.slug}`" class="btn-read">Подробнее</nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'cardCase',
    props: {
        cases: {
            type: Object,
            required: true
        },
        color: {
            type: Boolean
        }
    },
    computed: {
        ...mapState({
            SERVICES: state => state.services
        })
    }
}
</script>