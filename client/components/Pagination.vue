<template>
    <div class="pagination">
        <BPagination 
            v-model="currentPage"
            :total-rows="total"
            :per-page="perPage"
            @change="pageHandler"
        />
    </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue'

export default {
    name: 'pagination',
    props: {
        total: {}
    },
    data () {
        return {
            perPage: 6,
            currentPage: 1
        }
    },
    computed: {
        PAGE_COUNT () {
            return this.$route.query.page
        }
    },
    watch: {
        PAGE_COUNT (number) {
            let start = (number - 1) * this.perPage
            this.$store.dispatch('blogs/Blogs', start)
        }
    },
    mounted () {
        if (this.$route.query.page) {
            this.currentPage = this.$route.query.page
        }
    },
    methods: {
        pageHandler(numberPage) {
            this.$router.push({ query: Object.assign({}, this.$route.query, { page: numberPage }) })
        }
    },
    components: {
        BPagination
    }
}
</script>