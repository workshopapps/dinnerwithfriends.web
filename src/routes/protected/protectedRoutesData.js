import Dashboard from "../../pages/dashboard/Dashboard";
import CreateEvent from "../../pages/dashboard/createEvent/CreateEvent";
import ViewEvent from "../../pages/dashboard/ViewEvent";
import EventSummary from "../../pages/dashboard/EventSummary";
import ProfilePage from "../../pages/settingsPage/ProfilePage";
import Settings from "../../pages/settingsPage/ProfilePage";
import AccountSettings from "../../pages/settingsPage/UserProfile";
import ClosedEvent from "../../pages/closedEvent";
// import Error404 from "../../pages/error404";

const protectedRoutesData = [
    {
      path: "dashboard",
      element: <Dashboard />,
      title: "dashboard"
    },
    {
      path: "create_event",
      element: <CreateEvent />,
      title: "create events"
    },
    {
      path: "event_summary",
      element: <EventSummary />,
      title: "event summary"
    },
    {
      path: "view_event/:id",
      element: <ViewEvent />,
      title: "view event"
    },
    {
      path: "profile",
      element: <ProfilePage />,
      title: "profile"
    },
    {
      path: "settings",
      element: <Settings />,
      title: "settings"
    },
    {
      path: "update_details",
      element: <AccountSettings />,
      title: "account settings"
    },
    {
      path: "closed_event",
      element: <ClosedEvent />,
      title: "closed event"
    },
    // {
    //   path: "*",
    //   element: <Error404 />,
    //   title: "error"
    // },
  ];

  export default protectedRoutesData
