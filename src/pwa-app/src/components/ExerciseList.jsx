import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Divider from '@material-ui/core/Divider';
import ExerciceCard from './ExerciseCard'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
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
            {data.map(d => d.content.map(m => m.id === id ? <ListItemText
                primary={m.counter} /> : ''))}
        </>
    )
}
function generate(classes, updateExercies, data) {
    const dataKey = ['pull', 'push', 'arm', 'scun', 'squat']
    const todayData = data[data.length - 1].content
    return todayData.map((value, index) =>
        <div key={index}>
            <ListItem className={classes.list}>
                <ListItemAvatar>
                    <Avatar variant="square" className={classes.square}>
                        <FolderIcon />
                    </Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={value.id}
                />

                {generateHistory(data, value.counter, value.id)}
                <ListItemSecondaryAction>
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => updateExercies(value.id)}>
                        <AddCircle className={classes.button} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}


export default function ExerciseList(props) {
    const classes = useStyles();
    const { updateExercies, data } = props;

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            {
                generate(classes, updateExercies, data)
            }
        </List >
    );
}