/** @format */

import React, { useState, useEffect } from "react";
import sikhlo from "../images/siklo_logo2.png";

//css file
import "./Login.css";

//login,register,resetpassword uses material ui text-feild
import {
  Button,
  Card,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";

//icons to show & hide th password
import { Visibility, VisibilityOff } from "@material-ui/icons";
import electionlogo from "../images/electionlogo.png";
import { useNavigate } from "react-router-dom";
import Loder from "../Loder/loder";
import { getBaseUrl } from "../utils";
import { blankValidator } from "../utils/Validation";
import { showNotificationMsz } from "../utils/Validation";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const [isUpdated, setisUpdated] = useState(false);
  const [isloading, setisloading] = useState(false);
  //---------------------local state ----------------------
  const [showPassword, setshowPassword] = useState(false);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adminLogin = () => {
    try {
      let url = getBaseUrl() + "admin/adminlogin";
      setisloading(true);

      let temp = {
        email: email,
        password: password,
      };

      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("response customer purchase :::", res);
            setisloading(false);
            setisUpdated(!isUpdated);

            navigate("/dashboard");
            //  showNotificationMsz(res.data.msg, "success");
            // props.history.push("/customer-purchace-order")
          },

          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
            //   showNotificationMsz(error, "success");
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
          // showNotificationMsz(e, "success");
        });
    } catch (error) {}
  };

  return (
    <>
      <div className="Login_Main_div content_padding">
        <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
          <div>
            {/* <img style={{ height: "120px", width: "120px" }} src={sikhlo} alt="" className="login_image" /> */}
          </div>
          <div>
            <span>
              <h6>Welcome Back !</h6>
            </span>
            <span>
              <p>Sign in to continue</p>
            </span>
          </div>
          <div className="main_padding_top_bottom">
            <div className="pb-2">
              <TextField
                helperText="Enter Email Address"
                label="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>

            <div className="mt-2">
              <FormControl
                className="MuiFormControl-fullWidth"
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Password *"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        autoComplete="off"
                        aria-label="toggle password visibility"
                        onClick={() => setshowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>

            <div className="inputfiledformatting mt-2">
              <Button
                variant="contained"
                className="Login_page_button"
                onClick={adminLogin}
              >
                Log in
              </Button>
            </div>
            <div className="text-info hover_cursor  mb-3">Forgot Password?</div>
            <div className="text-center text-info hover_cursor  mb-3">
              Don't have an account?{" "}
              <span
                className=""
                style={{ color: "#7558bf" }}
                onClick={() => navigate("/signup")}
              >
                Regisgter
              </span>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Login;
