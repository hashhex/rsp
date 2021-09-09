export const state = () => ({
    cases: null,
    casesPrivew: null,
    caseItem: null,
    caseExcept: null,
    casesGroup: null
})

export const mutations = {
    CASES (state, payload) {
        state.cases = payload
    },
    CASES_PREVIEW (state, payload) {
        state.casesPrivew = payload
    },
    CASE_ITEM (state, payload) {
        state.caseItem = payload
    },
    CASE_EXCEPRT (state, payload) {
        state.caseExcept = payload
    },
    CASE_GROUP (state, payload) {
        state.casesGroup = payload
    },
}

export const actions = {
    async Cases ({ commit }) {
        try {
            const { status, data } = await this.$axios.get('/cases')

            if (status === 200) {
                commit('CASES', data)
            } else {
                commit('CASES', [])
                console.error('cases-error: ', status);
            }

        } catch (error) {
            commit('CASES', [])
            console.error('cases-error: ', error);
        }
    },
    async CasesPreview ({ commit }) {
        try {
            const { status, data } = await this.$axios.get('/cases?_limit=3')

            if (status === 200) {
                commit('CASES_PREVIEW', data)
            } else {
                commit('CASES_PREVIEW', [])
                console.error('cases-preview-error: ', status);
            }

        } catch (error) {
            commit('CASES_PREVIEW', [])
            console.error('cases-preview-error: ', error);
        }
    },
    async CasesExcept ({ commit }, slug) {
        try {
            const { status, data } = await this.$axios.get(`/cases?_where[slug_ne]=${slug}&_limit=3`)

            if (status === 200) {
                commit('CASE_EXCEPRT', data)
            } else {
                commit('CASE_EXCEPRT', [])
                console.error('CASE_EXCEPRT-error: ', status);
            }

        } catch (error) {
            commit('CASE_EXCEPRT', [])
            console.error('CASE_EXCEPRT-error: ', error);
        }
    },
    async CasesGroup ({ commit }, slug) {
        try {
            const { status, data } = await this.$axios.get(`/cases?_where[service.slug]=${slug}`)

            if (status === 200) {
                commit('CASE_GROUP', data)
            } else {
                commit('CASE_GROUP', [])
                console.error('cases-group-error: ', status);
            }

        } catch (error) {
            commit('CASE_GROUP', [])
            console.error('cases-group-error: ', error);
        }
    },
    async CaseItem ({ commit }, slug) {
        try {
            const { status, data } = await this.$axios.get('/cases?_where[slug]='+slug)

            if (status === 200) {
                commit('CASE_ITEM', data)
            } else {
                commit('CASE_ITEM', [])
                console.error('case-item ', status);
            }
        } catch (error) {
            commit('CASE_ITEM', [])
            console.error('case-item ', error);
        }
    }
}