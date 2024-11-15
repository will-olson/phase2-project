import { createBrowserRouter} from "react-router-dom";
import Home from './Home';
import BigTech from './BigTech';
import IndustryLeaders from './IndustryLeaders';
import Media from './Media';
import MarketingSaaS from './MarketingSaaS';
import Healthcare from './Healthcare';
import Fintech from './Fintech';
import Finance from './Finance';
import B2BSaaS from './B2BSaaS';
import AI from './AI';
import CommunitySubmissions from './CommunitySubmissions';
import Favorited from './Favorited';
// import ErrorPage from './pages/ErrorPage';

const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/BigTech', element: <BigTech /> },
  { path: '/IndustryLeaders', element: <IndustryLeaders /> },
  { path: '/Media', element: <Media /> },
  { path: '/MarketingSaaS', element: <MarketingSaaS /> },
  { path: '/Healthcare', element: <Healthcare /> },
  { path: '/Fintech', element: <Fintech /> },
  { path: '/Finance', element: <Finance /> },
  { path: '/B2BSaaS', element: <B2BSaaS /> },
  { path: '/AI', element: <AI /> },
  { path: '/CommunitySubmissions', element: <CommunitySubmissions /> },
  { path: '/Favorited', element: <Favorited /> },
]);

export default routes;