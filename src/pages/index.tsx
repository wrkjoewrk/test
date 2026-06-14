"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Package,
  ShoppingBag,
  Briefcase,
  Globe,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sectionLabelClass = "text-base font-semibold text-brand-text";
const sectionLabelGapClass = "mt-2";

const bodyTextSizeClass = "text-base leading-base md:text-lg";

const heroBodyTextClass = `${bodyTextSizeClass} text-white/90`;

const bodyTextClass = `${bodyTextSizeClass} text-brand-muted`;

const bodyTextLightClass = `${bodyTextSizeClass} text-white/85`;

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

const businessAreas = [
  {
    title: "K-Food Export",
    icon: Package,
    description:
      "Multi-product small-lot export, container consolidation, and OEM (private brand) production management.",
  },
  {
    title: "Korea Branch & Brand Management",
    icon: Building2,
    description:
      "Korea branch office representation and brand management for overseas companies, with dedicated personnel assigned under separate agreements.",
  },
  {
    title: "Export Consulting",
    icon: Briefcase,
    description:
      "Export consulting for domestic companies expanding into international markets.",
  },
  {
    title: "Market Entry Support · Japan",
    icon: Globe,
    description:
      "Overseas market research and market entry support, with specialized expertise in Japan.",
  },
  {
    title: "Premium Food Import",
    icon: ShoppingBag,
    description:
      "Premium food import and distribution, exclusive product sourcing, and import agency services.",
  },
];

const categories = [
  {
    name: "Dairy & Beverages",
    brands: "Maeil Soy Milk, Beverages, Freezer Pops, Frozen Cakes, Selex",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b690?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/01-dairy-beverages.jpg",
  },
  {
    name: "Kimchi",
    brands: "Goidam",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/02-kimchi.jpg",
  },
  {
    name: "Rice Cakes (Tteok)",
    brands: "Young-uijeong, Daedoo Foods",
    image:
      "https://images.unsplash.com/photo-1604908176997-43162e47a1b5?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/03-rice-cakes.jpg",
  },
  {
    name: "HMR & CK-Style Products",
    brands: "Super Kitchen",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/04-hmr.jpg",
  },
  {
    name: "Branded Foods",
    brands: "Sajo Daerim (Europe)",
    image:
      "https://images.unsplash.com/photo-1606780509525-2eeef2a9a1a2?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/05-branded-foods.jpg",
  },
  {
    name: "Coffee",
    brands:
      "Jardin, Ediya RTD (Cup, PET, Pouch), Stick Mix, Capsules, Tea",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/06-coffee.jpg",
  },
  {
    name: "Desserts & Snacks",
    brands: "Knotted",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    imagePath: "/images/categories/07-desserts-snacks.jpg",
  },
];

const partnerships = [
  {
    tags: ["Japan", "Taiwan"],
    name: "Naman",
    description:
      "Japan's K-Food specialized import and distribution company",
    logo: "/images/partner logo1.png",
  },
  {
    tags: ["United States"],
    name: "Taesung Kimchi",
    description: "U.S. kimchi export company",
    logo: "/images/partner logo2.png",
  },
  {
    tags: ["Korea HQ"],
    name: null,
    description: "Korea-based operating leadership",
    logo: "/images/partner logo3.png",
  },
  {
    tags: ["Europe"],
    name: null,
    description:
      "Asian food import, distribution, and retail operations company",
    logo: "/images/partner logo4.png",
  },
  {
    tags: ["South America"],
    name: null,
    description: "Asian food import and distribution company",
    logo: "/images/partner logo5.png",
  },
];

type CustomerBrand = {
  name: string;
  logo?: string;
  category: string;
};

const customerRegions = [
  "Korea",
  "Japan",
  "Europe",
  "United States",
] as const;

