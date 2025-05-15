import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sections/app-sidebar/app-sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ReactNode } from "react";
import { Header } from "@/components/sections/header/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4 sm:p-10">
            {children}
            <Toaster />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
