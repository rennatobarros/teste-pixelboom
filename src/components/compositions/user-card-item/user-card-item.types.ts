export type UserCardItemUser = {
  id: string;
  avatar: string;
  name: string;
  age: number;
  gender: string;
  lastLogin: string;
  lastAccessTimeSession: string;
  role: string;
  status: string;
};

export type UserCardItemData = {
  user: UserCardItemUser;
  onEditUser: (userId: string, userData: Partial<UserCardItemUser>) => void;
};

export type UserCardItemProps = UserCardItemData;