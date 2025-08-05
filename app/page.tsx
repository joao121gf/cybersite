import {
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Code,
  Palette,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cybersite - Criação de Sites Profissionais | Líder no Brasil | A partir de R$40/mês",
  description:
    "🏆 Cybersite é líder em criação de sites profissionais no Brasil. ✅ Sites responsivos ✅ SEO otimizado ✅ Performance máxima ✅ Suporte 24/7. Planos a partir de R$40/mês. Transforme seu negócio online hoje mesmo!",
  keywords: [
    "Cybersite",
    "criação de sites",
    "desenvolvimento web",
    "sites profissionais",
    "webdesign",
    "SEO",
    "sites responsivos",
    "agência digital",
    "programação web",
    "e-commerce",
    "loja virtual",
    "landing page",
  ],
  alternates: {
    canonical: "https://cybersite.com.br",
  },
  openGraph: {
    title: "Cybersite - Criação de Sites Profissionais | Líder no Brasil",
    description:
      "Líder em criação de sites profissionais. Sites responsivos, SEO otimizado e máxima performance. A partir de R$40/mês.",
    url: "https://cybersite.com.br",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersite - Criação de Sites Profissionais",
      },
    ],
  },
}

export default function CybersitePage() {
  const whatsappNumber = "5511999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos da Cybersite para criar meu site profissional."

  const services = [
    {
      icon: <Globe className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Sites Responsivos",
      description:
        "Desenvolvemos sites profissionais que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência única para seus clientes em smartphones, tablets e desktops.",
    },
    {
      icon: <Zap className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Performance Otimizada",
      description:
        "Sites com carregamento ultra-rápido, otimizados para SEO e com as melhores práticas de desenvolvimento web. Máxima velocidade e conversão garantidas.",
    },
    {
      icon: <Smartphone className="h-6 w-6 md:h-8 md:w-8" />,
      title: "Design Moderno",
      description:
        "Criamos interfaces atrativas e funcionais que convertem visitantes em clientes. Design exclusivo que representa a identidade da sua marca.",
    },
  ]

  const features = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas de programação",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design Único",
      description: "Layouts personalizados para seu negócio",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Segurança Máxima",
      description: "Proteção avançada contra ameaças",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "SEO Otimizado",
      description: "Apareça no topo do Google",
    },
  ]

  const portfolioItems = [
    {
      title: "Loja de artigos para piscina",
      category: "Natural Piscina",
      image: "/1.png?height=300&width=400&text=E-commerce+Fashion",
      alt: "Loja de artigos completos para piscina",
    },
    {
      title: "Website de academia",
      category: "RatsFit",
      image: "/2.png?height=300&width=400&text=Clinica+Medica",
      alt: "Site institucional para apresentar uma academia desenvolvido pela Cybersite",
    },
    {
      title: "Provedora de internet",
      category: "IP Scape",
      image: "/ipscape.png?height=300&width=400&text=Restaurante+Gourmet",
      alt: "Site feito para um provedor de internet",
    },
    {
      title: "Artigos para piscina naturais",
      category: "Cascatas Arte",
      image: "/3.png?height=300&width=400&text=Consultoria+Empresarial",
      alt: "Landing page para Artigos para piscina naturais",
    },
    {
      title: "Treinamento especializado em Gás",
      category: "Macedo Serviços",
      image: "/5.png?height=300&width=400&text=Academia+Fitness",
      alt: "Site de Treinamento especializado em Gás",
    },
    {
      title: "Automações Empresariais",
      category: "UP Automações",
      image: "/4.png?height=300&width=400&text=Escola+Idiomas",
      alt: "Automações Empresariais",
    },
  ]

  const plans = [
    {
      name: "Essencial",
      price: "40",
      description: "Perfeito para começar seu negócio online",
      features: [
        "Site de até 5 páginas otimizadas",
        "Design responsivo profissional",
        "Otimização básica para SEO",
        "Formulário de contato integrado",
        "Suporte por email",
        "Hospedagem inclusa por 12 meses",
        "Certificado SSL gratuito",
      ],
      popular: false,
    },
    {
      name: "Profissional",
      price: "80",
      description: "Ideal para negócios em crescimento",
      features: [
        "Site de até 10 páginas otimizadas",
        "Design personalizado exclusivo",
        "SEO avançado e otimização completa",
        "Integração com redes sociais",
        "Google Analytics e relatórios",
        "Suporte prioritário 24/7",
        "Blog integrado",
        "Backup automático",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "150",
      description: "Para empresas estabelecidas",
      features: [
        "Site com páginas ilimitadas",
        "E-commerce completo integrado",
        "Sistema de blog avançado",
        "Suporte a múltiplos idiomas",
        "Backup automático diário",
        "Suporte técnico 24/7",
        "Consultoria SEO mensal",
        "Relatórios de performance",
      ],
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      business: "Boutique Elegance",
      content:
        "A Cybersite transformou completamente minha loja online! As vendas aumentaram 300% no primeiro mês após o lançamento do novo site. Recomendo para todos os empresários!",
      rating: 5,
      image: "/foto.png?height=60&width=60&text=Maria+Silva",
    },
    {
      name: "João Santos",
      business: "Consultoria JS",
      content:
        "Profissionais excepcionais da Cybersite! Entregaram exatamente o que eu precisava para minha consultoria, no prazo e com qualidade impecável. Meu site aparece no topo do Google!",
      rating: 5,
      image: "/homem.png?height=60&width=60&text=Joao+Santos",
    },
    {
      name: "Ana Costa",
      business: "Clínica Bem Estar",
      content:
        "Site lindo, rápido e funcional criado pela Cybersite. Meus pacientes adoraram a facilidade para agendar consultas online. Aumentou muito minha clientela!",
      rating: 5,
      image: "/mulher.png?height=60&width=60&text=Ana+Costa",
    },
  ]

  const stats = [
    { number: "500+", label: "Sites Criados" },
    { number: "98%", label: "Clientes Satisfeitos" },
    { number: "24h", label: "Tempo de Resposta" },
    { number: "5 Anos", label: "de Experiência" },
  ]

  const faqData = [
    {
      question: "Por que escolher a Cybersite para criação de sites?",
      answer:
        "A Cybersite é líder em criação de sites profissionais no Brasil, com mais de 5 anos de experiência e 500+ sites criados. Oferecemos sites otimizados para SEO, responsivos e com suporte 24/7.",
    },
    {
      question: "Quanto custa para criar um site profissional?",
      answer:
        "Nossos planos começam a partir de R$40/mês, incluindo hospedagem, suporte e manutenção. Oferecemos soluções para todos os tipos de negócios, desde pequenas empresas até grandes corporações.",
    },
    {
      question: "Quanto tempo leva para criar um site?",
      answer:
        "O prazo médio é de 7 a 15 dias úteis, dependendo da complexidade do projeto. Sites simples podem ficar prontos em até 5 dias úteis. Garantimos entrega no prazo acordado.",
    },
    {
      question: "A Cybersite oferece suporte após a criação do site?",
      answer:
        "Sim! Oferecemos suporte técnico 24/7, manutenção, atualizações de segurança e backup automático para todos os nossos clientes. Seu site sempre funcionando perfeitamente.",
    },
    {
      question: "Os sites são otimizados para aparecer no Google?",
      answer:
        "Todos os nossos sites são desenvolvidos com SEO otimizado desde o início. Utilizamos as melhores práticas para garantir que seu site apareça no topo dos resultados de busca do Google.",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-600/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-blue-400/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 md:w-72 md:h-72 bg-blue-500/8 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 backdrop-blur-sm bg-slate-950/95">
          <div className="max-w-7xl mx-auto px-3 py-2 sm:px-4 sm:py-3 md:py-4">
            <nav className="flex items-center justify-between" role="navigation" aria-label="Menu principal">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Cybersite
                </span>
              </div>

              <div className="hidden lg:flex items-center space-x-8">
                <a
                  href="#home"
                  className="hover:text-blue-400 transition-colors text-base"
                  aria-label="Ir para seção inicial"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="hover:text-blue-400 transition-colors text-base"
                  aria-label="Ver nossos serviços"
                >
                  Serviços
                </a>
                <a
                  href="#portfolio"
                  className="hover:text-blue-400 transition-colors text-base"
                  aria-label="Ver nosso portfólio"
                >
                  Portfólio
                </a>
                <a
                  href="#plans"
                  className="hover:text-blue-400 transition-colors text-base"
                  aria-label="Ver nossos planos"
                >
                  Planos
                </a>
                <a
                  href="#testimonials"
                  className="hover:text-blue-400 transition-colors text-base"
                  aria-label="Ver depoimentos"
                >
                  Depoimentos
                </a>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors text-base"
                  aria-label="Entre em contato"
                >
                  Contato
                </a>
              </div>

              <Link
                href={`https://wa.me/${19982296177}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm px-4 py-2 h-9"
                  aria-label="Contratar criação de site via WhatsApp"
                >
                  <span className="hidden sm:inline">Quero meu site</span>
                  <span className="sm:hidden">Contratar</span>
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section - 100vh */}
        <section id="home" className="relative h-screen flex items-center justify-center pt-16">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/90"></div>

          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-3 md:mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs md:text-sm mx-auto">
                🏆 Líder em Criação de Sites no Brasil
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight px-2">
                <span className="block">Criação de Sites</span>
                <span className="block">Profissionais</span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent block mt-1 md:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                  A partir de R$40/mês
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-xl text-slate-300 mb-4 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
                Desenvolvemos sites responsivos e otimizados que transformam visitantes em clientes e fazem seu negócio
                crescer online.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
                <Link
                  href={`https://wa.me/${19982296177}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-sm md:text-lg px-6 md:px-8 h-12 md:h-14"
                    aria-label="Solicitar orçamento para criação de site via WhatsApp"
                  >
                    Quero meu site agora
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="#portfolio" scroll={true}>
  <Button
    size="lg"
    variant="outline"
    className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent text-sm md:text-lg px-6 md:px-8 h-12 md:h-14"
    aria-label="Ver portfólio de sites criados"
  >
    Ver nossos trabalhos
  </Button>
</Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20 relative" aria-labelledby="stats-heading">
          <div className="max-w-5xl mx-auto px-4">
            <h2 id="stats-heading" className="sr-only">
              Estatísticas da Cybersite
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-20 relative" aria-labelledby="features-heading">
          <div className="max-w-5xl mx-auto px-4">
            <h2 id="features-heading" className="sr-only">
              Características dos nossos sites
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full"
                >
                  <CardContent className="p-3 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-2 md:mb-4 mx-auto text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-1 md:mb-2 text-xs md:text-base">{feature.title}</h3>
                    <p className="text-slate-300 text-xs md:text-sm leading-tight">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 relative" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="services-heading" className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Nossos Serviços de{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Criação de Sites
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
                Oferecemos soluções completas em <strong>criação de sites profissionais</strong> para empresas de todos
                os portes, com foco em performance, conversão e resultados excepcionais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full"
                >
                  <CardHeader className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-white text-lg md:text-xl mb-2">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-2">
                    <CardDescription className="text-slate-300 text-sm md:text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-20 relative" aria-labelledby="portfolio-heading">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="portfolio-heading" className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
                Nosso{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Portfólio
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
                Veja alguns dos <strong>sites profissionais</strong> que desenvolvemos para empresas de diversos
                segmentos. Cada projeto é único e desenvolvido com máxima qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/logo1.svg"}
                      alt={item.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <Badge className="mb-2 bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-sm md:text-base">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-12 md:py-20 relative" aria-labelledby="plans-heading">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="plans-heading" className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
                Planos de Criação de Sites que{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Cabem no seu Bolso
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
                Escolha o plano ideal para seu negócio e comece a vender online hoje mesmo. Todos os planos incluem
                hospedagem, suporte técnico e otimização completa para SEO.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 h-full ${plan.popular ? "ring-2 ring-blue-500" : ""}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs">
                      Mais Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center p-4 md:p-6">
                    <CardTitle className="text-white text-xl md:text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-slate-300 text-sm md:text-base">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl md:text-4xl font-bold text-white">R${plan.price}</span>
                      <span className="text-slate-400 text-sm md:text-base">/mês</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-300 text-sm md:text-base">
                          <CheckCircle
                            className="h-4 w-4 md:h-5 md:w-5 text-blue-500 mr-3 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`https://wa.me/${19982296177}?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${plan.name} de R$${plan.price}/mês para criação do meu site profissional. Gostaria de mais informações.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block"
                    >
                      <Button
                        className={`w-full text-sm md:text-base ${plan.popular ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600" : "bg-slate-800 hover:bg-slate-700"}`}
                        aria-label={`Escolher plano ${plan.name} para criação de site`}
                      >
                        Escolher Plano {plan.name}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 relative" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="testimonials-heading" className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
                O que nossos{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Clientes Dizem
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
                Veja como a <strong>Cybersite</strong> transformou negócios com sites profissionais e resultados reais
                que superam expectativas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 backdrop-blur-sm h-full">
                  <CardHeader className="p-4 md:p-6">
                    <div
                      className="flex items-center space-x-1 mb-3"
                      role="img"
                      aria-label={`Avaliação ${testimonial.rating} estrelas`}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div className="flex items-center space-x-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Foto de ${testimonial.name}`}
                        width={60}
                        height={60}
                        className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <CardTitle className="text-white text-base md:text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-blue-400 text-sm md:text-base">
                          {testimonial.business}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0">
                    <blockquote className="text-slate-300 italic text-sm md:text-base">
                      "{testimonial.content}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 relative" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Perguntas{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Frequentes
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto px-4">
                Tire suas dúvidas sobre criação de sites profissionais
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                  <CardHeader className="p-4 md:p-6 pb-1 md:pb-2">
                    <CardTitle className="text-white text-lg md:text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-1 md:pt-2">
                    <p className="text-slate-300 text-sm md:text-base">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 relative" aria-labelledby="contact-heading">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="contact-heading" className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4">
                Entre em Contato para{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Criar seu Site
                </span>
              </h2>
              <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto px-4">
                Fale com a <strong>Cybersite</strong> e descubra como podemos transformar seu negócio com um site
                profissional que converte e vende.{" "}
                <em>Atendemos todo o Brasil, incluindo Santa Bárbara d'Oeste e Americana.</em>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Fale Conosco</h3>
                <address className="space-y-6 not-italic">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">Telefone</p>
                      <p className="text-slate-300 text-sm md:text-base">
                        <a href="tel:+5511999999999" className="hover:text-blue-400 transition-colors">
                          (19) 98229-6177
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">Email</p>
                      <p className="text-slate-300 text-sm md:text-base">
                        <a href="mailto:contato@cybersite.com.br" className="hover:text-blue-400 transition-colors">
                          contato@cybersite.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base">Atendimento</p>
                      <p className="text-slate-300 text-sm md:text-base">Todo o Brasil</p>
                    </div>
                  </div>
                </address>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Solicite um Orçamento Gratuito</h3>
                <div className="text-center">
                  <p className="text-slate-300 mb-6 text-sm md:text-base">
                    Clique no botão abaixo e fale diretamente conosco pelo WhatsApp. Responderemos em até 30 minutos com
                    um orçamento personalizado para seu site profissional!
                  </p>
                  <Link
                    href={`https://wa.me/${19982296177}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento gratuito para criação do meu site profissional com a Cybersite.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-sm md:text-lg px-6 md:px-8"
                      aria-label="Solicitar orçamento gratuito via WhatsApp"
                    >
                      💬 Orçamento Gratuito no WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-8 md:py-12 relative" role="contentinfo">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="h-3 w-3 md:h-5 md:w-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Cybersite
                </span>
              </div>
              <p className="text-slate-400 mb-4 text-sm md:text-base px-4">
                <strong>Cybersite</strong> - Líder em criação de sites profissionais no Brasil desde 2020. Transformamos
                pequenos negócios em grandes sucessos online com sites que convertem e vendem.
              </p>
              <p className="text-slate-500 text-xs md:text-sm">© 2024 Cybersite. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Additional Schema Markup for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            itemReviewed: {
              "@type": "Organization",
              name: "Cybersite",
              "@id": "https://cybersite.com.br/#organization",
            },
            ratingValue: "5",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Article Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Criação de Sites Profissionais - Cybersite",
            description:
              "Líder em criação de sites profissionais no Brasil. Sites responsivos, SEO otimizado e máxima performance.",
            author: {
              "@type": "Organization",
              name: "Cybersite",
              "@id": "https://cybersite.com.br/#organization",
            },
            publisher: {
              "@type": "Organization",
              name: "Cybersite",
              "@id": "https://cybersite.com.br/#organization",
            },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://cybersite.com.br",
            },
          }),
        }}
      />
    </>
  )
}
