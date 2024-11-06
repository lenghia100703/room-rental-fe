import { PATHS } from './path.ts'
import HomePage from '@/pages/commons/HomePage.tsx'
import LoginPage from '@/pages/commons/LoginPage.tsx'
import RegisterPage from '@/pages/commons/RegisterPage.tsx'
import DefaultLayout from '@/layouts/DefaultLayout.tsx'
import NotAuthenticatedLayout from '@/layouts/NotAuthenticatedLayout.tsx'

export const router = [
    {
        path: PATHS.HOME,
        component: HomePage,
        layout: DefaultLayout,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: PATHS.LOGIN,
        component: LoginPage,
        layout: NotAuthenticatedLayout,
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: PATHS.REGISTER,
        component: RegisterPage,
        layout: NotAuthenticatedLayout,
        meta: {
            requiresAuth: false,
        },
    },
]