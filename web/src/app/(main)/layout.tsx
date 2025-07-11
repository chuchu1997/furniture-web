/** @format */

import Navbar from "@/components/ui/Navbar";
import { BodyContainer } from "@/components/BodyContainer";
import Footer from "@/components/layouts/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "react-hot-toast";
import CookiesClientWrapper from "@/provider/cookie-provider-wrapper";
import { CartProvider } from "@/context/cart-context";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Navbar />
      <BodyContainer className="mt-[90px] sm:mt-[80px]">
        {children}
      </BodyContainer>
      {/* <BodyContainer className="mt-[90px] sm:mt-[65px]">
                  {children}
                </BodyContainer> */}
      {/* <BlockSidebar />
                 <MobileGroupButton /> */}
    </div>
  );
}
