export default {
    setUser(state, user) {
        state.user = user
    },
    setToken(state, token) {
        state.token = token
    },
    deleteUser(state, user) {
        state.user = null
    },
    deleteToken(state, token) {
        state.token = null
    },
    setLoading(state, boolean) {
        state.loading = boolean
    }
}