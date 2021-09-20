import { Layout } from "./layout/Layout";
import { Entry } from "./pages/Entry";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTicketPage from "./pages/AddTicket/AddTicketPage";
import "./App.css";
import TicketList from "./pages/Ticketlist/TicketList";
import Ticket from "./pages/Ticket/Ticket";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SignUpPage from "./pages/signup/signupPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Entry} />
        <Switch>
          <PrivateRoute path="/ticket/:tid">
            <Ticket />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addticket">
            <AddTicketPage />
          </PrivateRoute>
          <PrivateRoute path="/ticketlist">
            <TicketList />
          </PrivateRoute>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
