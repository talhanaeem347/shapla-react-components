import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import ButtonPage from "./components/ButtonPage";
import NotificationPage from "./components/NotificationPage";
import ModalPage from "./components/ModalPage";
import CheckboxPage from "./components/CheckboxPage";
import ChipPage from "./components/ChipPage";
import ColumnsPage from "./components/ColumnsPage";
import ConfirmPage from "./components/ConfirmPage";
import CrossPage from "./components/CrossPage";
import DropdownPage from "./components/DropdownPage";
import ProgressPage from "./components/ProgressPage";
import SidenavPage from "./components/SidenavPage";
import SpinnerPage from "./components/SpinnerPage";
import HomePage from "./HomePage";

const routerLinks = [
  { path: "", label: "Home", element: <HomePage /> },
  { path: "button", label: "Button", element: <ButtonPage /> },
  { path: "checkbox", label: "Checkbox", element: <CheckboxPage /> },
  { path: "chip", label: "Chip", element: <ChipPage /> },
  { path: "column", label: "Column", element: <ColumnsPage /> },
  { path: "confirm", label: "Confirm", element: <ConfirmPage /> },
  { path: "cross", label: "Cross", element: <CrossPage /> },
  { path: "dropdown", label: "Dropdown", element: <DropdownPage /> },
  { path: "modal", label: "Modal", element: <ModalPage /> },
  {
    path: "notification",
    label: "Notification",
    element: <NotificationPage />,
  },
  { path: "progress", label: "Progress", element: <ProgressPage /> },
  { path: "sidenav", label: "Sidenav", element: <SidenavPage /> },
  { path: "spinner", label: "Spinner", element: <SpinnerPage /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: routerLinks.map((_link) => {
      return { path: _link.path, element: _link.element };
    }),
  },
]);

export { routerLinks };
export default router;
