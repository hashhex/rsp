export const state = () => ({
    cases: null,
    casesPrivew: null,
    caseItem: null
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
    }
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