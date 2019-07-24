const axios = require('axios')

// Axios default url
axios.defaults.baseURL = 'http://localhost:3001'

// Export api calls
export default {
    auth: {
        register: (data) => axios.post('/auth/register', data, {
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }),
        login: (data) => axios.post('/auth/login', data, {
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }),
        fetch: () => axios.get('/auth/fetch', {
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }),
        logout: () => axios.get('/auth/logout', {
            withCredentials: true,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    },
    tasks: {
        getTasks: () => axios.get('/tasks', {
            withCredentials: true,
            header: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }),
        addTask: (data) => axios.post('/tasks', data, {
            withCredentials: true,
            header: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }),
        deleteTask: (id) => axios.delete('/tasks/' + id, {
            withCredentials: true,
            header: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }),
        checkTask: (id, data) => axios.patch('/tasks/' + id, data, {
            withCredentials: true,
            header: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    }
}
