import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/pagelayout/RootLayout";
import SpeakersList from "./pages/SpeakersList";
import SpeakerDetailPage from "./pages/SpeakerDetailPage";
import TopicsPage from "./pages/TopicsPage";
import AddNewTopic from "./forms/AddNewTopic";
import BecomeASpeaker from "./forms/BecomeASpeaker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/speakers", element: <SpeakersList /> },
      { path: "/speakers/:speakerId", element: <SpeakerDetailPage /> },
      { path: "/topics", element: <TopicsPage /> },
      { path: "/add-new-topic", element: <AddNewTopic /> },
      { path: "/become-a-speaker", element: <BecomeASpeaker /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
