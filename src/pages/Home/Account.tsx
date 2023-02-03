import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Avatar,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router";
import AnimateButton from "../../components/@extended/AnimateButton";
import { Account_recharge } from "../../Model/Account_recharge";
import { Url } from "../../Model/Url";

const Account: React.FC = () => {
  const user_recharge = new Account_recharge();
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const history = useHistory();

  const handleClick = () => {
    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      body: "",
    };

    user_recharge.user_account = user.user_account;
    content.body = JSON.stringify(user_recharge);
    content.headers.Authorization = "Bearer " + user.token;
    console.log(content);

    fetch(new Url().url + "/account_recharges", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          alert(json.data);
          history.push("/home");
        }
      });
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid container spacing={3}>
          <Grid item={true} xs={12} lg={8}>
            <Avatar style={{ width: 80, height: 80 }}>
              <AccountCircleIcon />
            </Avatar>
          </Grid>
          <Grid item={true} xs={12} lg={8}>
            <InputLabel>User : {user.user_account.username}</InputLabel>
          </Grid>
          <Grid item={true} xs={12} lg={8}>
            <InputLabel>Email : {user.user_account.email}</InputLabel>
          </Grid>
          <Grid item={true} xs={12} lg={8}>
            <Typography variant="h5">Charger compte</Typography>
          </Grid>

          <Grid item={true} xs={12} md={1}>
            <InputLabel htmlFor="lastname-signup">Prix mise Enchere</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="number"
              onChange={(e: any) =>
                (user_recharge.recharge_amount = e.target.value)
              }
            />
          </Grid>

          <Grid item={true} xs={12} md={1}>
            <AnimateButton type={undefined}>
              <Button
                fullWidth
                size="large"
                type="button"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Demander
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Account;
