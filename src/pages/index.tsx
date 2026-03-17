"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  Building2,
  Package,
  ShoppingBag,
  Briefcase,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const businessAreas = [
  {
    title: "K-Food Export",
    icon: Package,
    items: [
      "Multi-product export",
      "Container consolidation",
      "OEM / private brand production",
      "Global distribution",
    ],
  },
  {
    title: "Premium Food Import",
    icon: ShoppingBag,
    items: [
      "Exclusive product sourcing",
      "Premium international foods",
      "Import distribution",
    ],
  },
  {
    title: "Brand Representation in Korea",
    icon: Building2,
    items: [
      "Korean branch office support",
      "Brand management",
      "Sales support",
    ],
  },
  {
    title: "Export Consulting",
    icon: Briefcase,
    items: [
      "Market entry consulting",
      "Overseas market research",
      "Japan-focused support",
    ],
  },
];

const categories = [
  "Dairy & Beverages",
  "Kimchi",
  "Rice Cake (Tteok)",
  "HMR / Ready-to-eat Korean meals",
  "Coffee (RTD, capsule, stick)",
  "Dessert & Snacks",
];

const regions = [
  "Japan / Taiwan",
  "United States",
  "Europe",
  "South America",
  "Korea HQ",
];

const partners = [
  "Naman · Japan K-Food Import / Distribution",
  "Taesung Kimchi · U.S. Export Partner",
  "Korea Food · Europe Asian Food Distribution",
];

const customers = {
  Korea: [
    "Shilla Hotel",
    "Lotte Hotel",
    "Inspire Hotel",
    "Coupang Premium",
    "Shinsegae Department Store",
    "SSG Cheongdam",
  ],
  Japan: ["Aeon", "Costco Japan", "Don Quijote", "FamilyMart", "7-Eleven", "Lawson"],
  Europe: ["Korea Food UK", "Ace Food France"],
  USA: ["H Mart (in discussion)"],
} as const;

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-stone-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function DotFoodKoreaLandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ee]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center">
  <img
    src="/images/logo-b.png"
    alt="DotFoodKorea logo"
    className="h-4 w-auto object-contain"
  />
</a>
          <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
            <a href="#about" className="transition hover:text-stone-950">
              About
            </a>
            <a href="#business" className="transition hover:text-stone-950">
              Business
            </a>
            <a href="#network" className="transition hover:text-stone-950">
              Network
            </a>
            <a href="#featured" className="transition hover:text-stone-950">
              Featured
            </a>
            <a href="#contact" className="transition hover:text-stone-950">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-black/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(133,31,31,0.08),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent)]" />

        

          <div className="relative mx-auto grid min-h-[88vh] max-w-7xl gap-14 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 text-xs uppercase tracking-[0.28em] text-stone-500"
              >
                Korea-based Global Food Network
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl"
              >
                Connecting World Foods with Korea
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl"
              >
                DotFoodKorea connects premium foods from around the world and
                delivers Korean food culture globally.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-stone-600"
              >
                Connecting the world foods, networking dots with Korea.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button
                  className="rounded-full bg-stone-950 px-6 text-white hover:bg-stone-800"
                >
                  <a href="#business" className="flex items-center">
                    Explore Our Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-stone-300 bg-white/70 px-6 text-stone-900 backdrop-blur-sm"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="relative flex items-end"
            >
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/50 bg-white/60 shadow-[0_24px_80px_rgba(28,25,23,0.12)] backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
                  alt="Premium global food selection"
                  className="h-[560px] w-full object-cover"
                />
           
              </div>
            </motion.div>
          </div>
        </section>

                {/* About */}
        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                About
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl lg:text-6xl">
                A global food bridge built from Korea
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
                DotFoodKorea builds a worldwide network connecting food cultures
                through Korean exports, premium imports, and strategic local
                representation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <Card className="min-h-[320px] rounded-[1.75rem] border-black/5 bg-white/80 shadow-none">
                <CardContent className="flex h-full flex-col p-8 md:p-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    What We Do
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-8 text-stone-700 md:text-lg">
                    We export Korean foods worldwide, import premium foods into
                    Korea, and support brands entering new markets with
                    practical commercial infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="min-h-[320px] rounded-[1.75rem] border-black/5 bg-stone-950 text-white shadow-none">
                <CardContent className="flex h-full flex-col p-8 md:p-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Vision
                  </p>
                  <p className="mt-5 text-[1.05rem] leading-8 text-white md:text-lg">
                    Korea’s leading K-Food export and premium food import
                    distribution partner.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[1.75rem] border-black/5 bg-[#efe5da] shadow-none md:col-span-2">
                <CardContent className="p-8 md:p-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                    Mission
                  </p>
                  <p className="mt-5 max-w-4xl text-[1.05rem] leading-8 text-stone-700 md:text-lg">
                    Supply K-Food efficiently to global consumers and contribute
                    to the ongoing expansion of K-Culture, while introducing
                    premium international foods to Korean consumers for greater
                    health, quality, and enjoyment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* Network */}
        <section id="network" className="border-y border-black/5 bg-white/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <SectionTitle
              eyebrow="Global Network"
              title="Connected markets, partners, and regional execution"
              description="A multi-region business structure linking producers, distributors, retailers, and buyers through a Korea-centered network."
            />

