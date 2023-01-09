import {ProtectedRoutes} from './routes';
import {PublicRoutes} from './routes'
import "./index.css";
import { googleCalender } from "./helpers/googleCalender";
import GoToTop from "./components/GoToTop";

googleCalender();

function App() {
  return (
    <div className="App">
      <PublicRoutes />
      <ProtectedRoutes />
      <GoToTop />
    </div>
  );
}

export default App;