const customerBrands: CustomerBrand[] = [
  { name: "Shilla Hotel", category: "Korea", logo: "/images/customers/shilla-hotel.png" },
  { name: "Lotte Hotel", category: "Korea", logo: "/images/customers/lotte-hotel.png" },
  { name: "Inspire Hotel", category: "Korea", logo: "/images/customers/inspire-hotel.png" },
  { name: "Pulmuone", category: "Korea", logo: "/images/customers/pulmuone.png" },
  {
    name: "Coupang Premium",
    category: "Korea",
    logo: "/images/customers/coupang-premium.png",
  },
  {
    name: "Naver Smart Store",
    category: "Korea",
    logo: "/images/customers/naver-smart-store.png",
  },
  {
    name: "Shinsegae Department Store Gangnam",
    category: "Korea",
    logo: "/images/customers/shinsegae-gangnam.png",
  },
  {
    name: "Shinsegae Cheongdam",
    category: "Korea",
    logo: "/images/customers/shinsegae-cheongdam.png",
  },
  {
    name: "Lotte Department Store",
    category: "Korea",
    logo: "/images/customers/lotte-department-store.png",
  },
  { name: "Aeon", category: "Japan", logo: "/images/customers/aeon.png" },
  { name: "Costco Japan", category: "Japan", logo: "/images/customers/costco-japan.png" },
  { name: "Life", category: "Japan", logo: "/images/customers/life.png" },
  {
    name: "Uni (Don Quijote)",
    category: "Japan",
    logo: "/images/customers/uni-don-quijote.png",
  },
  { name: "Okuwa", category: "Japan", logo: "/images/customers/okuwa.png" },
  { name: "Heiwado", category: "Japan", logo: "/images/customers/heiwado.png" },
  { name: "Konomiya", category: "Japan", logo: "/images/customers/konomiya.png" },
  { name: "Izumi", category: "Japan", logo: "/images/customers/izumi.png" },
  { name: "Torisen", category: "Japan", logo: "/images/customers/torisen.png" },
  { name: "FamilyMart", category: "Japan", logo: "/images/customers/familymart.png" },
  { name: "7-Eleven", category: "Japan", logo: "/images/customers/7-eleven.png" },
  { name: "Lawson", category: "Japan", logo: "/images/customers/lawson.png" },
  {
    name: "Korea Food UK",
    category: "Europe",
    logo: "/images/customers/korea-food-uk.png",
  },
  {
    name: "Ace Food France",
    category: "Europe",
    logo: "/images/customers/ace-food-france.png",
  },
  {
    name: "H Mart (in discussion)",
    category: "United States",
    logo: "/images/customers/h-mart.png",
  },
];

const customerInternationalBrandRowClass =
  "mt-2 flex flex-wrap items-start gap-x-2 gap-y-2";

const customerRegionGroupClass = "flex min-w-0 max-w-full flex-col";

const customerInternationalBrandTileClass =
  "flex w-[96px] shrink-0 flex-col items-center px-1 py-1 text-center";

type ImportPartner = {
  name: string;
  note?: string;
  logo?: string;
};

const importPartnerCountries: { country: string; partners: ImportPartner[] }[] =
  [
    {
      country: "France",
      partners: [
        {
          name: "Haute Fromagerie",
          logo: "/images/import-partners/haute-fromagerie.png",
        },
        {
          name: "Thomas Export",
          note: "Cheese",
          logo: "/images/import-partners/thomas-export.png",
        },
      ],
    },
    {
      country: "Italy",
      partners: [
        { name: "Caform", logo: "/images/import-partners/caform.png" },
        { name: "Appennino", logo: "/images/import-partners/appennino.png" },
        {
          name: "Biscopan",
          note: "Snack · Domestic & Asia sales rights",
          logo: "/images/import-partners/biscopan.png",
        },
      ],
    },
    {
      country: "Greece",
      partners: [
        { name: "Mouriki", logo: "/images/import-partners/mouriki.png" },
      ],
    },
    {
      country: "Netherlands",
      partners: [
        {
          name: "Visser Kaas",
          logo: "/images/import-partners/visser-kaas.png",
        },
      ],
    },
    {
      country: "United Kingdom",
      partners: [
        {
          name: "Higgins Coffee",
          note: "Store operations & Coffee",
          logo: "/images/import-partners/higgins-coffee.png",
        },
      ],
    },
    {
      country: "Lithuania",
      partners: [
        { name: "Dziugas", logo: "/images/import-partners/dziugas.png" },
      ],
    },
  ];

