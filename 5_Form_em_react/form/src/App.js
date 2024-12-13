import logo from './logo.svg';
import './App.css';
import Myform from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform user={{name:"Flor", email:"f@gmail.com", bio:"sou desenvolvedor", role:"administrador" }}/>
    </div>
  );
}

export default App;
