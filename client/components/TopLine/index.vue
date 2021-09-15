<template>
    <div class="top-line">
        <div class="container">
            <div class="top-line__content">
                <div class="logo">
                    <nuxt-link to="/">
                        <img src="~assets/img/logo.svg" width="161" alt="rsp">
                    </nuxt-link>
                </div>

                <div class="top-line__right">
                    <nav ref="nav" :class="IS_BURGER ? 'active' : ''" class="nav-top">
                        <Menu />
                    </nav>
                    <div @click="Burger" ref="burger" :class="IS_BURGER ? 'active' : ''" class="burger">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Menu from '~/components/TopLine/nav'

export default {
    name: 'topLine',
    computed: {
        ...mapState({
          IS_BURGER: state => state.burger
        })

    },
    components: {
        Menu
    },
    methods: {
        Burger () {
            if (!this.IS_BURGER) {
              this.$store.commit('BURGER', true)
            } else {
              this.$store.commit('BURGER', false)
            }
        }
    },
}
</script>