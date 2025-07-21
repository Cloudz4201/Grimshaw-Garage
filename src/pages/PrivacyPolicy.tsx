import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy Policy for Grimshaw Garage - how we collect, use, and protect your personal information",
    "publisher": {
      "@type": "AutomotiveBusiness",
      "name": "Grimshaw Garage"
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Privacy Policy - Grimshaw Garage"
        description="Learn how Grimshaw Garage collects, uses, and protects your personal information. Our commitment to your privacy and data security."
        keywords="privacy policy, data protection, GDPR, personal information, automotive garage privacy"
        canonicalUrl={window.location.href}
        schema={schema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Personal Information</h4>
                <p>When you use our services, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, address, phone number, and email address</li>
                  <li>Vehicle information (make, model, year, registration number, VIN)</li>
                  <li>Service history and maintenance records</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication preferences and marketing consent</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mt-6">Technical Information</h4>
                <p>When you visit our website, we automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                  <li>Device and operating system information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>We use your personal information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide automotive services and repairs</li>
                  <li>Schedule appointments and send service reminders</li>
                  <li>Process payments and maintain service records</li>
                  <li>Communicate about your vehicle's service needs</li>
                  <li>Send promotional offers (with your consent)</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services and website experience</li>
                  <li>Protect against fraud and ensure security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Payment processors, appointment scheduling systems, and IT support</li>
                  <li><strong>Parts Suppliers:</strong> When ordering specific parts for your vehicle</li>
                  <li><strong>Insurance Companies:</strong> When processing insurance claims or warranty work</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Vehicle Manufacturers:</strong> For warranty claims and recalls</li>
                </ul>
                <p className="mt-4">We never sell your personal information to third parties for marketing purposes.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Access controls and staff training on data protection</li>
                  <li>Regular security audits and updates</li>
                  <li>Secure disposal of physical and digital records</li>
                  <li>Backup and recovery procedures</li>
                </ul>
                <p className="mt-4">While we strive to protect your information, no method of transmission over the internet is 100% secure.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">5. Your Rights (GDPR)</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>Under UK data protection law, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Object:</strong> Opt out of certain processing activities</li>
                  <li><strong>Withdraw Consent:</strong> For marketing communications</li>
                </ul>
                <p className="mt-4">To exercise these rights, contact us using the details below.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">6. Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>Our website uses cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and performance</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Enable social media features</li>
                </ul>
                <p className="mt-4">You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>We retain your personal information for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Records:</strong> 7 years for warranty and legal purposes</li>
                  <li><strong>Financial Records:</strong> 6 years as required by HMRC</li>
                  <li><strong>Marketing Data:</strong> Until you withdraw consent</li>
                  <li><strong>Website Analytics:</strong> 26 months maximum</li>
                </ul>
                <p className="mt-4">Data is securely destroyed when no longer needed.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">8. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>Our website may contain links to third-party services with their own privacy policies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Maps (for location services)</li>
                  <li>Payment processors (Stripe, PayPal)</li>
                  <li>Social media platforms</li>
                  <li>Analytics services (Google Analytics)</li>
                </ul>
                <p className="mt-4">Please review their privacy policies when using these services.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>We may update this privacy policy from time to time. Changes will be:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Posted on this page with the updated date</li>
                  <li>Communicated via email for significant changes</li>
                  <li>Effective immediately unless otherwise stated</li>
                </ul>
                <p className="mt-4">Please review this policy periodically for any updates.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>For questions about this privacy policy or to exercise your rights, contact:</p>
                <div className="bg-slate-800 p-4 rounded-lg mt-4">
                  <p><strong className="text-white">Grimshaw Garage</strong></p>
                  <p>Data Protection Officer</p>
                  <p>Email: privacy@grimshawgarage.co.uk</p>
                  <p>Phone: [Your Phone Number]</p>
                  <p>Address: [Your Full Address]</p>
                </div>
                <p className="mt-4">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                  if you believe we have not handled your data appropriately.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 