import { BrowserRouter } from 'react-router-dom';
import Router from '../src/navigation/RouterConfig';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
