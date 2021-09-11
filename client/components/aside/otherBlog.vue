<template>
    <div>
        <template v-if="!OTHERS">
            Загрузка...
        </template>
        <template v-if="OTHERS && !OTHERS.length">
            Ни найдено
        </template>
        <template v-else>
            <template v-for="blog of OTHERS">
                <cardBlog :key="blog.id" :item="blog" />
            </template>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import cardBlog from '~/components/cards/blog'

export default {
    name: 'otherBlog',
    async fetch () {
        await this.$store.dispatch('blogs/BlogOther', this.$route.params.id)
    },
    computed: {
        ...mapState({
            OTHERS: state => state.blogs.blogOther
        })
    },
    components: {
        cardBlog
    }
}
</script>