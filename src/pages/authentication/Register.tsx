import { IonContent, IonPage } from "@ionic/react";
import { Box, Grid } from "@mui/material";
import AuthBackground from "../../assets/images/auth/AuthBackground";
import Logo from "../../components/Logo/Logo";
import MainCard from "../../components/MainCard";
import AuthRegister from "./auth-forms/AuthRegister";

// ================================|| REGISTER ||================================ //

const Register = () => (
  <IonPage>
    <IonContent>
  <Box sx={{ minHeight: "100vh" }}>
    <AuthBackground />
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <MainCard
              sx={{
                maxWidth: { xs: 400, lg: 475 },
                margin: { xs: 2.5, md: 3 },
                "& > *": {
                  flexGrow: 1,
                  flexBasis: "50%",
                },
              }}
              border={undefined}
              boxShadow={undefined}
              content={undefined}
              contentSX={undefined}
              darkTitle={undefined}
              divider={undefined}
              elevation={undefined}
              secondary={undefined}
              shadow={undefined}
              title={undefined}
              codeHighlight={undefined}
              others={undefined}
            >
              <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                <AuthRegister />
              </Box>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
  </IonContent>
  </IonPage>
);

export default Register;
