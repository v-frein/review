import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "reset-css";
import "react-datepicker/dist/react-datepicker.css";

import { Segment, Taxonomy } from "./pages";
import App from "./App";
import { EditSegment } from "./pages/EditSegment";
import { ChangeHistory } from "./pages/ChangeHistory/ChangeHistory";
import { BuildingHistory } from "./pages/BuildingHistory";

import "./styles/index.css";
import { Segments } from "./pages/Segments";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/segment",
    element: <Segment />,
  },
  {
    path: "/segments",
    element: <Segments />,
  },
  {
    path: "/taxonomy",
    element: <Taxonomy />,
  },
  {
    path: "/editsegment",
    element: <EditSegment />,
  },
  {
    path: "/changehistory",
    element: <ChangeHistory />,
  },
  {
    path: "/buildinghistory",
    element: <BuildingHistory />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
