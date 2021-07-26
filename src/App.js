import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Routes from './components/Routes';
import ItemsPageSmart from './components/itemsPage/ItemsPageSmart';

export default function App() {
  return (
        <Routes></Routes>
        // <ItemsPageSmart/>
  );
}