import {
  Button,
  Divider,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import FirebaseSocial from "./FirebaseSocial";
import AnimateButton from "../../../components/@extended/AnimateButton";
import { User_account } from "../../../Model/User_account";
import { useHistory } from "react-router";
import { Url } from "../../../Model/Url";

const AuthRegister = () => {
  const user = new User_account();
  const history = useHistory();

  const handleClick = () => {
    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };

    content.body = JSON.stringify(user);

    fetch(new Url().url + "/user/inscription", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) {
          alert(json.error);
        } else {
          alert(json.data);
          history.push("/");
        }
      });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Username</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="firstname"
              name="firstname"
              placeholder="username"
              fullWidth
              onChange={(e) => (user.username = e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Email</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="email"
              name="email"
              placeholder="email"
              inputProps={{}}
              onChange={(e) => (user.email = e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-signup">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="password-signup"
              type={"password"}
              name="password"
              placeholder="******"
              onChange={(e) => (user.password = e.target.value)}
              inputProps={{}}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <AnimateButton type={undefined}>
            <Button
              disableElevation
              fullWidth
              size="large"
              type="button"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Create Account
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Divider>
            <Typography variant="caption">Sign up with</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <FirebaseSocial />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthRegister;
