<template>
    <ul>
        <li>
            <nuxt-link to="/services">Что мы делаем</nuxt-link>
            <ul v-if="SERVICES" class="sub-menu">
                <li>
                    <nuxt-link v-for="service of SERVICES" :key="service.id" :to="`/services/${service.slug}`"><span>{{ service.title }}</span></nuxt-link>
                </li>
            </ul>
        </li>
        <li>
          <nuxt-link to="/blog">Блог</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/cases">Кейсы</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">Кто мы?</nuxt-link>
        </li>
        <li>
            <nuxt-link to="/contacts">Контакты</nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'navigate',
    computed: {
        ...mapState({
            SERVICES: state => state.services
        })
    }
}
</script>