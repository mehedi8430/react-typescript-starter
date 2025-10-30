import { AppSidebar } from "@/components/Dashboard/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import { Outlet } from "react-router";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <div className="flex flex-1 flex-col gap-4 p-4">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
              />
            ))}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
