import '../../App.css'; 
import type { UserProfileCardProps } from '../../types';

export const UserProfileCard = ({ 
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children 
}: UserProfileCardProps) => {
  return (
    <div className="profile-card">
      <img 
        src={user.avatarUrl}
        alt={user.name}
        className="profile-avatar"
      />
      <h3>{user.name}</h3>
      
      {showEmail && <p>{user.email}</p>}
      
      {showRole && <p>{user.role}</p>}
      
      {onEdit && (
        <button onClick={() => onEdit(user.id)} className="profile-edit-btn">
          Edit Profile
        </button>
      )}
      
      {children}
    </div>
  );
};

