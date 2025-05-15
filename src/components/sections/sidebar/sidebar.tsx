import { Home, Users, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { Selector } from "@/components/compositions/selector/selector";

const navItems = [
  { label: "Dashboard", icon: <Home className="h-4 w-4" />, active: false },
  { label: "Usuários", icon: <Users className="h-4 w-4" />, active: true },
  {
    label: "Documentos",
    icon: <FileText className="h-4 w-4" />,
    active: false,
  },
];

export const Sidebar: FunctionComponent = () => {
  return (
    <aside className="w-full h-screen max-w-60 bg-alpha/40 flex flex-col justify-between border-r">
      <div className="logo-wrapper flex items-center py-5 ps-6 border-b">
        <div className="w-24 h-8 bg-black text-white font-bold text-xs rounded-lg flex items-center justify-center">
          Logo
        </div>
      </div>
      <div className="content-wrapper flex flex-col justify-between h-full p-4">
        <div className="menu-items-wrapper flex flex-col gap-2">
          <Selector />

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2")}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </nav>

          <Separator className="my-4" />

          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-4 w-4" />
            Geral
          </Button>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          Precisa de ajuda?
        </div>
      </div>
    </aside>
  );
};
