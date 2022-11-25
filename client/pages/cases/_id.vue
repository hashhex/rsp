<template>
    <div>
        <section class="section active section-heigth--auto">
                <section class="section-cases section-cases__item">
                    <TopLine />
                    <template v-if="!CASE_ITEM">
                        Загрузка...
                    </template>
                    <template v-if="CASE_ITEM && !CASE_ITEM.length">
                      <p></p>
                    </template>
                    <template v-if="CASE_ITEM && CASE_ITEM.length">
                        <MetaData :meta-data="CASE_ITEM[0].meta_data" />
                        <div class="container">
                            <div class="header-block">
                                <h1>{{ CASE_ITEM[0].title }}</h1>
                                <p>{{ CASE_ITEM[0].preview_text }}</p>
                            </div>

                            <div v-if="CASE_ITEM[0].case_elements && CASE_ITEM[0].case_elements.length" class="case-carousel--wrapper">
                                <div :mySwiper="swiperOption" class="swiper-container case-carousel">
                                    <div class="swiper-wrapper">
                                        <div v-for="slide of CASE_ITEM[0].case_elements" :key="slide.id" class="swiper-slide">
                                            <div class="case-slide">
                                                <img :src="backend + slide.carousel.url" :alt="slide.name">
                                                <div v-html="contentMarked(slide.content)"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                    
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>



                        </div>
                    </template>
                    

                    

                </section>
        </section>
        <OtherCases />
        <Footer :active="'active non-shadow'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'
import TopLine from '~/components/TopLine'
import MetaData from '~/components/Meta'
import OtherCases from '~/components/sections/otherCases'
import Footer from '~/components/sections/footer'

export default {
    name: 'casesItem',
    async fetch () {
        await this.$store.dispatch('cases/CaseItem', this.$route.params.id)
    },
    data () {
        return {
            backend: process.env.backend,
            swiperOption: {
                spaceBetween: 50,
                pagination: {
                    el: ".case-carousel--wrapper .swiper-pagination",
                    type: "fraction",
                },
            
                // Navigation arrows
                navigation: {
                nextEl: '.case-carousel--wrapper .swiper-button-next',
                prevEl: '.case-carousel--wrapper .swiper-button-prev',
                },
            }
        }
    },
    computed: {
        ...mapState({
            CASE_ITEM: state => state.cases.caseItem
        }),

    },
    watch: {
        CASE_ITEM (newVal) {
            if (newVal) {
                this.$nextTick(() => this.carousel())
            }
        }
    },
    methods: {
        contentMarked (content) {
            return marked(content)
        },
        carousel () {
            const swiper = new Swiper('.case-carousel', {
                spaceBetween: 50,
                pagination: {
                    el: ".case-carousel--wrapper .swiper-pagination",
                    type: "fraction",
                },
            
                // Navigation arrows
                navigation: {
                nextEl: '.case-carousel--wrapper .swiper-button-next',
                prevEl: '.case-carousel--wrapper .swiper-button-prev',
                },
            });
        }
    },
    components: {
        TopLine,
        MetaData,
        OtherCases,
        Footer
    }
}
</script>