import '../../App.css'; 
import { UserProfileCardProps } from '../../../src/types';

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  const { id, name, email, role, avatarUrl } = user;

  return (
    <div className="user-profile-card">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="avatar"
        />
      )}

      <h2 className="user-name">{name}</h2>

      {showEmail && <p className="user-email">{email}</p>}

      {showRole && <p className="user-role">{role}</p>}

      {children}

      {onEdit && (
        <button
          className="edit-button"
          onClick={() => onEdit(id)}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default UserProfileCard;

