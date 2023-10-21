import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import RepositoryLayout from './components/RepositoryLayout/RepositoryLayout';
import GitHubDataContext from './GitHubDataContext';


function App() {

  return (
    <div className="container">
     
     <RepositoryLayout />
      
    </div>
  )
}

export default App
