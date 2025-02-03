import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/usersPage.tsx";
import UserPage from "../pages/userPage.tsx";
import PostsPage from "../pages/postsPage.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "users", element: <UsersPage /> },
      { path: "users/:id", element: <UserPage /> },
      { path: "posts", element: <PostsPage /> },
    ],
  },
]);
