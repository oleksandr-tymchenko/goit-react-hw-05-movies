import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { id } = useParams();
  console.log(id);
};
