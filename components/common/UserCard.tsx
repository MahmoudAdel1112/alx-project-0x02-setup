// components/common/UserCard.tsx
import { User } from "@/interfaces/interfaces";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="space-y-4 p-8">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
