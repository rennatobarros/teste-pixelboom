import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalendarIcon,
  MoreVertical,
  TagIcon,
  TimerIcon,
  User,
  Pencil,
  Ban,
  Power,
} from "lucide-react";
import { UserCardItemProps } from "./user-card-item.types";
import { EditUserDrawer } from "../user-drawer/user-drawer";
import { useState } from "react";
import { toast } from "sonner";

export const UserCardItem = ({ user, onEditUser }: UserCardItemProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleStatusChange = () => {
    const newStatus = user.status === "Inativo" ? "Ativo" : "Inativo";
    onEditUser(user.id, {
      status: newStatus
    });
    toast.success(`Usuário ${newStatus.toLowerCase()} com sucesso!`);
  };

  return (
    <div className="user-card-item-container flex items-center justify-between p-3 rounded-lg border w-full">
      <div className="inner-container flex items-center gap-3">
        <Avatar className="w-14 h-14">
          <AvatarImage src={user.avatar} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="content-wrapper flex flex-col gap-2">
          <div className="user-personal-data flex items-center gap-2">
            <p className="user-personal-data-name text-sm font-medium text-zinc-900 whitespace-nowrap">
              {user.name}
            </p>
            <div className="user-personal-data-info flex items-center gap-1 whitespace-nowrap">
              <User className="h-3 w-3 text-zinc-500" />
              <p className="user-personal-data-info-gender-and-age text-xs font-normal text-zinc-500">
                {user.age} anos, {user.gender}
              </p>
            </div>
          </div>
          <div className="user-access-data flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="user-access-data-last-login flex items-center gap-1">
              <CalendarIcon className="h-3 w-3 text-zinc-500" />
              <p className="user-access-data-last-login-value text-xs font-normal text-zinc-500">
                {user.lastLogin}
              </p>
            </div>
            <div className="user-access-data-last-access-time-session flex items-center gap-1">
              <TimerIcon className="h-3 w-3 text-zinc-500" />
              <p className="user-access-data-last-access-time-session-value text-xs font-normal text-zinc-500">
                {user.lastAccessTimeSession}
              </p>
            </div>
            <div className="user-role flex items-center gap-1">
              <TagIcon className="h-3 w-3 text-zinc-500" />
              <p className="user-role-value text-xs font-normal text-zinc-500">
                {user.role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="actions-wrapper flex items-center gap-3">
        <Badge variant={user.status === "Inativo" ? "outline" : "secondary"}>
          {user.status}
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem className="gap-2" onClick={() => setIsDrawerOpen(true)}>
              <Pencil className="h-3 w-3" />
              <span>Editar</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2" onClick={handleStatusChange}>
              {user.status === "Inativo" ? (
                <>
                  <Power className="h-3 w-3" />
                  <span>Ativar</span>
                </>
              ) : (
                <>
                  <Ban className="h-3 w-3" />
                  <span>Desativar</span>
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <EditUserDrawer 
          user={user}
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          onSubmit={(data) => onEditUser(user.id, data)}
        />
      </div>
    </div>
  );
};
