export const state = () => ({
    pages: {
        index: null,
        cases: null,
        services: null,
        blogs: null,
        contacts: null,
        policy: null
    }
})

export const mutations = {
    PAGES (state, payload) {
        state.pages[payload.state] = payload.data
    }
}

export const actions = {
    async Pages ({ commit }, payload) {
        /*
        * payload = {
        *   state: 'strore state',
        *   url: 'url адрес'
        * }
        */
        try {
            const { status, data } = await this.$axios.get(`/${payload.url}`)

            if (status === 200) {
                commit('PAGES', {
                    state: payload.state,
                    data
                })
            } else {
                console.error(`pages-${payload.state}: ${status}`);
            }
        } catch (error) {
            console.error(`pages-${payload.state}: ${error}`);
        }
    }
}