import './App.css';
import { useDispatch } from 'react-redux';
import { setName } from './slices/navSlice';
import CheckGlobalAccess from './components/CheckGlobalAccess';
import LandingPage from './components/LandingPage';

function App() {
  const dispatch = useDispatch();
  
  

  return (
    <div>
     <LandingPage/>
    </div>
  );
}

export default App;
