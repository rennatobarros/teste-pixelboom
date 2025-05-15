import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useWindowSize } from "@/hooks/use-window-size";
import { Plus, X } from "lucide-react";
import { UserCardItemUser } from "../user-card-item/user-card-item.types";
import { FormEvent, useState } from "react";

interface DrawerContentProps {
  user?: UserCardItemUser;
  onClose?: () => void;
  onSubmit?: (data: Partial<UserCardItemUser>) => void;
}

const UserDrawerContent = ({ user, onClose, onSubmit }: DrawerContentProps) => {
  const { isMobile } = useWindowSize();
  const isEditing = !!user;
  const [isActive, setIsActive] = useState(user?.status !== "Inativo");
  const [name, setName] = useState(user?.name || "");

  const resetForm = () => {
    if (!isEditing) {
      setName("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.({
      name,
      status: isActive ? "Ativo" : "Inativo"
    });
    resetForm();
    onClose?.();
  };

  return (
    <DrawerContent className={isMobile ? "h-[90%]" : ""}>
      <div className="mx-auto w-full h-full">
        <DrawerHeader>
          <DrawerTitle>{isEditing ? "Editar usuário" : "Adicionar usuário"}</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className={`p-10 ${isMobile ? "h-full overflow-y-auto pb-20" : "h-[calc(100%-70px)]"} flex flex-col justify-between`}>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input 
                id="name" 
                placeholder="Digite o nome" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Digite o e-mail" 
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input 
                id="phone" 
                placeholder="Informe o telefone" 
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="whatsapp" />
              <Label htmlFor="whatsapp">WhatsApp</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input 
                  id="cpf" 
                  placeholder="Informe o CPF" 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="rg">RG</Label>
                <Input 
                  id="rg" 
                  placeholder="Informe o RG" 
                />
              </div>
            </div>

            <div className="rounded-lg border bg-zinc-50 p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="status">Status</Label>
                  <p className="text-sm text-zinc-500">
                    Defina se o usuário estará ativo ao ser adicionado.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Ativo</span>
                  <Switch 
                    id="status" 
                    checked={isActive}
                    onCheckedChange={setIsActive}
                  />
                </div>
              </div>
            </div>

            <div className={`flex justify-end gap-4 ${isMobile ? "fixed bottom-0 left-0 w-full bg-white p-4 border-t" : ""}`}>
              <DrawerClose asChild>
                <Button type="button" variant="outline" onClick={() => {
                  resetForm();
                  onClose?.();
                }}>
                  Cancelar
                </Button>
              </DrawerClose>
              <Button type="submit">{isEditing ? "Salvar" : "Adicionar"}</Button>
            </div>
          </form>
        </div>
      </div>
    </DrawerContent>
  );
};

interface AddUserDrawerProps {
  onAddUser: (data: Partial<UserCardItemUser>) => void;
}

// Componente para adicionar usuário (com botão)
export const AddUserDrawer = ({ onAddUser }: AddUserDrawerProps) => {
  const { isMobile } = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction={isMobile ? "bottom" : "right"} open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button>
          <Plus className="h-4 w-4" />
          Adicionar
        </Button>
      </DrawerTrigger>
      <UserDrawerContent onSubmit={onAddUser} onClose={() => setOpen(false)} />
    </Drawer>
  );
};

// Componente para editar usuário (sem botão)
interface EditUserDrawerProps {
  user: UserCardItemUser;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmit: (data: Partial<UserCardItemUser>) => void;
}

export const EditUserDrawer = ({ user, open, onOpenChange, onSubmit }: EditUserDrawerProps) => {
  const { isMobile } = useWindowSize();

  return (
    <Drawer 
      direction={isMobile ? "bottom" : "right"} 
      open={open} 
      onOpenChange={onOpenChange}
    >
      <UserDrawerContent 
        user={user} 
        onClose={() => onOpenChange?.(false)} 
        onSubmit={onSubmit}
      />
    </Drawer>
  );
};
