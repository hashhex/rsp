<template>
    <div>
        <section class="section active section-heigth--auto">
            <section class="section-blog">
                <TopLine />
                
                <div class="container">
                    <div class="blog-content">
                        <div class="blog-left">
                            <div v-if="BLOG_ITEM">
                                <MetaData :meta-data="BLOG_ITEM.meta_data" />
                                <h1 class="title__section">{{ BLOG_ITEM.title }}</h1>
                                <div class="date">{{ $moment(BLOG_ITEM.date).format('DD.MM.YYYY') }}</div>
                                <div v-if="BLOG_ITEM.content" v-html="contentMarked(BLOG_ITEM.content)"></div>
                            </div>
                            

                            <div class="blog-item__bottom">
                                <nuxt-link to="/blog" class="prev"><span></span>Все статьи</nuxt-link>
                                <Socials />
                            </div>

                        </div>
                        <Aside />
                    </div>
                </div>
                

            </section>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import marked from 'marked'
import TopLine from '~/components/TopLine'
import Socials from '~/components/socials'
import Aside from '~/components/aside'
import MetaData from '~/components/Meta'

export default {
    name: 'blogItemPage',
    async fetch () {
        await this.$store.dispatch('blogs/BlogItem', this.$route.params.id)
    },
    data () {
        return {
            backend: process.env.backend
        }
    },
    computed: {
        ...mapState({
            BLOG_ITEM: state => state.blogs.blogItem
        })
    },
    methods: {
        contentMarked (content) {
            let formattedText = marked(content)
            let replaceImg = (match, url, alt) => {
                let html = `
                            <div class="caption-image">
                                <img src="${this.backend + url}" alt="${alt}">
                                <span>${alt}</span>
                            </div>
                            `
                return html
            }
            return formattedText.replace(/<img src="(.*)" alt="(.*)">/g, replaceImg)
        }
    },  
    components: {
        TopLine,
        Socials,
        Aside,
        MetaData
    }
}
</script>