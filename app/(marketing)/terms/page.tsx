import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - BΛSE",
  description:
    "Terms of Service for BaseCo, Inc. Legal terms governing your use of BΛSE platform and services.",
  openGraph: {
    title: "Terms of Service - BΛSE",
    description: "Terms of Service for BaseCo, Inc. Legal terms governing your use of BΛSE platform and services.",
    images: [{
      url: "https://basemyhome.s3.us-east-1.amazonaws.com/opengraph_image.png",
      width: 1200,
      height: 630,
      alt: "BΛSE - 3D Sales & Ownership Platform",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - BΛSE",
    description: "Terms of Service for BaseCo, Inc. Legal terms governing your use of BΛSE platform and services.",
    images: ["https://basemyhome.s3.us-east-1.amazonaws.com/opengraph_image.png"],
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FD] dark:bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-12">
            Last updated: October 15, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Agreement to Our Legal Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We are BaseCo, Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a corporation organized in Delaware, United States. Our registered office in Delaware is 300 Creek View Road, Suite 209, Newark, New Castle County, DE 19711 (registered agent: Universal Registered Agents, Inc.).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We operate the website{" "}
                <a href="https://www.basemyhome.com" className="text-[#F9573A] hover:underline">
                  https://www.basemyhome.com
                </a>{" "}
                (the &ldquo;Site&rdquo;), as well as related products, web applications, APIs, 3D/Unity experiences, dashboards, and services that refer or link to these Legal Terms (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You can contact us by email at{" "}
                <a href="mailto:support@basemyhome.com" className="text-[#F9573A] hover:underline">
                  support@basemyhome.com
                </a>{" "}
                or by mail to BaseCo, Inc., 300 Creek View Road, Suite 209, Newark, DE 19711, United States.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms constitute a legally binding agreement between you (whether personally or on behalf of an entity) (&ldquo;you&rdquo;) and BaseCo, Inc. concerning your access to and use of the Services. BY ACCESSING OR USING THE SERVICES, YOU AGREE TO THESE LEGAL TERMS. IF YOU DO NOT AGREE, DO NOT USE THE SERVICES.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Supplemental terms or documents may be posted on the Services from time to time and are incorporated by reference. We may update these Terms at our discretion. We will indicate updates by revising the &ldquo;Last updated&rdquo; date. Your continued use of the Services after posting means you accept the changes.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The Services are intended for users who are at least 18 years old. Persons under 18 may not use or register for the Services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We recommend printing or saving a copy of these Terms for your records.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Table of Contents
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><a href="#our-services" className="text-[#F9573A] hover:underline">Our Services</a></li>
                <li><a href="#intellectual-property-rights" className="text-[#F9573A] hover:underline">Intellectual Property Rights</a></li>
                <li><a href="#user-representations" className="text-[#F9573A] hover:underline">User Representations</a></li>
                <li><a href="#user-registration" className="text-[#F9573A] hover:underline">User Registration</a></li>
                <li><a href="#purchases-and-payment" className="text-[#F9573A] hover:underline">Purchases and Payment</a></li>
                <li><a href="#refund-policy" className="text-[#F9573A] hover:underline">Refund Policy</a></li>
                <li><a href="#prohibited-activities" className="text-[#F9573A] hover:underline">Prohibited Activities</a></li>
                <li><a href="#user-generated-contributions" className="text-[#F9573A] hover:underline">User Generated Contributions</a></li>
                <li><a href="#contribution-license" className="text-[#F9573A] hover:underline">Contribution License</a></li>
                <li><a href="#third-party-websites-and-content" className="text-[#F9573A] hover:underline">Third-Party Websites and Content</a></li>
                <li><a href="#services-management" className="text-[#F9573A] hover:underline">Services Management</a></li>
                <li><a href="#privacy-policy" className="text-[#F9573A] hover:underline">Privacy Policy</a></li>
                <li><a href="#term-and-termination" className="text-[#F9573A] hover:underline">Term and Termination</a></li>
                <li><a href="#modifications-and-interruptions" className="text-[#F9573A] hover:underline">Modifications and Interruptions</a></li>
                <li><a href="#governing-law" className="text-[#F9573A] hover:underline">Governing Law</a></li>
                <li><a href="#dispute-resolution" className="text-[#F9573A] hover:underline">Dispute Resolution</a></li>
                <li><a href="#corrections" className="text-[#F9573A] hover:underline">Corrections</a></li>
                <li><a href="#disclaimer" className="text-[#F9573A] hover:underline">Disclaimer</a></li>
                <li><a href="#limitations-of-liability" className="text-[#F9573A] hover:underline">Limitations of Liability</a></li>
                <li><a href="#indemnification" className="text-[#F9573A] hover:underline">Indemnification</a></li>
                <li><a href="#user-data" className="text-[#F9573A] hover:underline">User Data</a></li>
                <li><a href="#electronic-communications" className="text-[#F9573A] hover:underline">Electronic Communications, Transactions, and Signatures</a></li>
                <li><a href="#california-users" className="text-[#F9573A] hover:underline">California Users and Residents</a></li>
                <li><a href="#miscellaneous" className="text-[#F9573A] hover:underline">Miscellaneous</a></li>
                <li><a href="#contact-us" className="text-[#F9573A] hover:underline">Contact Us</a></li>
              </ol>
            </section>

            <section className="mb-10" id="our-services">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Our Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                BaseCo provides a SaaS platform for builders and brokers (and, where permitted, homeowners and other stakeholders) to visualize residential properties via interactive 3D digital twins, explore and configure finishes and upgrades, manage property information, coordinate quotes and services with participating third parties, and engage buyers pre-close and post-close through lifecycle tools.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Information provided through the Services is not intended for distribution or use in any jurisdiction where such use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction. Those who access the Services from other locations do so on their own initiative and are responsible for compliance with local laws.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The Services are not tailored to comply with industry-specific regulations (e.g., HIPAA, FISMA, GLBA). Do not use the Services if your data processing would be regulated by such frameworks unless you have a written agreement with us explicitly stating otherwise.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not provide legal, tax, financial, or lending advice. Any quotes, costs, or estimates generated by or through the Services may be provisional and are subject to confirmation by participating builders, brokers, vendors, or lenders. Financing is provided by independent third parties and is subject to their terms and approvals; BaseCo is not a lender.
              </p>
            </section>

            <section className="mb-10" id="intellectual-property-rights">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Our Intellectual Property
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We own or license all intellectual property in the Services, including software, source code, databases, 3D/Unity assets, models, shaders, scenes, interaction logic, API specifications, functionality, website designs, audio, video, text, photographs, graphics (collectively, the &ldquo;Content&rdquo;) and trademarks, service marks, and logos (the &ldquo;Marks&rdquo;). Content and Marks are protected under U.S. and international copyright, trademark, and other IP laws. Content is provided &ldquo;AS IS&rdquo; for your permitted use.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Your License to Use the Services
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Subject to your compliance with these Terms and applicable order forms or subscriptions, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes (or personal use if you are an individual) and to download or print a copy of Content to which you have properly gained access solely for such purposes. Except as expressly permitted, you may not copy, reproduce, aggregate, republish, upload, post, publicly display, encode, translate, transmit, distribute, sell, license, or otherwise exploit the Services, Content, or Marks for any commercial purpose without our prior written permission.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you seek permission beyond this license, contact{" "}
                <a href="mailto:support@basemyhome.com" className="text-[#F9573A] hover:underline">
                  support@basemyhome.com
                </a>
                .
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We reserve all rights not expressly granted to you.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Any breach of this Section is a material breach of these Terms and may result in immediate termination.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Your Submissions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you send us questions, comments, suggestions, ideas, feedback, or other information about the Services (&ldquo;Submissions&rdquo;), you assign to us all intellectual property rights in such Submissions. We may use and disseminate Submissions for any lawful purpose without acknowledgment or compensation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are responsible for your Submissions. You represent and warrant that you have rights to provide them; that they do not infringe third-party rights; that they are not confidential; and that they comply with these Terms and applicable law. You agree to reimburse us for losses caused by your breach of this Section.
              </p>
            </section>

            <section className="mb-10" id="user-representations">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. User Representations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By using the Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                <li>(1) all registration information you submit is true, accurate, current, and complete;</li>
                <li>(2) you will maintain the accuracy of such information;</li>
                <li>(3) you have the legal capacity and agree to comply with these Terms;</li>
                <li>(4) you are not a minor in your jurisdiction;</li>
                <li>(5) you will not access the Services through automated or non-human means (bots, scripts) except as expressly permitted via our APIs;</li>
                <li>(6) you will not use the Services for illegal or unauthorized purposes; and</li>
                <li>(7) your use complies with applicable laws and regulations (including housing, lending, advertising, data privacy, and fair-use rules).</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may suspend or terminate your account if any information is untrue, inaccurate, not current, or incomplete.
              </p>
            </section>

            <section className="mb-10" id="user-registration">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. User Registration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You may be required to register to access certain features. Keep your password confidential and secure. You are responsible for all activities under your account. We may remove, reclaim, or change a username that we deem inappropriate, obscene, or otherwise objectionable.
              </p>
            </section>

            <section className="mb-10" id="purchases-and-payment">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Purchases and Payment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may offer paid subscriptions, seats, usage-based fees, or one-time purchases. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services and to promptly update payment information (including email, payment method, and card expiration) so we can complete your transactions and contact you as needed.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may use third-party payment processors. Those processors&apos; terms and privacy policies will govern the processing of your payment information. Prices are subject to change at any time. All amounts are in U.S. dollars unless stated otherwise. Applicable taxes will be added where required by law.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You agree to pay all charges at the prices then in effect, including any applicable shipping or service fees, and authorize us (or our payment processor) to charge your payment method for such amounts upon placing your order or at subscription renewal. We reserve the right to correct any pricing errors even after payment has been requested or received. We may refuse any order. We may limit or cancel quantities purchased per person, organization, account, payment method, and/or billing/shipping address. We may also refuse orders that in our judgment appear to be placed by dealers, resellers, or distributors without authorization.
              </p>
            </section>

            <section className="mb-10" id="refund-policy">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Refund Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All sales are final unless a specific order form or subscription policy expressly states otherwise. Where required by law, you may be entitled to a refund or credit; any such refunds will be processed in accordance with applicable law and our then-current policies.
              </p>
            </section>

            <section className="mb-10" id="prohibited-activities">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Prohibited Activities
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You may not access or use the Services for any purpose other than that which we make available. Without limiting the foregoing, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Systematically retrieve data or Content to create or compile a database or directory without our written permission.</li>
                <li>Trick, defraud, or mislead us or other users; attempt to learn sensitive account information; or impersonate any person or entity.</li>
                <li>Circumvent, disable, or interfere with security-related features or usage limitations.</li>
                <li>Disparage or harm us or the Services.</li>
                <li>Use information from the Services to harass, abuse, or harm another person.</li>
                <li>Make improper use of support services or submit false reports.</li>
                <li>Use the Services in violation of laws or regulations (including fair housing, lending, advertising standards, privacy, export control, and anti-spam).</li>
                <li>Frame or link to the Services without authorization.</li>
                <li>Upload or transmit viruses, worms, or any code that interrupts, destroys, or limits functionality; or conduct excessive spamming or flooding.</li>
                <li>Engage in automated use (scraping, data mining, robots) without permission, or launch any unauthorized script.</li>
                <li>Delete any copyright or proprietary rights notice from Content.</li>
                <li>Reverse engineer, decompile, or disassemble software, except as permitted by law.</li>
                <li>Copy or adapt software, including but not limited to any code, 3D/Unity assets, shaders, or scene logic.</li>
                <li>Use a buying or procurement agent to make purchases without authorization.</li>
                <li>Collect usernames and/or emails for sending unsolicited email or create accounts by automated means or under false pretenses.</li>
                <li>Use the Services to compete with us or for any revenue-generating endeavor not permitted by these Terms or a written agreement.</li>
                <li>Advertise or sell goods and services through the Services unless expressly authorized.</li>
                <li>Sell or transfer your profile without our written consent.</li>
              </ul>
            </section>

            <section className="mb-10" id="user-generated-contributions">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. User Generated Contributions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Where the Services allow users to submit content (e.g., property data, photos, 3D assets you own, finish selections, configuration sets, comments, project notes, or other materials) (&ldquo;Contributions&rdquo;), Contributions may be visible to other authorized users and third-party partners consistent with your settings and our Privacy Policy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By making Contributions, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                <li>You own or have the necessary rights to your Contributions and grant the licenses described below.</li>
                <li>Your Contributions do not infringe third-party rights, violate law, or contain unlawful, defamatory, obscene, harassing, or otherwise objectionable material.</li>
                <li>Your Contributions are not false, misleading, or deceptive; do not violate privacy or publicity rights; do not include personal data of minors; and do not promote discrimination or violence.</li>
                <li>You have obtained written consents and releases for any identifiable persons in your Contributions as required by law.</li>
                <li>Your Contributions comply with these Terms and any applicable policies.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may remove or limit access to Contributions at our discretion and without notice.
              </p>
            </section>

            <section className="mb-10" id="contribution-license">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Contribution License
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You retain ownership of your Contributions. You grant BaseCo a non-exclusive, worldwide, royalty-free, transferable, sublicensable license to host, store, use, reproduce, modify, adapt, translate, publish, publicly perform, publicly display, distribute, and create derivative works from your Contributions solely to operate, improve, and provide the Services, including enabling 3D visualization, rendering, caching, backups, testing, support, analytics, and integrations. This license ends when your Contributions are deleted from our systems, subject to (a) reasonable archival and backup copies; (b) continued use as part of aggregated or de-identified data sets; and (c) copies retained by third parties to whom you granted access through the Services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                By submitting feedback or suggestions, you grant us the right to use them without obligation or compensation.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not claim ownership over your Contributions. You are solely responsible for them.
              </p>
            </section>

            <section className="mb-10" id="third-party-websites-and-content">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Third-Party Websites and Content
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The Services may contain links to third-party websites, products, services, or content (&ldquo;Third-Party Content&rdquo;), including builder systems, broker tools, mapping providers, financing partners, and vendor marketplaces. We do not control or endorse Third-Party Content and are not responsible for its availability, accuracy, or policies. If you access or use Third-Party Content, you do so at your own risk and these Terms no longer govern. Review the applicable third-party terms and privacy policies. Purchases through third parties are solely between you and the third party; we are not a party to such transactions.
              </p>
            </section>

            <section className="mb-10" id="services-management">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Services Management
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Terms; (2) take legal action against anyone who violates the law or these Terms; (3) in our sole discretion, refuse, restrict, limit, or disable access to any part of the Services (including Contributions); (4) remove or disable files or content that are excessive in size or burdensome to our systems; and (5) otherwise manage the Services to protect our rights and to facilitate proper functioning.
              </p>
            </section>

            <section className="mb-10" id="privacy-policy">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We care about data privacy and security. Please review our Privacy Policy at{" "}
                <a href="https://www.basemyhome.com/privacy" className="text-[#F9573A] hover:underline">
                  https://www.basemyhome.com/privacy
                </a>
                . By using the Services, you agree to our Privacy Policy, which is incorporated into these Terms. The Services are hosted in the United States. If you access the Services from another region with laws differing from U.S. law, you consent to transferring your data to the United States and processing it there.
              </p>
            </section>

            <section className="mb-10" id="term-and-termination">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. Term and Termination
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                These Terms remain in effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION, we may, in our sole discretion and without notice or liability, deny access to and use of the Services (including blocking certain IP addresses) to any person for any reason, including breach of any representation, warranty, covenant, or applicable law. We may terminate or suspend your account and delete any content at any time, without warning.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If we terminate or suspend your account, you are prohibited from registering or creating a new account under your name, a false or borrowed name, or the name of any third party, even if you are acting on behalf of the third party. We reserve the right to pursue civil, criminal, and injunctive relief.
              </p>
            </section>

            <section className="mb-10" id="modifications-and-interruptions">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                14. Modifications and Interruptions
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may change, modify, or remove the contents of the Services at any time for any reason at our sole discretion without notice. We have no obligation to update information on the Services. We are not liable for any modification, price change, suspension, or discontinuance.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other issues or need maintenance, resulting in interruptions, delays, or errors. We may change, revise, update, suspend, discontinue, or otherwise modify the Services at any time without notice. You agree we have no liability for any loss, damage, or inconvenience caused by your inability to access or use the Services during downtime. Nothing obligates us to maintain or support the Services or to provide corrections, updates, or releases unless required by a separate written agreement.
              </p>
            </section>

            <section className="mb-10" id="governing-law">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                15. Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.
              </p>
            </section>

            <section className="mb-10" id="dispute-resolution">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                16. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Informal Negotiations
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Before initiating arbitration, the parties agree to attempt to resolve any dispute, controversy, or claim related to these Terms or the Services (&ldquo;Dispute&rdquo;) informally for thirty (30) days after written notice of the Dispute.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Binding Arbitration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If the parties are unable to resolve a Dispute informally, the Dispute (except as set forth in &ldquo;Exceptions&rdquo; below) shall be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration will be administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules (and, where applicable, the AAA Consumer Rules). Fees and arbitrator compensation shall be governed by AAA rules; if such costs are determined to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, via documents, by phone, or online. The arbitrator shall issue a written decision and must apply applicable law. Unless otherwise required, the arbitration will take place in New Castle County, Delaware. The parties may litigate in court to compel arbitration, stay proceedings, or confirm, modify, vacate, or enter judgment on an award.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced in the state or federal courts located in New Castle County, Delaware. The parties consent to personal jurisdiction and venue in those courts. The U.N. Convention on Contracts for the International Sale of Goods and UCITA do not apply.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <strong>Time Limit:</strong> No Dispute may be brought more than one (1) year after the cause of action accrues.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Restrictions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Arbitration shall be conducted on an individual basis only. To the fullest extent permitted by law: (a) no arbitration shall be joined with any other proceeding; (b) no class arbitration or class action is permitted; and (c) no representative or private attorney general action is permitted.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Exceptions
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The following Disputes are not subject to arbitration: (a) Disputes seeking to enforce or protect a party&apos;s intellectual property rights; (b) Disputes alleging theft, piracy, invasion of privacy, or unauthorized use; and (c) claims for injunctive relief.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If any portion of this Section is found illegal or unenforceable, such portion shall be severed and the remaining provisions shall remain in effect.
              </p>
            </section>

            <section className="mb-10" id="corrections">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                17. Corrections
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The Services may contain typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and other information. We reserve the right to correct any errors and to change or update information at any time without prior notice.
              </p>
            </section>

            <section className="mb-10" id="disclaimer">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                18. Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                THE SERVICES ARE PROVIDED ON AN &ldquo;AS-IS&rdquo; AND &ldquo;AS-AVAILABLE&rdquo; BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE ACCURATE, COMPLETE, RELIABLE, CURRENT, ERROR-FREE, OR UNINTERRUPTED. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES OR ANY HYPERLINKED SITE, AND WE WILL NOT BE A PARTY TO OR RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS.
              </p>
            </section>

            <section className="mb-10" id="limitations-of-liability">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                19. Limitations of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY, OUR AGGREGATE LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, REGARDLESS OF THE FORM OF ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO THE EVENT GIVING RISE TO THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR LIMITATION OF CERTAIN DAMAGES; THESE LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section className="mb-10" id="indemnification">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                20. Indemnification
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You agree to defend, indemnify, and hold us harmless (including our subsidiaries, affiliates, officers, agents, partners, and employees) from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees, made by any third party due to or arising out of: (1) your use of the Services; (2) your breach of these Terms; (3) any breach of your representations and warranties; (4) your violation of a third party&apos;s rights (including IP or privacy rights); or (5) any harmful act toward another user with whom you connected via the Services. We may assume exclusive defense and control of any matter subject to indemnification at your expense; you agree to cooperate with such defense.
              </p>
            </section>

            <section className="mb-10" id="user-data">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                21. User Data
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We will maintain certain data you transmit to the Services for the purpose of operating and improving the Services, as well as data related to your use. Although we perform routine backups, you are solely responsible for your data. We have no liability for any loss or corruption of data, and you waive any right of action arising from such loss or corruption.
              </p>
            </section>

            <section className="mb-10" id="electronic-communications">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                22. Electronic Communications, Transactions, and Signatures
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications and agree that all agreements, notices, disclosures, and other communications we provide electronically satisfy any legal requirement that such communication be in writing. YOU AGREE TO THE USE OF ELECTRONIC SIGNATURES, contracts, orders, and records, and to electronic delivery of notices and records of transactions. You waive any rights under law requiring non-electronic signatures or records.
              </p>
            </section>

            <section className="mb-10" id="california-users">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                23. California Users and Residents
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If any complaint with us is not satisfactorily resolved, you may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
              </p>
            </section>

            <section className="mb-10" id="miscellaneous">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                24. Miscellaneous
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms and any policies or operating rules posted by us on the Services constitute the entire agreement between you and us. Our failure to exercise or enforce any right shall not operate as a waiver. These Terms operate to the fullest extent permitted by law. We may assign our rights and obligations at any time. We are not liable for any loss, damage, delay, or failure to act caused by circumstances beyond our reasonable control. If any provision is unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity and enforceability of remaining provisions. No joint venture, partnership, employment, or agency relationship exists between you and us as a result of these Terms or use of the Services. These Terms will not be construed against us by virtue of having drafted them. You waive any defenses based on the electronic form of these Terms and the absence of signing.
              </p>
            </section>

            <section className="mb-10" id="contact-us">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                25. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To resolve a complaint or receive further information regarding the Services, please contact:
              </p>
              <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">BaseCo, Inc.</p>
                <p className="text-gray-700 dark:text-gray-300">300 Creek View Road, Suite 209</p>
                <p className="text-gray-700 dark:text-gray-300">Newark, DE 19711</p>
                <p className="text-gray-700 dark:text-gray-300">United States</p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  <a href="mailto:support@basemyhome.com" className="text-[#F9573A] hover:underline">
                    support@basemyhome.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
