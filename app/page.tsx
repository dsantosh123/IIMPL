"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { submitApplication } from "../server-actions/submitApplication";
import { submitInquiry } from "../server-actions/submitInquiry";
import {
  Phone,
  MessageCircle,
  User,
  Briefcase,
  TrendingUp,
  Users,
  Shield,
  Laptop,
  Banknote,
  GraduationCap,
  UserCheck,
  Target,
  Clock,
  BookOpen,
  MapPin,
  Home,
  Utensils,
  Heart,
  FileCheck,
  Sparkles,
  Send,
  X,
  CheckCircle,
  Loader,
  Menu,
  Rocket,
  ShieldCheck,
  Zap,
  Monitor,
  ShoppingCart,
  Calendar,
  Megaphone,
  Smile,
  Check, 
  Upload,
} from "lucide-react";


export default function CareerWebsite() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Use the real server actions with proper initial state
  const [appFormState, appFormAction] = useFormState(submitApplication, {
    success: false,
    message: "",
    error: ""
  });

  const [inquiryFormState, inquiryFormAction] = useFormState(submitInquiry, {
    success: false,
    message: "",
    error: ""
  });

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const showNotification = (message: string, type: "success" | "error" | "info" = "info") => {
    const notification = document.createElement("div");
    notification.className = `fixed top-4 right-4 z-[70] px-6 py-3 rounded-xl shadow-lg transition-all duration-500 transform translate-x-full max-w-sm`;

    let bgColor = "bg-gradient-to-r from-blue-500 to-blue-600";
    if (type === "error") bgColor = "bg-gradient-to-r from-red-500 to-red-600";
    if (type === "success") bgColor = "bg-gradient-to-r from-emerald-500 to-emerald-600";

    notification.className += ` ${bgColor} text-white`;
    notification.innerHTML = `
      <div class="flex items-start space-x-2">
        <div class="flex-1">
          <p class="font-semibold text-sm leading-relaxed">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200 transition-colors duration-300 flex-shrink-0">
          ×
        </button>
      </div>
    `;

    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.transform = "translateX(0)";
    }, 100);

    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.transform = "translateX(100%)";
        setTimeout(() => notification.remove(), 500);
      }
    }, 5000);
  };

  // Effect to handle notifications for the application form
  useEffect(() => {
    if (appFormState?.success) {
      showNotification(appFormState.message, "success");
      setTimeout(() => {
        closeModal();
      }, 3000);
    } else if (appFormState?.error) {
      showNotification(appFormState.error, "error");
    }
  }, [appFormState]);

  // Effect to handle notifications for the inquiry form
  useEffect(() => {
    if (inquiryFormState?.success) {
      showNotification(inquiryFormState.message, "success");
    } else if (inquiryFormState?.error) {
      showNotification(inquiryFormState.error, "error");
    }
  }, [inquiryFormState]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Floating Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-blue-500/20 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Internacia India
                </h1>
                <p className="text-xs lg:text-sm text-gray-400 font-medium">Mkt Pvt Ltd</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("opportunities")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Opportunities
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>

            {/* Apply Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 lg:px-8 lg:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm lg:text-base flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <Rocket className="w-4 h-4" />
              </button>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-gray-800/95 backdrop-blur-xl rounded-lg mt-2 p-4 space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-gray-300 hover:text-white py-2 px-2 rounded transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-300 hover:text-white py-2 px-2 rounded transition-colors duration-300"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection("opportunities")}
                className="block w-full text-left text-gray-300 hover:text-white py-2 px-2 rounded transition-colors duration-300"
              >
                Opportunities
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-gray-300 hover:text-white py-2 px-2 rounded transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Government Badge */}
          <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 rounded-full bg-gray-800/60 backdrop-blur-xl border border-emerald-500/30 mb-6 lg:mb-8">
            <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 mr-2 lg:mr-3" />
            <span className="text-xs lg:text-sm font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Government Certified Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black mb-6 lg:mb-8 text-white leading-tight">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent block">
              Career Today
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 lg:mb-10 leading-relaxed px-4">
            Step into the future of digital business with India's most trusted career platform.
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent font-bold">
              {" "}
              Designed for ambitious freshers
            </span>{" "}
            ready to excel in the modern workplace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-16 lg:mb-20 px-4">
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 lg:px-12 lg:py-5 rounded-full font-bold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
            >
              <span>Launch Your Career</span>
              <Rocket className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => scrollToSection("opportunities")}
              className="w-full sm:w-auto border-2 border-gray-500 hover:border-blue-500 text-gray-300 hover:text-white hover:bg-blue-500/10 px-8 py-4 lg:px-12 lg:py-5 rounded-full font-semibold text-lg lg:text-xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <span>Explore Opportunities</span>
              <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 lg:p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                ₹20K
              </div>
              <div className="text-gray-300 font-medium">Maximum Salary</div>
              <div className="text-sm text-emerald-400 mt-1">Performance Based</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 lg:p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                18-40
              </div>
              <div className="text-gray-300 font-medium">Age Range</div>
              <div className="text-sm text-blue-400 mt-1">All Welcome</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 lg:p-8 text-center hover:border-blue-500/50 transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                5 Days
              </div>
              <div className="text-gray-300 font-medium">Training Program</div>
              <div className="text-sm text-amber-400 mt-1">Comprehensive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 lg:py-24 relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              Join thousands of successful professionals who started their journey with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Feature 1 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Accelerated Growth
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4">
                Fast-track your career with our proven progression system. From entry-level to leadership roles in
                record time.
              </p>
              <div className="flex items-center text-emerald-400 font-semibold text-sm lg:text-base">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Performance-based promotions
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Expert Mentorship
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4">
                Learn from industry veterans who are invested in your success. Get personalized guidance every step of
                the way.
              </p>
              <div className="flex items-center text-blue-400 font-semibold text-sm lg:text-base">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                One-on-one coaching
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                100% Work Security
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-4">
                Government certified company with rock-solid work security, comprehensive benefits, and long-term
                stability.
              </p>
              <div className="flex items-center text-amber-400 font-semibold text-sm lg:text-base">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                100% opportunity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section id="opportunities" className="py-16 lg:py-24 relative px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Your Dream Career Awaits
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
              A comprehensive opportunity designed for ambitious professionals ready to make their mark
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 lg:p-12 hover:border-blue-500/50 transition-all duration-500">
            {/* Key Highlights Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-4 lg:p-6 mb-8 lg:mb-12 text-center">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">🚀 What Makes This Opportunity Special</h3>
              <div className="grid md:grid-cols-3 gap-4 lg:gap-6 text-white">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-semibold text-sm lg:text-base">No Pressure Environment</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Home className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-semibold text-sm lg:text-base">Work-Life Balance</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-semibold text-sm lg:text-base">High Growth Potential</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-6 lg:space-y-8">
                {/* Work Type */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Laptop className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Work Style
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg">
                      Flexible online/offline arrangements with modern work culture
                    </p>
                    <div className="mt-2 lg:mt-3 inline-block px-3 py-1 lg:px-4 lg:py-2 bg-blue-500/20 text-blue-400 rounded-full text-xs lg:text-sm font-medium">
                      Hybrid Flexibility
                    </div>
                  </div>
                </div>

                {/* Salary Package */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Banknote className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Salary Package
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg">
                      ₹16,000 to ₹25,000 (Performance & skill based increments)
                    </p>
                    <div className="mt-2 lg:mt-3 flex flex-wrap gap-2">
                      <div className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-xs lg:text-sm font-medium">
                        💰 High Earning Potential
                      </div>
                      <div className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-xs lg:text-sm font-medium">
                        📈 Merit-Based Growth
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Requirements */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Education Requirements
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg mb-3">
                      All educational backgrounds welcome - from 10th pass to postgraduate degrees
                    </p>
                    <div className="grid grid-cols-2 gap-1 lg:gap-2 text-xs lg:text-sm">
                      <span className="text-amber-400">• 10th, 12th Pass</span>
                      <span className="text-amber-400">• BA, B.Com, B.Sc</span>
                      <span className="text-amber-400">• M.Com, M.Sc</span>
                      <span className="text-amber-400">• Diploma, B.E, M.E</span>
                      <span className="text-amber-400">• BCA, BBA & More</span>
                      <span className="text-amber-400">• Any Other Degree</span>
                    </div>
                    <div className="mt-2 lg:mt-3 inline-block px-3 py-1 lg:px-4 lg:py-2 bg-amber-500/20 text-amber-400 rounded-full text-xs lg:text-sm font-medium">
                      🎓 Inclusive Opportunity
                    </div>
                  </div>
                </div>

                {/* Age Requirement */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <UserCheck className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Age Criteria
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg">
                      18 to 40 years - Perfect for both fresh graduates and experienced professionals
                    </p>
                    <div className="mt-2 lg:mt-3 inline-block px-3 py-1 lg:px-4 lg:py-2 bg-rose-500/20 text-rose-400 rounded-full text-xs lg:text-sm font-medium">
                      🌟 Wide Age Range
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 lg:space-y-8">
                {/* Core Responsibilities */}
                <div className="p-4 lg:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/30">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Your Role & Impact
                    </h3>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/5 rounded-lg">
                      <Monitor className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" />
                      <span className="text-gray-300 font-medium text-sm lg:text-base">
                        Digital System Management & Operations
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/5 rounded-lg">
                      <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                      <span className="text-gray-300 font-medium text-sm lg:text-base">
                        Online Product Sales & Customer Relations
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/5 rounded-lg">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                      <span className="text-gray-300 font-medium text-sm lg:text-base">
                        Booking Management & Coordination
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 lg:p-3 bg-white/5 rounded-lg">
                      <Megaphone className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400" />
                      <span className="text-gray-300 font-medium text-sm lg:text-base">Official Marketing</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                    <p className="text-emerald-400 font-bold text-center flex items-center justify-center text-sm lg:text-base">
                      <Smile className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />✨ Stress-Free • No Field Work • Growth-Oriented
                      ✨
                    </p>
                  </div>
                </div>

                {/* Work Schedule */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Work Hours
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg">9:00 AM to 4:00 PM - Perfect work-life balance</p>
                    <div className="mt-2 lg:mt-3 inline-block px-3 py-1 lg:px-4 lg:py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-xs lg:text-sm font-medium">
                      ⏰ Employee-Friendly Schedule
                    </div>
                  </div>
                </div>

                {/* Training Program */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Selection Journey
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg">
                      5-day comprehensive training program + final interview (offline)
                    </p>
                    <div className="mt-2 lg:mt-3 flex flex-wrap gap-2">
                      <div className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-pink-500/20 text-pink-400 rounded-full text-xs lg:text-sm font-medium">
                        📚 Skill Development
                      </div>
                      <div className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-rose-500/20 text-rose-400 rounded-full text-xs lg:text-sm font-medium">
                        🎯 Success Guaranteed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4 lg:space-x-6 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-300">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      Office Location
                    </h3>
                    <p className="text-gray-300 text-base lg:text-lg">Ganesh Nagar, Dabha Wadi, Nagpur</p>
                    <p className="text-gray-400 text-sm lg:text-base">
                      Near Sumantai Wasnik Institute of Nursing College
                    </p>
                    <div className="mt-2 lg:mt-3 inline-block px-3 py-1 lg:px-4 lg:py-2 bg-teal-500/20 text-teal-400 rounded-full text-xs lg:text-sm font-medium">
                      📍 Prime Location
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-600">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-center">
                🎁 Exclusive Benefits Package
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center">
                  <Home className="w-10 h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-3 lg:mb-4" />
                  <h4 className="font-bold text-white mb-2 text-sm lg:text-base">Accommodation</h4>
                  <p className="text-gray-300 text-xs lg:text-sm">Comfortable housing at just ₹2,500</p>
                </div>
                <div className="p-4 lg:p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 text-center">
                  <Utensils className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-400 mx-auto mb-3 lg:mb-4" />
                  <h4 className="font-bold text-white mb-2 text-sm lg:text-base">Meals Provided</h4>
                  <p className="text-gray-300 text-xs lg:text-sm">Free nutritious meals daily</p>
                </div>
                <div className="p-4 lg:p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 text-center">
                  <Heart className="w-10 h-10 lg:w-12 lg:h-12 text-red-400 mx-auto mb-3 lg:mb-4" />
                  <h4 className="font-bold text-white mb-2 text-sm lg:text-base">Healthcare</h4>
                  <p className="text-gray-300 text-xs lg:text-sm">Comprehensive medical coverage</p>
                </div>
                <div className="p-4 lg:p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center">
                  <FileCheck className="w-10 h-10 lg:w-12 lg:h-12 text-purple-400 mx-auto mb-3 lg:mb-4" />
                  <h4 className="font-bold text-white mb-2 text-sm lg:text-base">Documentation</h4>
                  <p className="text-gray-300 text-xs lg:text-sm">Complete verification & registration</p>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4 lg:mt-6 text-base lg:text-lg">
                ⭐ <span className="text-emerald-400 font-semibold">Special Offer:</span> First meal and accommodation
                provided FREE after joining!
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 lg:mt-16">
              <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 p-1 rounded-2xl mb-4 lg:mb-6">
                <div className="bg-gray-900 rounded-2xl p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-black mb-3 lg:mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    🚀 Ready to Transform Your Future?
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto">
                    Join the ranks of successful professionals who chose to transform their careers with us. The
                    opportunity is here, the time is now!
                  </p>
                  <button
                    onClick={openModal}
                    className="bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 hover:from-blue-600 hover:via-blue-700 hover:to-emerald-600 text-white px-12 py-4 lg:px-16 lg:py-6 rounded-full font-bold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 mx-auto"
                  >
                    <span>Apply Now & Transform Your Future</span>
                    <Rocket className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 relative px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300">
              Connect with our team and start your career journey today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Team */}
            <div className="space-y-6 lg:space-y-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-center">
                📞 Contact Our Team
              </h3>

              {/* Contact Person 1 */}
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 lg:p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">Pallavi Dandhare</h4>
                    <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                      <a
                        href="tel:8390881115"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-semibold text-base lg:text-lg"
                      >
                        83908 81115
                      </a>
                    </div>
                    <div className="flex gap-2 lg:gap-3">
                      <a
                        href="tel:8390881115"
                        className="flex items-center space-x-2 bg-emerald-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                      >
                        <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://wa.me/08390881115"
                        target="_blank"
                        className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                        rel="noreferrer"
                      >
                        <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Person 2 */}
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 lg:p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">Vansh Kayarkar</h4>
                    <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                      <a
                        href="tel:8975747102"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-semibold text-base lg:text-lg"
                      >
                        8975747102
                      </a>
                    </div>
                    <div className="flex gap-2 lg:gap-3">
                      <a
                        href="tel:8975747102"
                        className="flex items-center space-x-2 bg-emerald-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                      >
                        <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://wa.me/8975747102"
                        target="_blank"
                        className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                        rel="noreferrer"
                      >
                        <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Person 3 */}
              <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 lg:p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">Yash Deshmukh</h4>
                    <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                      <a
                        href="tel:7350514419"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-semibold text-base lg:text-lg"
                      >
                        7350514419
                      </a>
                    </div>
                    <div className="flex gap-2 lg:gap-3">
                      <a
                        href="tel:7350514419"
                        className="flex items-center space-x-2 bg-emerald-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                      >
                        <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>Call</span>
                      </a>
                      <a
                        href="https://wa.me/7350514419"
                        target="_blank"
                        className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                        rel="noreferrer"
                      >
                        <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-center">
                💬 Quick Inquiry
              </h3>
              <form action={inquiryFormAction} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 lg:mb-3">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 lg:px-6 lg:py-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 lg:mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 lg:px-6 lg:py-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 lg:mb-3">Your Message</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    className="w-full px-4 py-3 lg:px-6 lg:py-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                    placeholder="Tell us about your career goals..."
                  ></textarea>
                </div>
                {inquiryFormState.error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <p className="text-red-400 font-semibold text-center flex items-center justify-center text-sm">
                            <X className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                            {inquiryFormState.error}
                        </p>
                    </div>
                )}
                <SubmitInquiryButton />
              </form>

              {/* Direct Contact Options */}
              <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-600 text-center">
                <h4 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4 lg:mb-6">
                  🔥 Need Immediate Assistance?
                </h4>
                <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
                  <a
                    href="tel:8975747102"
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm lg:text-base"
                  >
                    <Phone className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/8975747102"
                    target="_blank"
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-sm lg:text-base"
                    rel="noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 lg:w-6 lg:h-6" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm mt-3 lg:mt-4">
                  ⏰ Available 24/7 for your career queries
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center mt-16 lg:mt-20">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto relative overflow-hidden hover:border-blue-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 opacity-5"></div>
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-black mb-4 lg:mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  🚀 Your Success Story Starts Here
                </h3>
                <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto">
                  Join the ranks of successful professionals who chose to transform their careers with us. The
                  opportunity is here, the time is now!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
                  <button
                    onClick={openModal}
                    className="bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 hover:from-blue-600 hover:via-blue-700 hover:to-emerald-600 text-white px-12 py-4 lg:px-16 lg:py-6 rounded-full font-bold text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                  >
                    <span>Apply Now & Transform Your Future</span>
                    <Rocket className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
                  <div className="text-center">
                    <p className="text-gray-400 text-xs lg:text-sm">or call directly:</p>
                    <a
                      href="tel:8975747102"
                      className="text-emerald-400 font-bold text-base lg:text-lg hover:text-emerald-300 transition-colors duration-300"
                    >
                      8975747102
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 border-t border-gray-700 relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    Internacia India Mrk Pvt Ltd
                  </h3>
                  <p className="text-gray-400 text-xs lg:text-sm">Government Certified Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Empowering careers and building futures through innovative opportunities and professional growth.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-6">Quick Links</h4>
              <div className="space-y-2 lg:space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => scrollToSection("opportunities")}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Opportunities
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm lg:text-base"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-6">Contact Info</h4>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-amber-400" />
                  <span className="text-gray-400 text-sm lg:text-base">Ganesh Nagar, Dabha Wadi, Nagpur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400" />
                  <a
                    href="tel:8975747102"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm lg:text-base"
                  >
                    8975747102
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" />
                  <span className="text-gray-400 text-sm lg:text-base">Government Certified Company</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-6 lg:pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs lg:text-sm mb-4 md:mb-0">
              © 2024 Internacia India Mrk Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-xs lg:text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xs lg:text-sm">f</span>
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xs lg:text-sm">i</span>
                </div>
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xs lg:text-sm">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-gray-800/95 backdrop-blur-xl border border-gray-700 rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
            <div className="p-6 lg:p-12">
              <div className="flex justify-between items-center mb-6 lg:mb-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    🚀 Career Application
                  </h2>
                  <p className="text-sm lg:text-base text-gray-400">Take the first step towards your dream career</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-700 rounded-xl"
                >
                  <X className="w-6 h-6 lg:w-8 lg:h-8" />
                </button>
              </div>

              {appFormState?.success ? (
                <div className="text-center py-8 lg:py-12">
                  <div className="w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Check className="w-10 h-10 lg:w-16 lg:h-16 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    🎉 Application Submitted!
                  </h3>
                  <p className="text-base lg:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Congratulations! Your application has been received. Our team will review it and contact you soon.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-emerald-400 font-semibold text-sm">
                      <Clock className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Expected response time: 24 hours
                    </div>
                    <div className="flex items-center justify-center text-blue-400 font-semibold text-sm">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      For urgent queries:{" "}
                      <a href="tel:8975747102" className="ml-2 hover:text-blue-300 transition-colors duration-300">
                        8975747102
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 lg:px-8 lg:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mx-auto text-sm lg:text-base"
                  >
                    <span>Close</span>
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form action={appFormAction} className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="p-4 lg:p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl border border-blue-500/20">
                    <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4 flex items-center">
                      <User className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-blue-400" />
                      Personal Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Gender *</label>
                        <select
                          name="gender"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                        >
                          <option value="" disabled selected>Select your gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information Section */}
                  <div className="p-4 lg:p-6 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-2xl border border-emerald-500/20">
                    <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4 flex items-center">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-emerald-400" />
                      Contact Details
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">WhatsApp Number *</label>
                        <input
                          type="tel"
                          name="whatsappNumber"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="emailAddress"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Your Location *</label>
                        <input
                          type="text"
                          name="location"
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Job Preference Section */}
                  <div className="p-4 lg:p-6 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-2xl border border-amber-500/20">
                    <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4 flex items-center">
                      <Briefcase className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-amber-400" />
                      Work Preferences
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Preferred Role *</label>
                      <select
                        name="preferredRole"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all duration-300 hover:border-gray-500 text-sm lg:text-base"
                      >
                        <option value="" disabled selected>Select your preferred role</option>
                        <option value="digital-marketing">Digital Marketing Specialist</option>
                        <option value="system-management">System Management</option>
                        <option value="customer-relations">Customer Relations</option>
                        <option value="operations-coordinator">Operations Coordinator</option>
                        <option value="business-development">Business Development</option>
                        <option value="team-coordination">Team Coordination</option>
                      </select>
                    </div>
                  </div>

                  {/* Upload Documents Section */}
                  <div className="p-4 lg:p-6 bg-gradient-to-r from-pink-500/10 to-red-600/10 rounded-2xl border border-pink-500/20">
                    <h3 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4 flex items-center">
                      <Upload className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-pink-400" />
                      Upload Documents (max 4 MB)
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Resume/CV *</label>
                        <FileUploadInput name="resume" accept=".pdf,.doc,.docx" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Aadhar Card *</label>
                        <FileUploadInput name="aadharCard" accept=".pdf,.jpg,.jpeg,.png" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">PAN Card *</label>
                        <FileUploadInput name="panCard" accept=".pdf,.jpg,.jpeg,.png" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Passport Size Photo *</label>
                        <FileUploadInput name="passportPhoto" accept=".jpg,.jpeg,.png" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Section */}
                  <div className="text-center pt-6 lg:pt-8">
                    {appFormState.error && (
                        <div className="mb-4 lg:mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                            <p className="text-red-400 font-semibold flex items-center justify-center text-sm">
                            <X className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />
                            {appFormState.error}
                            </p>
                        </div>
                    )}
                    <div className="mb-4 lg:mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                      <p className="text-emerald-400 font-semibold flex items-center justify-center text-sm">
                        <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 mr-3" />🔒 Your information is secure and will be
                        processed confidentially
                      </p>
                    </div>
                    <SubmitApplicationButton />
                    <p className="text-gray-400 mt-4 text-xs lg:text-sm">
                      By submitting, you agree to our terms and conditions
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// File upload component with proper file handling
function FileUploadInput({ name, accept }: { name: string; accept: string }) {
  const [fileName, setFileName] = useState("Choose File");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "Choose File");
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <input
        ref={fileInputRef}
        type="file"
        name={name}
        accept={accept}
        required
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white hover:border-pink-500 focus:border-pink-500 transition-all duration-300 cursor-pointer flex items-center justify-center text-sm lg:text-base"
      >
        <Upload className="w-4 h-4 mr-2" />
        <span className="truncate">{fileName}</span>
      </button>
    </div>
  );
}

// Separate component for the submit button to use useFormStatus
function SubmitApplicationButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 hover:from-blue-600 hover:via-blue-700 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
    >
      {pending ? (
        <>
          <Loader className="w-5 h-5 lg:w-6 lg:h-6 animate-spin" />
          <span>Processing Application...</span>
        </>
      ) : (
        <>
          <span>Submit Application</span>
          <Send className="w-5 h-5 lg:w-6 lg:h-6" />
        </>
      )}
    </button>
  );
}

// Separate component for the inquiry form button
function SubmitInquiryButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-emerald-500 hover:from-blue-600 hover:via-blue-700 hover:to-emerald-600 text-white py-4 lg:py-5 rounded-xl font-bold text-base lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? (
                <>
                    <Loader className="w-5 h-5 lg:w-6 lg:h-6 animate-spin" />
                    <span>Sending...</span>
                </>
            ) : (
                <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 lg:w-6 lg:h-6" />
                </>
            )}
        </button>
    );

}




