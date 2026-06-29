import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Eye,
  Brush,
  Gem,
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Clock,
  Heart,
  Award,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Menu,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import gNails1 from "@/assets/g-nails-1.jpg";
import gNails2 from "@/assets/g-nails-2.jpg";
import gLashes from "@/assets/g-lashes.jpg";
import gBrows from "@/assets/g-brows.jpg";
import gFlat from "@/assets/g-flat.jpg";

const PHONE_DISPLAY = "(11) 95683-5290";
const WHATSAPP = "https://wa.me/5511956835290?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Esp%C3%A7o%20Kety%20Silva.";
const INSTAGRAM = "https://instagram.com/ket.ysilvaa";
const ADDRESS = "R. Valêncio Soares Rodrigues, 178 - C, Centro — Vargem Grande Paulista/SP";
const MAPS_QUERY = "Espaço+Kety+Silva,+R.+Valêncio+Soares+Rodrigues,+178+-+Centro,+Vargem+Grande+Paulista+-+SP";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Espaço Kety Silva Beauty Studio — Vargem Grande Paulista" },
      {
        name: "description",
        content:
          "Beleza, sofisticação e autoestima em Vargem Grande Paulista. Alongamento de unhas, cílios, design de sobrancelhas e unhas tradicionais com atendimento personalizado.",
      },
      { property: "og:title", content: "Espaço Kety Silva Beauty Studio" },
      {
        property: "og:description",
        content: "Estúdio de beleza premium em Vargem Grande Paulista — agende seu horário pelo WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Gem,
    title: "Alongamento de Unhas",
    desc: "Unhas longas, naturais e impecáveis. Técnica de alta precisão para um acabamento sofisticado e durável.",
  },
  {
    icon: Brush,
    title: "Unhas Tradicionais",
    desc: "Manicure cuidadosa com esmaltação perfeita. O clássico atemporal feito com delicadeza e atenção aos detalhes.",
  },
  {
    icon: Eye,
    title: "Alongamento de Cílios",
    desc: "Olhar marcante, leve e natural. Fios aplicados um a um para realçar a beleza única do seu olhar.",
  },
  {
    icon: Sparkles,
    title: "Design de Sobrancelhas",
    desc: "Design exclusivo que valoriza seus traços. Simetria, harmonia e elegância para um olhar único.",
  },
];

const differentials = [
  { icon: Heart, title: "Atendimento personalizado", desc: "Cada cliente é única — cada serviço também." },
  { icon: Sparkles, title: "Ambiente acolhedor", desc: "Um refúgio sofisticado feito para o seu bem-estar." },
  { icon: Award, title: "Produtos de qualidade", desc: "Marcas premium e seguras em todos os procedimentos." },
  { icon: Gem, title: "Profissional qualificada", desc: "Técnica refinada e constante atualização." },
  { icon: Calendar, title: "Hora marcada", desc: "Sua agenda exclusiva, sem espera e sem corre-corre." },
];

