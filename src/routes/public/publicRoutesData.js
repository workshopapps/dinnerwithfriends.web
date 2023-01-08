import Home from '../../pages/home'
import SignUp from "../../pages/signUp";
import SignIn from "../../pages/signIn";
import ForgetPassword from "../../pages/ForgetPassword/index";
import ResetLink from "../../pages/ForgetPassword/LinkReset";
import ResetPassword from "../../pages/ForgetPassword/ResetPassword";
import ContactUs from '../../pages/contactUs';
import Policy from "../../pages/policy";
import HowItWorks from "../../pages/howItWorks/HowItWorks";
import Terms from "../../pages/t&c";
import TermsOfUse from "../../pages/termsOfUse";
import Faq from "../../pages/FAQ/Faq";
import Error404 from "../../pages/error404";
import Features from '../../pages/Features-page/features';
import Career from '../../pages/career/Career';
import JobDetails from '../../pages/career/JobDetails';
import HelpRoutes from '../../pages/helpCenter/helpRoutes';
import AboutUsPage from '../../pages/aboutUs';
import Verify from '../../pages/verify';

const publicRoutesData = [
    {
      path: "/",
      element: <Home />,
      title: "home"
    },
    {
      path: "sign_up",
      element: <SignUp />,
      title: "home"
    },
    {
      path: "sign_in",
      element: <SignIn />,
      title: "about"
    },
    {
      path: "forgot_password",
      element: <ForgetPassword />,
      title: "home"
    },
    {
      path: "reset_link",
      element: <ResetLink />,
      title: "about"
    },
    {
      path: "reset_password",
      element: <ResetPassword />,
      title: "about"
    },
    {
      path: "contact-us",
      element: <ContactUs />,
      title: "about"
    },
    {
      path: "policy",
      element: <Policy />,
      title: "home"
    },
    {
      path: "howItWorks",
      element: <HowItWorks />,
      title: "home"
    },
    {
      path: "terms",
      element: <Terms />,
      title: "about"
    },
    {
      path: "terms-of-use",
      element: <TermsOfUse />,
      title: "about"
    },
    {
      path: "faq",
      element: <Faq />,
      title: "home"
    },
    {
      path: "features",
      element: <Features />,
      title: "about"
    },
    {
      path: "careers",
      element: <Career />,
      title: "home"
    },
    {
      path: "careers/job-details",
      element: <JobDetails />,
      title: "about"
    },
    {
      path: "help/*",
      element: <HelpRoutes />,
      title: "home"
    },
    {
      path: "aboutUs",
      element: <AboutUsPage />,
      title: "about"
    },
    {
      path: "verify",
      element: <Verify />,
      title: "about"
    },
    {
      path: "*",
      element: <Error404 />,
      title: "about"
    },
  ];

  export default publicRoutesData
