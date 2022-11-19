import CreateEvent from "./pages/dashboard/createEvent/CreateEvent";
import Home from "./pages/home";
import Invitee from "./pages/dashboard/Invitee";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ViewEvent from "./pages/dashboard/ViewEvent";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import UpcomingEvent from "./pages/dashboard/UpcomingEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/invitee" element={<Invitee />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/dashboard/view_event" element={<ViewEvent />} />
        <Route path="/dashboard/upcoming_events" element={<UpcomingEvent />} />
      </Routes>
    </div>
  );
}

export default App;
