import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import RepositoryLayout from './components/RepositoryLayout/RepositoryLayout';
import GitHubDataContext from './context/GitHubDataContext';


function App() {

  return (
    <div className="container">
     
     <GitHubDataContext.Provider value={{ repositories }}>
       <RepositoryLayout />
     </GitHubDataContext.Provider>
      
    </div>
  )
}

export default App
