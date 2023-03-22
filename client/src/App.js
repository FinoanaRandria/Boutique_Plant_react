
import './App.css';
import Body from '../src/components/page/Body'
import Navbar from './components/Navbar/Navbar';
import {plantListes} from './plantList'
function App() {
  return (
    <div className="App">
         <Navbar/>
          <Body data={plantListes}/>
    </div>
  );
}

export default App;
