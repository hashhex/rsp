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
                            <!-- <div class="header-block">
                                <h1>{{ CASE_ITEM[0].title }}</h1>
                                <p>{{ CASE_ITEM[0].preview_text }}</p>
                            </div> -->
                            <div class="header-block">
                                <div class="back-link">
                                    <nuxt-link to="/cases">Кейсы</nuxt-link>
                                </div>
                                <h1>ВПТН. <br> Корпоративный спор</h1>
                                <p>Феврель 2018 — Март 2021. Москва, Нью-Дели</p>
                                <span>Судебные споры</span>
                            </div>
                            <div class="section-cases__article">
                                <div>
                                    <article>
                                        <h2>Процесс</h2>
                                        <p>Наш Клиент крупная компания в области нефтегазового строительства выступал в качестве генерального подрядчика по строительству нефтегазовых скважин на одном из нефтяных месторождений Сибири. Одним субподрядчиков нашего Клиента была американская буровая компания, которая выполняла работы по бурению ряда скважин. Между нашим Клиентом и американской компанией было заключено два договора, каждый на бурение шести скважин. Стоимость работ по каждому договору 500 000 рублей.</p> 
                                        <p>В процессе производства работ на объекте произошла авария, нефтегазоводопроявление (ГНВП), которая повлекла за собой необходимость в проведении большого количества дополнительных работ как со стороны американской компании, так и со стороны нашего Клиента. Вина за аварию лежала на американской компании, поскольку именно она выполняла работы по бурение скважины, где произошла авария, однако эта компания отказывалась компенсировать убытки нашего Клиента. В результате у нашего Клиента возник затяжной конфликт с американским подрядчиком, который перерос в два судебных спора. Один спор касался эпизода, связанного с ГНВП и Невозникших, в связи с этим убытков, а второй спор был связан с тем, что американский подрядчик попытался взыскать с нашего Клиента плату за простой, который якобы возник по вине нашего Клиента.</p>
                                        <p>Клиент обратился к юристам RSP Partners уже, когда оба иска рассматривались в суде первой инстанции. Правовая позиция американского подрядчика была значительно сильнее позиции нашего Клиента. В связи с этим американскому подрядчику удалось выиграть в обоих спорах в споре, связанном с простоем. Суд пришел к выводу, о том, что простой возник по вине нашего Клиента без проведения строительной экспертизы. А в споре, связанном с ГНВП, была проведена экспертиза, заключение которой полностью совпадало с позицией оппонента.</p>
                                        <p>Несмотря на то, что суды первой и второй инстанции встали на позицию американского подрядчика, в суде кассационной инстанции юристам RSP Partners удалось доказать, что дело в обоих случаях, должно быть отправлено на повторное рассмотрение. В одном случае, потому что Суд не провел строительно-техническую экспертизу для установления реальных причин простоя, а в другом случае, потому что заключение эксперта, касающееся причин ГНВП, было выполнено некачественно. </p>
                                    </article>
                                </div>
                                <div>
                                    <h2>Цифры и факты</h2>
                                    <div class="section-cases__list">
                                        <div class="section-cases__list-item">
                                            <h4>2</h4>
                                            <p>Судебных дела</p>
                                        </div>
                                        <div class="section-cases__list-item">
                                            <h4>2</h4>
                                            <p>Строительно–технические эеспертизы</p>
                                        </div>
                                        <div class="section-cases__list-item">
                                            <h4>25</h4>
                                            <p>судебных заседаний в суде первой инстанции на первом </p>
                                        </div>
                                        <div class="section-cases__list-item">
                                            <h4>1 000 000 000 ₽</h4>
                                            <p>Общая стоимость двух споров</p>
                                        </div>
                                    </div>
                                    <h2>Затронутые сферы права</h2>
                                    <ul>
                                        <li>Гражданское право </li>
                                        <li>Уголовное право</li>
                                        <li>Арбитражный процесс</li>
                                    </ul>
                                </div>
                                <div>
                                    <article>
                                        <h2>Основные правовые вопросы</h2>
                                        <ul>
                                            <li>Квалификация договора на бурение скважины с условием посуточной оплаты в качестве договора подряда.</li>
                                            <li>Квалификация платы за простой в качестве ответственности и возможность применения к ней правила о снижении при наличии вины кредитора.</li>
                                            <li>Возможность взыскания расходов на дизельное топливо как в качестве неосновательного обогащения подрядчика.</li>
                                        </ul>
                                        <h2>Основные проблемы в рамках проекта</h2>
                                        <ul>
                                            <li>Очень сильные оппоненты, готовые бороться с использование самых грязных методов защиты.</li>
                                            <li>Очень сильные оппоненты, готовые бороться с использование самых грязных методов защиты.</li>
                                        </ul>
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