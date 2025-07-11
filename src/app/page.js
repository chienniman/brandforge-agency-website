"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Calendar,
  Palette,
  Monitor,
  Smartphone,
  Share2,
  Package,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Filter,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    countries: 0,
    years: 0,
  });

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const testimonialTimeoutRef = useRef(null);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & Identity",
      description:
        "Complete brand identity design including logos, color palettes, and brand guidelines.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Palette",
        "Typography",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging and intuitive experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Testing"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Web & App Development",
      description:
        "Full-stack development services for websites and mobile applications.",
      features: ["React/Next.js", "Mobile Apps", "E-commerce", "CMS"],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description:
        "Strategic social media presence to boost your brand engagement.",
      features: [
        "Content Strategy",
        "Post Design",
        "Community Management",
        "Analytics",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your business online.",
      features: ["SEO", "PPC", "Email Marketing", "Analytics"],
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Packaging Design",
      description:
        "Eye-catching packaging that makes your products stand out on shelves.",
      features: [
        "Product Packaging",
        "Label Design",
        "3D Mockups",
        "Print Ready",
      ],
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "TechFlow Rebrand",
      category: "branding",
      image: "/portfolio1.jpeg",
      description: "Complete brand identity redesign for a tech startup",
    },
    {
      id: 2,
      title: "EcoMart E-commerce",
      category: "web",
      image: "/portfolio2.webp",
      description: "Modern e-commerce platform with sustainable focus",
    },
    {
      id: 3,
      title: "Wellness App UI",
      category: "mobile",
      image: "/portfolio3.jpeg",
      description: "Intuitive wellness tracking mobile application",
    },
    {
      id: 4,
      title: "Artisan Coffee Packaging",
      category: "packaging",
      image: "/portfolio4.webp",
      description: "Premium coffee packaging design series",
    },
    {
      id: 5,
      title: "FinTech Dashboard",
      category: "web",
      image: "/portfolio5.jpeg",
      description: "Clean and modern financial dashboard interface",
    },
    {
      id: 6,
      title: "Restaurant Brand Identity",
      category: "branding",
      image: "/portfolio6.jpeg",
      description: "Warm and inviting restaurant brand design",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow",
      content:
        "The team delivered exactly what we needed. Our brand identity is now cohesive and professional.",
      rating: 5,
      avatar: "/user1.jpeg",
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoMart",
      content:
        "Outstanding work on our e-commerce platform. The design is both beautiful and functional.",
      rating: 5,
      avatar: "/user2.webp",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "Their creative approach and attention to detail exceeded our expectations completely.",
      rating: 5,
      avatar: "/user3.jpeg",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Creative Director",
      image: "/team1.jpeg",
      bio: "10+ years of experience in brand design and creative strategy.",
      linkedin: "#",
    },
    {
      name: "Jamie Park",
      role: "UI/UX Designer",
      image: "/team2.webp",
      bio: "Specializes in user-centered design and digital experiences.",
      linkedin: "#",
    },
    {
      name: "Sam Taylor",
      role: "Lead Developer",
      image: "/team3.jpeg",
      bio: "Full-stack developer with expertise in modern web technologies.",
      linkedin: "#",
    },
    {
      name: "Riley Kim",
      role: "Marketing Strategist",
      image: "/team4.webp",
      bio: "Data-driven marketing expert with proven track record.",
      linkedin: "#",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // Animate stats
      const finalStats = {
        clients: 150,
        projects: 300,
        countries: 25,
        years: 8,
      };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setStats({
          clients: Math.floor(finalStats.clients * progress),
          projects: Math.floor(finalStats.projects * progress),
          countries: Math.floor(finalStats.countries * progress),
          years: Math.floor(finalStats.years * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [controls, inView]);

  // Auto-advance testimonials with smooth transitions
  useEffect(() => {
    const autoAdvance = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    };

    testimonialTimeoutRef.current = setTimeout(autoAdvance, 5000);

    return () => {
      if (testimonialTimeoutRef.current) {
        clearTimeout(testimonialTimeoutRef.current);
      }
    };
  }, [currentTestimonial, testimonials.length]);

  const handleTestimonialChange = (direction) => {
    if (testimonialTimeoutRef.current) {
      clearTimeout(testimonialTimeoutRef.current);
    }

    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === "prev") {
        setCurrentTestimonial(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      } else {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
      setIsTransitioning(false);
    }, 300);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const filteredPortfolio =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  BrandForge
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center gap-5">
                <Link
                  href="#home"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#portfolio"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                className="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mobile-menu"
        >
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#home"
              className="block text-gray-900 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            We Create Brands That
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Inspire & Convert
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your business with stunning design, powerful branding, and
            digital experiences that captivate your audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From brand identity to digital experiences, we offer comprehensive
              creative solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Take a look at some of our recent projects and see how we&apos;ve
              helped brands shine.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["all", "branding", "web", "mobile", "packaging"].map(
                (filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter)}
                    className={`capitalize ${
                      activeFilter === filter
                        ? "bg-purple-600 hover:bg-purple-700"
                        : ""
                    }`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {filter === "all" ? "All Work" : filter}
                  </Button>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Badge variant="secondary" className="mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose BrandForge?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We&apos;re not just another design agency. We&apos;re your
                creative partners, dedicated to building brands that make a
                lasting impact.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Creative Excellence
                    </h3>
                    <p className="text-gray-600">
                      Award-winning designs that stand out in crowded markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Fast Delivery
                    </h3>
                    <p className="text-gray-600">
                      Quick turnaround times without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Custom Solutions
                    </h3>
                    <p className="text-gray-600">
                      Tailored strategies that fit your unique business needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/feature1.jpeg"
                  alt="Creative Process"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/feature2.jpeg"
                  alt="Team Collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/feature3.webp"
                  alt="Design Tools"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/feature4.jpeg"
                  alt="Brand Strategy"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={ref}
        className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 mr-2" />
                <span className="text-4xl font-bold">{stats.clients}+</span>
              </div>
              <p className="text-lg">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 mr-2" />
                <span className="text-4xl font-bold">{stats.projects}+</span>
              </div>
              <p className="text-lg">Projects Delivered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 mr-2" />
                <span className="text-4xl font-bold">{stats.countries}+</span>
              </div>
              <p className="text-lg">Countries Served</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 mr-2" />
                <span className="text-4xl font-bold">{stats.years}+</span>
              </div>
              <p className="text-lg">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our amazing
              clients have to say about working with us.
            </p>
          </div>

          <div className="relative">
            <Card className="max-w-4xl mx-auto">
              <CardContent
                className={`p-8 text-center transition-all duration-300 ${
                  isTransitioning
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-current"
                      />
                    )
                  )}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                  &quot;{testimonials[currentTestimonial].content}&quot;
                </blockquote>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleTestimonialChange("prev")}
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleTestimonialChange("next")}
                disabled={isTransitioning}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-purple-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => {
                    if (testimonialTimeoutRef.current) {
                      clearTimeout(testimonialTimeoutRef.current);
                    }
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentTestimonial(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  disabled={isTransitioning}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The creative minds behind our success. We&apos;re passionate
              professionals who love bringing brands to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Link
                      href={member.linkedin}
                      className="text-white hover:text-purple-200"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your brand? Get in touch and let&apos;s create
              something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="branding">
                          Branding & Identity
                        </SelectItem>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="marketing">
                          Digital Marketing
                        </SelectItem>
                        <SelectItem value="packaging">
                          Packaging Design
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Budget Range
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="25k-50k">
                          $25,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hello@brandforge.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="ml-2 text-xl font-bold">BrandForge</span>
              </div>
              <p className="text-gray-300">
                Creating extraordinary brands and digital experiences that drive
                results.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Branding & Identity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    hello@brandforge.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    +1 (555) 123-4567
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    San Francisco, CA
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 BrandForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
