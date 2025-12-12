import '../../App.css';
import type { AlertType, AlertBoxProps } from '../../types';

export const AlertBox = ({ type, message, onClose, children }: AlertBoxProps) => {
  const typeClass: Record<AlertType, string> = {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
  };

return (
<div className={`alert-box ${typeClass[type]}`}>
<div className="alert-content">
<p>{message}</p>
{children}
</div>
{onClose && (
<button onClick={onClose} className="alert-close">
x
</button>
)}
</div>
);
};







