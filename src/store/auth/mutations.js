export default {
    setUser(state, user) {
        state.user = user
    },
    setToken(state, token) {
        state.token = token
    },
    deleteUser(state) {
        state.user = null
    },
    deleteToken(state) {
        state.token = null
    },
    setLoading(state, boolean) {
        state.loading = boolean
    }
}