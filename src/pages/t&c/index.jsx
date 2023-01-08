import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Terms = () => {
  const contents = [
    {
      href: "The Agreement",
      link: " ",
    },
    {
      href: "Account and Security",
      link: " ",
    },
    {
      href: "License to the CatchUp Platform and Services",
      link: " ",
    },
    {
      href: "Content and Privacy",
      link: " ",
    },
    {
      href: "Interaction with Others",
      link: " ",
    },
    {
      href: "Your Feedback to Us ",
      link: " ",
    },
    {
      href: "Platform Safety and Security",
      link: " ",
    },
    {
      href: "Third-Party Sites and Services",
      link: " ",
    },
    {
      href: "Dispute Resolution",
      link: " ",
    },
    {
      href: "Intellectual Property of Catchup",
      link: " ",
    },
    {
      href: "Termination",
      link: " ",
    },
    {
      href: "Limitation of Liability",
      link: " ",
    },
    {
      href: "Other Website Links",
      link: " ",
    },
    {
      href: "Indemnification",
      link: " ",
    },
    {
      href: "Changes to These Terms of Use",
      link: " ",
    },
    {
      href: "Your data will catch",
      link: " ",
    },
    {
      href: "Contact Us",
      link: " ",
    },
  ];

  const policies = [
    {
      links: "Terms & Conditions",
      p: `his document was last updated 15th of December, 2022. To start using our product, read this Terms and Conditions thoroughly.`,
      href: "#",
    },
    {
      links: "The Agreement",
      p: `Catchup enables you to schedule offline, real-world Catchup events. The terms “Catchup,” “we,” “us,” and “our” include Catchup, Inc. and our corporate parent, affiliates, or subsidiaries. We use the terms “you” and “your” to mean any person using our Platform, and any organization or person using the Platform on an organization’s behalf. We use the word “Platform” to mean any website, application, or service offered by Catchup, including content we offer and electronic communications we send. We provide our Platform to you subject to these Terms of Use. We use the terms “Terms of Use” and “Agreement” interchangeably to mean this document together with our Usage and Content Policies, Groups and Events Policies, Organizer and Leadership Standards, Member Restrictions, Payment Policies,
      Trademark Usage Guidelines, and API License Terms. Your use of the Platform signifies that you agree to
       this Agreement. If you are using the Platform for an organization, you agree to this Agreement on 
       behalf of that organization, and represent you have authority to bind that organization to the terms 
       contained in this Agreement. If you do not or are unable to agree to this Agreement, do not use our 
       Platform. Trademark Usage Guidelines, and API License Terms. Your use of the Platform signifies that 
       you agree to this Agreement. If you are using the Platform for an organization, you agree to this
        Agreement on behalf of that organization, and represent you have authority to bind that organization
         to the terms contained in this Agreement. If you do not or are unable to agree to this Agreement, 
         do not use our Platform.`,
      href: "#",
    },
    {
      links: "Account and Security",
      p: `When you register, you provide us with some basic information, including an email address and a 
      password. Keep your email address and other account information current and accurate. Also, you agree 
      to maintain the security and confidentiality of your password (or else we may need to disable your 
        account). We strongly encourage you to choose a strong and unique password that is not shared with any
         other account or online service and practice other healthy password security habits to help avoid 
         unauthorized access to your account. You alone are responsible for anything that happens from your 
         failure to maintain that security and confidentiality, such as by sharing your account credentials 
         with others. If someone is using your password or accessing your account without your permission, 
         email us at catchup@gmail.com`,
      href: "#",
    },
    {
      links: "License to the Meetup Platform and Services",
      p: `Subject to your compliance with this Agreement, Catchup grants you an unlimited, 
      non-exclusive, revocable, non-sublicensable, non-transferable right to use the Platform in order to 
      access and use the services and features that we make available to you.`,
      href: "#",
    },
    {
      links: "Content and Privacy",
      p: `Our Service allows You to post Content. You are responsible for the Content that You post to the 
      Service, including its legality, reliability, and appropriateness. By posting Content to the Service, 
      You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and 
      distribute such Content on and through the Service. You retain any and all of Your rights to any Content
       You submit, post or display on or through the Service and You are responsible for protecting those 
       rights. You agree that this license includes the right for Us to make Your Content available to other 
       users of the Service, who may also use Your Content subject to these Terms. You represent and warrant 
       that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and
        license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
      We do not claim ownership of your Content. However, to enable us to operate, improve, promote, and protect Meetup and our Platform, and to ensure we do not violate any rights you may have in your Content, 
      you hereby grant Catch-up a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, 
      sublicensable, transferable right and license (including a waiver of any moral rights) to use, host,
       store, reproduce, modify, publish, publicly display, publicly perform, distribute, and create derivative
        works of, your Content and to commercialize and exploit the copyright, trademark, publicity, and d
        atabase rights you have in your Content. This license would permit your Content to remain on the 
        Platform, even after you cease to be a member of a Catchup group or of the Platform.
      `,
      href: "#",
    },
    {
      links: "Privacy",
      p: `CatchUp collects registration and other information about You through Our Platform. Please refer to Our Privacy Policy and Cookie Policy for details on how We collect, use, and disclose this information. These policies do not govern use of information that You provide to third parties, such as to organizers and other members of the CatchUp Platform. 
      CatchUp has no control over how other members may use information that You provide to them, so You should exercise common sense and good judgment when sharing information with others on Our Platform.      
      `,
      href: "#",
    },
    {
      links: "Content of Others",
      p: `CatchUp does not control the Content of other members. When We become aware of inappropriate Content on Our Platform. We reserve the right to investigate and take appropriate action, but We do not have any obligation to monitor, nor do We take responsibility for, the Content of other members.
      `,
      href: "#",
    },
    {
      links: "Interactions with Others",
      p: `CatchUp is not a party to any offline arrangements made through Our Platform. 
      CatchUp does not conduct or require background checks on members and does not attempt to verify the 
      truth or accuracy of statements made by members. CatchUp makes no representations or warranties 
      concerning the conduct or Content of any members or their interactions with You.
      `,
      href: "#",
    },
    {
      links: "Your Feedback to Us",
      p: `You assign all rights, title and interest in any Feedback You provide the Company. 
      If for any reason such assignment is ineffective You agree to grant the Company a non-exclusive, 
      perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, 
      sub-license, distribute, modify and exploit such Feedback without restriction.
      `,
      href: "#",
    },
    {
      links: "Platform Safety and Security",
      p: `You agree that You will not, either directly or indirectly Extract data from the Platform for a commercial purpose not permitted by these Terms of Use, whether through use of an automated system or software, and whether operated by a third party or otherwise (“screen scraping,” “data scraping,” or “web scraping”).
      You agree that You will not, engage in any activity that interferes with or disrupts, that is designed to interfere with or disrupt, or imposes undue burdens on the Platform or its systems.
      You agree to use, retain, and otherwise process personal data collected from the Platform in accordance with applicable laws, rules, and regulations and solely for purposes of administering and participating in CatchUp events. Without limitation You agree to provide notice to individuals about Your processing of their personal data, to obtain any necessary consents, and to respond to requests made by individuals as required by applicable law. You also agree to safeguard such data from unauthorized access or processing. You must delete such personal data once it is no longer strictly necessary for the administration of a CatchUp event or promptly following a request from CatchUp, and You will promptly certify to such deletion.
      `,
      href: "#",
    },
    {
      links: "Platform Modifications: ",
      p: `We work hard to continuously improve Our Platform. This means that We may modify or discontinue portions or all of Our Platform 
      with or without notice and without liability to You or any third party.`,
      href: "#",
    },
    {
      links: "Third Party Sites and Services",
      p: `The Platform contains links to third party sites, and is integrated with various third-party 
      services, applications and sites that may make available to You their content and products. 
      We don't control these third parties and aren't responsible for those sites or services or their 
      content or products. These third parties may have their own terms and policies, and Your use of them 
      will be governed by those terms and policies. You do not have a license to use the intellectual property
       of third parties merely by way of Your access to Our Platform.
      `,
      href: "#",
    },
    
    {
      links: "Dispute Resolution",
      p: `If you have a dispute with Catchup, you agree to try to work it out directly with us first. If we can’t work it out, with limited exceptions, you must submit any dispute with us to a neutral arbitrator instead of taking the claim to a court of law. Claims can only be brought individually, and not as part of a class action. Members based in the European Union may have additional or different rights, as provided by applicable law. Catchup has no obligation to get involved with any disputes you have with other members, although we may try to facilitate a resolution.`,
      href: "#",
    },
    {
      links: "Intellectual Property of Catchup",
      p: `The Service is and will continue to be the sole property of the Company and its licensors, 
      including all of its original content (aside from Content that is supplied by You or other users), 
      features, and functionality. The copyright, trademark, and other laws of the country as well as other 
      nations provide protection for the Service. Without the previous written approval of the Company, 
      use of our trademarks and trade dress in connection with any good or service is strictly prohibited.

      `,
      href: "#",
    },
    {
      links: "Intellectual Property of Others:",
      p: ` Catchup respects the intellectual property of others, and we expect our members to do the same. 
      We may, in appropriate circumstances and in our discretion, remove or disable access to material that 
      we believe may infringe on the intellectual property rights of others. We may also restrict or terminate
       access to our Platform to those who we believe to be repeat infringers. If you believe your 
       intellectual property rights have been violated, please review our Intellectual Property Dispute 
       Policies.
      `,
      href: "#",
    },
    {
      links: "Termination",
      p: `We reserve the right to instantly close or suspend Your Account without warning or liability for 
      any reason, including without limitation if You violate these Terms of Use. Your ability to use the 
      Service will end immediately upon termination. You can simply stop using the Service if you want to 
      cancel your Account.`,
      href: "#",
    },
    {
      links: "Limitation of Liability",
      p: `Notwithstanding any damages that You might incur, the entire liability of the Company and any of 
      its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall
       be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
        anything through the Service. To the maximum extent permitted by applicable law, in no event shall 
        the Company or its suppliers be liable for any special, incidental, indirect, or consequential 
        damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other
           information, for business interruption, for personal injury, loss of privacy arising out of or in 
           any way related to the use of or inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in connection with any provision of this 
            Terms), even if the Company or any supplier has been advised of the possibility of such damages 
            and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of
             implied warranties or limitation of liability for incidental or consequential damages, which 
             means that some of the above limitations may not apply. In these states, each party's liability 
             will be limited to the greatest extent permitted by law.`,
      href: "#",
    },
    {
      links: "Other Website Links",
      p: `Links to third-party websites or services that are not within the Company's control or ownership
       may be found on our service. The Company has no control over, and accepts no liability for, any third-party web sites or services' content, privacy policies, or practices. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any injury or damage of any kind resulting from use of or reliance on any such content, goods, or services made available on or through any such web sites or services, whether such injury or damage is foreseeable or arises from a negligent act or omission on the part of the Company.
      We firmly encourage that before using any third-party websites or services, you read their terms of 
      service and privacy policies.
      `,
      href: "#",
    },
    {
      links: "Indemnification",
      p: `You agree to hold all Catchup Parties harmless from any Claims made by any third party due to
       or arising out of (a) your violations of this Agreement, (b) your use, misuse, or abuse of our Platform,
        (c) your Content, (d) your violation of any law, statute, ordinance, or regulation or the rights of a 
        third party, or (e) your participation or conduct in a Catchup group or a Catchup event that violates this Agreement, to the fullest extent permitted by applicable You agree to cooperate with the Catchup Parties in defending against any claims made by third parties, promptly notify us of any such claims, and pay all fees, costs, and expenses (including, but not limited to, legal fees) incurred in doing so.`,
      href: "#",
    },
    {
      links: "Changes to These Terms of Use",
      p: `We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
      By continuing to access or use Our Service after those revisions become effective, 
      You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or 
      in part, please stop using the website and the Service.
      `,
      href: "#",
    },
    {
      links: "Contact Us",
      p: `If you have any questions about these Terms of Use, You can contact us:
      ${<ul> 
        <li className="list-disc">
        By visiting this page on our website at www.catchup.com/contactus/ </li>
        <li className="list-disc">By sending us an email at catchup@gmail.com</li>
        </ul>}
      `,
      href: "#",
    },
  ];
  return (
    <section>
      <Navbar />
      <div className="mx-auto text-black mt-24 lg:mx-28 md:flex md:mt-32">
        <div className="w-full md:w-[30%] ">
          <div className="mx-3 mb-4 md:hidden md:mx-0">
            <h1 className="text-2xl mb-2 font-bold md:text-3xl">
              Terms &amp; Conditons
            </h1>
            <p className="leading-7 text-gray-800 font-sm">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div>
            <h1 className="mx-3 mb-3 text-xl md:text-2xl md:mx-0">Contents</h1>
            {contents.map((content) => (
              <a
                href={content.link}
                className="block py-2 pl-3 pr-4 md:mb-2 text-gray-800 font-sm rounded hover:text-[#0056D6] md:p-0"
              >
                {content.href}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[70%] md:mx-8 mb-20">
          <div className="hidden mb-4 md:block">
            <h1 className="text-2xl mb-2 font-bold md:text-3xl">
              Terms &amp; Conditons
            </h1>
            <p className="leading-7 text-gray-600 font-sm">
              This document was last updated 15th of December, 2022. To start
              using our product, read this Privacy Policy thoroughly.
            </p>
          </div>
          <div className="mx-3 md:mx-0">
            {policies.map((policy) => (
              <div>
                <a href={policy.href} className="mt-4 text-xl">
                  {policy.links}{" "}
                </a>
                <p className="leading-7 text-gray-600 font-bold text-sm my-4">
                  {policy.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Terms;
