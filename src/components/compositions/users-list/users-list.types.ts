import { UserCardItemUser } from "../user-card-item/user-card-item.types";

export type UsersListData = {
  users: UserCardItemUser[];
  onEditUser: (userId: string, userData: Partial<UserCardItemUser>) => void;
};

export type UsersListProps = UsersListData;