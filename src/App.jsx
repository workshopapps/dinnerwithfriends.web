import { Routes, Route } from "react-router-dom";
import "./index.css";

import CreateEvent from "./pages/dashboard/createEvent/CreateEvent";
import Home from "./pages/home";
import Invitee from "./pages/invitee";
import ClosedEvent from "./pages/closedEvent";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ViewEvent from "./pages/dashboard/ViewEvent";
import ContactUs from "./pages/contactUs";
import ProfilePage from "./pages/settingsPage/profilePage";
import ForgetPassword from "./pages/ForgetPassword/index";
import ResetLink from "./pages/ForgetPassword/LinkReset"
import Policy from "./pages/policy";
import Error404 from "./pages/error404";
import HowItWorks from "./pages/howItWorks/HowItWorks";
import Terms from "./pages/t&c";
import TermsOfUse from "./pages/termsOfUse";
import Faq from "./pages/FAQ/Faq";
import Settings from "./pages/settingsPage/profilePage";
import EventInvite from "./pages/invitee/EventInvite";
import EventInviteResponse from "./pages/invitee/EventInviteResponse";
import EventSummary from "./pages/dashboard/EventSummary";
import UpcomingEvent from "./pages/dashboard/UpcomingEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/closed_event" element={<ClosedEvent />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invitee" element={<Invitee />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/view_event" element={<ViewEvent />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/howItWorks" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/event_invite" element={<EventInvite />} />
        <Route path="/event_summary" element={<EventSummary />} />
        <Route
          path="/event_invite/event_invite_response"
          element={<EventInviteResponse />}
        />
        <Route path="/dashboard/upcoming_events" element={<UpcomingEvent />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset_link" element={<ResetLink />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
