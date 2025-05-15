import { TablePagination } from "@/components/elements/table-pagination/table-pagination";
import { UserCardItem } from "../user-card-item/user-card-item.component";
import { UsersListProps } from "./users-list.types";

export const UsersList = ({ users, onEditUser }: UsersListProps) => {
  return (
    <div className="container flex flex-col gap-5 w-full">
      <div className="users-list-container flex flex-col gap-2 w-full max-h-[520px] overflow-y-hidden">
        {users.map((user) => (
          <UserCardItem key={user.id} user={user} onEditUser={onEditUser} />
        ))}
      </div>
      <TablePagination
        currentPage={1}
        totalPages={10}
        totalItems={100}
        itemsPerPage={10}
        visibleItems={10}
        onPageChange={(page) => {
          console.log(`Navegando para página ${page}`);
        }}
        onItemsPerPageChange={(value) => {
          console.log(`Alterando itens por página para ${value}`);
        }}
      />
    </div>
  );
};