<div className="mt-12 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-stretch">
<Card className="h-full overflow-hidden rounded-[2rem] border-black/5 bg-[#1a1715] text-white shadow-none">
  <CardContent className="relative flex h-full flex-col p-7">
    <img
      src="/images/network-space.jpg"
      alt="Abstract global background"
      className="absolute inset-0 h-full w-full object-cover opacity-[0.2
      ]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,23,21,0.82),rgba(26,23,21,0.92))]" />

    <div className="relative z-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
        Coverage
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
        Operating Regions
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
        DotFoodKorea operates through a Korea-centered network spanning Asia,
        the U.S., Europe, and South America.
      </p>

      <div className="mt-auto flex flex-wrap gap-2.5 pt-8">
        {regions.map((region) => (
          <span
            key={region}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/88"
          >
            {region}
          </span>
        ))}
      </div>
    </div>
  </CardContent>
</Card>

  <div>
    <div className="mb-5">
      <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
        Partner Network
      </p>
      <p className="mt-2 max-w-2xl text-base leading-6 text-stone-600">
        Strategic regional partnerships supporting sourcing, distribution, and
        market access across key international markets.
      </p>
    </div>

    <div className="space-y-5">
      {partners.map((partner, idx) => {
        const partnerLabels = ["Japan Partner", "U.S. Partner", "Europe Partner"];
        return (
          <Card
            key={partner}
            className={`rounded-[1.75rem] border-black/5 shadow-none ${
              idx === 0 ? "bg-white" : "bg-white/80"
            }`}
          >
            <CardContent className="flex items-start gap-4 p-6 md:p-7">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100">
                <MapPin className="h-4 w-4 text-stone-700" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">
                  {partnerLabels[idx] ?? "Regional Partner"}
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-stone-950">
                  {partner}
                </p>
                <p className="mt-3 text-base leading-8 text-stone-600">
                  Strategic regional partnership supporting sourcing,
                  distribution, and market access.
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</div>

          </div>
        </section>

        {/* Business Areas */}
        <section
          id="business"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
        >
          <SectionTitle
            eyebrow="Business Areas"
            title="Structured services for food trade, market entry, and distribution"
            description="DotFoodKorea operates across export, import, consulting, and in-market brand representation with a business model tailored for international growth."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {businessAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.title}
                  className="rounded-[1.75rem] border-black/5 bg-white/80 shadow-none transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <CardContent className="p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100">
                      <Icon className="h-5 w-5 text-stone-900" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-stone-950">
                      {area.title}
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
                      {area.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-stone-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Categories */}
        <section className="border-y border-black/5 bg-[#f1ebe3]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionTitle
                eyebrow="Product Categories"
                title="From heritage staples to premium curated imports"
                description="A flexible category mix covering both Korean export essentials and high-value specialty goods."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {categories.map((item, idx) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
                      Category {String(idx + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-lg font-medium text-stone-900">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customers */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionTitle
            eyebrow="Key Customers"
            title="Trusted by premium retail, hospitality, and global distribution channels"
            description="A customer portfolio spanning Korea, Japan, Europe, and the United States."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {Object.entries(customers).map(([region, brands]) => (
              <Card
                key={region}
                className="rounded-[1.75rem] border-black/5 bg-white/80 shadow-none"
              >
                <CardContent className="p-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
                    {region}
                  </p>
                  <div className="mt-5 space-y-3">
                    {brands.map((brand) => (
                      <div
                        key={brand}
                        className="rounded-xl bg-stone-50 px-4 py-3 text-sm text-stone-700"
                      >
                        {brand}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section
          id="featured"
          className="border-y border-black/5 bg-white/70"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <SectionTitle
              eyebrow="Featured Business & Product"
              title="Specialty retail and heritage food expertise"
              description="Two examples of how DotFoodKorea builds value across both imported premium experiences and trusted Korean food products."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Card className="overflow-hidden rounded-[2rem] border-black/5 bg-white shadow-none">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1400&q=80"
                    alt="Artisan cheese display"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                    Le Friand
                  </div>
                </div>
                <CardContent className="p-7">
                  <h3 className="text-2xl font-semibold text-stone-950">
                    A specialty cheese boutique inside Shinsegae Gangnam
                  </h3>
                  <p className="mt-3 text-sm leading-5 text-stone-600">
                    Le Friand is a curated cheese destination focused on
                    portioned artisan cheese, expert consultation, and elevated
                    food experiences within premium retail.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm text-stone-700">
                    <div className="rounded-xl bg-stone-50 px-4 py-3">
                      Korea’s first cheese portioning store
                    </div>
                    <div className="rounded-xl bg-stone-50 px-4 py-3">
                      Artisan cheese mainly from France and Italy
                    </div>
                    <div className="rounded-xl bg-stone-50 px-4 py-3">
                      Cheese platters, pairing goods, and expert consultation
                    </div>
                    <div className="rounded-xl bg-stone-50 px-4 py-3">
                      Buy only the amount you want, for easy entertaining
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-[2rem] border-black/5 bg-stone-950 text-white shadow-none">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src="images/traditional.jpg"
                    alt="Traditional kimchi product"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                    Goidam Kimchi
                  </div>
                </div>
                <CardContent className="p-7">
                  <h3 className="text-2xl font-semibold">
                    Traditional Korean kimchi with global distribution
                    capability
                  </h3>
                  <p className="mt-3 text-sm leading-5 text-white/75">
                    A heritage kimchi line with 50 years of tradition, hotel
                    supply history, export experience, and customized
                    formulations for diverse dietary and market needs.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm text-white/85">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      50 years of tradition, with hotel and export supply
                      history
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      Variants: Baek, Napa, Water, Kkakdugi, Young Radish,
                      Cucumber
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      Special lines: Vegan, Temple, Low-sodium, Halal
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      Patented packaging for stable distribution and longer
                      shelf life
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <SectionTitle
                eyebrow="Contact / Partnership"
                title="Partner with DotFoodKorea"
                description="For sourcing, import distribution, export projects, or regional brand representation, get in touch with our team."
              />
              <div className="rounded-[1.75rem] border border-black/5 bg-stone-950 p-7 text-white">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    DotFoodKorea
                  </p>
                </div>
                <p className="mt-4 text-2xl font-semibold">
                  Global Food Trading & Distribution
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Based in Korea. Built for international partnerships across
                  export, import, consulting, and premium retail channels.
                </p>
              </div>
            </div>

            <Card className="rounded-[2rem] border-black/5 bg-white/85 shadow-none">
  <CardContent className="flex h-full flex-col justify-between p-7 md:p-8">
    <div>
      <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
        Email
      </p>

      <a
        href="mailto:hello@dfkr.co.kr?subject=DotFoodKorea Partnership Inquiry"
        className="mt-3 inline-block text-2xl font-semibold tracking-tight text-stone-950 hover:opacity-70"
      >
        hello@dfkr.co.kr
      </a>

      <p className="mt-6 max-w-xl text-base leading-8 text-stone-600">
        Partnership, sourcing, and distribution inquiries welcome.
      </p>

      <div className="mt-8 text-sm leading-6 text-stone-500">
        <p>Available for global business inquiries</p>
        <p>Response within 2–3 business days</p>
      </div>
    </div>

    <div className="mt-10">
      <a
        href="mailto:hello@dfkr.co.kr?subject=DotFoodKorea Partnership Inquiry"
        className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-white transition hover:bg-stone-800"
      >
        Email Us
      </a>
    </div>
  </CardContent>
</Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-medium text-stone-900">DotFoodKorea</p>
            <p>Global Food Trading & Distribution · Based in Korea</p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="transition hover:text-stone-900">
              About
            </a>
            <a href="#business" className="transition hover:text-stone-900">
              Business
            </a>
            <a href="#contact" className="transition hover:text-stone-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
