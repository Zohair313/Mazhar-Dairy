import React, { useState, useEffect } from 'react';
import {
  Phone,
  PhoneCall,
  MessageSquare,
  MapPin,
  ShieldCheck,
  Star,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Menu,
  X,
  Calendar
} from 'lucide-react';

import siteData from './data/site-data.json';
import enDict from './data/en.json';
import urDict from './data/ur.json';
import {
  buildProductInquiryLink,
  buildWholesaleFormLink,
  buildGeneralRateListLink,
  buildWhatsAppLink
} from './utils/whatsapp';

export default function App() {
  const [lang, setLang] = useState('en');
  const [catalogueTier, setCatalogueTier] = useState('business'); // 'business' | 'home'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Wholesale form state
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'pizzeria',
    city: '',
    items: '',
    monthlyVolume: ''
  });

  const isUrdu = lang === 'ur';
  const t = isUrdu ? urDict : enDict;
  const ArrowIcon = isUrdu ? ArrowLeft : ArrowRight;

  // Sync HTML lang and dir attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isUrdu ? 'rtl' : 'ltr';
  }, [lang, isUrdu]);

  // Observe section headings for smooth left-to-right entrance animation
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '0px 0px -30px 0px'
    });

    const targets = document.querySelectorAll('.section-header-block, .hero-lead-box');
    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ur' : 'en'));
  };

  const handleDoorSelect = (tier) => {
    setCatalogueTier(tier);
    const target = document.getElementById('catalogue');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = buildWholesaleFormLink(formData, lang);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <div className={`app-wrapper ${isUrdu ? 'lang-ur' : 'lang-en'}`}>
      
      {/* ====================================================================
          1. TOP BAR
          ==================================================================== */}
      <aside className="top-bar" aria-label="Quick contact and language bar">
        <div className="site-container top-bar-inner">
          <div className="top-bar-contacts">
            <a href={`tel:${siteData.business.phones.mobile_raw}`} className="contact-item">
              <Phone size={13} aria-hidden="true" />
              <span>{t.top_bar.phone_label} <strong>{siteData.business.phones.mobile}</strong></span>
            </a>
            <span className="contact-item contact-landline" style={{ opacity: 0.8 }}>
              <span>{t.top_bar.landline_label} <strong>{siteData.business.phones.landline}</strong></span>
            </span>
            <a
              href={buildGeneralRateListLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MessageSquare size={13} aria-hidden="true" />
              <span>{t.top_bar.whatsapp_label} <strong>{siteData.business.phones.whatsapp}</strong></span>
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="lang-switch-btn"
            aria-label={`Switch language to ${isUrdu ? 'English' : 'Urdu'}`}
          >
            <span>{t.top_bar.lang_toggle_btn}</span>
          </button>
        </div>
      </aside>

      {/* ====================================================================
          2. HEADER NAVIGATION
          ==================================================================== */}
      <header className="site-header">
        <div className="site-container header-inner">
          {/* Logo & Trade Branding */}
          <a href="#" className="brand-logo-area" aria-label="Mazhar Dairy Homepage">
            <div className="brand-mark" aria-hidden="true">M</div>
            <div className="brand-text-col">
              <span className="brand-title">{isUrdu ? siteData.business.name_ur : siteData.business.name_en}</span>
              <span className="brand-meta">
                {isUrdu ? 'راجہ بازار، راولپنڈی • سنہ 1987' : 'RAJA BAZAR, RAWALPINDI • EST. 1987'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav-links" aria-label="Primary navigation">
            <a href="#catalogue" className="nav-link">{t.nav.catalogue}</a>
            <a href="#wholesale" className="nav-link">{t.nav.wholesale}</a>
            <a href="#quality" className="nav-link">{t.nav.quality}</a>
            <a href="#how-to-order" className="nav-link">{t.nav.how_to_order}</a>
            <a href="#story" className="nav-link">{t.nav.story}</a>
            <a href="#reviews" className="nav-link">{t.nav.reviews}</a>
            <a href="#visit" className="nav-link">{t.nav.visit}</a>
          </nav>

          {/* Header Action Button */}
          <div className="header-action-col">
            <a
              href={buildGeneralRateListLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary desktop-rate-btn header-rate-btn"
            >
              <MessageSquare size={16} aria-hidden="true" />
              <span className="header-rate-text">{t.nav.get_rate_list}</span>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="mobile-nav-drawer" aria-label="Mobile navigation">
            <div className="mobile-nav-links">
              <a href="#catalogue" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.catalogue}</a>
              <a href="#wholesale" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.wholesale}</a>
              <a href="#quality" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.quality}</a>
              <a href="#how-to-order" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.how_to_order}</a>
              <a href="#story" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.story}</a>
              <a href="#reviews" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.reviews}</a>
              <a href="#visit" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t.nav.visit}</a>
            </div>
            <div className="mobile-drawer-actions">
              <a
                href={buildGeneralRateListLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mobile-drawer-rate-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>{t.nav.get_rate_list}</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.hero.tag_code}</span>
            <span className="tag-separator">•</span>
            <span>CHEDDAR / MOZZARELLA / SHREDDED BLEND / BUTTER / GHEE</span>
            <span className="tag-separator">•</span>
            <span>FBR SALES TAX COMPLIANT</span>
            <span className="tag-separator">•</span>
            <span>DAILY TWIN CITIES COLD-CHAIN DISPATCH</span>
          </div>
        </div>

        {/* ====================================================================
            3. SPLIT HERO (TWO DOORS: BUSINESS & HOME) + FACTS ROW
            ==================================================================== */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="site-container">
            <div className="hero-lead-box in-view">
              <span className="spec-badge amber hero-badge">{isUrdu ? 'تجارتی ڈیری ڈیسک' : 'COMMERCIAL DAIRY TRADE'}</span>
              <h1 id="hero-title" className="hero-main-title">{t.hero.main_title}</h1>
              <p className="hero-lead-text">{t.hero.sub_lead}</p>
            </div>

            {/* Split Entry: Door 1 (Business) & Door 2 (Home) */}
            <div className="doors-grid">
              {/* Door A: Business / Wholesale */}
              <article className="door-card" tabIndex="0">
                <div className="door-image-wrapper">
                  <img
                    src="/images/door-business.webp"
                    alt="Wholesale commercial cheese blocks and shredded trays on prep table"
                    className="door-image"
                    loading="eager"
                    width="960"
                    height="540"
                  />
                  <span className="spec-badge amber door-badge-float">{t.hero.door_business_badge}</span>
                </div>
                <div className="door-content">
                  <h2 className="door-title">{t.hero.door_business_title}</h2>
                  <p className="door-promise">{t.hero.door_business_promise}</p>
                  <button
                    onClick={() => handleDoorSelect('business')}
                    className="btn-primary door-btn"
                  >
                    <span>{t.hero.door_business_btn}</span>
                    <ArrowIcon size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>

              {/* Door B: Home / Retail */}
              <article className="door-card" tabIndex="0">
                <div className="door-image-wrapper">
                  <img
                    src="/images/door-home.webp"
                    alt="Kitchen table with block cheese cut on parchment paper and kitchen grater"
                    className="door-image"
                    loading="eager"
                    width="960"
                    height="540"
                  />
                  <span className="spec-badge door-badge-float">{t.hero.door_home_badge}</span>
                </div>
                <div className="door-content">
                  <h2 className="door-title">{t.hero.door_home_title}</h2>
                  <p className="door-promise">{t.hero.door_home_promise}</p>
                  <button
                    onClick={() => handleDoorSelect('home')}
                    className="btn-secondary door-btn"
                  >
                    <span>{t.hero.door_home_btn}</span>
                    <ArrowIcon size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            </div>

            {/* Facts Row: Honest signals */}
            <div className="hero-facts-row" aria-label="Business credentials">
              <div className="fact-item">
                <Calendar className="fact-icon" size={20} aria-hidden="true" />
                <span className="fact-text">{t.hero.facts.founded}</span>
              </div>
              <div className="fact-item">
                <ShieldCheck className="fact-icon" size={20} aria-hidden="true" />
                <span className="fact-text">{t.hero.facts.fbr}</span>
              </div>
              <div className="fact-item">
                <Star className="fact-icon" size={20} aria-hidden="true" />
                <span className="fact-text">{t.hero.facts.rating}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.catalogue.section_code}</span>
            <span className="tag-separator">•</span>
            <span>SPECIFICATIONS / PACK SIZES / DISPATCH MINIMUMS</span>
          </div>
        </div>

        {/* ====================================================================
            4. CATALOGUE SPEC TABLE WITH BUSINESS / HOME TOGGLE
            ==================================================================== */}
        <section id="catalogue" className="page-section" aria-labelledby="catalogue-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.catalogue.section_code}</div>
              <h2 id="catalogue-heading" className="section-main-heading">{t.catalogue.heading}</h2>
              <p className="section-sub-lead">{t.catalogue.subheading}</p>
            </div>

            {/* Business / Home Active Toggle Control */}
            <div className="catalogue-control-bar">
              <div className="catalogue-toggle-group" role="tablist" aria-label="Trade Tier Selection">
                <button
                  role="tab"
                  aria-selected={catalogueTier === 'business'}
                  onClick={() => setCatalogueTier('business')}
                  className={`toggle-btn ${catalogueTier === 'business' ? 'active' : ''}`}
                >
                  {t.catalogue.toggle_business}
                </button>
                <button
                  role="tab"
                  aria-selected={catalogueTier === 'home'}
                  onClick={() => setCatalogueTier('home')}
                  className={`toggle-btn ${catalogueTier === 'home' ? 'active' : ''}`}
                >
                  {t.catalogue.toggle_home}
                </button>
              </div>

              <div className="spec-sheet-notice">
                {catalogueTier === 'business'
                  ? (isUrdu ? 'سیلز ٹیکس انوائس پر مبنی ہول سیل شیٹ' : 'SHOWING: B2B COMMERCIAL TIERS & CRATES')
                  : (isUrdu ? 'راجہ بازار شاپ کاؤنٹر ریٹس' : 'SHOWING: DIRECT SHOP COUNTER PACK SIZES')}
              </div>
            </div>

            {/* Desktop Spec Table (Non-card, tabular spec-sheet) */}
            <div className="spec-table-container">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th>{t.catalogue.table_headers.product}</th>
                    <th>{t.catalogue.table_headers.best_for}</th>
                    <th>{t.catalogue.table_headers.pack_sizes}</th>
                    <th>{t.catalogue.table_headers.min_order}</th>
                    <th>{t.catalogue.table_headers.rate}</th>
                    <th style={{ textAlign: 'center' }}>{t.catalogue.table_headers.action}</th>
                  </tr>
                </thead>
                <tbody>
                  {siteData.products.map(item => {
                    const tierData = catalogueTier === 'business' ? item.wholesale : item.retail;
                    const inquiryUrl = buildProductInquiryLink(item, catalogueTier, lang);

                    return (
                      <tr key={item.id}>
                        <td>
                          <div className="product-cell">
                            <img
                              src={item.image}
                              alt={isUrdu ? item.name_ur : item.name_en}
                              className="product-thumb"
                              loading="lazy"
                              width="56"
                              height="56"
                            />
                            <div>
                              <strong className="product-name-title">
                                {isUrdu ? item.name_ur : item.name_en}
                              </strong>
                              <span className="product-form-sub">
                                {isUrdu ? item.form_ur : item.form_en}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td style={{ maxWidth: '240px' }}>
                          <span style={{ color: 'var(--text-muted)' }}>
                            {isUrdu ? item.best_for_ur : item.best_for_en}
                          </span>
                        </td>
                        <td>
                          <strong>{isUrdu ? tierData.pack_sizes_ur : tierData.pack_sizes_en}</strong>
                        </td>
                        <td>
                          <span>{isUrdu ? tierData.min_order_ur : tierData.min_order_en}</span>
                        </td>
                        <td className="spec-price-cell">
                          <span className="spec-price-val">{tierData.price_display}</span>
                          <span className="spec-price-unit">
                            {isUrdu ? tierData.price_unit_ur : tierData.price_unit_en}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <a
                            href={inquiryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            style={{ fontSize: '0.82rem', paddingBlock: '8px', minHeight: '38px', whiteSpace: 'nowrap' }}
                          >
                            <MessageSquare size={14} aria-hidden="true" />
                            <span>
                              {catalogueTier === 'business'
                                ? t.catalogue.order_btn_business
                                : t.catalogue.order_btn_retail}
                            </span>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Spec Entries (Responsive layout) */}
            <div className="mobile-spec-list">
              {siteData.products.map(item => {
                const tierData = catalogueTier === 'business' ? item.wholesale : item.retail;
                const inquiryUrl = buildProductInquiryLink(item, catalogueTier, lang);

                return (
                  <article key={item.id} className="mobile-spec-card">
                    <div className="mobile-spec-top">
                      <img
                        src={item.image}
                        alt={isUrdu ? item.name_ur : item.name_en}
                        className="product-thumb"
                        loading="lazy"
                        width="56"
                        height="56"
                      />
                      <div>
                        <strong className="product-name-title">
                          {isUrdu ? item.name_ur : item.name_en}
                        </strong>
                        <span className="product-form-sub">
                          {isUrdu ? item.form_ur : item.form_en}
                        </span>
                      </div>
                    </div>

                    <div className="mobile-spec-grid">
                      <div className="mobile-spec-prop">
                        <strong>{t.catalogue.table_headers.pack_sizes}</strong>
                        <span>{isUrdu ? tierData.pack_sizes_ur : tierData.pack_sizes_en}</span>
                      </div>
                      <div className="mobile-spec-prop">
                        <strong>{t.catalogue.table_headers.min_order}</strong>
                        <span>{isUrdu ? tierData.min_order_ur : tierData.min_order_en}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span className="spec-price-val">{tierData.price_display}</span>
                        <span className="spec-price-unit">{isUrdu ? tierData.price_unit_ur : tierData.price_unit_en}</span>
                      </div>
                      <span className="spec-badge">{catalogueTier === 'business' ? 'WHOLESALE' : 'RETAIL'}</span>
                    </div>

                    <a
                      href={inquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ width: '100%', fontSize: '0.9rem' }}
                    >
                      <MessageSquare size={16} aria-hidden="true" />
                      <span>
                        {catalogueTier === 'business'
                          ? t.catalogue.order_btn_business
                          : t.catalogue.order_btn_retail}
                      </span>
                    </a>
                  </article>
                );
              })}
            </div>

            {/* Trade Disclaimer Notice */}
            <div className="catalogue-disclaimer-box">
              {catalogueTier === 'business'
                ? t.catalogue.disclaimer_business
                : t.catalogue.disclaimer_retail}
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.wholesale_section.section_code}</span>
            <span className="tag-separator">•</span>
            <span>COMMERCIAL PROCUREMENT / B2B INQUIRY DESK</span>
          </div>
        </div>

        {/* ====================================================================
            5. FOR BUSINESSES (WHOLESALE): WHO WE SUPPLY, WHAT YOU GET, QUOTE FORM
            ==================================================================== */}
        <section id="wholesale" className="page-section alt-bg" aria-labelledby="wholesale-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.wholesale_section.section_code}</div>
              <h2 id="wholesale-heading" className="section-main-heading">{t.wholesale_section.heading}</h2>
              <p className="section-sub-lead">{t.wholesale_section.subheading}</p>
            </div>

            <div className="wholesale-layout-grid">
              {/* Left Column: Who we supply & What you get */}
              <div className="wholesale-left-col">
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBlockEnd: 'var(--sp-4)' }}>
                    {t.wholesale_section.who_title}
                  </h3>
                  <div className="two-col-features">
                    {siteData.who_we_supply.map((item, idx) => (
                      <div key={idx} className="plain-feature-item">
                        <h4 className="feature-title">{isUrdu ? item.title_ur : item.title_en}</h4>
                        <p className="feature-desc">{isUrdu ? item.desc_ur : item.desc_en}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBlockEnd: 'var(--sp-4)' }}>
                    {t.wholesale_section.what_title}
                  </h3>
                  <div className="two-col-features">
                    {siteData.what_you_get.map((item, idx) => (
                      <div key={idx} className="plain-feature-item">
                        <h4 className="feature-title">{isUrdu ? item.title_ur : item.title_en}</h4>
                        <p className="feature-desc">{isUrdu ? item.desc_ur : item.desc_en}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Wholesale Rate Request Form (pre-fills WhatsApp) */}
              <div className="wholesale-form-card">
                <div className="form-header-tag">B2B QUOTE DESK</div>
                <h3 className="form-title">{t.wholesale_section.form_box_title}</h3>
                <p className="form-desc">{t.wholesale_section.form_box_desc}</p>

                <form onSubmit={handleFormSubmit} className="trade-form">
                  <div className="form-group">
                    <label htmlFor="bizName" className="form-label">{t.wholesale_section.form.business_name}</label>
                    <input
                      type="text"
                      id="bizName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleFormChange}
                      placeholder={t.wholesale_section.form.business_name_ph}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bizType" className="form-label">{t.wholesale_section.form.business_type}</label>
                    <select
                      id="bizType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleFormChange}
                      className="form-select"
                    >
                      <option value="pizzeria">{t.wholesale_section.form.business_type_options.pizzeria}</option>
                      <option value="restaurant">{t.wholesale_section.form.business_type_options.restaurant}</option>
                      <option value="hotel">{t.wholesale_section.form.business_type_options.hotel}</option>
                      <option value="bakery">{t.wholesale_section.form.business_type_options.bakery}</option>
                      <option value="other">{t.wholesale_section.form.business_type_options.other}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="bizCity" className="form-label">{t.wholesale_section.form.city}</label>
                    <input
                      type="text"
                      id="bizCity"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleFormChange}
                      placeholder={t.wholesale_section.form.city_ph}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bizItems" className="form-label">{t.wholesale_section.form.items_needed}</label>
                    <input
                      type="text"
                      id="bizItems"
                      name="items"
                      required
                      value={formData.items}
                      onChange={handleFormChange}
                      placeholder={t.wholesale_section.form.items_needed_ph}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="bizVol" className="form-label">{t.wholesale_section.form.monthly_volume}</label>
                    <input
                      type="text"
                      id="bizVol"
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleFormChange}
                      placeholder={t.wholesale_section.form.monthly_volume_ph}
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginBlockStart: 'var(--sp-2)' }}>
                    <MessageSquare size={18} aria-hidden="true" />
                    <span>{t.wholesale_section.form.submit_btn}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.quality.section_code}</span>
            <span className="tag-separator">•</span>
            <span>+2°C TO +4°C CHILLER TEMPERATURE CONTROL</span>
          </div>
        </div>

        {/* ====================================================================
            6. QUALITY & HANDLING (Factual list, Cold Chain, No lab buzzwords)
            ==================================================================== */}
        <section id="quality" className="page-section" aria-labelledby="quality-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.quality.section_code}</div>
              <h2 id="quality-heading" className="section-main-heading">{t.quality.heading}</h2>
              <p className="section-sub-lead">{t.quality.subheading}</p>
            </div>

            {/* Factual 4-Item Quality Matrix */}
            <div className="quality-grid">
              {siteData.quality_handling.map((point, idx) => (
                <div key={idx} className="quality-item">
                  <h3 className="feature-title" style={{ fontSize: '1.1rem' }}>
                    {isUrdu ? point.title_ur : point.title_en}
                  </h3>
                  <p className="feature-desc">{isUrdu ? point.desc_ur : point.desc_en}</p>
                </div>
              ))}
            </div>

            {/* Verification Proof Banner (Melt and stretch performance) */}
            <div className="quality-proof-banner">
              <div className="proof-content">
                <span className="spec-badge amber" style={{ marginBlockEnd: 'var(--sp-2)' }}>
                  COMMERCIAL KITCHEN TESTING
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBlockEnd: 'var(--sp-2)' }}>
                  {t.quality.proof_callout_title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-body)', marginBlockEnd: 'var(--sp-4)' }}>
                  {t.quality.proof_callout_desc}
                </p>
                <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
                  <div className="spec-badge">FBR TAX COMPLIANT</div>
                  <div className="spec-badge">NON-STICK SHREDDING</div>
                  <div className="spec-badge">BACKUP GENERATOR</div>
                </div>
              </div>
              <div className="proof-img-wrap">
                <img
                  src="/images/pizza-stretch.webp"
                  alt="Commercial deck oven pizza cheese melt and stretch performance"
                  className="proof-img"
                  loading="lazy"
                  width="960"
                  height="540"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.how_to_order.section_code}</span>
            <span className="tag-separator">•</span>
            <span>CHALLAN NUMBERED PROCESS / DISPATCH LOG</span>
          </div>
        </div>

        {/* ====================================================================
            7. HOW TO ORDER (Invoice / Challan Style 4-Step Process)
            ==================================================================== */}
        <section id="how-to-order" className="page-section alt-bg" aria-labelledby="order-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.how_to_order.section_code}</div>
              <h2 id="order-heading" className="section-main-heading">{t.how_to_order.heading}</h2>
              <p className="section-sub-lead">{t.how_to_order.subheading}</p>
            </div>

            <div className="challan-wrapper">
              <div className="challan-top-stamp">
                <div>
                  <strong style={{ fontSize: '1rem', display: 'block' }}>
                    {isUrdu ? 'مظہر ڈیری ڈسپیچ چالان' : 'MAZHAR DAIRY DISPATCH CHALLAN FLOW'}
                  </strong>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    DOC-REF: PK-RWP-CHALLAN-1987
                  </span>
                </div>
                <div className="spec-badge amber">
                  {isUrdu ? 'روزانہ ڈلیوری کوریج' : 'DAILY TWIN CITIES ROUTES'}
                </div>
              </div>

              {/* Numbered Invoice Lines */}
              <div className="challan-steps-list">
                {siteData.how_to_order_steps.map((item, idx) => (
                  <div key={idx} className="challan-row">
                    <div className="step-num-badge">{item.step}</div>
                    <div className="step-body-col">
                      <h4>{isUrdu ? item.title_ur : item.title_en}</h4>
                      <p>{isUrdu ? item.desc_ur : item.desc_en}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Routes & Timings Details */}
              <div style={{ borderBlockStart: '1px solid var(--border-line)', paddingBlockStart: 'var(--sp-6)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBlockEnd: 'var(--sp-2)' }}>
                  {t.how_to_order.delivery_schedule_title}
                </h3>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--accent-rind)', fontWeight: '600' }}>
                  {t.how_to_order.urgent_note}
                </p>

                <div className="delivery-zones-grid">
                  {siteData.delivery_zones.areas.map((area, idx) => (
                    <div key={idx} className="zone-box">
                      <div className="zone-title">{isUrdu ? area.zone_ur : area.zone_en}</div>
                      <div className="zone-coverage">{isUrdu ? area.coverage_ur : area.coverage_en}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.story.section_code}</span>
            <span className="tag-separator">•</span>
            <span>TIMELINE: 1987 TO PRESENT / RAJA BAZAR ARCHIVES</span>
          </div>
        </div>

        {/* ====================================================================
            8. OUR STORY (Dated Rows from 1987 to Today)
            ==================================================================== */}
        <section id="story" className="page-section" aria-labelledby="story-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.story.section_code}</div>
              <h2 id="story-heading" className="section-main-heading">{t.story.heading}</h2>
              <p className="section-sub-lead">{t.story.subheading}</p>
            </div>

            <div className="timeline-rows">
              {siteData.story_milestones.map((m, idx) => (
                <article key={idx} className="timeline-row">
                  <div className="timeline-year-col">{m.year}</div>
                  <div className="timeline-body-col">
                    <h3 className="timeline-title">{isUrdu ? m.title_ur : m.title_en}</h3>
                    <p className="timeline-desc">{isUrdu ? m.desc_ur : m.desc_en}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.reviews.section_code}</span>
            <span className="tag-separator">•</span>
            <span>GOOGLE VERIFIED BUSINESS PROFILE REVIEWS</span>
          </div>
        </div>

        {/* ====================================================================
            9. REVIEWS (Real Google Reviews, 4.8 Rating, 132 count honestly stated)
            ==================================================================== */}
        <section id="reviews" className="page-section alt-bg" aria-labelledby="reviews-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.reviews.section_code}</div>
              <h2 id="reviews-heading" className="section-main-heading">{t.reviews.heading}</h2>
              <p className="section-sub-lead">{t.reviews.subheading}</p>
            </div>

            <div className="spec-badge amber" style={{ fontSize: '0.85rem', paddingBlock: '6px', paddingInline: '12px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Star size={16} fill="var(--accent-amber)" color="var(--accent-amber)" />
                <strong>{t.reviews.google_badge}</strong>
              </span>
            </div>

            <div className="reviews-grid">
              {siteData.reviews.map(rev => (
                <article key={rev.id} className="review-card">
                  <div className="review-top-meta">
                    <span className="reviewer-name">{rev.author}</span>
                    <div className="review-stars" aria-label={`${rev.rating} out of 5 stars`}>
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="review-text">"{isUrdu ? rev.text_ur : rev.text_en}"</p>
                  <span className="review-date">{rev.date} • Verified Google Review</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.faq.section_code}</span>
            <span className="tag-separator">•</span>
            <span>COMMERCIAL QUESTIONS / TAX / DELIVERIES</span>
          </div>
        </div>

        {/* ====================================================================
            10. FAQ ACCORDION (Minimums, Areas, Tax Invoice, Storage, Samples)
            ==================================================================== */}
        <section id="faq" className="page-section" aria-labelledby="faq-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.faq.section_code}</div>
              <h2 id="faq-heading" className="section-main-heading">{t.faq.heading}</h2>
              <p className="section-sub-lead">{t.faq.subheading}</p>
            </div>

            <div className="faq-list">
              {siteData.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="faq-item">
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{isUrdu ? faq.q_ur : faq.q_en}</span>
                      <ChevronDown
                        className={`faq-chevron ${isOpen ? 'open' : ''}`}
                        size={18}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-panel">
                        <p>{isUrdu ? faq.a_ur : faq.a_en}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cold-Store Divider Strip */}
        <div className="tag-strip" aria-hidden="true">
          <div className="tag-strip-inner">
            <span>{t.visit.section_code}</span>
            <span className="tag-separator">•</span>
            <span>SHOPS 60-61 KASHMIRI BAZAAR RAJA BAZAR</span>
          </div>
        </div>

        {/* ====================================================================
            11. VISIT US (Map, Address, Timings, Directions, Real photo slot)
            ==================================================================== */}
        <section id="visit" className="page-section alt-bg" aria-labelledby="visit-heading">
          <div className="site-container">
            <div className="section-header-block">
              <div className="section-code-label">{t.visit.section_code}</div>
              <h2 id="visit-heading" className="section-main-heading">{t.visit.heading}</h2>
              <p className="section-sub-lead">{t.visit.subheading}</p>
            </div>

            <div className="visit-grid">
              {/* Information Column */}
              <div className="visit-info-card">
                <div className="visit-detail-item">
                  <strong>{t.visit.address_label}</strong>
                  <p>{isUrdu ? siteData.business.address.shop_ur : siteData.business.address.shop_en}</p>
                </div>

                <div className="visit-detail-item">
                  <strong>{t.visit.hours_label}</strong>
                  <p>{isUrdu ? siteData.business.hours.timings_ur : siteData.business.hours.timings_en}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {isUrdu ? siteData.business.hours.days_ur : siteData.business.hours.days_en}
                  </p>
                </div>

                <div className="visit-detail-item">
                  <strong>{t.visit.phone_label}</strong>
                  <p>
                    <a href={`tel:${siteData.business.phones.mobile_raw}`} style={{ textDecoration: 'underline' }}>
                      {siteData.business.phones.mobile}
                    </a>
                    {' '}/ Landline:{' '}
                    <a href={`tel:${siteData.business.phones.landline_raw}`} style={{ textDecoration: 'underline' }}>
                      {siteData.business.phones.landline}
                    </a>
                  </p>
                </div>

                <div className="visit-detail-item">
                  <strong>{t.visit.whatsapp_label}</strong>
                  <p>
                    <a
                      href={buildWhatsAppLink("Hello Mazhar Dairy, I'm visiting Kashmiri Bazaar.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-amber)', fontWeight: '700' }}
                    >
                      {siteData.business.phones.whatsapp}
                    </a>
                  </p>
                </div>

                <div style={{ display: 'flex', gap: 'var(--sp-3)', flexWrap: 'wrap', marginBlockStart: 'var(--sp-2)' }}>
                  <a
                    href={siteData.business.address.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MapPin size={16} aria-hidden="true" />
                    <span>{t.visit.directions_btn}</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>

                  <a
                    href={`tel:${siteData.business.phones.mobile_raw}`}
                    className="btn-secondary"
                  >
                    <PhoneCall size={16} aria-hidden="true" />
                    <span>{t.visit.call_btn}</span>
                  </a>
                </div>

                {/* Real photo callout slot */}
                <div style={{
                  padding: 'var(--sp-3)',
                  border: '1px dashed var(--accent-rind)',
                  backgroundColor: 'var(--bg-warm)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-rind)'
                }}>
                  {t.visit.real_photo_placeholder}
                </div>
              </div>

              {/* Map Embed Column */}
              <div className="map-embed-container">
                <iframe
                  title="Mazhar Dairy Location Map"
                  src={siteData.business.address.google_maps_embed}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-action-bar">
                  <a
                    href={siteData.business.address.google_maps_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ fontSize: '0.82rem', paddingBlock: '6px', minHeight: '36px' }}
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    <span>Open in Full Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          12. FOOTER
          ==================================================================== */}
      <footer className="site-footer">
        <div className="site-container">
          <div className="footer-top-grid">
            <div className="footer-col">
              <h5>{t.footer.about_title}</h5>
              <p>{t.footer.about_text}</p>
              <div className="footer-tax-box">
                <div>{t.footer.ntn_strn_label}</div>
                <strong>{siteData.business.fbr.ntn_strn_placeholder}</strong>
              </div>
            </div>

            <div className="footer-col">
              <h5>{t.footer.quick_links_title}</h5>
              <ul className="footer-links">
                <li className="footer-link-item"><a href="#catalogue">{t.nav.catalogue}</a></li>
                <li className="footer-link-item"><a href="#wholesale">{t.nav.wholesale}</a></li>
                <li className="footer-link-item"><a href="#quality">{t.nav.quality}</a></li>
                <li className="footer-link-item"><a href="#how-to-order">{t.nav.how_to_order}</a></li>
                <li className="footer-link-item"><a href="#story">{t.nav.story}</a></li>
                <li className="footer-link-item"><a href="#reviews">{t.nav.reviews}</a></li>
                <li className="footer-link-item"><a href="#visit">{t.nav.visit}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>{t.footer.trade_desk_title}</h5>
              <p style={{ marginBlockEnd: 'var(--sp-2)' }}>
                {isUrdu ? siteData.business.address.shop_ur : siteData.business.address.shop_en}
              </p>
              <p style={{ marginBlockEnd: 'var(--sp-2)' }}>
                Call: {siteData.business.phones.mobile} | Tel: {siteData.business.phones.landline}
              </p>
              <p>
                WhatsApp: {siteData.business.phones.whatsapp}
              </p>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>{t.footer.copyright}</span>
            <span>{t.footer.agency_credit}</span>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          STICKY BOTTOM BAR ON MOBILE (Call & WhatsApp)
          ==================================================================== */}
      <nav className="mobile-sticky-bar" aria-label="Mobile quick actions">
        <a
          href={`tel:${siteData.business.phones.mobile_raw}`}
          className="sticky-action-btn sticky-call"
        >
          <PhoneCall size={18} aria-hidden="true" />
          <span>{t.mobile_sticky.call}</span>
        </a>
        <a
          href={buildGeneralRateListLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-action-btn sticky-whatsapp"
        >
          <MessageSquare size={18} aria-hidden="true" />
          <span>{t.mobile_sticky.whatsapp}</span>
        </a>
      </nav>
    </div>
  );
}
