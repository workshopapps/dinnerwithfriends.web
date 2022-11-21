import CreateEvent from "./pages/dashboard/createEvent/CreateEvent";
import Home from "./pages/home";
import Invitee from "./pages/invitee";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ViewEvent from "./pages/dashboard/ViewEvent";
import Policy from "./pages/policy";
import ClosedEvent from "./pages/closedEvent";
import Error404 from "./pages/error404";
import HowItWorks from "./pages/howItWorks/HowItWorks";
import Terms from "./pages/t&c";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Faq from "./pages/FAQ/Faq";
import TermsOfUse from "./pages/termsOfUse";
import UpcomingEvent from "./pages/dashboard/UpcomingEvent";
import EventSummary from "./pages/dashboard/EventSummary";
import ForgetPassword from "./pages/ForgetPassword/index"
import ResetLink from "./pages/ForgetPassword/LinkReset"

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create_event' element={<CreateEvent />} />
				<Route path='/closed_event' element={<ClosedEvent />} />
				<Route path='/event_summary' element={<EventSummary />} />
				<Route path='/error404' element={<Error404 />} />
				<Route path='/invitee' element={<Invitee />} />
				<Route path='/sign_in' element={<SignIn />} />
				<Route path='/sign_up' element={<SignUp />} />
				<Route path='/view_event' element={<ViewEvent />} />
				<Route path='/policy' element={<Policy />} />
				<Route path='/howItWorks' element={<HowItWorks />} />
				<Route path='/faq' element={<Faq />} />
				<Route path='/terms_of_use' element={<TermsOfUse />} />
				<Route path='/terms' element={<Terms />} />
				<Route path='/dashboard/upcoming_events' element={<UpcomingEvent />} />
				<Route path='/forget_password' element={<ForgetPassword />} />
				<Route path='/reset_link' element={<ResetLink />} />
			</Routes>
		</div>
	);
}

export default App;
