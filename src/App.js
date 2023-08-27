import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/pagelayout/RootLayout";
import SpeakersList from "./pages/SpeakersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/speakers", element: <SpeakersList /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
