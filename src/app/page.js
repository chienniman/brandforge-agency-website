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
import Image from "next/image";

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
      title: "品牌與視覺設計",
      description:
        "完整的品牌識別設計，包含標誌、色彩搭配與品牌指南制定。",
      features: [
        "標誌設計",
        "品牌指南",
        "色彩規劃",
        "字體設計",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX 設計",
      description:
        "以使用者為中心的設計解決方案，創造吸引人且直觀的使用體驗。",
      features: ["使用者研究", "線框設計", "原型製作", "使用性測試"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "網站與應用程式開發",
      description:
        "提供網站與行動應用程式的全端開發服務。",
      features: ["React/Next.js", "行動應用", "電商平台", "內容管理系統"],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "社群媒體管理",
      description:
        "策略性社群媒體經營，提升品牌參與度與影響力。",
      features: [
        "內容策略",
        "貼文設計",
        "社群管理",
        "數據分析",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "數位行銷",
      description:
        "數據驅動的行銷策略，助您的事業在線上茁壯成長。",
      features: ["SEO 優化", "廣告投放", "電子郵件行銷", "數據分析"],
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "包裝設計",
      description:
        "引人注目的包裝設計，讓您的產品在貨架上脫穎而出。",
      features: [
        "產品包裝",
        "標籤設計",
        "3D 模型",
        "印刷就緒",
      ],
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "科技新創品牌重塑",
      category: "branding",
      image: "/portfolio1.jpeg",
      description: "為科技新創公司進行完整品牌識別重新設計",
    },
    {
      id: 2,
      title: "環保電商平台",
      category: "web",
      image: "/portfolio2.webp",
      description: "注重永續發展的現代化電商平台",
    },
    {
      id: 3,
      title: "健康管理應用程式",
      category: "mobile",
      image: "/portfolio3.jpeg",
      description: "直觀易用的健康追蹤行動應用程式",
    },
    {
      id: 4,
      title: "職人咖啡包裝設計",
      category: "packaging",
      image: "/portfolio4.webp",
      description: "精品咖啡包裝設計系列",
    },
    {
      id: 5,
      title: "金融科技儀表板",
      category: "web",
      image: "/portfolio5.jpeg",
      description: "簡潔現代的金融儀表板介面",
    },
    {
      id: 6,
      title: "餐廳品牌識別",
      category: "branding",
      image: "/portfolio6.jpeg",
      description: "溫馨親切的餐廳品牌設計",
    },
  ];

  const testimonials = [
    {
      name: "陳志明",
      role: "執行長, 科技新創",
      content:
        "團隊完美交付了我們所需要的。我們的品牌識別現在既一致又專業。",
      rating: 5,
      avatar: "/user1.jpeg",
    },
    {
      name: "王美玲",
      role: "創辦人, 環保電商",
      content:
        "在電商平台上的傑出工作。設計既美觀又實用。",
      rating: 5,
      avatar: "/user2.webp",
    },
    {
      name: "李雅婷",
      role: "行銷總監",
      content:
        "他們的創意方法和對細節的關注完全超越了我們的期望。",
      rating: 5,
      avatar: "/user3.jpeg",
    },
  ];

  const team = [
    {
      name: "Boris Chen",
      role: "創意總監",
      image: "/team1.jpeg",
      bio: "擁有 10 年以上品牌設計與創意策略經驗。",
      linkedin: "#",
    },
    {
      name: "林佳穎",
      role: "UI/UX 設計師",
      image: "/team2.webp",
      bio: "專精於以使用者為中心的設計與數位體驗。",
      linkedin: "#",
    },
    {
      name: "張志豪",
      role: "首席開發者",
      image: "/team3.jpeg",
      bio: "精通現代網頁技術的全端開發者。",
      linkedin: "#",
    },
    {
      name: "黃雅文",
      role: "行銷策略師",
      image: "/team4.webp",
      bio: "數據驅動的行銷專家，擁有豐富成功經驗。",
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
                  boris.software
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
                  首頁
                </Link>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  服務項目
                </Link>
                <Link
                  href="#portfolio"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  作品集
                </Link>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  關於我們
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-purple-600 px-3 py-2 text-base font-medium transition-colors"
                >
                  聯絡我們
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                開始合作
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
              首頁
            </Link>
            <Link
              href="#services"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              服務項目
            </Link>
            <Link
              href="#portfolio"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              作品集
            </Link>
            <Link
              href="#about"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              關於我們
            </Link>
            <Link
              href="#contact"
              className="block text-gray-600 hover:text-purple-600 py-2 text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              聯絡我們
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                開始合作
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
            我們創造品牌
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              啟發靈感 × 促進轉換
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            以令人驚豔的設計、強大的品牌力與吸引受眾的數位體驗，為您的事業注入新生命。
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
              免費諮詢報價
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              查看我們的作品
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              我們的服務
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              從品牌識別到數位體驗，我們為現代企業提供全方位的創意解決方案。
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
              我們的作品
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              看看我們最近的專案，了解我們如何幫助品牌發光發熱。
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
                    {filter === "all" ? "全部作品" : 
                     filter === "branding" ? "品牌設計" :
                     filter === "web" ? "網站開發" :
                     filter === "mobile" ? "行動應用" : "包裝設計"}
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
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={"0"}
                      width={"0"}
                      sizes="100vw"
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
                為什麼選擇 boris.software？
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                我們不只是另一家設計公司。我們是您的創意夥伴，致力於打造具有持久影響力的品牌。
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      創意卓越
                    </h3>
                    <p className="text-gray-600">
                      獲獎設計，在競爭激烈的市場中脫穎而出。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      快速交付
                    </h3>
                    <p className="text-gray-600">
                      快速交付時程，品質絕不妥協。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      客製化解決方案
                    </h3>
                    <p className="text-gray-600">
                      量身打造符合您獨特業務需求的策略。
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
              <p className="text-lg">滿意客戶</p>
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
              <p className="text-lg">完成專案</p>
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
              <p className="text-lg">服務國家</p>
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
              <p className="text-lg">年經驗</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              客戶怎麼說
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              不要只聽我們說。以下是我們優秀客戶對與我們合作的真實感想。
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
              認識我們的團隊
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              成功背後的創意大腦。我們是充滿熱忱的專業團隊，熱愛讓品牌重獲新生。
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
              讓我們一起合作
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              準備好改造您的品牌了嗎？與我們聯繫，一起創造令人驚豔的作品。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">傳送訊息給我們</CardTitle>
                  <CardDescription>
                    填寫下方表單，我們將在 24 小時內回覆您。
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        姓名
                      </label>
                      <Input id="name" placeholder="您的姓名" />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        電子郵件
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
                      專案類型
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="選擇專案類型" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="branding">
                          品牌與視覺設計
                        </SelectItem>
                        <SelectItem value="web">網站開發</SelectItem>
                        <SelectItem value="mobile">行動應用程式</SelectItem>
                        <SelectItem value="marketing">
                          數位行銷
                        </SelectItem>
                        <SelectItem value="packaging">
                          包裝設計
                        </SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      預算範圍
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="選擇預算範圍" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">NT$150,000 - NT$300,000</SelectItem>
                        <SelectItem value="10k-25k">
                          NT$300,000 - NT$750,000
                        </SelectItem>
                        <SelectItem value="25k-50k">
                          NT$750,000 - NT$1,500,000
                        </SelectItem>
                        <SelectItem value="50k+">NT$1,500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      訊息內容
                    </label>
                    <Textarea
                      id="message"
                      placeholder="請告訴我們您的專案需求..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    傳送訊息
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  聯絡資訊
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">電子郵件</p>
                      <p className="text-gray-600">hello@boris.software</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">電話</p>
                      <p className="text-gray-600">+886 912-345-678</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-medium text-gray-900">地址</p>
                      <p className="text-gray-600">台北市, 台灣</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  追蹤我們
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
                <span className="ml-2 text-xl font-bold">boris.software</span>
              </div>
              <p className="text-gray-300">
                創造卓越品牌與數位體驗，帶來實際成果。
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">服務項目</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    品牌與視覺設計
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    網站開發
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    UI/UX 設計
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    數位行銷
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">公司資訊</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    關於我們
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    我們的團隊
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    職涯機會
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    聯絡我們
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">聯絡方式</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    hello@boris.software
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    +886 912-345-678
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    台北市, 台灣
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 boris.software. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
