"use client";
import React, { useState, useEffect } from "react";
import Image1 from "../app/assets/1.png";
import Image2 from "../app/assets/2.png";
import {
  Shield,
  Users,
  Brain,
  Calendar,
  BookOpen,
  FileText,
  DollarSign,
  AlertTriangle,
  Clock,
  TrendingUp,
  Smartphone,
  CheckCircle,
  XCircle,
  Mail,
  Menu,
  X,
  ArrowRight,
  Zap,
  Lock,
  Globe,
  Heart,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const MediQubeLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState<Record<string, number>>(
    {}
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interestType: "",
    organization: "",
    message: "",
    consent: false,
  });

  // Animated counter for statistics
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-stat-id");
            const dataValue = entry.target.getAttribute("data-value");

            if (id && dataValue) {
              animateValue(id, 0, parseInt(dataValue), 2000);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll("[data-stat-id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animateValue = (
    id: string,
    start: number,
    end: number,
    duration: number
  ) => {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setAnimatedStats((prev) => ({ ...prev, [id]: Math.floor(current) }));
    }, 16);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24-48 hours.");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#5B8157] to-[#344E41] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded"></div>
              </div>
              <span className="text-2xl font-bold text-[#344E41]">
                MediQube
              </span>
              <Badge
                variant="outline"
                className="hidden sm:inline-flex ml-2 text-[#5B8157] border-[#5B8157]"
              >
                Beta v1.0
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[#616161] hover:text-[#344E41] transition-colors font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-[#616161] hover:text-[#344E41] transition-colors font-medium"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-[#616161] hover:text-[#344E41] transition-colors font-medium"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-[#616161] hover:text-[#344E41] transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#5B8157] hover:bg-[#344E41] text-white"
              >
                Request Early Access
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#344E41]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left text-[#616161] hover:text-[#344E41] py-2 font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="block w-full text-left text-[#616161] hover:text-[#344E41] py-2 font-medium"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="block w-full text-left text-[#616161] hover:text-[#344E41] py-2 font-medium"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-[#616161] hover:text-[#344E41] py-2 font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-[#5B8157] hover:bg-[#344E41] text-white"
              >
                Request Early Access
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#DAD7CD]/30 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#5B8157]/10 text-[#5B8157] border-[#5B8157]/20">
                Revolutionary Healthcare Platform
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#212121] leading-tight">
                73% of Patients Don&apos;t Know Why They&apos;re Taking Their
                Medications.
                <span className="text-[#5B8157]">
                  {" "}
                  We&apos;re Changing That.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#616161] leading-relaxed">
                MediQube is the AI-powered family healthcare command center that
                securely stores medical records, tracks medications, and—most
                importantly—educates families about their treatments. Never lose
                a document. Never wonder about your medications again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-[#5B8157] hover:bg-[#344E41] text-white text-lg px-8 py-6"
                >
                  Request Early Access
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  onClick={() => scrollToSection("features")}
                  size="lg"
                  variant="outline"
                  className="border-[#5B8157] text-[#5B8157] hover:bg-[#5B8157]/10 text-lg px-8 py-6"
                >
                  See How It Works
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="text-[#5B8157]" size={20} />
                  <span className="text-sm font-medium text-[#616161]">
                    HIPAA Compliant
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="text-[#5B8157]" size={20} />
                  <span className="text-sm font-medium text-[#616161]">
                    End-to-End Encrypted
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="text-[#5B8157]" size={20} />
                  <span className="text-sm font-medium text-[#616161]">
                    AI-Powered
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="text-[#5B8157]" size={20} />
                  <span className="text-sm font-medium text-[#616161]">
                    500+ Beta Families
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="relative">
              <div className="relative aspect-[9/19] max-w-sm mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] shadow-2xl flex items-center justify-center border-8 border-[#344E41] overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/5 "></div>
                <Image src={Image1} alt="Family Dashboard" />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#5B8157]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#344E41]/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              The Global Healthcare Crisis
            </h2>
            <p className="text-xl text-[#616161] max-w-3xl mx-auto">
              These aren&apos;t just numbers—they&apos;re families struggling
              with healthcare every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                id: "stat1",
                value: 73,
                suffix: "%",
                icon: Brain,
                label: "Don't know why they take medications",
                color: "#5B8157",
              },
              {
                id: "stat2",
                value: 230,
                suffix: "M",
                icon: FileText,
                label: "Medical records generated daily",
                color: "#344E41",
              },
              {
                id: "stat3",
                value: 2.4,
                suffix: "B",
                icon: DollarSign,
                label: "Wasted on duplicate tests annually",
                color: "#5B8157",
              },
              {
                id: "stat4",
                value: 40,
                suffix: "%",
                icon: AlertTriangle,
                label: "Families lose critical documents",
                color: "#344E41",
              },
              {
                id: "stat5",
                value: 15,
                suffix: " min",
                icon: Clock,
                label: "Wasted in emergencies finding records",
                color: "#5B8157",
              },
              {
                id: "stat6",
                value: 12,
                suffix: "%",
                icon: TrendingUp,
                label: "Use digital health management",
                color: "#344E41",
              },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.id}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="pt-6 text-center">
                    <Icon
                      className="mx-auto mb-4"
                      size={48}
                      style={{ color: stat.color }}
                    />
                    <div
                      className="text-5xl font-bold mb-2"
                      style={{ color: stat.color }}
                      data-stat-id={stat.id}
                      data-value={stat.value}
                    >
                      {animatedStats[stat.id] || 0}
                      {stat.suffix}
                    </div>
                    <p className="text-[#616161] font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-[#DAD7CD]/30 rounded-2xl p-8 border-l-4 border-[#5B8157]">
            <p className="text-lg text-[#212121] leading-relaxed">
              <strong className="text-[#344E41]">
                Right now, your elderly parent might be taking 8 different
                medications.
              </strong>{" "}
              Ask them: &quot;Why are you taking each one?&quot; Most can&apos;t
              answer. They trust the doctor, but they don&apos;t understand.{" "}
              <span className="text-[#5B8157] font-semibold">
                MediQube believes patients deserve to know.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#DAD7CD]/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#5B8157] text-white mb-4">
              Production-Ready v1.0
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              What&apos;s Working Today
            </h2>
            <p className="text-xl text-[#616161] max-w-3xl mx-auto">
              Built with modern technology. Trusted by real families. Available
              now in beta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Secure Cloud Vault",
                description:
                  "HIPAA-compliant end-to-end encrypted storage for all medical documents. Store PDFs from labs, scan physical papers, and never dig through files again.",
                badge: "Live Now",
              },
              {
                icon: Users,
                title: "Family Access Control",
                description:
                  "Hierarchical role-based access for the whole family. Admins manage records, caregivers monitor, and everyone has the right level of access.",
                badge: "Live Now",
              },
              {
                icon: Brain,
                title: "AI Document Classification",
                description:
                  "TensorFlow-powered automatic tagging. Lab reports, prescriptions, discharge summaries—all organized instantly with zero-latency local search.",
                badge: "Live Now",
              },
              {
                icon: Calendar,
                title: "Medication Adherence Tracker",
                description:
                  "Schedule-based logging with visual calendar showing taken/missed status. Push notifications and remote monitoring for family admins.",
                badge: "Live Now",
              },
              {
                icon: BookOpen,
                title: "Medication Intelligence",
                description:
                  "AI-powered explanations of WHY medications are prescribed, ingredient breakdowns, interaction warnings, and plain-language translations.",
                badge: "🔥 Signature Feature",
              },
              {
                icon: Zap,
                title: "Offline-First Architecture",
                description:
                  "Progressive Web App capabilities ensure your healthcare data is accessible anytime, anywhere—even without internet connection.",
                badge: "Live Now",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="border-[#5B8157]/20 hover:border-[#5B8157] hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-[#5B8157]/10 rounded-lg flex items-center justify-center group-hover:bg-[#5B8157] transition-colors">
                      <feature.icon
                        className="text-[#5B8157] group-hover:text-white transition-colors"
                        size={24}
                      />
                    </div>
                    <Badge className="bg-[#5B8157]/10 text-[#5B8157] text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-[#212121] text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#616161] text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Stack Banner */}
          <div className="bg-[#344E41] rounded-2xl p-8 text-center">
            <p className="text-white/80 text-sm uppercase tracking-wider mb-4">
              Built with cutting-edge technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white font-medium">
              <span>Next.js 14</span>
              <span>•</span>
              <span>TensorFlow Lite</span>
              <span>•</span>
              <span>End-to-End Encryption</span>
              <span>•</span>
              <span>PWA-Ready</span>
              <span>•</span>
              <span>Offline-First</span>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Intelligence Deep Dive */}
      <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#5B8157] to-[#344E41] text-white mb-4">
              🌟 Signature Feature
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              The Medication Knowledge Revolution
            </h2>
            <p className="text-xl text-[#616161] max-w-3xl mx-auto">
              Understanding what you take shouldn&apos;t require a medical
              degree.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Problem Side */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <AlertTriangle className="mr-3 text-red-400" size={28} />
                  The Silent Crisis
                </h3>
                <ul className="space-y-4">
                  {[
                    "Your parent takes 8 pills but can't explain why",
                    "Pharmacy labels use incomprehensible medical jargon",
                    "Ingredient lists read like chemical formulas",
                    "No way to check if medications interact dangerously",
                    "Critical questions for doctors go unasked",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <XCircle
                        className="mr-3 mt-1 flex-shrink-0 text-red-400"
                        size={20}
                      />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-gradient-to-br from-[#5B8157] to-[#344E41] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle className="mr-3" size={28} />
                  MediQube&apos;s Solution
                </h3>
                <ul className="space-y-4">
                  {[
                    "Plain-language explanations for every medication",
                    "Ingredient breakdown with interaction warnings",
                    "Visual guides showing how medicine works in your body",
                    "Personalized insights based on your conditions",
                    "AI-generated questions to ask your doctor",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle
                        className="mr-3 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[9/19] max-w-sm mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-[3rem] shadow-2xl flex items-center justify-center border-8 border-[#344E41] overflow-hidden">
              <div className="absolute inset-0 bg-white/5 "></div>
              <Image src={Image2} alt="Medication Intelligence" />
            </div>

            <div>
              <div className="bg-[#DAD7CD]/30 rounded-xl p-6 border-l-4 border-[#5B8157] mb-6">
                <p className="text-2xl font-bold text-[#344E41] mb-2">94%</p>
                <p className="text-[#616161]">
                  of beta users reported feeling{" "}
                  <strong className="text-[#212121]">
                    more confident about their medications
                  </strong>{" "}
                  after using MediQube&apos;s Medication Intelligence feature.
                </p>
              </div>

              <h4 className="text-xl font-bold text-[#212121] mb-4">
                This changes everything:
              </h4>
              <ul className="space-y-3 text-[#616161]">
                <li className="flex items-start">
                  <ArrowRight
                    className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                    size={20}
                  />
                  <span>
                    Scan any prescription and instantly understand its purpose
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight
                    className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                    size={20}
                  />
                  <span>
                    Know exactly what ingredients you&apos;re putting in your
                    body
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight
                    className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                    size={20}
                  />
                  <span>
                    Get alerts about potential drug interactions before
                    it&apos;s too late
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight
                    className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                    size={20}
                  />
                  <span>Ask informed questions during doctor visits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section
        id="roadmap"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#DAD7CD]/20 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              We&apos;re Just Getting Started
            </h2>
            <p className="text-xl text-[#616161] max-w-3xl mx-auto">
              The future of family healthcare is intelligent, proactive, and
              accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Health Monitoring",
                description:
                  "ML models detect gradual deviations in blood pressure, glucose, and vitals before conditions become critical. Integration with Apple Health and wearables.",
                timeline: "Q3 2025",
                icon: TrendingUp,
              },
              {
                title: "Real-Time Drug Interaction Checker",
                description:
                  "Comprehensive database cross-referencing with severity-rated warnings. Automatic updates as new medications are added to any family member's profile.",
                timeline: "Q3 2025",
                icon: AlertTriangle,
              },
              {
                title: "Automated Insurance Claims",
                description:
                  "AI extracts data from bills and reports, pre-fills forms automatically, tracks status, and estimates reimbursements based on policy coverage.",
                timeline: "Q4 2025",
                icon: DollarSign,
              },
              {
                title: "Medical Jargon Translator",
                description:
                  "Secure AI assistant explains complex terms in simple language. Elder-friendly with voice input/output and multi-language support.",
                timeline: "Q4 2025",
                icon: Brain,
              },
              {
                title: "AR Pill Recognition",
                description:
                  "Point your camera at any pill and instantly identify it—name, dosage, purpose, and safety information. Perfect for elderly patients managing multiple medications.",
                timeline: "2026",
                icon: Smartphone,
              },
              {
                title: "Emergency SOS Mode",
                description:
                  "One-button sharing of complete medical history with paramedics, including medications, allergies, conditions, and emergency contacts. Could save lives in critical moments.",
                timeline: "2026",
                icon: Heart,
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="border-[#5B8157]/20 hover:border-[#5B8157] hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B8157]/5 rounded-full blur-2xl group-hover:bg-[#5B8157]/10 transition-colors"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-[#5B8157]/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-[#5B8157]" size={24} />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs text-[#5B8157] border-[#5B8157]"
                      >
                        {feature.timeline}
                      </Badge>
                    </div>
                    <CardTitle className="text-[#212121] text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-[#616161] text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-[#5B8157] to-[#344E41] rounded-2xl p-8 text-white max-w-4xl">
              <p className="text-2xl font-bold mb-2">
                MediQube isn&apos;t just a storage app.
              </p>
              <p className="text-xl">
                It&apos;s the operating system for family healthcare in the AI
                age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Differentiation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              Why MediQube Matters
            </h2>
            <p className="text-xl text-[#616161] max-w-3xl mx-auto">
              Built different. Secured properly. Designed for the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Differentiation */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#212121] flex items-center">
                  <Zap className="mr-2 text-[#5B8157]" />
                  Not Your Typical Health App
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <XCircle
                    className="mr-2 mt-1 flex-shrink-0 text-red-500"
                    size={18}
                  />
                  <div>
                    <p className="font-medium text-[#212121]">Google Health</p>
                    <p className="text-sm text-[#616161]">
                      Discontinued, no family features
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle
                    className="mr-2 mt-1 flex-shrink-0 text-red-500"
                    size={18}
                  />
                  <div>
                    <p className="font-medium text-[#212121]">
                      Apple Health Records
                    </p>
                    <p className="text-sm text-[#616161]">
                      iOS-only, no medication education
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <XCircle
                    className="mr-2 mt-1 flex-shrink-0 text-red-500"
                    size={18}
                  />
                  <div>
                    <p className="font-medium text-[#212121]">Paper Records</p>
                    <p className="text-sm text-[#616161]">
                      Lost, disorganized, not searchable
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start">
                  <CheckCircle
                    className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                    size={18}
                  />
                  <div>
                    <p className="font-medium text-[#212121]">MediQube</p>
                    <p className="text-sm text-[#616161]">
                      Cross-platform, family-first, AI-powered education
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#212121] flex items-center">
                  <Shield className="mr-2 text-[#5B8157]" />
                  Security & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "HIPAA-compliant infrastructure",
                  "End-to-end encryption",
                  "Zero-knowledge architecture",
                  "Regular security audits",
                  "GDPR ready for global expansion",
                  "Your data, your control",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle
                      className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                      size={16}
                    />
                    <span className="text-[#616161] text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Modern Tech */}
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-[#212121] flex items-center">
                  <Globe className="mr-2 text-[#5B8157]" />
                  Built for the Modern World
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Progressive Web App (offline)",
                  "React Server Components",
                  "TensorFlow on-device AI",
                  "Real-time sync across devices",
                  "Voice interface ready",
                  "Accessibility-first design",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle
                      className="mr-2 mt-1 flex-shrink-0 text-[#5B8157]"
                      size={16}
                    />
                    <span className="text-[#616161] text-sm">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Beta Families" },
              { value: "10,000+", label: "Documents Stored" },
              { value: "92%", label: "Adherence Improvement" },
              { value: "4.8/5", label: "User Rating" },
            ].map((metric, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-[#5B8157] mb-2">
                  {metric.value}
                </p>
                <p className="text-[#616161] font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#DAD7CD]/20 to-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#212121] mb-4">
              Join the Healthcare Revolution
            </h2>
            <p className="text-xl text-[#616161]">
              Whether you&apos;re a family seeking early access, an investor
              seeing the future, or a partner wanting to collaborate—we want to
              hear from you.
            </p>
          </div>

          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#212121]">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-[#5B8157]/20 focus:border-[#5B8157]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#212121]">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-[#5B8157]/20 focus:border-[#5B8157]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interestType" className="text-[#212121]">
                    I&apos;m interested as a... *
                  </Label>
                  <select
                    id="interestType"
                    required
                    value={formData.interestType}
                    onChange={(e) =>
                      setFormData({ ...formData, interestType: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-[#5B8157]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5B8157] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="user">Early Access User</option>
                    <option value="investor">Investor / Sponsor</option>
                    <option value="partner">Healthcare Partnership</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-[#212121]">
                    Organization (Optional)
                  </Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="border-[#5B8157]/20 focus:border-[#5B8157]"
                    placeholder="Company or Institution"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#212121]">
                    Tell us about your interest *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="border-[#5B8157]/20 focus:border-[#5B8157] min-h-[120px]"
                    placeholder="Share your story, challenge, or interest in MediQube..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="w-4 h-4 text-[#5B8157] border-gray-300 rounded focus:ring-[#5B8157]"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-sm text-[#616161] cursor-pointer"
                  >
                    I agree to receive updates about MediQube
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#5B8157] hover:bg-[#344E41] text-white text-lg py-6"
                >
                  Get In Touch
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>

              <Separator className="my-8" />

              <div className="space-y-4">
                <div className="flex items-center text-[#616161]">
                  <Mail className="mr-3 text-[#5B8157]" size={20} />
                  <span>contact@mediqube.com</span>
                </div>
                <div className="flex items-center text-[#616161]">
                  <Clock className="mr-3 text-[#5B8157]" size={20} />
                  <span>We typically respond within 24-48 hours</span>
                </div>
                <div className="flex items-center text-[#616161]">
                  <Shield className="mr-3 text-[#5B8157]" size={20} />
                  <span>Your information is kept confidential</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-red-50 border-t-4 border-red-400">
        <div className="max-w-5xl mx-auto">
          <Alert className="border-red-200 bg-white">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <AlertDescription className="ml-2">
              <h3 className="font-bold text-red-900 text-lg mb-3">
                Important Medical Disclaimer
              </h3>
              <div className="text-[#616161] space-y-3 leading-relaxed">
                <p>
                  MediQube is a records management, organization, and
                  educational tool designed to empower patients with
                  information. It is{" "}
                  <strong className="text-[#212121]">
                    NOT a medical device
                  </strong>{" "}
                  and does not provide medical advice, diagnosis, or treatment
                  recommendations.
                </p>
                <p>
                  All medication information is sourced from verified medical
                  databases but should never replace professional medical
                  consultation. Always consult qualified healthcare
                  professionals for medical decisions, treatment changes, or
                  medication concerns.
                </p>
                <p>
                  AI-powered features are assistive tools designed to improve
                  understanding and organization. They should never replace
                  professional medical judgment. Users are responsible for the
                  accuracy of data entered into the system.
                </p>
                <p className="font-semibold text-[#212121]">
                  If you experience a medical emergency, call your local
                  emergency number immediately. Do not rely on any app for
                  emergency medical assistance.
                </p>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#344E41] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded"></div>
                </div>
                <span className="text-2xl font-bold">MediQube</span>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Family healthcare, intelligently organized
              </p>
              <p className="text-white/50 text-xs">
                © 2025 MediQube. All rights reserved.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("roadmap")}
                    className="hover:text-white transition-colors"
                  >
                    Roadmap
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Pricing (Coming Soon)
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <button className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Careers (Coming Soon)
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Press Kit
                  </button>
                </li>
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-bold mb-4">Legal & Social</h4>
              <ul className="space-y-2 text-sm text-white/70 mb-4">
                <li>
                  <button className="hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    HIPAA Compliance
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition-colors">
                    Cookie Policy
                  </button>
                </li>
              </ul>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-white/20 mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/70">
            <p>Built with ❤️ for families who care</p>
            <p>Powered by Next.js & TensorFlow</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MediQubeLanding;
