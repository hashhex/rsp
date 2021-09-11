export const state = () => ({
    blogs: null,
    blogsCount: null,
    blogItem: null,
    blogOther: null
})

export const mutations = {
    BLOGS (state, payload) {
        state.blogs = payload
    },
    BLOGS_COUNT (state, payload) {
        state.blogsCount = payload
    },
    BLOGS_ITEM (state, payload) {
        state.blogItem = payload
    },
    BLOGS_OTHER (state, payload) {
        state.blogOther = payload
    },
}

export const actions = {
    async Blogs ({ commit }, start) {
        try {
            const { status, data } = await this.$axios.get(`/blogs?_start=${start}&_limit=6&_sort=date:DESC`)

            if (status === 200) {
                commit('BLOGS', data)
            } else {
                commit('BLOGS', [])
                console.error('blogs-error: ', status);
            }

        } catch (error) {
            commit('BLOGS', [])
            console.error('blogs-error: ', error);
        }
    },
    async BlogsCount ({ commit }) {
        try {
            const { status, data } = await this.$axios.get(`/blogs/count`)

            if (status === 200) {
                commit('BLOGS_COUNT', data)
            } else {
                commit('BLOGS_COUNT', 0)
                console.error('blogs-count-error: ', status);
            }

        } catch (error) {
            commit('BLOGS', 0)
            console.error('blogs-count-error: ', error);
        }
    },
    async BlogItem ({ commit }, slug) {
        try {
            const { status, data } = await this.$axios.get(`/blogs?_where[slug]=${slug}`)

            if (status === 200) {
                let [ item ] = data
                commit('BLOGS_ITEM', item)
            } else {
                commit('BLOGS_ITEM', false)
                console.error('blogs-item-error: ', status);
            }

        } catch (error) {
            commit('BLOGS_ITEM', false)
            console.error('blogs-item-error: ', error);
        }
    },
    async BlogOther ({ commit }, slug) {
        try {
            const { status, data } = await this.$axios.get(`/blogs?_where[slug_ne]=${slug}&_limit=3`)
            
            if (status === 200) {
                commit('BLOGS_OTHER', data)
            } else {
                commit('BLOGS_OTHER', [])
                console.error('blogs-other-error: ', status);
            }

        } catch (error) {
            commit('BLOGS_OTHER', [])
            console.error('blogs-other-error: ', error);
        }
    },
}