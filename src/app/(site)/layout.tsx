import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageProvider } from "@/context/LanguageContext";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </LanguageProvider>
  );
}
