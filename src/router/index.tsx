import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/landing/Home";
import NotFound from "../components/NotFound";
import BoxScore from "../pages/regular/BoxScore";
import Ranking from "../pages/regular/Ranking";
import News from "../pages/news/News";
import WizPress from "../pages/news/WizPress";
import About from "../pages/ktwiz/About";
import History from "../pages/ktwiz/History";
import Intro from "../pages/wizpark/Intro";
//import Location from "../pages/wizpark/Location";
import Guide from "../pages/wizpark/Guide";
import Schedule from "../pages/regular/Schedule";
import WatchPoint from "../pages/regular/WatchPoint";
import Coach from "../pages/player/coach/Coach";
import Pitcher from "../pages/player/Pitcher";
import Catcher from "../pages/player/Catcher";
import Cheer from "../pages/player/Cheer";
import Map from "../pages/game/Map";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
       index:true,
        element: <Home />,
      },
      {
        path: "ktwiz",
        children: [
          {
            path: "about",
            element:<About/>,
          },
          {
            path: "history",
            element:<History/>,
          },

        ]
      },
      {
        path: "wizpark",
        children: [
          {
            path: "intro",
            element:<Intro/>,
          },
          {
            path: "guide",
            element:<Guide/>,
          },
          {
            path: "location",
            element:<Map/>,
          },
        ]
      },
      {
        path:"game/regular",
        children: [
          {
            path: "schedule",
            element: <Schedule/>,
          },
          {
            path:"boxscore",
            element: <BoxScore />,
          },
          {
            path:"ranking/team",
            element: <Ranking />,
          },
          {
            path: "watchPoint",
            element:<WatchPoint/>,
          }
        ],
      },
      {
        path: "player",
        children: [
          {
            path: "coach",
            element:<Coach/>,
          },
          {
            path: "pitcher",
            element:<Pitcher/>,
          },
          {
            path: "catcher",
            element:<Catcher/>,
          },
          {
            path: "cheer",
            element:<Cheer/>,
          },
        ]
      },
      {
        path:"media",
        children: [
          {
            path: "wiznews",
            element:<News/>,
          },
          {
            path: "wizpress",
            element:<WizPress/>,
          },
        ]
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router; 
