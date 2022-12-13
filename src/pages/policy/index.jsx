import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Policy = () => {
  const [active, setActive] = useState("Privacy Policy");

  const handleActive = (query) => {
    setActive(query);
  };


  const contents = [
    {
      href: "Privacy Policy"
    },
    {
      href: "Your Data with Catch Up"
    },
    {
      href: "Log Data"
    },
    {
      href: "Cookies"
    },
    {
      href: "Social Login"
    },
    {
      href: "Advertising"
    },
    {
      href: "Outdated and Completed Events"
    },
    {
      href: "Inactive Accounts"
    },
    {
      href: "Unauthorized Access"
    },
    {
      href: "Invitation from Catch Up"
    },
    {
      href: "Calendar Integration"
    },
    {
      href: "For User Surveys and Market Research"
    },
    {
      href: "Sharing Personal Information"
    },
    {
      href: "Data Retention"
    },
    {
      href: "Legal Basis"
    },
    {
      href: "Right of Erasure"
    },
    {
      href: "Your Rights"
    },
    {
      href: "Contact Person"
    },
    {
      href: "Changes"
    },
    {
      href: "Contact Us"
    },
  ];

  const policies = [
    {
      heading: "Privacy Policy",
      p: `We are serious about the security of the data on our servers and the protection of the privacy of our users. 
      We continually take steps to protect your information against loss, misuse, unauthorized access, unauthorized disclosure, manipulation, or destruction. You can also find a link to the privacy settings in the footer of our digital products. This Privacy Policy describes how the data is handled at CatchUp. This privacy policy applies to current and former customers, suppliers and third-party customers and suppliers where personal information is processed to enable CatchUp provide its services. Please consult your rights and disclosure required by the General Data Protection Regulation and Nigerian Data Protection Regulation. In this Privacy Policy, 
      references to "us", "our" or "we" are to CatchUp.`
    },
    {
      heading: "Your Data with Catch Up",
      p: `When you use CatchUp, you send pieces of data to CatchUp; this can be a name, 
      an e-mail address, or information relating to your appointment. 
      Other data is generated implicitly by your use of CatchUp, e.g. log data. 
      We use this information for internal analytical purposes to improve the product for you. 
      Furthermore, we employ other companies to perform tasks on our behalf and may need to share this information with them to provide services to you. 
      We do not sell your data to third parties.`

    },
    {
      heading: "Log Data",
      p: `CatchUp records certain requests and transactions in log files. 
      This log data is used for troubleshooting, statistics, analytics, quality assurance, 
      and monitoring system security and can be analyzed to that end. CatchUp can publish anonymous statistics under the condition that no personally identifiable information can be derived from such statistics. 
       CatchUp includes your IP address or any other information that could be used to identify you or your mobile device individually and does not include any other information from your devices. 
       CatchUp is not using these messages or data other than to follow up on users' registered issues or inquiries.
        Your data will be processed and transmitted in accordance with the General Data Protection Regulations (GDPR) and the  Nigerian Data protection Regulation (NDPR).`

    },
    {
      heading: "Cookies",
      p: `When you use CatchUp, the service can store cookies on your computer. 
      Cookies are little pieces of information that can help identify your browser and that can store information for future visits, 
      e.g. your language preferences. CatchUp uses cookies to track usage, 
      improve ease of use and the overall user experience, and manage advertising inventories.
       Most Internet browsers automatically accept cookies. 
       You may however configure your browser at any time in such a manner that no cookies are saved on your computer or that an indication always appears when you receive a new cookie. 
       CatchUp's services may in principle be used without accepting cookies, 
       although individual functions may thereby be limited. 
       You can choose to disable cookies but this may limit your ability to use CatchUp's service.

      `
    },
    {
      heading: "Google Login",
      
      p: `CatchUp uses Google login to provide you with the convenience from elsewhere on the internet to sign in to CatchUp with one click  At CatchUp, 
      you can sign in with Google or your email/password. 
      Google can track your actions when you interact with them. Please refer to the terms of the respective providers for further guidance:
       Google https://policies.google.com/privacy
      `
    },
    {
      heading: "Advertising",
      p: `Advertising is one of CatchUp's revenue streams. Therefore, CatchUp displays advertisements on some of the services, e.g. on certain web pages or in e-mails. These advertisements can be targeted based on the information that is available to CatchUp, e.g. language, IP address, poll content, etc. This targeting is always an automated process; none of the information used for targeting is analyzed manually or made available to advertising customers. In some cases, CatchUp displays advertisements from Google's AdSense or AdExchange network. 
      These advertisements can be targeted based on the poll content. Google does not disclose that information and only uses it for the intended purpose. You can review Google's Ads Privacy Policy here: http://www.google.com/policies/privacy/ads/. Furthermore, you can use Google's Ads Preferences Manager to configure the right ad settings for you. We also use other third-party advertising companies to serve ads when you visit our Web site. If you would like more information about this practice and to know your choices about not having this information used by these companies, please see http://www.networkadvertising.org/managing/opt_out.asp.
      `
    },
    {
      heading: "Outdated and Completed Events",
      p: `You can delete outdated or completed (or, in fact, any) events manually at any time. 
      When deleting an event, that poll's information will be deleted from the CatchUp application databases but may be archived in some other form for internal analytical purposes to improve the product for you. Log data will not be deleted. Furthermore, outdated events are automatically deleted from time to time, but no earlier than 30 days after the last date in the poll, 
      or 30 days after the last access to an event without dates.`
    },
    {
      heading: "Inactive Accounts",
      p: `CatchUp can delete inactive accounts if they remain inactive (i.e. not accessed) for 1 year or longer`
    },
    {
      heading: "Unauthorized Access",
      p: `CatchUp implements several mechanisms to prevent unauthorized access to events, 
      accounts, or other data. To access an event, 
      you use the unique link that CatchUp provides and which contains a random access code. 
      This link is an important element to prevent unauthorized access to an event. 
      You should send this link only to authorized people, i.e., 
      the people you wish to participate in your event. User accounts are protected by passwords. 
      You should choose a secure password and ensure its confidentiality to prevent unauthorized access to your account.`
    },
    {
      heading: "Calendar Integration",
      p: `You can connect CatchUp with your calendar to make the scheduling process even easier and more efficient. 
      There are two types of calendars: online and offline. 
      Online calendars like Google calendar are constantly accessible via their respective interfaces. 
      CatchUp can store certain calendar data to improve performance (caching) and personalize scheduling. 
      In either case, calendar data on CatchUp can be deleted at any time.`
    },
    {
      heading: "Invitation from Catch Up",
      p: `You can contact and invite people to participate in a poll from CatchUp. 
      In this case, CatchUp needs to know the email addresses of the people to be contacted. 
      You can enter these email addresses in the corresponding form. CatchUp stores these email addresses in your user account for your convenience; CatchUp will be able to offer you the same contacts again the next time you use the service. You can have CatchUp delete all stored email addresses at any time using the corresponding function in your user account. General remark: Like all other personal information, CatchUp will not share participants’ email addresses with third parties. 
      CatchUp will not send any e-mail communication to participants’ e-mail addresses without a lawful ground.`
    },
    {
      heading: "For User Surveys and Market Research",
      p: `We use the data you provide exclusively to improve the user experience and to further develop our products. 
      The results consist solely of aggregated and anonymous data. If you have given your consent, 
      you may also be contacted by other companies of the TX Group for example to participate in other user surveys. 
      `
    },
    {
      heading: "Sharing Personal Information",
      p: `CatchUp uses personal information according to the Terms of Service and this Privacy Policy. CatchUp may share personal information with other companies or individuals only in the following limited circumstances: (i) CatchUp has your consent; (ii) CatchUp has good faith that there is a legal obligation to share the data; (iii) CatchUp needs to access or share the data to protect the security of the service or others users' data; (iv) CatchUp needs to 
      access or share the data to protect CatchUp’s rights and property or to enforce the Terms of Service.`
    },
    {
      heading: "Data Retention",
      p: `We shall only retain your data for as long as is legally necessary or following the purpose for which they were processed. If we carry out analysis, we shall store your data until the analysis has been concluded. If we store your data based on a contractual relationship with you, these data will remain stored for at least the duration of the contractual relationship and at most for the duration of the limitation periods within which any claims may be brought by or against us,
       or for the duration of statutory or contractual duties of retention.`
    },
    {
      heading: "Legal Basis",
      p: `We shall only process your Data following the principles of data protection and if there is a legal 
      basis to do so. If in furtherance of the establishment or implementation of our contract, 
      it shall serve as the legal basis. Otherwise, we have an interest in continuously improving our Offers, 
      adjusting our Offers in line with your needs, and showing you advertisements that may be of interest
       to you. This is necessary to develop our Offers further, as well as to be able to finance and guarantee the security of our Offers. We act on the presumption that our interests are predominant. If you have consented to data Processing, this consent will apply.
      `
    },
    {
      heading: "Right of Erasure",
      p: `You can delete your account and the events you own from the system in the 
      account section of Sites. It is however possible that another user invites, or informs,
       you about an event again in the future. If you don't want this either we can block your email address. 
       Where your personal information is no longer required we will ensure it is securely deleted.`
    },
    {
      heading: "Marketing",
      p: `We would like to send you information about products and services of our and other associated companies which may be of interest to you. If you have opted-in to receive marketing information, you may opt-out at a later date.
      You have a right at any time to stop us or any associated companies from contacting you for marketing purposes - if you no longer wish to be contacted for marketing purposes please contact us via the contact details below or click on the 'unsubscribe' link at the bottom of any marketing email received from us
      `
    },
    
  ];
  return (
    <>
      <Navbar />
    <section>
      <div className="mx-auto text-black mt-24 lg:mx-10 md:flex md:mt-32">
        <div className="w-full md:w-[30%] ">
          <div className="mx-3 mb-4 md:hidden md:mx-0">
            <h1 className="text-2xl mb-2 font-bold md:text-3xl">
              Privacy Policy
            </h1>
            <p className="leading-7 text-gray-800 font-sm">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div className="md:sticky  top-0 static md:mb-40 mx-3">
            <h1 className="mb-3 text-xl md:text-2xl md:mx-0">Contents</h1>
            {contents.map((content, i) => (
              <a
                key={i}
                href={`#${content.href.replaceAll(" ", "-")}`}
                className={`my-4 block text-black font-medium text-base hover:text-blue-800 ${
                  active === content.href ? "text-blue-700" : "text-gray-800"
                }`}
                onClick={() => handleActive(content.href)}
              >
                {content.href}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[70%] md:mx-8 mb-20">
          <div className="hidden mb-4 md:block">
            <h1 className="text-2xl mb-2 font-bold md:text-3xl">
              Privacy Policy
            </h1>
            <p className="leading-7 text-gray-600 font-sm">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div className="mx-3 md:mx-0">
            {policies.map((policy, i) => (
              <div key={i}>
                <p id={policy.heading.replaceAll(" ", "-")} className="mt-4 text-xl pt-6">{policy.heading} </p>
                <p className="leading-7 text-gray-600 font-sm my-4">{policy.p}</p>
              </div>
            ))}
          </div>
             <div>
              <h3 className="mt-4 text-xl pt-6">Your Rights</h3>
              <p className="leading-7 text-gray-600 font-sm my-4">Under data protection legislation, as an individual 
                you have rights in relation to the Personal Data we process which relates to you. 
                These rights include:</p>
                <ul className="leading-7 text-gray-600 font-sm my-4">
                  <li className="list-disc">The right to access the Personal Data that we process about you; where our processing of your Personal Data is based on your consent,
                     the right to withdraw your consent to such processing at any time;</li>
                <li className="list-disc">The right to object to direct marketing – your preferences, including in relation 
                  to direct marketing, can be amended by contacting us via the contact details. </li>
                  <li className="list-disc">The right to restriction of processing or to object to the processing of your Personal Data;</li>
                  <li className="list-disc">The right to request for us to transfer 
                    your Personal Data to a third party in a standardized machine-readable format;</li>
                    <li className="list-disc">The right to request the blocking and deletion of your Personal Data at any time in writing, 
                      enclosing appropriate proof of your identity, by email. We reserve the right to exchange correspondence 
                      with you in this regard. Please note that we may be required to retain your Personal Data in part even 
                      after a request for blocking or cancellation under the terms of our statutory or contractual retention 
                      requirements (such as for accounting purposes) and in such an eventuality will only block your Personal Data insofar as necessary for this purpose. In addition, the cancellation of your Personal
                       Data may have the effect that you are no longer able to acquire or use the services registered by you.</li>
                       <li className="list-disc">The right to request the rectification of your Personal Data; and</li>
                       <li className="list-disc">The right to lodge a complaint with competent supervisory authority.
                        You can do this with the supervisory authority at your place of residence, at your place of work, or
                         the place of the alleged data breach. Your privacy cockpit offers you further 
                         information on the various systems and providers that we use, 
                        as well as the option to change your privacy settings at any time.</li>
                </ul>
                <p className="leading-7 text-gray-600 font-sm my-4">You can exercise these rights by contacting our Data Protection Officer
                   using the contact details below.</p>
                   <p className="leading-7 text-gray-600 font-sm my-4">CatchUp is not intended for children under 18 years of age. 
                    We do not intentionally collect or use any information from children.</p>
            </div>
            <div>
              <h3 className="mt-4 text-xl pt-6">Contact Person</h3>
              <p className="leading-7 text-gray-600 font-sm my-4">If you would like to update the Personal Data we hold about you, update your marketing 
                preferences, or exercise any of your rights under the data protection legislation, 
                you can contact us at any time by writing to our data protection office via email.</p>
            </div>
            <div>
              <h3 className="mt-4 text-xl pt-6">Changes</h3>
              <p className="leading-7 text-gray-600 font-sm my-4">CatchUp may change the content of the application without notice to improve, add new 
                functionality and features to this app and improve and add to our existing products, 
                services and promotions. Because of these ongoing changes, changes in the law and the changing 
                nature of technology, our data practices and consequently our Privacy Policy will change from 
                time to time. If and when our data practices change, we will post the changes on our website 
                to notify you. We therefore encourage you to review our Privacy Policy when you visit the app
                 from time to time to stay informed of how we are using your Personal Data.</p>
            </div>
            <div>
              <h3 className="mt-4 text-xl pt-6">Contact Us</h3>
              <p className="leading-7 text-gray-600 font-sm my-4">If you have any questions about these Privacy policies, 
                You can contact us: By visiting this page on our website 
                at https://catchup.hng.tech/contact-us or by sending us an email at usecatchup@gmail.com </p>
            </div>
        </div>
      </div>

    </section>
      <Footer />
      </>
  );
};

export default Policy;
