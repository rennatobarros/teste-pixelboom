import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, CircleHelp, PanelLeftClose } from "lucide-react";
import { FunctionComponent } from "react";
import { useSidebar } from "@/components/ui/sidebar";

export const Header: FunctionComponent = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 w-full h-fit flex items-center justify-between p-4 border-b bg-white">
      <Button variant="ghost" size="icon" onClick={toggleSidebar}>
        <PanelLeftClose />
      </Button>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
          <Bell />
        </Button>

        <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
          <CircleHelp />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