function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`max-w-4xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? <p className={sectionLabelClass}>{eyebrow}</p> : null}
      <h2
        className={`text-3xl font-semibold tracking-[-0.02em] text-brand-text md:text-5xl lg:text-6xl ${
          eyebrow ? sectionLabelGapClass : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 ${bodyTextClass} ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function DotFoodKoreaLandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeHero, setActiveHero] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHero((current) => (current + 1) % heroImages.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      const fadeStart = window.innerHeight * 0.45;
      const fadeEnd = window.innerHeight * 0.82;

      if (rect.bottom <= fadeStart) {
        setLogoOpacity(0);
        return;
      }

      if (rect.bottom >= fadeEnd) {
        setLogoOpacity(1);
        return;
      }

      setLogoOpacity((rect.bottom - fadeStart) / (fadeEnd - fadeStart));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-text">
      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative h-screen w-full overflow-hidden bg-black"
        >
          <header
            className="pointer-events-none absolute left-0 top-0 z-50 flex w-full justify-center pt-10 md:pt-12"
            style={{ opacity: logoOpacity }}
          >
            <a href="#" className="pointer-events-auto transition-opacity duration-500 ease-out">
              <img
                src="/logo-w.png"
                alt="DotFoodKorea"
                className="h-7 w-auto object-contain md:h-8"
              />
            </a>
          </header>

          {heroImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`DotFoodKorea hero image ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
                activeHero === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center text-white">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Connecting World Foods
              <br />
              with Korea
            </h1>
            <p className={`mt-6 max-w-2xl ${heroBodyTextClass}`}>
              DotFoodKorea connects premium foods from around the world and
              delivers Korean food culture globally. Connecting the world foods,
              networking dots with Korea.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative bg-brand-text">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent lg:h-48"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
                  A global food bridge built from Korea
                </h2>
                <p className={`mt-6 max-w-xl ${bodyTextLightClass}`}>
                  We export Korean foods worldwide, import premium foods into
                  Korea, and support brands entering new markets with practical
                  commercial infrastructure.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="p-8 md:p-9">
                  <p className="text-base font-semibold text-white">Mission</p>
                  <p className={`${sectionLabelGapClass} ${bodyTextLightClass}`}>
                    Supply K-Food efficiently to global consumers and contribute
                    to the ongoing expansion of K-Culture, while introducing
                    premium international foods to Korean consumers for greater
                    health, quality, and enjoyment.
                  </p>
                </div>

                <div className="border-t border-white/15" />

                <div className="p-8 md:p-9">
                  <p className="text-base font-semibold text-white">Vision</p>
                  <p className={`${sectionLabelGapClass} ${bodyTextLightClass}`}>
                    Korea’s leading K-Food export and premium food import
                    distribution partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network */}
        <section id="network" className="bg-brand-section-dark">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <SectionTitle
              eyebrow="Shareholders & Partnership"
              title="Connected markets, partners, and regional execution"
              description="DotFoodKorea operates through a Korea-centered network spanning Asia, the U.S., Europe, and South America."
              centered
            />

            <div className="mt-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {partnerships.map((partner) => (
                  <Card
                    key={partner.tags.join("-")}
                    className="flex h-full flex-col border-0 bg-transparent shadow-none"
                  >
                    <CardContent className="flex flex-1 flex-col p-4 md:p-5">
                      <div className="flex h-16 items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`${partner.name ?? partner.tags.join(", ")} logo`}
                          className="max-h-12 w-auto max-w-full object-contain"
                        />
                      </div>
                      {partner.name ? (
                        <p className="mt-5 text-base font-semibold tracking-[-0.01em] text-brand-text">
                          {partner.name}
                        </p>
                      ) : null}
                      <div
                        className={`flex flex-wrap gap-2 ${partner.name ? "mt-2" : "mt-5"}`}
                      >
                        {partner.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand-section px-2.5 py-1 text-xs font-medium text-brand-text"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 flex-1 text-sm text-brand-text">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Areas */}
        <section id="business" className="bg-brand-section">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-brand-text md:text-4xl lg:text-5xl">
              Structured services for food trade, market entry, and distribution
            </h2>
            <p className={`mx-auto mt-6 max-w-3xl ${bodyTextClass}`}>
              DotFoodKorea operates across export, import, consulting, and
              in-market brand representation with a business model tailored for
              international growth.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
            {businessAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.title}
                  className="h-full border-0 bg-[#F5F5F5] shadow-none"
                >
                  <CardContent className="flex h-full flex-col p-5 md:p-6">
                    <Icon className="h-12 w-12 shrink-0 text-brand-text" />
                    <h3 className="mt-4 text-base font-semibold leading-[1.2] text-brand-text">
                      {area.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.2] text-brand-text">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          </div>
        </section>

        {/* Categories */}
        <section className="overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:pt-28 lg:pb-14">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-brand-text md:text-5xl lg:text-6xl">
                From heritage staples to premium curated imports
              </h2>
              <p className={`mx-auto mt-6 max-w-3xl ${bodyTextClass}`}>
                A flexible category mix covering both Korean export essentials
                and high-value specialty goods.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex w-max animate-marquee gap-0">
              {[...categories, ...categories].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="relative h-[min(75vh,480px)] w-[min(42vw,300px)] shrink-0 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-brand-text/85 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-white/85 md:text-sm">
                      {item.brands}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customers */}
        <section className="bg-white pb-0">
          <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-10 lg:pt-28">
            <p className={sectionLabelClass}>Key Customers</p>
          </div>

          <div className="mt-4 grid lg:mt-5 lg:grid-cols-[1fr_2fr] lg:items-stretch">
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[720px]">
              <img
                src="/images/key%20customer.jpg"
                alt="Key customers"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="flex items-start px-6 py-3 lg:px-10 lg:py-4">
              <div className="flex w-full flex-wrap items-start gap-x-10 gap-y-2">
                {customerRegions.map((region) => {
                  const brands = customerBrands.filter(
                    (brand) => brand.category === region
                  );

                  return (
                    <div key={region} className={customerRegionGroupClass}>
                      <p className="text-[11px] uppercase tracking-[0.05em] text-brand-muted">
                        {region}
                      </p>

                      <div className={customerInternationalBrandRowClass}>
                        {brands.map((brand) => (
                          <div
                            key={brand.name}
                            className={customerInternationalBrandTileClass}
                          >
                            <div className="flex h-12 w-full items-center justify-center bg-[#F5F5F5]">
                              {brand.logo ? (
                                <img
                                  src={brand.logo}
                                  alt={`${brand.name} logo`}
                                  className="max-h-9 max-w-[80%] object-contain"
                                  onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                  }}
                                />
                              ) : null}
                            </div>
                            <p className="mt-1.5 min-h-[2.5rem] w-full text-xs text-brand-text">
                              {brand.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Import Partners */}
        <section className="bg-brand-section pb-0">
          <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10 lg:pt-14">
            <p className={sectionLabelClass}>Overseas Import Partners</p>
          </div>

          <div className="mt-4 grid lg:mt-5 lg:grid-cols-[2fr_1fr] lg:items-stretch">
            <div className="order-2 flex items-start px-6 py-3 lg:order-1 lg:px-10 lg:py-4">
              <div className="flex w-full flex-wrap items-start gap-x-10 gap-y-2">
                {importPartnerCountries.map((group) => (
                  <div key={group.country} className={customerRegionGroupClass}>
                    <p className="text-[11px] uppercase tracking-[0.05em] text-brand-muted">
                      {group.country}
                    </p>

                    <div className={customerInternationalBrandRowClass}>
                      {group.partners.map((partner) => (
                        <div
                          key={partner.name}
                          className={customerInternationalBrandTileClass}
                        >
                          <div className="flex h-12 w-full items-center justify-center bg-[#F5F5F5]">
                            {partner.logo ? (
                              <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="max-h-9 max-w-[80%] object-contain"
                                onError={(event) => {
                                  event.currentTarget.style.display = "none";
                                }}
                              />
                            ) : null}
                          </div>
                          <p className="mt-1.5 w-full text-xs text-brand-text">
                            {partner.name}
                          </p>
                          {partner.note ? (
                            <p className="mt-1 w-full text-[11px] leading-[1rem] text-brand-muted">
                              {partner.note}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 min-h-[320px] overflow-hidden sm:min-h-[400px] lg:order-2 lg:min-h-[560px]">
              <img
                src="/images/Overseas%20Import%20Partners.jpg"
                alt="Overseas import partners"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Featured */}
        <section id="featured" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <SectionTitle
              title="Specialty retail and heritage food expertise"
              description="Two examples of how DotFoodKorea builds value across both imported premium experiences and trusted Korean food products."
              centered
            />

            <div className="mt-12 grid gap-0 lg:grid-cols-2">
              <Card className="overflow-hidden border-0 bg-white shadow-none">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=1400&q=80"
                    alt="Artisan cheese display"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-brand-text/90 via-brand-text/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-5 md:p-7">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                      Le Friand
                    </h3>
                    <p className="mt-2 text-base font-semibold text-white md:text-lg">
                      A specialty cheese boutique inside Shinsegae Gangnam
                    </p>
                    <p className={`mt-2 ${bodyTextLightClass}`}>
                      Le Friand is a curated cheese destination focused on
                      portioned artisan cheese, expert consultation, and elevated
                      food experiences within premium retail.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden border-0 bg-white shadow-none">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/images/traditional.jpg"
                    alt="Traditional kimchi product"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-brand-text/90 via-brand-text/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-5 md:p-7">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-white md:text-2xl">
                      Goidam Kimchi
                    </h3>
                    <p className="mt-2 text-base font-semibold text-white md:text-lg">
                      Traditional Korean kimchi with global distribution
                      capability
                    </p>
                    <p className={`mt-2 ${bodyTextLightClass}`}>
                      A heritage kimchi line with 50 years of tradition, hotel
                      supply history, export experience, and customized
                      formulations for diverse dietary and market needs.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-brand-section">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5">
                <SectionTitle
                  eyebrow="Partnership"
                  title="Partner with DotFoodKorea"
                  description="For sourcing, import distribution, export projects, or regional brand representation, get in touch with our team."
                />
              </div>

              <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className={sectionLabelClass}>Contact</p>

                    <a
                      href="mailto:hello@dfkr.co.kr?subject=DotFoodKorea Partnership Inquiry"
                      className={`${sectionLabelGapClass} inline-flex items-center gap-2 text-2xl font-semibold tracking-[-0.02em] text-brand-text transition hover:text-brand-muted`}
                    >
                      <Mail className="h-6 w-6 shrink-0" />
                      hello@dfkr.co.kr
                    </a>

                    <div className={`mt-6 ${bodyTextClass}`}>
                      <p>Available for global business inquiries</p>
                      <p>Response within 2–3 business days</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <a
                      href="mailto:hello@dfkr.co.kr?subject=DotFoodKorea Partnership Inquiry"
                      className="inline-flex h-12 items-center rounded-full bg-brand-text px-8 text-sm font-medium text-white transition hover:bg-brand-text/90"
                    >
                      Email Us
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-border bg-brand-section">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10 text-xs text-brand-text">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-10">
            <div className="space-y-1">
              <p className="font-semibold">DotFoodKorea</p>
              <p>Founded: October 23, 2025</p>
              <p>Representative: Seongchun Cho</p>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <p className="font-semibold">Headquarters</p>
                <p>
                  139 Gyopo 1-gil, Oseong-myeon, Pyeongtaek-si, Gyeonggi-do, Korea
                </p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold">Seoul Office</p>
                <p>11 Gwangnaru-ro 39-gil, Gwangjin-gu, Seoul, Korea</p>
              </div>

              <div className="space-y-1">
                <p className="font-semibold">Tokyo Office</p>
                <p>Japan</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}