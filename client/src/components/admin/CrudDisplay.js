import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const CrudDisplay = (props) => {
  return (
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
  )

}
export { CrudDisplay };