import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import "./style.css";
function Menu() {
  return (
    <div className="nav-menu">
      <div className="menu">
        <ListItem button component={NavLink} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={NavLink} to="/cadastroCliente">
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Cadastro Cliente" />
        </ListItem>

        <ListItem button component={NavLink} to="/cadastroUsina">
          <ListItemIcon>
            <AddLocationIcon />
          </ListItemIcon>
          <ListItemText primary="Cadastro Usina" />
        </ListItem>

        <ListItem button component={NavLink} to="/quadroCliente">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Clientes e Usinas" />
        </ListItem>

        <ListItem button component={NavLink} to="/quadroInvestimentos">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Investimentos" />
        </ListItem>
      </div>
    </div>
  );
}
export default Menu;
