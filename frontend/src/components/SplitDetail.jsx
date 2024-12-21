import '../App.css';
import { useLocation } from 'react-router-dom';

function SplitDetail() {
  const location = useLocation();
  const { split } = location.state;

  return (
    <div className="split-detail">
      
    </div>
  )
}

export default SplitDetail;