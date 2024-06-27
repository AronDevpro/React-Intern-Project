import SignupPage from "./View/SignupPage/SignupPage.jsx";
import HomePage from "./View/HomePage/HomePage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageLayout from "./Component/Layout/PageLayout.jsx";
import TodoPage from "./View/ToDoPage/TodoPage.jsx";

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
                {
                    path: '/todo',
                    element: <TodoPage />,
                },
            ],
        },
    ])

  return <RouterProvider router={router} />
}

export default App
