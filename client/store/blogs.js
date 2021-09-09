export const state = () => ({
    blogs: null
})

export const mutations = {
    BLOGS (state, payload) {
        state.blogs = payload
    },
}

export const actions = {
    async Blogs ({ commit }, start) {
        try {
            const { status, data } = await this.$axios.get(`/blogs?_start${start}&_limit=6&_sort=date:ASC`)

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
    }
}