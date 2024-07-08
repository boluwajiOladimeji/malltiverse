import { useRouteError } from 'react-router-dom';

function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return <div>ErrorElement</div>;
}
export default ErrorElement;
