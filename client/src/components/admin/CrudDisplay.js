
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { AddItem } from "./AddItem";
import { UpdateItem } from "./UpdateItem";
import { DeleteItem } from "./DeleteItem";

const CrudDisplay = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
          <Avatar src={props.image} style={{ height: 80, width: 100 }} />
          <Link to={`/admin/${props.header}Item`}>
            <Button type="submit" variant="contained" color="primary" >
              {props.header}
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Switch>
        <Route path="/admin/CreateItem"><AddItem /></Route>
        <Route path="/admin/UpdateItem"><UpdateItem /></Route>
        <Route path="/admin/DeleteItem"><DeleteItem /></Route>
      </Switch>
    </div>
  )

}
export { CrudDisplay };