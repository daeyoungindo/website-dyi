"use client";

import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export function KontakContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.nav.kontak}
        title={t.contactPage.title}
        description={t.contactPage.subtitle}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.5rem] border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-bold text-navy">
              {t.contactPage.companyInfo}
            </h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink">{t.contactPage.address}</dt>
                <dd className="mt-1 text-muted">{siteConfig.contact.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">{t.contactPage.emailSales}</dt>
                <dd className="mt-1 text-muted">{siteConfig.contact.email}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">{t.contactPage.phone}</dt>
                <dd className="mt-1 text-muted">{siteConfig.contact.phone}</dd>
              </div>
            </dl>
            <p className="mt-8 rounded-xl bg-bg px-4 py-3 text-sm text-muted">
              {t.contactPage.note}
            </p>
          </div>

          <form className="rounded-[1.5rem] border border-line bg-surface p-8">
            <h2 className="font-display text-2xl font-bold text-navy">
              {t.contactPage.sendMessage}
            </h2>
            <p className="mt-2 text-sm text-muted">{t.contactPage.formNote}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">{t.contactPage.name}</span>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder={t.contactPage.namePlaceholder}
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium text-ink">{t.contactPage.email}</span>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder={t.contactPage.emailPlaceholder}
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium text-ink">{t.contactPage.company}</span>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder={t.contactPage.companyPlaceholder}
                />
              </label>
              <label className="block text-sm sm:col-span-2">
                <span className="mb-1.5 block font-medium text-ink">{t.contactPage.message}</span>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-line bg-bg px-3 py-2.5 outline-none ring-blue focus:ring-2"
                  placeholder={t.contactPage.messagePlaceholder}
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-6 rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {t.contactPage.sendButton}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
