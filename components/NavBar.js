import React from 'react';
import { fade, makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { NavLink, Link } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import logo from '../assets/logo.png';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Top100 } from '../assets/TopMovie';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const drawerWidth = 240;

//StyleSheet
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: 'relative',
  },appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: "#f5f5f5",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    marginTop: theme.spacing(1),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  square: {
  
  },
  rightIcons: {
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px #61a5c2",
    },
    marginTop: "10px",
  },
  reglog: {
    marginTop: "20px",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(1.5),
    marginBottom: theme.spacing(0),
    width: theme.spacing(7),
    height: theme.spacing(3.5),
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px #61a5c2",
    },
  },
  regsign: {
    marginTop: "20px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(0),
    width: theme.spacing(7),
    height: theme.spacing(3.5),
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px #61a5c2",
    },
  },
  toolbar: {
    minHeight: 50,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuPaper: {
    width: "120px",
    backgroundColor: "#000000",
  },
}));


export default function NavBar(props) {
  const classes = useStyles();
  //Use-state constants
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [ThemeButton, setThemeButton] = React.useState(<Brightness5Icon />);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const bl = props.Theme.bool;

  //Handling functions
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleSetTheme = () => {
    bl==="true"?setThemeButton(<Brightness5Icon />):setThemeButton(<Brightness4Icon />);
    {props.onChange()};
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    props.onSignOut();
  };
  const handleMenuClose2 = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuClose3 = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const MyTextField = withStyles({
    root: {
      '& .MuiInputBase-root': {
        color: '#f5f5f5',
      },
    },
  })(TextField);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose3}
      classes={{
          paper: classes.menuPaper,
        }}
    >
      <NavLink to="/profile" tag={Link} style={{textDecoration: 'none'}}>
        <MenuItem onClick={handleMenuClose2} className={classes.rightIcons} style={{backgroundColor: props.Theme.cc, color: props.Theme.ct, marginBottom: "5px"}}>My Profile</MenuItem>
      </NavLink>
      <MenuItem onClick={handleMenuClose} className={classes.rightIcons} style={{backgroundColor: props.Theme.cc, color: props.Theme.ct}}>Sign Out</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  //Render Return
  if(props.isLoggedin){
    return(
      <div className={classes.grow} >
      <AppBar position="static" style={{backgroundColor: props.Theme.navbar}}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            styles={{marginTop:"0px"}}
            className={classes.menuButton, classes.rightIcons}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton> 
          <NavLink to="/home" tag={Link} onClick={props.onHome} style={{color: props.Theme.navbarfont, textDecoration: 'none'}}>
          <Avatar variant="rounded" src={logo} className={classes.rightIcons} style={{marginTop: "13px", marginLeft: "5px"}}>
          </Avatar>
          </NavLink>
          
            <div style={{ width: 1000, height: 60, padding: 0, marginLeft: "500px", marginTop:"0px",}}>
              <div className={classes.searchIcon}>
               <SearchIcon />
              </div>
              <div style={{ width: 500, height: 60, padding: 0, marginLeft: "5px", marginTop:"0px"}}>
                <Autocomplete
                id="free-solo-demo"
                freeSolo
                style={{marginLeft:"40px", marginTop:"0px"}}
                options={Top100.map((option) => option.title)}
                renderInput={(params) => (
                  <MyTextField {...params} margin="normal" variant="outlined" size="small" styles={{marginTop:"0px"}}/>
                )}
                />
              </div>
            </div>
        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Tooltip title="Add filters" className={classes.tooltip}>
          <IconButton color="inherit" className={classes.rightIcons} style={{marginRight:"550px"}}>
            <AddIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Switch Theme" className={classes.tooltip}>
          <IconButton aria-label="ChangeTheme" color="inherit" onClick={handleSetTheme} className={classes.rightIcons}>
              <Badge badgeContent={0} color="secondary" title="Switch theme">
              {ThemeButton}
              </Badge>
            </IconButton>  
            </Tooltip>
            <IconButton aria-label="show 4 new mails" color="inherit" className={classes.rightIcons}>
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit" className={classes.rightIcons}>
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.rightIcons}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} >
          <IconButton className={classes.rightIcons} onClick={handleDrawerClose} style={{color: "#ffffff"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Top Rated', 'Most Popular','Critically Acclaimed','Recommendations for me','My Watch List', 'My Ratings', ].map((text, index) => (
            <NavLink to="/list" tag={Link} style={{color: props.Theme.navbarfont, textDecoration: 'none' }}>
              <ListItem button key={text} className={classes.rightIcons}>
                <ListItemText primary={text}/>
             </ListItem>
            </NavLink>
          ))}
        </List>
        <Divider />
        <List >
          {['Account', 'Help', 'About Us'].map((text, index) => (
            <NavLink to="/profile" tag={Link} style={{color: props.Theme.navbarfont, textDecoration: 'none' }}>
              <ListItem button key={text} className={classes.rightIcons}>
                <ListItemText primary={text} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
    );
  }else{
    return(
      <div className={classes.grow} >
      <AppBar position="static" style={{backgroundColor: props.Theme.navbar}}>
        <Toolbar className={classes.toolbar}>
          
        <NavLink to="/home" tag={Link} onClick={props.onHome} style={{color: props.Theme.navbarfont, textDecoration: 'none' }}>
          <Avatar variant="rounded" src={logo} className={classes.square,classes.rightIcons} style={{marginTop: "13px", marginLeft: "5px"}}>
          </Avatar>
          </NavLink>
          <div style={{ width: 1000, height: 60, padding: 0, marginLeft: "500px", marginTop:"0px",}}>
              <div className={classes.searchIcon}>
               <SearchIcon />
              </div>
              <div style={{ width: 500, height: 60, padding: 0, marginLeft: "5px", marginTop:"0px"}}>
                <Autocomplete
                id="free-solo-demo"
                freeSolo
                style={{marginLeft:"40px", marginTop:"0px", color: props.Theme.navbarfont}}
                options={Top100.map((option) => option.title)}
                renderInput={(params) => (
                  <MyTextField {...params} margin="normal" variant="outlined" size="small" styles={{marginTop:"0px"}}/>
                )}
                />
              </div>
            </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Tooltip title="Add filters" className={classes.tooltip}>
          <IconButton color="inherit" className={classes.rightIcons} style={{marginRight:"590px"}}>
            <AddIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Switch Theme" className={classes.tooltip}> 
          <IconButton aria-label="ChangeTheme" color="inherit" onClick={handleSetTheme} className={classes.rightIcons}>
              <Badge badgeContent={0} color="secondary">
              {ThemeButton}
              </Badge>
            </IconButton>
          </Tooltip>
            <NavLink to="/login" tag={Link} onClick={props.onLogin}>
              <span><p style={{color: props.Theme.navbarfont}} className={classes.rightIcons,classes.reglog}> Login </p></span>
            </NavLink>
            
            <NavLink to="/signup" tag={Link} onClick={props.onLogin}>
              <span><p style={{color: props.Theme.navbarfont }} className={classes.rightIcons,classes.regsign}> SignUp </p></span>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    );
  }

}