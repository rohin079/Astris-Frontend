"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Calculator,
  CheckCircle,
  ChevronRight,
  DollarSign,
  FileText,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
  Shield,
  ChartBar,
  MonitorSmartphone,
  Target,
  Award,
  Clock,
  ChevronDown,
  Laptop,
  Building,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import "./style.css";

// Growth chart data
const growthData = [
  { name: "2019", value: 30 },
  { name: "2020", value: 45 },
  { name: "2021", value: 65 },
  { name: "2022", value: 85 },
  { name: "2023", value: 100 },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-[0%] z-50"
      style={{ scaleX }}
    />
  );
};

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/[^0-9]/g, ""));
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span>
      {count}
      {value.toString().includes("+") ? "+" : ""}
    </span>
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />

      {/* Animated gradient accents */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-96 opacity-10"
          style={{
            background: `linear-gradient(${
              120 * i
            }deg, transparent, rgba(14, 165, 233, 0.15), transparent)`,
            animation: `pulse ${8 + i * 2}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>

    {/* Main Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left lg:max-w-2xl"
      >
        <span className="inline-block text-sky-600 font-semibold mb-4">
          Welcome to Financial Excellence
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Elevate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
            Financial Future
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-600">
          Strategic wealth management and innovative financial solutions for
          sustainable growth
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Schedule Consultation
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-sky-200 hover:bg-sky-50 text-sky-600 px-8 py-6 rounded-xl transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">
                10,000+ Clients
              </div>
              <div className="text-slate-600">Trust our expertise</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">
                Enterprise-grade
              </div>
              <div className="text-slate-600">Security & compliance</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative lg:flex-1 w-full lg:w-auto h-[400px] lg:h-[600px]"
      >
        {/* Main Image */}
        <div className="relative">
          <div className="absolute -inset-2">
            <div className="w-full h-full rotate-2 bg-gradient-to-r from-sky-400 to-blue-500 opacity-30 blur-lg rounded-2xl"></div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/background.jpg"
              alt="Financial Dashboard"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute -left-8 top-1/4 bg-white rounded-xl p-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">
                Portfolio Growth
              </div>
              <div className="text-green-600">+40% Annual Return</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute -right-8 bottom-1/4 bg-white rounded-xl p-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
              <BarChart className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Wealth Growth</div>
              <div className="text-sky-600">30% Higher Returns</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <ChevronDown className="w-8 h-8 text-slate-400" />
    </motion.div>
  </section>
);

const ValuePropositionSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Why Choose Us
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Excellence in Financial Services
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Combining innovative strategies with deep expertise to secure and grow
          your wealth
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Users,
            title: "Expert Advisory Team",
            description:
              "Our team of seasoned financial advisors brings decades of experience from leading global institutions.",
            features: [
              "Certified Financial Planners",
              "Industry Specialists",
              "Dedicated Support",
            ],
          },
          {
            icon: ShieldCheck,
            title: "Security-First Approach",
            description:
              "We prioritize the protection and preservation of your wealth while pursuing strategic growth opportunities.",
            features: [
              "Risk Management",
              "Asset Protection",
              "Compliance Excellence",
            ],
          },
          {
            icon: Laptop,
            title: "Modern Solutions",
            description:
              "Leveraging advanced financial technologies and methodologies to optimize your portfolio performance.",
            features: [
              "Digital Integration",
              "Real-time Analytics",
              "Smart Portfolio Management",
            ],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-8 relative">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-2">
                    <item.icon className="w-8 h-8 text-sky-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6">{item.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <ShieldCheck className="w-3 h-3 text-sky-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-full -mr-12 -mt-12 opacity-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-sky-100 rounded-full -ml-8 -mb-8 opacity-20" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Additional Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 pt-16 border-t border-slate-200"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "$5B+", label: "Assets Managed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Our Process
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Strategic Approach to Success
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          A methodical process designed to optimize your financial performance
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            number: "01",
            title: "Discovery",
            description:
              "Comprehensive analysis of your financial position and goals",
            features: [
              "Financial Assessment",
              "Goal Setting",
              "Risk Profiling",
            ],
          },
          {
            number: "02",
            title: "Strategy",
            description:
              "Developing customized solutions aligned with your objectives",
            features: [
              "Portfolio Planning",
              "Asset Allocation",
              "Risk Management",
            ],
          },
          {
            number: "03",
            title: "Implementation",
            description: "Executing strategies with precision and expertise",
            features: [
              "Portfolio Construction",
              "Tax Optimization",
              "Regular Monitoring",
            ],
          },
          {
            number: "04",
            title: "Optimization",
            description: "Continuous refinement and adaptation of strategies",
            features: [
              "Performance Review",
              "Strategy Adjustment",
              "Regular Updates",
            ],
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-8 relative">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-2xl font-bold text-sky-600">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 mb-6">{step.description}</p>

                <ul className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                  {step.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-sky-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Core Expertise
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Comprehensive Financial Solutions
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Leveraging advanced strategies and technology for optimal financial
          outcomes
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Shield,
            title: "Wealth Protection",
            description:
              "Advanced risk management and wealth preservation strategies",
            features: [
              "Asset Protection",
              "Risk Management",
              "Insurance Solutions",
              "Estate Planning",
            ],
          },
          {
            icon: ChartBar,
            title: "Investment Excellence",
            description:
              "Data-driven investment strategies and portfolio optimization",
            features: [
              "Portfolio Management",
              "Market Analysis",
              "Investment Strategy",
              "Performance Tracking",
            ],
          },
          {
            icon: MonitorSmartphone,
            title: "Digital Innovation",
            description:
              "Modern financial technology integration for enhanced results",
            features: [
              "Digital Platform",
              "Real-time Monitoring",
              "Automated Solutions",
              "Secure Access",
            ],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-8 relative">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-sky-600" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6">{item.description}</p>

                <ul className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-sky-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-full -mr-12 -mt-12 opacity-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-sky-100 rounded-full -ml-8 -mb-8 opacity-20" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const InnovationSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Innovation Hub
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Advanced Financial Technology
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Leveraging cutting-edge solutions for superior financial performance
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: ChartBar,
            title: "AI-Powered Analytics",
            description: "Real-time insights and predictive analysis",
            features: [
              "Market Prediction",
              "Risk Assessment",
              "Portfolio Optimization",
            ],
          },
          {
            icon: Shield,
            title: "Advanced Security",
            description: "Enterprise-grade protection for your assets",
            features: ["Encryption", "Fraud Prevention", "Secure Access"],
          },
          {
            icon: Target,
            title: "Smart Planning",
            description: "Data-driven financial strategy development",
            features: [
              "Goal Mapping",
              "Scenario Analysis",
              "Strategic Planning",
            ],
          },
          {
            icon: Laptop,
            title: "Digital Platform",
            description: "Seamless technology integration",
            features: [
              "Real-time Dashboard",
              "Mobile Access",
              "Automated Reports",
            ],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-6 relative">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4">{item.description}</p>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-slate-700 text-sm"
                    >
                      <div className="w-4 h-4 rounded-full bg-sky-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MetricsSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Our Impact
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Performance Metrics
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Delivering measurable results and consistent excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Award,
            metric: "Top 10",
            label: "Financial Advisory Firm",
            description: "Ranked by industry experts",
          },
          {
            icon: Users,
            metric: "24/7",
            label: "Client Support",
            description: "Always available to help",
          },
          {
            icon: Clock,
            metric: "<48h",
            label: "Response Time",
            description: "Quick service delivery",
          },
          {
            icon: Shield,
            metric: "100%",
            label: "Secure & Compliant",
            description: "Enterprise-grade security",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-8 relative text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-sky-600" />
                </div>

                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {item.metric}
                </div>
                <div className="text-lg font-semibold text-slate-800 mb-2">
                  {item.label}
                </div>
                <p className="text-slate-600 text-sm">{item.description}</p>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-full -mr-12 -mt-12 opacity-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-sky-100 rounded-full -ml-8 -mb-8 opacity-20" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const IndustrySection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Industry Expertise
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Specialized Financial Solutions
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Tailored financial strategies for key growth sectors
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Technology",
            description:
              "Supporting fast-growing tech companies with scalable financial solutions",
            icon: Laptop,
            features: [
              "Growth Strategy",
              "Capital Optimization",
              "Tech Investment",
            ],
          },
          {
            title: "Healthcare",
            description:
              "Navigate complex regulations while optimizing financial performance",
            icon: ShieldCheck,
            features: [
              "Compliance Support",
              "Risk Management",
              "Growth Planning",
            ],
          },
          {
            title: "Manufacturing",
            description: "Streamline operations and maximize profit margins",
            icon: Building,
            features: [
              "Cost Optimization",
              "Supply Chain Finance",
              "Working Capital",
            ],
          },
          {
            title: "E-commerce",
            description:
              "Scale your online business with strategic financial planning",
            icon: DollarSign,
            features: [
              "Cash Flow Management",
              "Payment Solutions",
              "Growth Finance",
            ],
          },
          {
            title: "Professional Services",
            description: "Optimize cash flow and enhance service delivery",
            icon: Users,
            features: [
              "Revenue Optimization",
              "Cost Management",
              "Growth Strategy",
            ],
          },
          {
            title: "Real Estate",
            description:
              "Maximize returns through strategic investment planning",
            icon: MapPin,
            features: [
              "Investment Analysis",
              "Portfolio Management",
              "Risk Assessment",
            ],
          },
        ].map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <industry.icon className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-slate-600 mb-6">{industry.description}</p>

                <ul className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-sky-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionsSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-sky-600 font-semibold mb-2 block">
          Featured Solutions
        </span>
        <h2 className="text-4xl font-bold mb-4 text-slate-900">
          Comprehensive Financial Services
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Advanced solutions designed for modern financial needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: ChartBar,
            title: "Strategic Planning",
            description: "Long-term financial roadmapping and goal setting",
            features: [
              "Market Analysis",
              "Risk Assessment",
              "Growth Strategy",
              "Performance Tracking",
            ],
          },
          {
            icon: Laptop,
            title: "Digital Transformation",
            description:
              "Modernize your financial operations with cutting-edge technology",
            features: [
              "Cloud Integration",
              "Process Automation",
              "Data Analytics",
              "Digital Workflows",
            ],
          },
          {
            icon: ShieldCheck,
            title: "Risk Management",
            description:
              "Comprehensive risk mitigation and protection solutions",
            features: [
              "Compliance Management",
              "Security Protocols",
              "Disaster Recovery",
              "Risk Assessment",
            ],
          },
        ].map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="bg-white hover:shadow-xl transition-all duration-300 group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-sky-600" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-6">{solution.description}</p>

                <ul className="space-y-3 mt-6 pt-6 border-t border-slate-100">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-sky-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl" />

      {/* Animated gradient accents */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-96 opacity-10"
          style={{
            background: `linear-gradient(${
              120 * i
            }deg, transparent, rgba(14, 165, 233, 0.15), transparent)`,
            animation: `pulse ${8 + i * 2}s ease-in-out infinite alternate`,
          }}
        />
      ))}
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>

          <CardContent className="p-12">
            {/* Main Content */}
            <div className="text-center">
              <span className="text-sky-600 font-semibold mb-4 block">
                Take the Next Step
              </span>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                  Financial Future
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our expert financial advisors and
                discover how we can help secure and grow your wealth.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-sky-200 hover:bg-sky-50 text-sky-600 px-8 py-6 rounded-xl transition-all duration-300"
                >
                  <span className="flex items-center">
                    Download Brochure
                    <FileText className="ml-2 w-5 h-5" />
                  </span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Enterprise Security",
                    description: "Bank-grade protection",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Support",
                    description: "Always available",
                  },
                  {
                    icon: Users,
                    title: "10,000+ Clients",
                    description: "Trust our expertise",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-3">
                      <item.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Personalized Strategy",
                    "Tax Optimization",
                    "Risk Management",
                    "Regular Reviews",
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center text-slate-700 text-sm"
                    >
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-sky-600" />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decorative bottom card */}
        <div className="relative mt-8 mx-8">
          <Card className="bg-gradient-to-r from-sky-600 to-blue-700 text-white p-6 text-center">
            <p className="text-lg font-medium">
              Join thousands of satisfied clients who have secured their
              financial future
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="relative py-24 bg-gradient-to-b from-white to-slate-50">
    {/* Background Elements */}
    <div className="absolute inset-0">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Light decorative shapes */}
      <div className="absolute top-0 left-0 -ml-40 -mt-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:pr-8"
        >
          <span className="text-sky-600 font-semibold mb-2 block">
            Contact Us
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">
            Let's Discuss Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
              Financial Future
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Schedule a consultation with our financial experts and discover how
            we can help secure and grow your wealth.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {[
              {
                icon: Phone,
                title: "Call Us",
                text: "+1 (555) 123-4567",
                subtext: "Mon-Fri, 9AM-6PM EST",
              },
              {
                icon: Mail,
                title: "Email",
                text: "contact@financialgroup.com",
                subtext: "24/7 Support Available",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                text: "123 Financial District",
                subtext: "New York, NY 10004",
              },
              {
                icon: Clock,
                title: "Business Hours",
                text: "Monday - Friday",
                subtext: "9:00 AM - 6:00 PM EST",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className="group hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-sky-600 transition-colors duration-300">
                      <contact.icon className="h-6 w-6 text-sky-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-slate-600">{contact.text}</p>
                      <p className="text-sm text-slate-500">
                        {contact.subtext}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-600 focus:border-sky-600 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Trust Indicator */}
              <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600">
                  Your information is protected by 256-bit SSL encryption
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <>
    {/* Pre-Footer Contact Section */}
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Call Us</h3>
                  <p className="text-sky-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email Us</h3>
                  <p className="text-sky-600">contact@financialgroup.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Business Hours
                  </h3>
                  <p className="text-sky-600">Mon - Fri, 9AM - 6PM EST</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Main Footer */}
    <footer className="bg-slate-900">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Upper Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Financial Group
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Secure your financial future with expert guidance and
                comprehensive wealth management solutions tailored to your
                goals.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center px-3 py-2 bg-slate-800 rounded-lg">
                <Shield className="w-4 h-4 text-sky-400 mr-2" />
                <span className="text-sm text-slate-300">SEC Registered</span>
              </div>
              <div className="flex items-center px-3 py-2 bg-slate-800 rounded-lg">
                <Globe className="w-4 h-4 text-sky-400 mr-2" />
                <span className="text-sm text-slate-300">Global Service</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Wealth Management",
                "Financial Planning",
                "Investment Strategy",
                "Retirement Planning",
                "Tax Advisory",
                "Estate Planning",
              ].map((service) => (
                <li key={service} className="group">
                  <Link
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "News & Insights",
                "Resources",
                "Contact",
              ].map((link) => (
                <li key={link} className="group">
                  <Link
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Stay Informed
            </h4>
            <p className="text-slate-300 text-sm mb-4">
              Subscribe to our newsletter for financial insights and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl transition-colors duration-300 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex space-x-4">
                {[
                  { name: "LI", link: "https://linkedin.com" },
                  { name: "TW", link: "https://twitter.com" },
                  { name: "FB", link: "https://facebook.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-sky-600 hover:text-white transition-colors duration-300"
                  >
                    <span className="text-sm font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Financial Group. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Accessibility", href: "/accessibility" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />

      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <ValuePropositionSection />
        <IndustrySection />
        <ProcessSection />
        <ExpertiseSection />
        <InnovationSection />
        <SolutionsSection />
        <MetricsSection />
        <CTASection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// TypeScript interfaces
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
}

interface StatProps {
  value: string;
  label: string;
  icon: React.ElementType;
}
