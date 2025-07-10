import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Terms of Service for Grimshaw Garage - terms and conditions for our automotive services",
    "publisher": {
      "@type": "AutomotiveBusiness",
      "name": "Grimshaw Garage"
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead
        title="Terms of Service - Grimshaw Garage"
        description="Read the terms and conditions for Grimshaw Garage automotive services. Our service terms, warranties, and customer obligations."
        keywords="terms of service, terms and conditions, automotive service terms, garage terms, service agreement"
        canonicalUrl={window.location.href}
        schema={schema}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  By accessing and using the services of Grimshaw Garage ("we," "our," or "us"), you ("customer," "you," or "your") 
                  agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and Grimshaw Garage regarding your use of our 
                  automotive services, website, and facilities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">2. Services Provided</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>Grimshaw Garage provides automotive services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vehicle servicing and maintenance</li>
                  <li>Brake and suspension repairs</li>
                  <li>Air conditioning service and repair</li>
                  <li>Diagnostic services</li>
                  <li>Logbook servicing</li>
                  <li>General automotive repairs</li>
                  <li>Parts supply and installation</li>
                </ul>
                <p className="mt-4">
                  All services are performed by qualified technicians using industry-standard practices and equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">3. Appointments and Scheduling</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Booking Requirements</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Appointments must be scheduled in advance</li>
                  <li>Service estimates are provided upon request</li>
                  <li>Work authorization is required before commencing repairs</li>
                  <li>Vehicle keys must be provided for scheduled services</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mt-6">Cancellation Policy</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>24-hour notice required for appointment cancellations</li>
                  <li>Late cancellations may incur a service fee</li>
                  <li>No-shows may be charged a minimum service fee</li>
                  <li>Emergency repairs take priority over scheduled maintenance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">4. Pricing and Payment</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Service Charges</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices include VAT where applicable</li>
                  <li>Estimates are valid for 30 days unless otherwise stated</li>
                  <li>Additional work requires customer approval</li>
                  <li>Diagnostic fees may apply for complex issues</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mt-6">Payment Terms</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is due upon completion of work</li>
                  <li>We accept cash, card, and bank transfers</li>
                  <li>Credit accounts available for approved customers</li>
                  <li>Late payment charges may apply to overdue accounts</li>
                  <li>Vehicles may be retained until payment is received</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">5. Warranties and Guarantees</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Service Warranty</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>12-month warranty on labor for most repairs</li>
                  <li>Parts warranty as per manufacturer specifications</li>
                  <li>Warranty covers defects in workmanship only</li>
                  <li>Warranty void if work is performed elsewhere</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mt-6">Warranty Exclusions</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Normal wear and tear items</li>
                  <li>Damage caused by misuse or neglect</li>
                  <li>Consequential or indirect damages</li>
                  <li>Work performed by other parties</li>
                  <li>Used or reconditioned parts (separate warranty applies)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">6. Customer Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>As a customer, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate vehicle information and service history</li>
                  <li>Remove all personal belongings from the vehicle</li>
                  <li>Disclose any known vehicle defects or issues</li>
                  <li>Authorize work before commencement</li>
                  <li>Pay for services in accordance with our payment terms</li>
                  <li>Collect your vehicle within 7 days of completion</li>
                  <li>Comply with health and safety requirements on our premises</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">7. Liability and Insurance</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Our Liability</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We carry comprehensive public liability insurance</li>
                  <li>Liability limited to the cost of remedial work</li>
                  <li>No liability for indirect or consequential losses</li>
                  <li>Customer vehicles are not insured while in our care</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mt-6">Customer Responsibilities</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintain valid vehicle insurance</li>
                  <li>Notify us of any special requirements</li>
                  <li>Report damage within 24 hours of collection</li>
                  <li>Vehicles left over 30 days may be disposed of</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">8. Health and Safety</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>For everyone's safety, please observe the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No smoking on the premises</li>
                  <li>Children must be supervised at all times</li>
                  <li>Customers not permitted in workshop areas</li>
                  <li>Follow all posted safety signs and instructions</li>
                  <li>Report any accidents or incidents immediately</li>
                  <li>Personal protective equipment required in designated areas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">9. Data Protection and Privacy</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  We collect and process personal information in accordance with our Privacy Policy. 
                  This includes vehicle information, contact details, and service history.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data is used for service delivery and customer communication</li>
                  <li>Information may be shared with parts suppliers and manufacturers</li>
                  <li>You have rights regarding your personal data under GDPR</li>
                  <li>We retain service records for warranty and legal purposes</li>
                </ul>
                <p className="mt-4">
                  For full details, please refer to our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">10. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <h4 className="text-lg font-semibold text-white">Complaints Procedure</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Complaints should be raised promptly with management</li>
                  <li>We aim to resolve all issues within 7 working days</li>
                  <li>Written complaints will receive written responses</li>
                  <li>Escalation to trade associations available if needed</li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mt-6">Legal Jurisdiction</h4>
                <p>
                  These Terms are governed by English law, and any disputes shall be subject to the 
                  exclusive jurisdiction of the English courts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">11. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                  upon posting on our website. Continued use of our services constitutes acceptance of any modifications.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Updated terms posted on our website</li>
                  <li>Significant changes communicated to customers</li>
                  <li>Previous terms remain valid for ongoing work</li>
                  <li>Regular review recommended</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">12. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>For questions about these Terms of Service, please contact:</p>
                <div className="bg-slate-800 p-4 rounded-lg mt-4">
                  <p><strong className="text-white">Grimshaw Garage</strong></p>
                  <p>Email: info@grimshawgarage.co.uk</p>
                  <p>Phone: [Your Phone Number]</p>
                  <p>Address: [Your Full Address]</p>
                  <p>Business Hours: Monday - Friday 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 8:00 AM - 4:00 PM</p>
                </div>
                <p className="mt-4">
                  Company Registration: [Your Company Number]<br />
                  VAT Number: [Your VAT Number]
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/50 border-blue-700">
              <CardContent className="p-6">
                <p className="text-blue-100 text-sm">
                  <strong>Important Notice:</strong> These terms form part of the contract between Grimshaw Garage and its customers. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                  If you have any questions or concerns, please speak to a member of our team before proceeding with any work.
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

export default TermsOfService; 