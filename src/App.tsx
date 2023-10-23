import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import RepositoryLayout from './components/RepositoryLayout/RepositoryLayout';
import Footer from "./components/Footer/Footer";

/**
 * The main component of the application.
 * It renders the application layout consisting of a header,
 * a main body, and a footer.
 * @component
 */
function App() {

  return (
    <div className="app-layout">
      <div className="container">
          <RepositoryLayout />
          <Footer />
      </div>
    </div>
  )
}

export default App
