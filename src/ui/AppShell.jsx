import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CartDrawer from "./Header/CartDrawer";

export default function AppShell({
  children,
  onCountryChange,
  showCountrySelect,
}) {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Header
        onCountryChange={onCountryChange}
        showCountrySelect={showCountrySelect}
      />
      <main className="flex-1 pt-[125px] text-center">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
