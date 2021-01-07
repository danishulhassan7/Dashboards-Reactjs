import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from './components/SideNavBar'

import Home from "./components/Home";
import AddComplaint from './components/AddComplaint';
import EditComplaint from './components/EditComplaint';
import ViewComplaint from './components/ViewComplaint'
// import AddAssignment from './components/AddAssignment';
// import EditAssignment from './components/EditAssignment';
// import ViewAssignment from './components/ViewAssignment';
// import AddNotes from './components/AddNotes';
// import EditNotes from './components/EditNotes';
import ViewNotes from './components/ViewNotes';
// import AddTestFile from './components/AddTestFile';
// import EditTestFile from './components/EditTestFile';
import ViewTestFile from './components/ViewTestFile';
import Enrolled from './components/Enrolled';
import Announcement from './components/Announcement';
import Results from './components/Results';
import Profile from './components/Profile';


import { Container, Row, Col, Card, Button } from 'react-bootstrap';



import './assets/css/style.css'

// import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <>

        <div className={classes.root}>

          <SideBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact from="/" render={props => <Home {...props} />} />
              <Route exact path="/complaint/add" render={props => <AddComplaint {...props} />} />
              <Route exact path="/complaint/edit" render={props => <EditComplaint {...props} />} />
              <Route exact path="/complaint/view" render={props => <ViewComplaint {...props} />} />
              {/* <Route exact path="/assignment/add" render={props => <AddAssignment {...props} />} />
              <Route exact path="/assignment/edit" render={props => <EditAssignment {...props} />} />
              <Route exact path="/assignment/view" render={props => <ViewAssignment {...props} />} /> */}
              {/* <Route exact path="/notes/add" render={props => <AddNotes {...props} />} />
              <Route exact path="/notes/edit" render={props => <EditNotes {...props} />} /> */}
              <Route exact path="/notes/view" render={props => <ViewNotes {...props} />} />
              {/* <Route exact path="/testfile/add" render={props => <AddTestFile {...props} />} />
              <Route exact path="/testfile/edit" render={props => <EditTestFile {...props} />} /> */}
              <Route exact path="/testfile/view" render={props => <ViewTestFile {...props} />} />
              <Route exact path="/Enrolled" render={props => <Enrolled {...props} />} />
              <Route exact path="/announcement" render={props => <Announcement {...props} />} />
              <Route exact path="/result" render={props => <Results {...props} />} />
              <Route exact path="/profile" render={props => <Profile {...props} />} />
            </Switch>
          </main>
        </div>
      </>
    </Router>
  );
}

export default App;
