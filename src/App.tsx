import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.tsx'
import { PATHS } from './router/path.ts'
import HomePage from './pages/commons/HomePage.tsx'
import LoginPage from './pages/commons/LoginPage.tsx'
import RegisterPage from './pages/commons/RegisterPage.tsx'
import ListRoomPage from './pages/commons/ListRoomPage.tsx'
import RoomDetailPage from './pages/commons/RoomDetailPage.tsx'
import ProfilePage from './pages/commons/ProfilePage.tsx'

function App() {
    const router = createBrowserRouter([
        {
            path: PATHS.HOME,
            element: <DefaultLayout />,
            children: [
                {
                    path: PATHS.HOME,
                    element: <HomePage />,
                },
                {
                    path: '/list-room',
                    element: <ListRoomPage />,
                },
                {
                    path:"/room/:id",
                    element:<RoomDetailPage/>
                },
                {
                    path:"/profile",
                    element:<ProfilePage/>
                },
                {
                    path: '/login',
                    element: <LoginPage />,
                },
                {
                    path: '/register',
                    element: <RegisterPage />,
                },
            ],
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
