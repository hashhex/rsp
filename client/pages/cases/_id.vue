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
                                <div class="back-link">
                                    <nuxt-link to="/cases">Кейсы</nuxt-link>
                                </div>
                                <h1 v-if="CASE_ITEM[0].title">{{  CASE_ITEM[0].title }}</h1>
                                <template v-if="CASE_ITEM[0].date && CASE_ITEM[0].before">
                                    <p>{{ $moment(CASE_ITEM[0].date).format('MMMM YYYY') }} — {{ $moment(CASE_ITEM[0].before).format('MMMM YYYY') }}.</p>
                                </template>
                                <template v-else>
                                    <p>{{ $moment(CASE_ITEM[0].date).format('MMMM YYYY') }}.</p>
                                </template>
                                
                                <span v-if="CASE_ITEM[0].service">{{ CASE_ITEM[0].service.title }}</span>
                            </div>
                            <div class="section-cases__article">
                                <div>
                                    <article v-if="CASE_ITEM[0].content" v-html="contentMarked(CASE_ITEM[0].content)"></article>
                                </div>
                                
                                <div>
                                    <template v-if="CASE_ITEM[0].facts_figures && CASE_ITEM[0].facts_figures.length">
                                        <h2>Цифры и факты</h2>
                                        <div class="section-cases__list">
                                            <div v-for="item of CASE_ITEM[0].facts_figures" :key="item.id" class="section-cases__list-item">
                                                <h4>{{ item.value }}</h4>
                                                <p>{{ item.name }}</p>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-if="CASE_ITEM[0].areas_law">
                                        <h2 v-if="CASE_ITEM[0].areas_law.title">{{ CASE_ITEM[0].areas_law.title }}</h2>
                                        <ul v-if="CASE_ITEM[0].areas_law.item && CASE_ITEM[0].areas_law.item.length">
                                            <li
                                                v-for="item of CASE_ITEM[0].areas_law.item"
                                                :key="item.id"
                                            >{{ item.name }}</li>
                                        </ul>
                                    </template>
                                    
                                </div>
                                <div>
                                    <article>
                                        <template v-if="CASE_ITEM[0].types">
                                            <h2 v-if="CASE_ITEM[0].types.title">{{ CASE_ITEM[0].types.title }}</h2>
                                            <ul v-if="CASE_ITEM[0].types.item && CASE_ITEM[0].types.item.length">
                                                <li
                                                    v-for="item of CASE_ITEM[0].types.item"
                                                    :key="item.id"
                                                >{{ item.name }}</li>
                                            </ul>
                                        </template>

                                        <template v-if="CASE_ITEM[0].legal_issues">
                                            <h2 v-if="CASE_ITEM[0].legal_issues.title">{{ CASE_ITEM[0].legal_issues.title }}</h2>
                                            <ul v-if="CASE_ITEM[0].legal_issues.item && CASE_ITEM[0].legal_issues.item.length">
                                                <li
                                                    v-for="item of CASE_ITEM[0].legal_issues.item"
                                                    :key="item.id"
                                                >{{ item.name }}</li>
                                            </ul>
                                        </template>
                                    </article>
                                </div>
                            </div>


                            <!-- TODO: предыдущая разметка  -->
                            <!-- <div v-if="CASE_ITEM[0].case_elements && CASE_ITEM[0].case_elements.length" class="case-carousel--wrapper">
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
                            </div> -->
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
            return content ? marked(content) : false
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