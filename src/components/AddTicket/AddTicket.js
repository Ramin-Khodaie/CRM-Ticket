/**
 * this component add a ticket to database which has particular subject,date and detail.
 * it changes value of subject, date and detail by prop wiring and using change function.
 * by clicking save button if all required items have been entered,data will save in database.
 */
import {
  Button,
  Grid,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyle = makeStyles((theme) => ({
  form: {
    width: "65%",
    margin: "auto", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  root: {
    marginTop: "5px",
    maxHeight: "600",
    maxWidth: "800",
  },
  submit:{
    marginTop:"50px",    
  }
}));
export default function AddTicket({ change, submit, ticket, Err }) {
  const classes = useStyle();

  return (
    <form className={classes.form} onSubmit={submit}>
      <Grid xs={12} className={classes.root}>
        <Typography variant="h5">Subject</Typography>

        <TextField
          placeholder="Enter Subject"
          variant="outlined"
          fullWidth
          id="subject"
          name="subject"
          type="text"
          value={ticket.subject}
          margin="normal"
          autoComplete="email"
          onChange={change}
        />
        {Err.subject && (
          <Typography variant="subtitle2" color="error">
            Subject required
          </Typography>
        )}
        <Typography>{Err.subject}</Typography>
        <Typography variant="h5">Issue found</Typography>

        <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          name="issueDate"
          type="date"
          value={ticket.issueDate}
          id="issueDate"
          onChange={change}
        />

        <Typography variant="h5">Detail</Typography>
        <TextareaAutosize
          rowsMax={5}
          aria-label="maximum height"
          style={{ width:"600px" ,height:"100px"}}
          onChange={change}
          value={ticket.detail}
          name="detail"
          
        />
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className={classes.submit}
      >
        Save 
      </Button>
    </form>
  );
}
//this line of code defines type of incoming props.
AddTicket.prototype = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired,
};

