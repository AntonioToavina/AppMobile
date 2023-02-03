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
import { User_account } from "../../../Model/User_account";
import AnimateButton from "../../../components/@extended/AnimateButton";
import { useHistory } from "react-router-dom";
import { IonLabel } from "@ionic/react";
import { Url } from "../../../Model/Url";

const AuthLogin = () => {
  const user = new User_account();
  user.email = "user@gmail.com";
  user.password = "mdp";

  const history = useHistory();

  const toInscription = () => {
    history.push("/inscription");
  };

  const handleClick = () => {
    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };

    content.body = JSON.stringify(user);

    fetch(new Url().url + "/user/login", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) {
          alert(json.error);
        } else {
          sessionStorage.setItem("user", JSON.stringify(json.data));
          alert("Success");
          history.push("/home");
        }
      });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput
              id="email-login"
              type="email"
              name="email"
              onChange={(e) => (user.email = e.target.value)}
              defaultValue={"user@gmail.com"}
              fullWidth
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
              id="-password-login"
              type={"password"}
              name="password"
              onChange={(e) => (user.password = e.target.value)}
              defaultValue={"mdp"}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AnimateButton type={undefined}>
            <Button
              fullWidth
              size="large"
              type="button"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Login
            </Button>
          </AnimateButton>
        </Grid>

        <Grid item xs={12}>
          <IonLabel>
            <a onClick={toInscription}> Sign in?</a>
          </IonLabel>
        </Grid>

        <Grid item xs={12}>
          <Divider>
            <Typography variant="caption"> Login with</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <FirebaseSocial />
        </Grid>
      </Grid>
    </>
  );
};

export default AuthLogin;
