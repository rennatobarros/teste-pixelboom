import { Selector } from "@/components/compositions/selector/selector";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Activity, FileCheck, Headset, Settings, User } from "lucide-react";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Activity,
    isActive: false,
  },
  {
    title: "Usuários",
    url: "#",
    icon: User,
    isActive: true,
  },
  {
    title: "Documentos",
    url: "#",
    icon: FileCheck,
    isActive: false,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="py-5 px-6 border-b flex ">
        <div className="w-24 h-8 bg-black text-white font-bold text-xs rounded-lg flex items-center justify-center">
          Logo
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="p-0 hover:bg-transparent">
                  <Selector />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Filial B</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Filial C</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    asChild
                    className="h-10 hover:bg-primary group/item rounded-4xl p-3 transition-all duration-300 data-[active=true]:bg-primary"
                  >
                    <a href={item.url}>
                      <item.icon className={`h-4 w-4 ${item.isActive ? 'text-white' : 'text-zinc-500'} group-hover/item:text-white`} />
                      <span className={`text-sm font-medium ${item.isActive ? 'text-white' : 'text-zinc-500'} group-hover/item:text-white`}>
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 hover:bg-primary group/item rounded-4xl p-3 transition-all duration-300 data-[active=true]:bg-primary"
                >
                  <a href="#">
                    <Settings className="h-4 w-4 text-zinc-500 group-hover/item:text-white data-[active=true]:text-white" />
                    <span className="text-zinc-500 group-hover/item:text-white text-sm font-medium data-[active=true]:text-white">
                      Configurações
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild className="h-10 bg-white rounded-4xl px-3 py-4 hover:bg-white">
          <a href="#" className="flex items-center justify-between">
            <span className="text-primary text-sm font-medium">
              Precisa de ajuda?
            </span>
            <Headset className="h-4 w-4 text-zinc-700" />
          </a>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};