const gallery = [
  { src: gNails1, alt: "Alongamento de unhas nude" },
  { src: gLashes, alt: "Alongamento de cílios" },
  { src: gNails2, alt: "Manicure premium" },
  { src: gBrows, alt: "Ferramentas para sobrancelhas" },
  { src: gFlat, alt: "Detalhes do estúdio" },
  { src: about, alt: "Ambiente Kety Silva Studio" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <Differentials />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhats />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Sobre", "#sobre"],
    ["Serviços", "#servicos"],
    ["Galeria", "#galeria"],
    ["Diferenciais", "#diferenciais"],
    ["Contato", "#contato"],
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight">Kety Silva</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Beauty Studio
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex btn-primary text-xs px-5 py-3">
            Agendar
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Abrir menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background fade-up">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <span className="font-serif text-2xl">Kety Silva</span>
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-6">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-foreground"
              >
                {label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary mt-6 self-start">
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-champagne/40 via-background to-rose/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 fade-up">
          <p className="eyebrow">Vargem Grande Paulista · Beauty Studio</p>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Beleza que <em className="italic text-gold">revela</em> a sua melhor versão.
          </h1>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Um estúdio sofisticado onde cada detalhe é pensado para acolher,
            valorizar e transformar. Unhas, cílios e sobrancelhas com requinte
            e atendimento personalizado.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary">
              <MessageCircle className="size-4" />
              Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">Ver Serviços</a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-gold" />
              Seg–Sáb · 09h às 19h
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="size-4 text-gold" />
              Centro · VGP/SP
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative fade-up">
          <div className="relative aspect-[4/5] w-full max-w-xl mx-auto rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={hero}
              alt="Mãos com unhas nude perfeitas sobre seda champagne"
              width={1600}
              height={1920}
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-card border border-border/70 rounded-2xl p-5 pr-7 shadow-card max-w-[240px] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center">
                <Sparkles className="size-5 text-background" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Alta procura</p>
                <p className="font-serif text-lg leading-tight">Agenda quase cheia</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -top-6 right-0 rotate-3 bg-card border border-border/70 rounded-2xl px-5 py-3 shadow-card">
            <p className="font-serif italic text-sm">"Atendimento impecável."</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Unhas", "Cílios", "Sobrancelhas", "Beleza", "Autoestima", "Sofisticação"];
  return (
    <div className="border-y border-border/60 bg-champagne/40 overflow-hidden">
      <div className="flex gap-16 py-5 whitespace-nowrap animate-[shimmer_6s_ease-in-out_infinite] justify-center flex-wrap">
        {items.map((item, i) => (
          <span key={i} className="font-serif italic text-2xl text-foreground/70 flex items-center gap-16">
            {item}
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-soft">
            <img
              src={about}
              alt="Interior do Espaço Kety Silva Beauty Studio"
              width={1200}
              height={1408}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-background border border-border rounded-2xl p-6 shadow-card max-w-[220px]">
            <p className="font-serif text-4xl text-gold">+5</p>
            <p className="text-sm text-muted-foreground mt-1">anos cuidando da beleza e da autoestima de mulheres únicas.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">Sobre o estúdio</p>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight gold-line">
            Um espaço pensado para celebrar você.
          </h2>
          <div className="mt-10 space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              O <strong className="text-foreground font-medium">Espaço Kety Silva Beauty Studio</strong> nasceu do desejo
              de oferecer mais do que serviços de beleza — oferecer momentos. Um refúgio
              em <strong className="text-foreground font-medium">Vargem Grande Paulista</strong> onde cada
              detalhe foi cuidado para que você se sinta acolhida, valorizada e, acima
              de tudo, ouvida.
            </p>
            <p>
              Aqui, cada procedimento é uma pequena cerimônia. Unhas, cílios e
              sobrancelhas feitos com técnica refinada, produtos premium e uma
              estética que valoriza a sua beleza natural.
            </p>
            <p className="font-serif italic text-xl text-foreground">
              Porque autoestima é o nosso maior presente.
            </p>
          </div>

          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-primary mt-10">
            Reservar meu horário
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-36 bg-gradient-to-b from-background via-champagne/30 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight gold-line">
            Procedimentos exclusivos, resultado impecável.
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
            Cada serviço é executado com técnica, calma e atenção aos detalhes.
            Escolha o que combina com você — ou nos conte sobre o seu momento.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative bg-card border border-border/70 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-card hover:border-gold/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="size-14 rounded-2xl bg-gradient-to-br from-champagne to-nude flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground border-b border-foreground/30 pb-1 hover:border-gold hover:text-gold transition-colors"
                >
                  Agendar
                  <ChevronRight className="size-3" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => ((a! + 1) % gallery.length));
      if (e.key === "ArrowLeft") setActive((a) => (a! - 1 + gallery.length) % gallery.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="galeria" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight gold-line">
              Pequenos detalhes, grandes encantamentos.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Uma seleção de trabalhos recentes — clique em qualquer imagem para ampliar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 auto-rows-[180px] lg:auto-rows-[240px]">
          {gallery.map((g, i) => {
            const span = [
              "row-span-2 col-span-2",
              "",
              "row-span-2",
              "",
              "col-span-2",
              "row-span-1",
            ][i] ?? "";
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-2xl ${span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-background/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em]">
                    Ver detalhe
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 fade-up"
          onClick={() => setActive(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            className="absolute top-6 right-6 size-11 rounded-full bg-background/10 text-background hover:bg-background/20 flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="size-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a! - 1 + gallery.length) % gallery.length); }}
            className="absolute left-4 lg:left-10 size-11 rounded-full bg-background/10 text-background hover:bg-background/20 flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-soft"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a! + 1) % gallery.length); }}
            className="absolute right-4 lg:right-10 size-11 rounded-full bg-background/10 text-background hover:bg-background/20 flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-36 bg-ink text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow" style={{ color: "color-mix(in oklab, white 60%, transparent)" }}>
            Diferenciais
          </p>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight text-background">
            Cuidado de verdade <em className="italic text-gold-soft">em cada detalhe</em>.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group p-8 rounded-2xl border border-background/10 hover:border-gold/40 transition-colors duration-500 hover:bg-background/5"
              >
                <Icon className="size-7 text-gold-soft" strokeWidth={1.5} />
                <h3 className="mt-6 font-serif text-2xl text-background">{d.title}</h3>
                <p className="mt-2 text-sm text-background/70 leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <Quote className="mx-auto size-10 text-gold" strokeWidth={1} />
        <p className="mt-8 font-serif text-3xl lg:text-5xl leading-tight italic">
          Em breve, as palavras das nossas clientes preencherão este espaço com
          carinho. Você pode ser uma delas.
        </p>
        <p className="mt-10 eyebrow">Depoimentos</p>
        <div className="mt-10">
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-ghost">
            Quero viver essa experiência
          </a>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="py-24 lg:py-36 bg-champagne/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow">Localização</p>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight gold-line">
            Venha nos visitar.
          </h2>
          <div className="mt-10 space-y-5 text-foreground">
            <div className="flex items-start gap-4">
              <MapPin className="size-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-medium">Endereço</p>
                <p className="text-muted-foreground text-sm mt-1">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="size-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-medium">Horário</p>
                <p className="text-muted-foreground text-sm mt-1">Segunda a Sábado · 09h às 19h</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="size-5 text-gold mt-1 shrink-0" />
              <div>
                <p className="font-medium">Telefone</p>
                <a href="tel:+5511956835290" className="text-muted-foreground text-sm mt-1 hover:text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-10"
          >
            Como chegar
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="aspect-[5/4] rounded-[2rem] overflow-hidden shadow-soft border border-border">
            <iframe
              title="Mapa Espaço Kety Silva"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.4] contrast-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP },
    { icon: Instagram, label: "Instagram", value: "@ket.ysilvaa", href: INSTAGRAM },
    { icon: Phone, label: "Telefone", value: PHONE_DISPLAY, href: "tel:+5511956835290" },
    { icon: MapPin, label: "Endereço", value: "Centro, VGP/SP", href: `https://www.google.com/maps?q=${MAPS_QUERY}` },
  ];
  return (
    <section id="contato" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow">Contato</p>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl leading-tight gold-line">
            Vamos agendar o seu momento?
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
            Escolha o canal que preferir. Estamos prontas para te receber.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener"
                className="group bg-card border border-border rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
              >
                <Icon className="size-6 text-gold" strokeWidth={1.5} />
                <p className="mt-6 eyebrow">{c.label}</p>
                <p className="mt-2 font-serif text-xl">{c.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <p className="font-serif text-2xl">Kety Silva</p>
          <p className="eyebrow mt-1">Beauty Studio</p>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            Beleza, sofisticação e autoestima em Vargem Grande Paulista.
          </p>
        </div>
        <div>
          <p className="eyebrow">Navegar</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-gold transition-colors">Serviços</a></li>
            <li><a href="#galeria" className="hover:text-gold transition-colors">Galeria</a></li>
            <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contato</p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>{ADDRESS}</li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="hover:text-gold">
                @ket.ysilvaa
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Espaço Kety Silva Beauty Studio. Todos os direitos reservados.</p>
          <p>Feito com <Heart className="inline size-3 text-gold" /> em Vargem Grande Paulista.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhats() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-ink text-background flex items-center justify-center shadow-soft hover:scale-110 transition-transform duration-500"
    >
      <MessageCircle className="size-6" />
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
    </a>
  );
}
