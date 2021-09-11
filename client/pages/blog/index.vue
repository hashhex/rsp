<template>
    <div>
        <section v-if="BLOG_PAGE" class="section active section-heigth--auto">
            <section class="section-blog">
                <TopLine />

                <MetaData :meta-data="BLOG_PAGE.meta_data" />
                
                <div class="container">
                    <h1 class="title__section">Блог</h1>

                    <div v-if="BLOGS && BLOGS.length" class="blog">
                        <div class="blog-grid">
                            <div v-for="blog of BLOGS" :key="blog.id" class="blog-col">
                                <cardBlog :item="blog" />
                            </div>
                        </div>

                        <Pagination v-if="BLOGS_TOTAL && BLOGS_TOTAL > 6"  :total="BLOGS_TOTAL" />

                    </div>

                </div>
                

            </section>
        </section>
        <Footer :active="'active non-shadow'" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TopLine from '~/components/TopLine'
import cardBlog from '~/components/cards/blog'
import Pagination from '~/components/Pagination'
import MetaData from '~/components/Meta'
import Footer from '~/components/sections/footer'

export default {
    name: 'blogsPage',
    async fetch () {
        await this.$store.dispatch('pages/Pages', {
            state: 'blogs',
            url: 'blogs-page'
        })
        await this.$store.dispatch('blogs/BlogsCount')
        await this.$store.dispatch('blogs/Blogs', 0)
    },
    computed: {
        ...mapState({
            BLOGS_TOTAL: state => state.blogs.blogsCount,
            BLOG_PAGE: state => state.pages.pages.blogs,
            BLOGS: state => state.blogs.blogs
        })
    },
    components: {
        cardBlog,
        Pagination,
        TopLine,
        MetaData,
        Footer
    }
}
</script>