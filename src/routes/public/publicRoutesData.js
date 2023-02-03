import ForgetPassword from "../../pages/ForgetPassword/index";
import ResetLink from "../../pages/ForgetPassword/LinkReset";
import ResetPassword from "../../pages/ForgetPassword/ResetPassword";
import { Home, Policy, HowItWorks, ContactUs, SignIn, SignUp } from '../../pages';
import Terms from "../../pages/t&c";
import TermsOfUse from "../../pages/termsOfUse";
import Faq from "../../pages/FAQ/Faq";
// import Error404 from "../../pages/error404";
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
    // {
    //   path: "*",
    //   element: <Error404 />,
    //   title: "error"
    // },
  ];

  export default publicRoutesData
