import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import ExerciceCard from './ExerciseCard';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  list: {
    border: '5px solid #fafafa'
  },
  square: {
    width: '80px',
    height: '80px',
    marginRight: '10px'
  },
  button: {
    fontSize: '2.5em'
  }
}));

function generateHistory(data, counter, id) {
  return (
    <>
      {data.map(d =>
        d.content.map(m =>
          m.id === id ? <ListItemText primary={m.counter} /> : ''
        )
      )}
    </>
  );
}
function generate(classes, updateExercies, data) {
  const dataKey = ['pull', 'push', 'arm', 'scun', 'squat'];
  const todayData = data[data.length - 1].content;
  return todayData.map((value, index) => (
    <div key={index}>
      <ListItem className={classes.list}>
        <ListItemAvatar>
          <Avatar variant="square" className={classes.square}>
            <StarBorder />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          style={{ textAlign: 'end', marginRight: '30px' }}
          primary={value.id}
        />

        <ListItemSecondaryAction>
          <Fab
            size="large"
            variant="round"
            aria-label="Delete"
            className={classes.fab}
          >
            Start
          </Fab>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  ));
}

export default function Î(props) {
  const classes = useStyles();
  const { updateExercies, data } = props;

  return (
    <Paper style={{ maxHeight: 'calc(100vh - 260px)', overflow: 'auto' }}>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        {generate(classes, updateExercies, data)}
        <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="subheading">Foo</Typography>
        </ListItem>
      </List>
    </Paper>
  );
}
