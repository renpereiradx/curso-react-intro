import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconType = {
  'check': (color) => <CheckSVG className="Icon-svg" fill={color} />,
  'delete': (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-Container Icon-Container-${type}`} onClick={onClick}>
      {iconType[type](color)}
    </span> 
  );
}

export { TodoIcon };