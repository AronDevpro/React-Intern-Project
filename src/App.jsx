import SignupPage from "./View/SignupPage/SignupPage.jsx";
import HomePage from "./View/HomePage/HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLayout from "./Component/Layout/PageLayout.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <PageLayout />,
            children: [
                {
                    path: '/home',
                    element: <HomePage />,
                },
                {
                    path: '/',
                    element: <SignupPage />,
                },
            ],
        },
    ])

  return <RouterProvider router={router} />
}

export default App
