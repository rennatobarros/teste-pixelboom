import { CardItem } from "@/components/compositions/card-item/card-item";
import { AddUserDrawer } from "@/components/compositions/user-drawer/user-drawer";
import { UsersList } from "@/components/compositions/users-list/users-list.component";
import { SearchInput } from "@/components/elements/search-input/search-input";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import { useState } from "react";
import { UserCardItemUser } from "@/components/compositions/user-card-item/user-card-item.types";
import { toast } from "sonner";

export const Users = () => {
  const cards = [
    {
      title: "Usuários",
      description: "294",
    },
    {
      title: "Tempo de sessão",
      description: "31m 20s",
    },
    {
      title: "Ativos",
      description: "203",
    },
    {
      title: "Inativos",
      description: "127",
    },
  ];

  const initialUsers = [
    {
      id: "1",
      avatar: "https://github.com/shadcn.png",
      name: "John Doe",
      age: 20,
      gender: "Homem",
      lastLogin: "22/03/2025 - 10:21am",
      lastAccessTimeSession: "38m22s",
      role: "Usuário padrão",
      status: "Ativo",
    },
    {
      id: "2",
      avatar: "https://github.com/shadcn.png",
      name: "John Doe",
      age: 20,
      gender: "Homem",
      lastLogin: "22/03/2025 - 10:21am",
      lastAccessTimeSession: "38m22s",
      role: "Usuário padrão",
      status: "Ativo",
    },
    {
      id: "3",
      avatar: "https://github.com/shadcn.png",
      name: "John Doe",
      age: 20,
      gender: "Homem",
      lastLogin: "22/03/2025 - 10:21am",
      lastAccessTimeSession: "38m22s",
      role: "Usuário padrão",
      status: "Inativo",
    },
  ];

  const [users, setUsers] = useState<UserCardItemUser[]>(initialUsers);

  const handleAddUser = (userData: Partial<UserCardItemUser>) => {
    const newUser: UserCardItemUser = {
      id: String(users.length + 1),
      avatar: "https://github.com/shadcn.png",
      name: userData.name || "",
      age: 0,
      gender: "Não informado",
      lastLogin: new Date().toLocaleString(),
      lastAccessTimeSession: "0m0s",
      role: "Usuário padrão",
      status: userData.status || "Ativo",
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);
    toast.success("Usuário adicionado com sucesso!");
  };

  const handleEditUser = (userId: string, userData: Partial<UserCardItemUser>) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              ...userData,
              lastLogin: new Date().toLocaleString(),
            }
          : user
      )
    );
    toast.success("Usuário editado com sucesso!");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="title-wrapper flex items-center justify-between">
        <h3 className="text-3xl font-normal text-zinc-900 font-serif">
          Usuários
        </h3>
        <AddUserDrawer onAddUser={handleAddUser} />
      </div>

      <div className="cards-wrapper grid grid-cols-2 gap-5 w-full sm:flex">
        {cards.map((card) => (
          <CardItem key={card.title} {...card} />
        ))}
      </div>

      <div className="input-wrapper flex items-center gap-3 w-full">
        <SearchInput placeholder="Buscar..." />
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10"
        >
          <ListFilter className="h-4 w-4" />
        </Button>
      </div>

      <UsersList users={users} onEditUser={handleEditUser} />
    </div>
  );
};
