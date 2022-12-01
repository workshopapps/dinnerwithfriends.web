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
      p: `At Catch Up, we're serious about the security of the data on our servers and the protection of the privacy of our users. We employ several security professionals that work exclusively on technical and organizational security during operations and further development of the product. You can meet them on our team page. We continually take steps to protect your information against loss, misuse, unauthorized access, unauthorized disclosure, manipulation, or destruction. You can also find a link to the privacy settings in the footer of our digital products.
      This Privacy Policy describes how the data is handled at Catch Up. Please also consult our general data processing terms and your rights and disclosures required by the CCPA.
      `
    },
    {
      heading: "Your Data with Catch Up",
      p: `When you use Catch Up, you send pieces of data to Catch Up; this can be a name, an e-mail address, or information relating to your appointment. Other data is generated implicitly by your use of Catch Up, e.g. log data. We use this information for internal analytical purposes to improve the product for you. Furthermore, we employ other companies to perform tasks on our behalf and may need to share this information with them to provide services to you. We do not sell your data to third parties.`
    },
    {
      heading: "Log Data",
      p: `Catch Up records certain requests and transactions in log files. This log data is used for troubleshooting, statistics, analytics, quality assurance, and monitoring system security and can be analyzed to that end. Catch Up can publish anonymous statistics under the condition that no personally identifiable information can be derived from such statistics.
      Catch Up also uses Google Analytics and Google Firebase Analytics (for iOS and Android apps) to compile usage statistics. These services are provided by Space Pencil, Inc. and by Google, Inc., respectively. Their privacy policies can be found at http://www.google.com/privacy and https://firebase.google.com/terms/analytics. Catch Up include your IP address or any other information that could be used to identify you or your mobile device individually and does not include any other information from your mobile device. Click here to review Crashlytics' privacy policy, and here for HockeyApp's privacy policy.
      This website is using Tidio, a chat platform that connects users with Catch Up's customer support. It will only collect email addresses, names, and phone numbers with the consent of users, to start a chat. The messages and data exchanged are stored within the Tidio application. For more information, please refer to their Privacy Policy.
      Catch Up is not using these messages or data other than to follow up on users' registered issues or inquiries. Your data will be processed and transmitted by the General Data Protection Regulations (GDPR).
      `
    },
    {
      heading: "Cookies",
      p: `When you use Catch Up, the service can store cookies on your computer. Cookies are little pieces of information that can help identify your browser and that can store information for future visits, e.g. your language preferences. Catch Up uses cookies to track usage, improve ease of use and the overall user experience, and manage advertising inventories.
      Most Internet browsers automatically accept cookies. You may however configure your browser at any time in such a manner that no cookies are saved on your computer or that an indication always appears when you receive a new cookie.
      Catch Up's services may in principle be used without accepting cookies, although individual functions may thereby be limited.
      You can choose to disable cookies but this may limit your ability to use Catch Up's service.
      `
    },
    {
      heading: "Social Login",
      p: `Catch Up employs third-party tools to provide you with the convenience you are used to from elsewhere on the internet to sign in to Catch Up with one click (so-called “social login”). Some of these tools can track your actions when you interact with them. At Catch Up, you can sign in with Google, Microsoft, Facebook, or your email/password. Please refer to the terms of the respective providers for further guidance:
      Google https://policies.google.com/privacy
      Microsoft https://privacy.microsoft.com
      Facebook https://www.facebook.com/policy.php
      `
    },
    {
      heading: "Advertising",
      p: `Advertising is one of Catch Up's revenue streams. Therefore, Catch Up displays advertisements on some of the services, e.g. on certain web pages or in e-mails. These advertisements can be targeted based on the information that is available to Catch Up, e.g. language, IP address, poll content, etc. This targeting is always an automated process; none of the information used for targeting is analyzed manually or made available to advertising customers. In some cases, Catch Up displays advertisements from Google's AdSense or AdExchange network. These advertisements can be targeted based on the poll content. Google does not disclose that information and only uses it for the intended purpose. You can review Google's Ads Privacy Policy here: http://www.google.com/policies/privacy/ads/. Furthermore, you can use Google's Ads Preferences Manager to configure the right ad settings for you. We also use other third-party advertising companies to serve ads when you visit our Web site. If you would like more information about this practice and to know your choices about not having this information used by these companies, please see http://www.networkadvertising.org/managing/opt_out.asp.`
    },
    {
      heading: "Outdated and Completed Events",
      p: `You can delete outdated or completed (or, in fact, any) events manually at any time using the admin link. When deleting an event, that poll's information will be deleted from the Catch Up application databases but may be archived in some other form for internal analytical purposes to improve the product for you. Log data will not be deleted. Furthermore, outdated events are automatically deleted from time to time, but no earlier than 30 days after the last date in the poll, or 30 days after the last access to an event without dates.`
    },
    {
      heading: "Inactive Accounts",
      p: `Catch Up can delete inactive accounts if they remain inactive (i.e. not accessed) for 1 year or longer`
    },
    {
      heading: "Unauthorized Access",
      p: `Catch Up implements several mechanisms to prevent unauthorized access to events, accounts, or other data.
      To access an event, you use the unique link that Catch Up provides and which contains a random access code. This link is an important element to prevent unauthorized access to an event. You should send this link only to authorized people, i.e., the people you wish to participate in your event. User accounts are protected by passwords. You should choose a secure password and ensure its confidentiality to prevent unauthorized access to your account.
      Inviting from Catch Up
      As an option, you can contact and invite people to participate in a poll from Catch Up. In this case, Catch Up needs to know the e-mail addresses of the people to be contacted. You can enter these e-mail addresses in the corresponding form. Catch Up stores these e-mail addresses in your user account for your convenience; Catch Up will be able to offer you the same contacts again the next time you use the service. You can have Catch Up delete all stored e-mail addresses at any time using the corresponding function in your user account.
      General remark: Like all other personal information, Catch Up will not share participants' e-mail addresses with third parties. Catch Up will not send any e-mail communication to participants' e-mail addresses without a lawful ground.
      `
    },
    {
      heading: "Calendar Integration",
      p: `You can connect Catch Up with your calendar to make the scheduling process even easier and more efficient. There are two types of calendars: online and offline.
      Online calendars like Google calendar are constantly accessible via their respective interfaces. Catch Up can store certain calendar data to improve performance (caching) and personalize scheduling. In either case, calendar data on Catch Up can be deleted at any time.
      `
    },
    {
      heading: "Invitation from Catch Up",
      p: `As an option, you can contact and invite people to participate in a poll from Catch Up. In this case, Catch Up needs to know the email addresses of the people to be contacted. You can enter these e-mail addresses in the corresponding form. Catch Up stores these e-mail addresses in your user account for your convenience; Catch Up will be able to offer you the same contacts again the next time you use the service. You can have Catch Up delete all stored e-mail addresses at any time using the corresponding function in your user account. General remark: Like all other personal information, Catch Up will not share participants’ e-mail addresses with third parties. Catch Up will not send any e-mail communication to participants’ e-mail addresses without a lawful ground.`
    },
    {
      heading: "For User Surveys and Market Research",
      p: `We use the data you provide exclusively to improve the user experience and to further develop our products. The results consist solely of aggregated and anonymous data. If you have given your consent, you may also be contacted by other companies of the TX Group for example to participate in other user surveys.
      Sharing Personal Information
      Catch Up uses personal information according to the Terms of Service and this Privacy Policy.
      Catch Up may share personal information with other companies or individuals only in the following limited circumstances: (i) Catch Up has your consent; (ii) Catch Up has a good faith that there is a legal obligation to share the data; (iii) Catch Up needs to access or share the data to protect the security of the service or others users' data; (iv) Catch Up needs to access or share the data to protect Catch Up's rights and property or to enforce the Terms of Service.
      `
    },
    {
      heading: "Sharing Personal Information",
      p: `Catch Up uses personal information according to the Terms of Service and this Privacy Policy. Catch Up may share personal information with other companies or individuals only in the following limited circumstances: (i) Catch Up has your consent; (ii) Catch Up has good faith that there is a legal obligation to share the data; (iii) Catch Up needs to access or share the data to protect the security of the service or others users' data; (iv) Catch Up needs to access or share the data to protect Catch Up’s rights and property or to enforce the Terms of Service.`
    },
    {
      heading: "Data Retention",
      p: `We shall only retain your data for as long as is legally necessary or following the purpose for which they were processed. If we carry out analyses, we shall store your data until the analysis has been concluded. If we store your data based on a contractual relationship with you, these data will remain stored for at least the duration of the contractual relationship and at most for the duration of the limitation periods within which any claims may be brought by or against us, or for the duration of statutory or contractual duties of retention.`
    },
    {
      heading: "Legal Basis",
      p: `We shall only process your Data following principles of data protection and if there is a legal basis to do so. If in furtherance of the establishment or implementation of our contract, it shall serve as the legal basis. Otherwise, we have an interest in continuously improving our Offers, adjusting our Offers in line with your needs, and showing you advertising that may be of interest to you. This is necessary to develop our Offers further, as well as to be able to finance and guarantee the security of our Offers. We act on the presumption that our interests are predominant. If you have consented to data Processing, this consent will apply.`
    },
    {
      heading: "Right of Erasure",
      p: `By applicable Nigerian legislation, you can delete your account and the events you own from the system in the account section of Sites. It is however possible that another user invites, or informs, you about an event again in the future. If you don't want this either we can block your email address.`
    },
    {
      heading: "Your Rights",
      p: `You have the right to exercise your data protection rights at any time and to request information as to whether and which Personal Data relating to you has been processed by us. You may also arrange for your Data to be corrected, blocked, or canceled at any time in writing, enclosing appropriate proof of your identity, by email.
      We reserve the right to exchange correspondence with you in this regard.
      Please note that we may be required to retain your Personal Data in part even after a request for blocking or cancellation under the terms of our statutory or contractual retention requirements (such as for accounting purposes) and in such an eventuality will only block your Personal Data insofar as necessary for this purpose. In addition, the cancellation of your Personal Data may have the effect that you are no longer able to acquire or use the services registered by you. Under certain circumstances, you have the right to require us to provide you or a third party specified by you with your data in a commonly used format.
      In addition, you have the right to make a complaint concerning the data processing in question with the competent supervisory authority. You can do this with the supervisory authority at your place of residence, at your place of work, or the place of the alleged data breach. Your privacy cockpit offers you further information on the various systems and providers that we use, as well as the option to change your privacy settings at any time.
      
      `
    },
    {
      heading: "Contact Person",
      p: `If you have questions regarding data protection, need information, or want your data to be deleted please contact our data protection office via email.`
    },
    {
      heading: "Changes",
      p: `Catch reserves the right to update this Privacy Policy at any time. The most current version of this policy is available at catchup.com/privacy-policy.`
    },
    {
      heading: "Contact Us",
      p: `If you have any questions about these Privacy policies, You can contact us:
      By visiting this page on our website at www.catchup.com/contactus/
      By sending us an email at catchup@gmail.com
      `
    },
  ];
  return (
    <section>
      <Navbar />
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
          <div className="md:sticky md:h-screen top-0 static md:mb-40 mx-3">
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
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Policy;
