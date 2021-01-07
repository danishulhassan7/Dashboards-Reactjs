import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ListSubheader, Collapse, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { ExpandLess, ExpandMore, StarBorder, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCoffee, faCog, faCogs, faLaughWink, faPencilAlt, faSignOutAlt, faTable, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'


import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../assets/css/style.css';

import Img from '../img/user.jpg';

import Home from './Home'
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',

    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: 'white',
    },
    menuButton: {
        marginRight: 36,
        color: "#5DC560",
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        // backgroundColor:'green',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#5DC560',
        color: 'white'


    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: '#5DC560',
        color: 'white'


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
    listroot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#5DC560',
        color: 'white'
        // backgroundColor: theme.palette.background.paper,

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const SideNavBar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openComplaint, setComplaintOpen] = React.useState(false);
    const [openTest, setTestOpen] = React.useState(false);
    const [openFile, setFileOpen] = React.useState(false);
    const [openNotes, setNotesOpen] = React.useState(false);
    const [openAssign, setAssignOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleAll = () => {
        setComplaintOpen(false);
        setTestOpen(false);
        setFileOpen(false);
        setNotesOpen(false);
        setAssignOpen(false);
    }
    const handleComplaint = () => {
        setComplaintOpen(!openComplaint);
        setTestOpen(false);
        setFileOpen(false);
        setNotesOpen(false);
        setAssignOpen(false);
    };
    const handleTest = () => {
        setTestOpen(!openTest);
        setComplaintOpen(false);
        setFileOpen(false);
        setNotesOpen(false);
        setAssignOpen(false);
    };
    const handleFile = () => {
        setFileOpen(!openFile);
        setComplaintOpen(false);
        setTestOpen(false);
        setNotesOpen(false);
        setAssignOpen(false);
    };
    const handleNotes = () => {
        setNotesOpen(!openNotes);
        setComplaintOpen(false);
        setTestOpen(false);
        setFileOpen(false);
        setAssignOpen(false);
    };
    const handleAssign = () => {
        setAssignOpen(!openAssign);
        setComplaintOpen(false);
        setTestOpen(false);
        setFileOpen(false);
        setNotesOpen(false);
    };
    const handleRoute = (loc) => {
        console.log(history);
        history.push(loc);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{ backgroundColor: "white", justifyContent: 'space-between' }}>
                    <IconButton
                        color="#5DC560"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{ color: '#5DC560' }}>
                        <FontAwesomeIcon icon={faLaughWink} style={{ color: '#5DC560', fontSize: '1.75em' }} />&nbsp;
                    PARENTS DASHBOARD
                    </Typography>
                    <Button className="navdropdown" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Mr. Steven Smith <img src={Img} />
                    </Button>
                    <Menu
                        style={{ marginTop: '1.75em' }}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => { handleRoute('/profile'); handleClose() }}>
                            <FontAwesomeIcon icon={faCogs} style={{ color: '#C0C0C0', fontSize: '1em' }} />
            &nbsp;&nbsp;&nbsp;Settings</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: '#C0C0C0', fontSize: '1em' }} />
        &nbsp;&nbsp;&nbsp;&nbsp;Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                // open=true
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}

            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: 'white' }} /> : <ChevronLeftIcon style={{ color: 'white' }} />}
                    </IconButton>
                </div>

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classes.listroot}
                >
                    <ListItem button key="Dashboard" onClick={() => { handleRoute('/'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button onClick={handleComplaint}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faPencilAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Complaints" />
                        {openComplaint ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openComplaint} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddComplaint" onClick={() => { handleRoute('/Complaint/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewComplaint" onClick={() => { handleRoute('/Complaint/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* <ListItem button onClick={handleTest}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} /> */}
                    {/* <InboxIcon /> */}
                    {/* </ListItemIcon>
                        <ListItemText primary="Online Test" />
                        {openTest ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTest} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddOnlineTest" onClick={() => {handleRoute('/onlinetest/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewOnlineTest" onClick={() => {handleRoute('/onlinetest/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse> */}

                    {/* <ListItem button onClick={handleFile}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} /> */}
                    {/* <InboxIcon /> */}
                    {/* </ListItemIcon>
                        <ListItemText primary="Test File" />
                        {openFile ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openFile} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddTestFile" onClick={() => {handleRoute('/testfile/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewTestFile" onClick={() => {handleRoute('/testfile/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse> */}

                    {/* <ListItem button onClick={handleNotes}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} /> */}
                    {/* <InboxIcon /> */}
                    {/* </ListItemIcon>
                        <ListItemText primary="Notes" />
                        {openNotes ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openNotes} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddNotes" onClick={() => {handleRoute('/notes/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewNotes" onClick={() => {handleRoute('/notes/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse> */}

                    {/* <ListItem button onClick={handleAssign}>
                        <ListItemIcon> */}
                    {/* <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} /> */}
                    {/* <InboxIcon /> */}
                    {/* </ListItemIcon>
                        <ListItemText primary="Assignment" />
                        {openAssign ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openAssign} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddAssignment" onClick={() => {handleRoute('/assignment/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewAssignment" onClick={() => {handleRoute('/assignment/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse> */}

                    <ListItem button key="Class Schdule" onClick={() => { handleRoute('/testfile/view'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Class Schdule" />
                    </ListItem>
                    <ListItem button key="Student Attendance" onClick={() => { handleRoute('/notes/view'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Student Attendance" />
                    </ListItem>



                    <ListItem button key="Enrolled Courses" onClick={() => { handleRoute('/Enrolled'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Enrolled Courses" />
                    </ListItem>
                    <ListItem button key="View Announcement" onClick={() => { handleRoute('/announcement'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Announcements" />
                    </ListItem>

                    <ListItem button key="Student Result" onClick={() => { handleRoute('/result'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Student Result" />
                    </ListItem>


                </List>



            </Drawer>
            {/* <main className={classes.content}>
                <div className={classes.toolbar} />
                <Home />
            </main> */}
        </div>
    );
}

// export default SideNavBar;
export default withRouter(SideNavBar);