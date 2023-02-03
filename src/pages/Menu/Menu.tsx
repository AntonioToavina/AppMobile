import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Grid } from "@mui/material";
import { useHistory } from "react-router";
import AuthBackground from "../../assets/images/auth/AuthBackground";
import { Url } from "../../Model/Url";

const Menu: React.FC = () => {
  const history = useHistory();

  const handleClick = (link: string) => {
    history.push(link);
  };

  const deconnexion = (link: string) => {
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");

    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    };
    content.headers.Authorization = "Bearer " + user.token;
    fetch(
      new Url().url + "/user/" + user.user_account.id + "/deconnexion",
      content
    )
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else handleClick(link);
      });
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menus</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Grid item={true} xs={12}>
            <AuthBackground></AuthBackground>
            <Grid xs={12} item={true} container>
              <IonItem>
                <IonLabel>
                  {" "}
                  <a onClick={() => handleClick("/home")}>Home</a>
                </IonLabel>
              </IonItem>
            </Grid>
            <Grid item={true} xs={12} container>
              <IonItem>
                <IonLabel>
                  {" "}
                  <a onClick={() => handleClick("/account")}>Account</a>
                </IonLabel>
              </IonItem>
            </Grid>
            <Grid item={true} xs={12} container>
              <IonItem>
                <IonLabel>
                  {" "}
                  <a onClick={() => handleClick("/encheres")}>Encheres</a>
                </IonLabel>
              </IonItem>
            </Grid>
            <Grid item={true} xs={12} container>
              <IonItem>
                <IonLabel>
                  {" "}
                  <a onClick={() => deconnexion("/")}>Deconnexion</a>
                </IonLabel>
              </IonItem>
            </Grid>
          </Grid>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
