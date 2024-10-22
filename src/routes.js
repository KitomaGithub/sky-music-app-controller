import LandingPage from "./layout/public/landingPage"
import MusicPage from "./layout/public/musicPage"

const routes = [
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/music",
        element: <MusicPage />,
    },
]

export default routes;
