// material-ui
import {
  Button,
  Divider,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// project import
import FirebaseSocial from "./FirebaseSocial";

import AnimateButton from "../../@extended/AnimateButton";

const AuthRegister = () => {
  return (
    <>
      <form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="firstname-signup">Username</InputLabel>
              <OutlinedInput
                id="firstname-login"
                type="firstname"
                name="firstname"
                placeholder="John"
                fullWidth
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
                placeholder="Doe"
                inputProps={{}}
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
                inputProps={{}}
              />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-signup">
                Rewrite Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                id="password-signup"
                type={"password"}
                name="password"
                placeholder="******"
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
                type="submit"
                variant="contained"
                color="primary"
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
      </form>
    </>
  );
};

export default AuthRegister;
