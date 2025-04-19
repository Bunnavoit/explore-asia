"use client";

import Footer from "@/common/components/customs/footer";
import HeaederNavigation from "@/common/components/customs/header-navigation";
import Wrapper from "@/common/components/provider/wrapper";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Wrapper>
          <HeaederNavigation />
          {children}
        </Wrapper>
      </main>
      <Footer />
    </div>
  );
}
