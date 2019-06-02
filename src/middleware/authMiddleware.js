import router from '@/router'

export default async function authMiddleware(to, from, next) {
    console.log('User must me logged in !')

    return next()
}