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
                    <nav  class="nav-top">
                        <Menu />
                    </nav>
                    <div @click="Burger" class="burger">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '~/components/TopLine/nav'

export default {
    name: 'topLine',
    components: {
        Menu
    },
    methods: {
        Burger () {
            const ControlNav = {
                burgers: document.querySelectorAll('.burger'),
                nav_tops: document.querySelectorAll('.nav-top'),

                toggle: function () {
                    this.burgers.forEach((burger, i) => {
                        if (!burger.classList.contains('active')) {
                            burger.classList.add('active')
                            this.nav_tops[i].classList.add('active')
                        } else {
                            burger.classList.remove('active')
                            this.nav_tops[i].classList.remove('active')
                        }
                    })
                },
                handler: function () {
                    /*
                    * Burger & NavTop их много так что все через querySelectorAll
                    */ 
                    let burgers = this.burgers
                    let nav_tops = this.nav_tops
                
                    if (!burgers || !nav_tops) {
                        return false
                    }
                
                    burgers.forEach((burger, i) => {
                        burger.addEventListener('click', () => {
                            this.toggle()
                        })
                    })
                },
                close: function () {
                    this.burgers.forEach((burger, i) => {
                        burger.classList.remove('active')
                        this.nav_tops[i].classList.remove('active')
                    })
                }

            }
            ControlNav.handler()
        }
    },
}
</script>