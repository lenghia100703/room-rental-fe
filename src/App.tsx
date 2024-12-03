import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.tsx'
import { PATHS } from './router/path.ts'
import HomePage from './pages/commons/HomePage.tsx'
import LoginPage from './pages/commons/LoginPage.tsx'
import RegisterPage from './pages/commons/RegisterPage.tsx'
import ListRoomPage from './pages/commons/ListRoomPage.tsx'
import RoomDetailPage from './pages/commons/RoomDetailPage.tsx'
import ProfilePage from './pages/commons/ProfilePage.tsx'
import ManageRoomsPage from './pages/commons/ManageRoomsPage.tsx'
import AboutPage from './pages/commons/AboutPage.tsx'

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
                    path: PATHS.LIST_ROOM,
                    element: <ListRoomPage />,
                },
                {
                    path: PATHS.MANAGE_ROOM,
                    element: <ManageRoomsPage />,
                },
                {
                    path: PATHS.ROOM_DETAIL,
                    element: <RoomDetailPage />,
                },
                {
                    path: PATHS.PROFILE,
                    element: <ProfilePage />,
                },
                {
                    path: PATHS.LOGIN,
                    element: <LoginPage />,
                },
                {
                    path: PATHS.REGISTER,
                    element: <RegisterPage />,
                },
                {
                    path: PATHS.ABOUT,
                    element: <AboutPage />,
                },
            ],
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
