import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { AddItem } from "./AddItem";
import { UpdateItem } from "./UpdateItem";
import { DeleteItem } from "./DeleteItem";
import { Container, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AdminLogo from '../images/adminLogo.png';
import CRUDLogo from '../images/crud.png';
import CreateIcon from '../images/create.png';
import ReadIcon from '../images/read.png';
import UpdateIcon from '../images/update.png';
import { CrudDisplay } from './CrudDisplay';
import { GridList } from '@material-ui/core';
import DeleteIcon from '../images/delete.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  gridList: {
    flexWrap: 'nowrap',
  }
}))

const OperationsOfAdmin = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.replace("/");
  }
  return (
    <div>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar src={AdminLogo} style={{ height: 80, width: 100 }} />
          <Typography component="h1" variant="h5">
            Welcome Admin</Typography>
          <img src={CRUDLogo} style={{ height: 150, width: 350 }} />

          <GridList className={classes.gridList}>
            <Card style={{ height: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2"> Create </Typography>
                <Typography variant="body2" color="textSecondary" component="p">To add a new category/
                To add new item details in the existing category name</Typography>
                <Avatar src={CreateIcon} style={{ height: 80, width: 100 }} />
                <Link to='/admin/CreateItem'>
                  <Button type="submit" variant="contained" color="primary"> Create</Button>
                </Link>
              </CardContent>
            </Card>
            <Card style={{ height: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2"> Read</Typography>
                <Typography variant="body2" color="textSecondary" component="p">To read category/item names</Typography>
                <Avatar src={ReadIcon} style={{ height: 80, width: 100 }} />
                <Link to='/admin/ReadItem'>
                  <Button type="submit" variant="contained" color="primary">Read</Button>
                </Link>
              </CardContent>
            </Card>
            <Card style={{ height: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2"> Update </Typography>
                <Typography variant="body2" color="textSecondary" component="p">To update existing category or item deatils</Typography>
                <Avatar src={UpdateIcon} style={{ height: 80, width: 100 }} />
                <Link to='/admin/UpdateItem'>
                  <Button type="submit" variant="contained" color="primary" onClick={handleClick}> Update</Button>
                </Link>
              </CardContent>
            </Card>
            <Card style={{ height: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">Delete</Typography>
                <Typography variant="body2" color="textSecondary" component="p">To delete a category or any item from particular category</Typography>
                <Avatar src={DeleteIcon} style={{ height: 80, width: 100 }} />
                <Link to='/admin/DeleteItem'>
                  <Button type="submit" variant="contained" color="primary" onClick={handleClick}> Delete</Button>
                </Link>
              </CardContent>
            </Card>

          </GridList>
        </div>
      </Container>
      <Switch>
        <Route path="/admin/CreateItem"><AddItem /></Route>
        <Route path="/admin/UpdateItem"><UpdateItem /></Route>
        <Route path="/admin/DeleteItem"><DeleteItem /></Route>
      </Switch>
    </div>
  )
}

export { OperationsOfAdmin };
