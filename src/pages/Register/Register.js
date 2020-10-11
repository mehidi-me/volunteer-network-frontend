import DateFnsUtils from "@date-io/date-fns";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Register.css";
import Logo from "../../images/Group1329.png";

const Register = () => {
  useEffect(() => {
    setUser({ ...user, id });
    fetch("https://volunteer-network-123.herokuapp.com/showcategory")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  const [date, setDate] = useState(new Date("10/10/2020").toDateString());
  const sessionData = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = useParams();
  const location = useHistory()
  const [user, setUser] = useState({
    ...sessionData,
    id,
    date,
    description: "",
  });
  const [CardData, setCardData] = useState();

  const inputHendaler = (e) => {
    if (e.target.name === "displayName") {
      let displayName = e.target.value;
      setUser({ ...user, displayName });
    }
    if (e.target.name === "email") {
      let email = e.target.value;
      setUser({ ...user, email });
    }
    if (e.target.name === "description") {
      let description = e.target.value;
      setUser({ ...user, description });
    }
    if (e.target.name === "id") {
      let id = e.target.value;
      setUser({ ...user, id });
    }
  };

  const formHendaler = (e) => {
    e.preventDefault();
    e.target.reset()
    fetch("https://volunteer-network-123.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((value) => {
        location.push('/event')
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="form-signup">
        <form onSubmit={formHendaler} className="registerform">
          <TextField
            name="displayName"
            onBlur={inputHendaler}
            defaultValue={user.displayName}
            label="Full Name"
            type="text"
          />
          <TextField
            name="email"
            onBlur={inputHendaler}
            defaultValue={user.email}
            label="Email Address"
            type="email"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={date}
              onChange={(v) => {
                let date = v.toDateString();
                setDate(date);
                setUser({ ...user, date });
              }}
              name="date"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            name="description"
            onBlur={inputHendaler}
            id="standard-basic"
            label="Description"
          />
          <FormControl>
            <Select
              value={user.id ? user.id : ""}
              onChange={inputHendaler}
              name="id"
              inputProps={{ "aria-label": "Without label" }}
            >
              {CardData &&
                CardData.map((v) => (
                  <MenuItem key={v._id} value={v._id}>
                    {v.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
