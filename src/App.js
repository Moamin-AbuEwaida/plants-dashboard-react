import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Body from "./components/body/Body";

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
