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
import { useEffect, useState } from "react";
import { ShortText } from "../../components/utils/Validation";
import { useDispatch, useSelector } from "react-redux";
import { addingNewTicket } from "../../redux/newTicket/newTicketAction";
import { resNewTicketSuccess } from "../../redux/newTicket/newTicketSlice";
import Alert from "@material-ui/lab/Alert";

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
  submit: {
    marginTop: "5px",
  },
}));

const initialData = {
  subject: "",
  issueDate: "",
  message: "",
};
const errorData = {
  subject: false,
  issueDate: false,
  message: false,
};
export default function AddTicket() {
  const classes = useStyle();

  const [data, setData] = useState(initialData);
  const [err, setErr] = useState(errorData);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { newTicket } = useSelector((state) => state.newTicket);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    return () => dispatch(resNewTicketSuccess());
  }, [dispatch]);

  const handleOnSubmit = async (e) => {
    const ticketdata = {
      ...data,
      sender: user.name,
    };
    e.preventDefault();
    setErr(errorData);
    const isValid = await ShortText(data.subject);
    !isValid && setErr({ ...err, subject: !isValid });
    dispatch(addingNewTicket(ticketdata));
    setData(initialData);
  };
  return (
    <form className={classes.form} onSubmit={handleOnSubmit}>
      <Grid xs={12} className={classes.root}>
        <Typography variant="h5">Subject</Typography>

        <TextField
          placeholder="Enter Subject"
          variant="outlined"
          fullWidth
          id="subject"
          name="subject"
          type="text"
          value={data.subject}
          margin="normal"
          autoComplete="email"
          onChange={handleChange}
        />
        {err.subject && (
          <Typography variant="subtitle2" color="error">
            Subject required
          </Typography>
        )}
        <Typography>{err.subject}</Typography>
        <Typography variant="h5">Issue found</Typography>

        <TextField
          variant="outlined"
          margin="normal"
          // required
          fullWidth
          name="issueDate"
          type="date"
          value={data.issueDate}
          id="issueDate"
          onChange={handleChange}
        />

        <Typography variant="h5">Detail</Typography>
        <TextareaAutosize
          rowsMax={5}
          aria-label="maximum height"
          style={{ width: "631px", height: "100px" }}
          onChange={handleChange}
          value={data.message}
          name="message"
        />
      </Grid>
      <Grid>
        {newTicket && <Alert severity="info">{newTicket}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
        >
          Save
        </Button>
      </Grid>
    </form>
  );
}
