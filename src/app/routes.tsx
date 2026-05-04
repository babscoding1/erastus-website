import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { TrainingPage } from "./pages/TrainingPage";
import TrainingRegistration from "./pages/TrainingRegistration";
import { EventsPage } from "./pages/EventsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { MediathequePage } from "./pages/MediathequePage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "training", Component: TrainingPage },
      { path: "inscription-formation", Component: TrainingRegistration },
      { path: "events", Component: EventsPage },
      { path: "services", Component: ServicesPage },
      { path: "mediatheque", Component: MediathequePage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFound },
    ],
  },
]);