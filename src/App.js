import { BrowserRouter } from 'react-router-dom';
import Router from '../src/navigation/RouterConfig';
import { Authentication } from './components/AuthenticatedContext';

function App() {
  return (
    <Authentication>
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </Authentication>
  );
}

export default App;
