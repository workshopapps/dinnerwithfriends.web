import { Routes, Route } from "react-router-dom";
import PublicRoutes from './routes'
import "./index.css";
import CreateEvent from "./pages/dashboard/createEvent/CreateEvent";
import Invitee from "./pages/invitee";
import ClosedEvent from "./pages/closedEvent";
import ViewEvent from "./pages/dashboard/ViewEvent";
import ProfilePage from "./pages/settingsPage/ProfilePage";
import Settings from "./pages/settingsPage/ProfilePage";
import AccountSettings from "./pages/settingsPage/UserProfile";
import EventInviteResponse from "./pages/invitee/EventInviteResponse";
import EventSummary from "./pages/dashboard/EventSummary";
import UpcomingEvent from "./pages/dashboard/UpcomingEvent";
import { googleCalender } from "./helpers/googleCalender";
import EventInvite from "./pages/invitee/EventInvite";
import GoToTop from "./components/GoToTop";

googleCalender();

function App() {
  return (
    <div className="App">
      <PublicRoutes />
      <Routes>
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/closed_event" element={<ClosedEvent />} />
        <Route path="/update_details" element={<AccountSettings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invitee/:id" element={<Invitee />} />
        <Route path="/view_event/:id" element={<ViewEvent />} />
        <Route path="/event_invite/:token" element={<EventInvite />} />
        <Route path="/event_summary" element={<EventSummary />} />
        <Route
          path="/event_invite/event_invite_response"
          element={<EventInviteResponse />}
        />
        <Route
          path="/invitee/event_invite_response"
          element={<EventInviteResponse />}
        />
        <Route path="/dashboard" element={<UpcomingEvent />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <GoToTop />
    </div>
  );
}

export default App;
