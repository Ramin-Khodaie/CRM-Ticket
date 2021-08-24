import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AddTicket from "../../components/AddTicket/AddTicket";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { ShortText } from "../../components/utils/Validation";

const initialData = {
  subject: "",
  issueDate: "",
  detail: "",
};
const errorData = {
  subject: false,
  issueDate: false,
  detail: false,
};
export default function AddTicketPage() {
  const [data, setData] = useState(initialData);
  const [err, setErr] = useState(errorData);

  useEffect(
    () => {},
    [data],
    setTimeout(() => {
      setErr(errorData);
    }, 3000)
    );
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(300, data);
      setData({ ...data, [name]: value });
  };
  
  console.log(500, err);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErr(errorData);
    const isValid = await ShortText(data.subject);
    !isValid && setErr({ ...err, subject: !isValid });
    alert("Ticket saved successfuly.")
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Breadcrumb page="Addticket" />
        <Grid xs={12}>
          <AddTicket
            change={handleChange}
            ticket={data}
            submit={handleOnSubmit}
            Err={err}
          />
        </Grid>
      </Grid>
    </div>
  );
}
