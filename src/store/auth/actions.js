const api = require('@/api/api').default;

export default {
    async register({ commit }, credentials) {
        try {
            // Make request and parse results
            let response = await api.auth.register(credentials)
            response = response.data

            console.log(response)

            if (response.success !== true) {
                throw response.error
            }

            commit('setToken', response.token)
            commit('setUser', response.user)

            // Return success
            return { success: true, message: 'Authentification réussie.' }
        } catch (e) {
            // Return error
            return { success: false, message: e }
        }
    },
    async login({ commit }, credentials) {
        try {
            // Make request and parse results
            let response = await api.auth.login(credentials)
            response = response.data

            if (response.success !== true) {
                throw response.error
            }

            commit('setToken', response.token)
            commit('setUser', response.user)

            // Return success
            return { success: true, message: 'Authentification réussie.' }
        } catch (e) {
            // Return error
            return { success: false, message: e }
        }
    },
    async fetch({ commit }) {
        try {
            let response = await api.auth.fetch()
            response = response.data

            if (!response.success) {
                throw 0
            }

            if (response.user.verified === false) {
                throw 1
            }

            commit('setToken', response.token)
            commit('setUser', response.user)

            // Return success
            return { success: true, message: 'Connexion validée.' }
        } catch (e) {
            // Return error
            commit('deleteToken')
            commit('deleteUser')

            if (e === 1 || e === 0) {
                return { success: false, code: e }
            } else {
                return { success: false, code: 2 }
            }
        }
    },
    async logout({ commit }) {
        try {
            commit('deleteToken')
            commit('deleteUser')
            console.log('disconnected')

            let response = await api.auth.logout()
            response = response.data

            return { success: true }
        } catch (e) {
            commit('deleteToken')
            commit('deleteUser')
            console.log('disconnected')

            return { success: true }
        }
    }
}