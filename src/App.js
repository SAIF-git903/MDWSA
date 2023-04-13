import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from "../src/My_App/Redux/store"
import Home from './My_App/Screens/Home';
import RouterRoutes from './My_App/Router';
import NavBar from './My_App/Components/NavBar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <RouterRoutes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
