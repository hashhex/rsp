export const state = () => ({
    services: null,
    settings: null,
    burger: false,
    staffs: null,
    staffItem: null
})

export const mutations = {
    SERVICES (state, payload) {
        state.services = payload
    },
    SETTINGS (state, payload) {
        state.settings = payload
    },
    BURGER (state, payload) {
        state.burger = payload
    },
    STAFFS (state, payload) {
        state.staffs = payload
    },
    STAFF_ITEM (state, payload) {
        if (Array.isArray(payload)) {
            let [ item ] = payload
            state.staffItem = item
        } else {
            state.staffItem = payload
        }

    }
}

export const actions = {
    async nuxtServerInit ({ dispatch }) {
        await dispatch('Services')
        await dispatch('Settings')
    },
    async Services ({ commit }) {
        try {
            const { status , data } = await this.$axios.get('/services')

            if (status === 200) {
                commit('SERVICES', data)
            } else {
                commit('SERVICES', [])
                console.error('service: ', status);
            }
        } catch (error) {
            commit('SERVICES', [])
            console.error('service: ', error);
        }
    },
    async Settings ({ commit }) {
        try {
            const { status , data } = await this.$axios.get('/settings')

            if (status === 200) {
                commit('SETTINGS', data)
            } else {
                commit('SETTINGS', [])
                console.error('settings: ', status);
            }
        } catch (error) {
            commit('SETTINGS', [])
            console.error('settings: ', error);
        }
    },
    async Subscribe (_,payload) {
        try {
            const { status, data } = await this.$axios.post('/subscribes', payload)

            if (status === 200) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error('subscribe-error ', error);
            return false
        }
    },
    async Staffs ({ commit }) {
        try {
            const { status, data } = await this.$axios.get('/employees')

            if (status === 200) {
                commit('STAFFS', data)
            } else {
                console.error('staffs-error ', status);
                return false
            }
        } catch (error) {
            console.error('staffs-error ', error);
            return false
        }
    },
    async StaffItem ({ commit } ,slug) {
        try {
            const { status, data } = await this.$axios.get(`/employees?_where[slug]=${slug}`)

            if (status === 200) {
                commit('STAFF_ITEM', data)
            } else {
                console.error('staff-item-error ', status);
                return false
            }
        } catch (error) {
            console.error('staff-item-error ', error);
            return false
        }
    },
    async Consultation (_ , payload) {
        try {
            const { status, data } = await this.$axios.post('/consultations', payload)

            if (status === 200) {
                return true
            } else {
                console.error('consultation-error ', status);
                return false
            }
        } catch (error) {
            console.error('consultation-error ', error);
            return false
        }
    }
}