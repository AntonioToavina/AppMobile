import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Box, Grid } from "@mui/material";
import AuthBackground from "../../assets/images/auth/AuthBackground";
import MainCard from "../../components/MainCard";
import Menu from "../Menu/Menu";
import FieldNewEnchere from "./FieldNewEnchere";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Grid item={true} xs={12}>
            <AuthBackground></AuthBackground>
            <Grid
              xs={12}
              item={true}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid item={true}>
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
                  <Box sx={{ p: { xs: 5, sm: 3, md: 4, xl: 5 } }}>
                    <FieldNewEnchere />
                  </Box>
                </MainCard>
              </Grid>
            </Grid>
          </Grid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Home;
