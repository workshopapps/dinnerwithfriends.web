import {
  Home,
  Policy,
  HowItWorks,
  ContactUs,
  Features,
  HelpRoutes,
  Faq,
  SignUp,
  SignIn,
  ForgetPassword,
  ResetLink,
  ResetPassword,
  Verify,
  LinkInvite,
  EmailInvite,
  EventInvitation,
  TermsOfUse
} from '../../pages';
import Terms from "../../pages/t&c";
// import Error404 from "../../pages/error404";
import Career from '../../pages/career/Career';
import JobDetails from '../../pages/career/JobDetails';
import AboutUsPage from '../../pages/aboutUs';
import Invited from '../../pages/invited'

const publicRoutesData = [
    {
      path: "/",
      element: <Home />,
      title: "home"
    },
    {
      path: "sign_up",
      element: <SignUp />,
      title: "signup"
    },
    {
      path: "sign_in",
      element: <SignIn />,
      title: "login"
    },
    {
      path: "forgot_password",
      element: <ForgetPassword />,
      title: "forgot password"
    },
    {
      path: "reset_link",
      element: <ResetLink />,
      title: "reset link"
    },
    {
      path: "reset_password",
      element: <ResetPassword />,
      title: "reset password"
    },
    {
      path: "contact-us",
      element: <ContactUs />,
      title: "contact us"
    },
    {
      path: "policy",
      element: <Policy />,
      title: "policy"
    },
    {
      path: "howItWorks",
      element: <HowItWorks />,
      title: "how it works"
    },
    {
      path: "terms",
      element: <Terms />,
      title: "terms"
    },
    {
      path: "terms-of-use",
      element: <TermsOfUse />,
      title: "term of use"
    },
    {
      path: "faq",
      element: <Faq />,
      title: "faq"
    },
    {
      path: "features",
      element: <Features />,
      title: "features"
    },
    {
      path: "careers",
      element: <Career />,
      title: "careers"
    },
    {
      path: "careers/job-details",
      element: <JobDetails />,
      title: "job details"
    },
    {
      path: "help/*",
      element: <HelpRoutes />,
      title: "help"
    },
    {
      path: "aboutUs",
      element: <AboutUsPage />,
      title: "about"
    },
    {
      path: "verify",
      element: <Verify />,
      title: "verify"
    },
    {
      path: "invitee/:id",
      element: <LinkInvite />,
      title: "invitee"
    },
    {
      path: "event_invite/:token",
      element: <EmailInvite />,
      title: "emailInvite"
    },
    {
      path: "invited",
      element: <Invited />,
      title: "invited"
    },
    {
      path: "event_invitation",
      element: <EventInvitation />,
      title: "eventInvitation"
    },
    // {
    //   path: "*",
    //   element: <Error404 />,
    //   title: "error"
    // },
  ];

  export default publicRoutesData
