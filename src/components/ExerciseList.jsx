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

function generate(element) {
    return [0, 1, 2, 3, 4].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function ExerciseList() {
    const classes = useStyles();

    return (
        <List component="nav" className={classes.root} aria-label="mailbox folders">
            {generate(
                <div>
                    <ListItem className={classes.list}>
                        <ListItemAvatar>
                            <Avatar variant="square" className={classes.square}>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={`Exercise Name`}
                        />
                        <ListItemSecondaryAction>
                            <IconButton color="primary" aria-label="add to shopping cart">
                                <AddCircle className={classes.button} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>

            )
            }
        </List >
    );
}