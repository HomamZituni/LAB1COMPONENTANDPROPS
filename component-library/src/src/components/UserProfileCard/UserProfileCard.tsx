import '../../App.css'; 
import {UserProfileCardProps} from '../../types';

export const UserProfileCard = ({ 
user,
showEmail = true,
showRole = true,
onEdit,
children }: UserProfileCardProps) => {
return (
<div className = "border p-4 rounded shadow">
<img 
src = {user.avatarUrl}
alt={user.name}
className = "w-16 h-16 rounded-full"
/>
<h3>{user.name}</h3>
      
      {showEmail && <p>{user.email}</p>}
      
      {showRole && <p>{user.role}</p>}
      
            {onEdit && (
        <button onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}

      
      {children}
    </div>
  );
};

