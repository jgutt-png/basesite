import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BASE",
  description:
    "Privacy Policy for BaseCo, Inc. Learn how we collect, use, and protect your information.",
  openGraph: {
    images: ["https://basemyhome.s3.us-east-1.amazonaws.com/opengraph_image.png"],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FD] dark:bg-black py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-12">
            Last Updated: October 15, 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                BaseCo, Inc. (&ldquo;BaseCo,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
                <a href="https://www.basemyhome.com" className="text-[#F9573A] hover:underline">
                  https://www.basemyhome.com
                </a>{" "}
                (the &ldquo;Site&rdquo;) and related digital experiences, including our interactive home visualization platform (&ldquo;Base&rdquo;) and associated tools (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                This Privacy Policy explains how we collect, use, share, and protect information when you interact with our Services. Our goal is to provide transparency and clarity, particularly as we operate in a pre-launch, demonstration phase.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By using our Services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of the Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                We collect only the information necessary to operate our website, improve our demo experience, and respond to inquiries.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Information You Provide to Us
              </h3>
              <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Contact Information:</strong> When you submit a form, request a demo, or contact us, we collect your name, company, email address, and any message or optional details you share.
                </li>
                <li>
                  <strong>Uploaded Materials (Builders/Brokers):</strong> If you share digital assets (such as logos, floorplans, or home imagery) for demo purposes, we collect and store these files only for demonstration and communication.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-3 mb-4 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Analytics Data:</strong> We use analytics tools (e.g., Google Analytics or similar) to collect anonymized data about how visitors use our site—such as pages visited, time on page, and browser type.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> Our website may use cookies to maintain session information or measure usage trends. You can disable cookies in your browser settings.
                </li>
              </ul>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not intentionally collect sensitive personal information (e.g., Social Security numbers, financial details, or health data).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. How We Use Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                <li>Respond to demo requests and inquiries;</li>
                <li>Improve and analyze usage of the BaseCo platform;</li>
                <li>Communicate updates and product information (if you opt in);</li>
                <li>Maintain security and prevent misuse;</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not sell or rent personal information to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. How We Share Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We share limited data with third parties that help us operate our Services:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                <li>Hosting Providers (e.g., AWS, Vercel)</li>
                <li>Analytics Services (e.g., Google Analytics)</li>
                <li>Email Communication Platforms (for demo inquiries and updates)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Each provider processes information on our behalf under confidentiality and data-protection terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may also disclose information if required by law, to protect our rights, or to prevent misuse or fraud.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We retain collected data only as long as necessary for the purposes described:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Contact information:</strong> retained as long as the inquiry or demo relationship is active.
                </li>
                <li>
                  <strong>Uploaded demo materials:</strong> deleted upon request or when no longer needed for demonstration.
                </li>
                <li>
                  <strong>Analytics data:</strong> stored in aggregate, non-identifiable form.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use reasonable administrative, technical, and physical safeguards to protect information from unauthorized access, disclosure, or alteration. However, no system can guarantee absolute security, and you use our Services at your own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Your Choices
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Request deletion or correction of your information by contacting{" "}
                  <a href="mailto:support@basemyhome.com" className="text-[#F9573A] hover:underline">
                    support@basemyhome.com
                  </a>
                  .
                </li>
                <li>
                  Opt out of marketing or demo communications at any time by following unsubscribe links or emailing us directly.
                </li>
                <li>Disable cookies in your browser settings.</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. Links to Other Websites
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our website may link to builder, broker, or partner sites. We are not responsible for the privacy practices or content of those external websites.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our Services are intended for business professionals (builders, brokers, and related organizations). We do not knowingly collect personal information from children under 18 years of age.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. International Users
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                BaseCo operates in the United States. If you access our Services from outside the U.S., you consent to the transfer and processing of your data in the U.S., where data protection laws may differ from those of your jurisdiction.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. Updates will be reflected by a new &ldquo;Last Updated&rdquo; date. Material changes will be posted on our website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact:
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
