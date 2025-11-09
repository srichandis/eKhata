import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Shield,
  Clock,
  FileText,
  MapPin,
  AlertCircle,
} from "lucide-react";
import ProcessTimeline from "./ProcessTimeline";
import ServiceQuoteForm from "./ServiceQuoteForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header/Navigation */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">LegalConnect AI</span>
                <span className="text-xs text-gray-500 mt-0.5 tracking-wide">
                  Legal co-pilot for NRIs
                </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              to="/services"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>
            <a
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <a href="https://wa.me/+919611633346" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex hover:bg-green-50 hover:border-green-300">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">Sign In</Button>
          </div>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-blue-200">For NRIs</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent">
              Get your Bengaluru e‑Khata without flying to India
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              BBMP portals are confusing and still require offline steps. Our
              Bengaluru‑first team combines tech + on‑ground runners + advocate
              hand‑offs to get your e‑Khata/Khata Transfer done—end‑to‑end,
              transparently.
            </p>
            <div className="">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="https://wa.me/+919611633346" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="hover:bg-green-50 hover:border-green-300 transition-all">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
              </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                alt="Modern Bengaluru residential property for NRIs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium text-gray-800">100% Remote Process</span>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-amber-200">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <span className="font-medium text-gray-800">3-6 Week Completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why This Matters</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              An e‑Khata is the BBMP's digital record that links your property
              to you for taxes and municipal services. It's not a title deed—but
              you'll need it for tax payments, rentals, sales, and utilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-red-800">The Challenge for NRIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700">
                  For NRIs, the portal‑only route is practically difficult
                  (Aadhaar/OTP checks, file upload limits, ward‑level document
                  variance) and most cases still require physical verification
                  at the ward office.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-green-800">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  We combine technology with on-ground representatives to handle
                  the entire process for you, including physical verification,
                  document submission, and follow-ups with local authorities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
       <section id="about" className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">About Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thirumalesh (“Thiru”) Gangappa, Founder of LegalConnect AI, 
              is a corporate lawyer with 30 years’ experience—including 
              2 decades in Google legal team. A board member of several 
              tech companies, he focuses on GCC setups, governance, 
              contracts, and real estate legal compliance—delivering 
              AI-powered, on-ground solutions as your Legal Copilot.
            </p>
          </div>
          </div>
        </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">How the e-Khata Process Works</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our streamlined process ensures your e-Khata application is handled
            efficiently from start to finish.
          </p>

          <ProcessTimeline />

          <div className="mt-10 bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
            <p className="text-sm text-gray-600">
              <strong>Typical timelines:</strong> 7–10 days to file; 3–6 weeks
              for clarifications, verification, and approval (ward‑dependent).
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why LegalConnect AI
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <MapPin className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Bengaluru-first</h3>
            <p className="text-muted-foreground">
              Ward‑wise SOPs and realistic SLAs tailored to Bengaluru's unique
              requirements.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <MapPin className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">On-ground Runners</h3>
            <p className="text-muted-foreground">
              Geo‑fenced tasks, photo/time logs, and QC audits for complete
              transparency.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
            <p className="text-muted-foreground">
              Fixed service fees; all government charges are at actuals with
              receipts.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Track-and-trace</h3>
            <p className="text-muted-foreground">
              A live timeline with milestones and notifications to keep you
              informed.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Protection</h3>
            <p className="text-muted-foreground">
              DPDP‑aligned consent, least‑privilege access, India‑hosted
              storage, audit logs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <MessageCircle className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
            <p className="text-muted-foreground">
              Personalized assistance throughout the process with regular
              updates.
            </p>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What You'll Need
        </h2>

        <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Common Documents</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Registered Sale/Gift/Partition/Court Decree document</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                Encumbrance Certificate (EC) and latest BBMP property‑tax
                receipt
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>
                ID proofs (Passport/Aadhaar/PAN), owner & property photos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Previous Khata (if any)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>Bank NOC/Society NOC (if mortgaged / applicable)</span>
            </li>
          </ul>

          <div className="mt-6 bg-muted/30 p-4 rounded-lg">
            <p className="text-sm italic">
              <strong>Pro‑tip:</strong> High‑quality scans (full page, stamps/QR
              visible) and consistent names/addresses reduce ward
              clarifications.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
              </TabsList>
              <TabsContent value="process" className="space-y-4">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">
                    Is the process fully online?
                  </h3>
                  <p className="text-muted-foreground">
                    No. Even after online submission, physical verification and
                    clarifications at the ward office are common.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">Do I need Aadhaar?</h3>
                  <p className="text-muted-foreground">
                    Aadhaar helps for e‑KYC/OTP flows. If you don't have it,
                    we'll route via POA/authorised representative.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">
                    Will you handle my legal drafting?
                  </h3>
                  <p className="text-muted-foreground">
                    Any legal drafting/advice is handled by independent
                    advocates; we facilitate the workflow and logistics.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="documents" className="space-y-4">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">
                    What format should documents be in?
                  </h3>
                  <p className="text-muted-foreground">
                    High-quality PDF scans are preferred. All pages must be
                    clearly visible with stamps and signatures intact.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">
                    How recent should my documents be?
                  </h3>
                  <p className="text-muted-foreground">
                    Tax receipts should be the most recent. Encumbrance
                    Certificate should be obtained within the last 3 months.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="timeline" className="space-y-4">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">
                    How long does it take?
                  </h3>
                  <p className="text-muted-foreground">
                    Most straightforward cases finish in 3–6 weeks after filing;
                    complex inheritance/bifurcation can take longer.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-lg font-bold mb-2">
                    Can the process be expedited?
                  </h3>
                  <p className="text-muted-foreground">
                    While we prioritize all cases, government processing times
                    are outside our control. We provide realistic timelines
                    based on current ward office workloads.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="container py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get your e-Khata process started in just a few minutes. Our team
              will guide you through every step.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Quick 2-minute quote process</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Transparent pricing with no hidden fees</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>End-to-end support from our Bengaluru team</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="https://wa.me/+919611633346" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
          <div className="bg-background rounded-lg border p-6">
            <ServiceQuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <span className="font-bold">LegalConnect AI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Simplifying property documentation for NRIs with transparent,
                end-to-end services.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon would go here */}
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon would go here */}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    e-Khata Creation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Khata Transfer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    POA Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Annual Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Legal Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LegalConnect AI. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Bengaluru, India
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}