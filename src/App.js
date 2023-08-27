import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/pagelayout/RootLayout";
import SpeakersList from "./pages/SpeakersList";
import SpeakerDetailPage from "./pages/SpeakerDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/speakers", element: <SpeakersList /> },
      { path: "/speakers/:speakerId", element: <SpeakerDetailPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
