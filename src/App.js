import Routes from './routes/routes';
import Footer from './layout/Footer';
import M from "materialize-css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
