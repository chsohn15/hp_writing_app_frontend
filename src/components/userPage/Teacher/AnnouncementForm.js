import React from "react";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <h2>Make an Announcement to Your Students!</h2>
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
    </div>
  );
};

export default AnnouncementForm;
