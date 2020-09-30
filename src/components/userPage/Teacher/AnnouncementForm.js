import React from "react";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card} from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const AnnouncementForm = (props) => {
  const classes = useStyles();

  return (
<div>
      <h2 style={{color:"white"}}>Make an Announcement to Your Students!</h2>
      <Card style={{opacity:"0.95"}}>
        <Card.Body>
      <form onSubmit={(e) => props.submitForm(e)}>
        <TextField  
          id="outlined-full-width"
          label="New Announcement"
          placeholder="Write Here..."
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          type="text" />
          
        <Button style={{"margin-top":"10px", "margin-right":"0 auto"}}variant="outlined" type="submit">
          Submit
        </Button>
      </form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default AnnouncementForm;
