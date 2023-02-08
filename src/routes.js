import { createBrowserRouter } from "react-router-dom";
import { Location } from "./pages/Location/Location";
import { Home } from "./pages/Home/Home";
import { Episode } from "./pages/Episode/Episode";
import { Error } from "./pages/Error/Error";
import App from "./App";

// export const  router =createBrowserRouter(createRoutesFromElements(
//     <>
//         <Route path="/" element={<App />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/news/*" element={<News />}>
//           <Route index element={<Navigate to="ozbek" />} />
//           <Route path="jahon" element={<h3>JAXON habarlari</h3>} />
//           <Route path="ozbek" element={<h3>O'zbek habarlari</h3>} />
//         </Route>
//         <Route path="*" element={<Error />} />

//         </Route>
//         </>
// ))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/episode",
        element: <Episode />,
        errorElement: <h1>Error</h1>,


      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);


        // children: [
        //   {
        //     index: true,
        //     path: "/episode",
        //     element: <Navigate to="jahon" />,
        //   },
        //   {
        //     path: "jahon",
        //     element: <h2>Jahon yangiliklari</h2>,
        //   },
        //   {
        //     path: "ozbek",
        //     element: <h2>O'zbek yangiliklari</h2>,
        //   },
        // ],
