<template>
    <div class="socials">
        <span>Поделиться</span>
        <ul v-if="SETTINGS && SETTINGS.soc && SETTINGS.soc.social.length">
            <li v-for="social of SETTINGS.soc.social" :key="social.id">
                <a target="_blank" :href="social.url">
                    <img :src="backend + social.icon.url" :alt="social.title">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'socials',
    data () {
        return {
            backend: process.env.backend
        }
    },
    computed: {
        ...mapState({
            SETTINGS: state => state.settings
        })
    }
}
</script>