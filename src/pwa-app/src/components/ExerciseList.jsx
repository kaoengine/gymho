import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import ExerciceCard from './ExerciseCard';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  list: {
    border: '5px solid #fafafa',
    width: '100%'
  },
  square: {
    width: '80px',
    height: '80px',
    marginRight: '10px'
  },

  button: {
    fontSize: '1.5em',
    width: '100%'
  },
  hidden: {
    display: 'none'
  },
  accordDetail: {
    padding: '0px'
  },
  accordSummary: {
    display: 'flex',
    justifyContent: 'center'
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = index => {
    index = index === dataKey.length ? index - 1 : index;
    console.log(index, dataKey.length);
    setActiveIndex(index);
  };
  const todayData = data[data.length - 1].content;
  return todayData.map((value, index) => (
    <div key={index}>
      <Accordion
        expanded={activeIndex === index || activeIndex + 1 === index}
        onChange={() => handleChange(index)}
      >
        <AccordionSummary
          className={
            (activeIndex === index || activeIndex + 1 === index) &&
            classes.hidden
          }
        >
          <div
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Typography align="end" variant="h5">
              {value.id}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordDetail}>
          <div className={classes.list}>
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
        </AccordionDetails>
      </Accordion>
    </div>
  ));
}

export default function ExerciseList(props) {
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
        <Button variant="contained" color="primary" className={classes.button}>
          Dumbbell workout
        </Button>
      </List>
    </Paper>
  );
}
