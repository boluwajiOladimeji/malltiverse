import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

function Back() {
  const navigate = useNavigate();

  return (
    <button
      className='flex items-center hover:text-reddish gap-1'
      onClick={() => navigate(-1)}
    >
      <span>
        <TiArrowBack />
      </span>
      <span>Back</span>
    </button>
  );
}

export default Back;
