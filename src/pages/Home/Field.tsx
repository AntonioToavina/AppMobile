import { IonImg } from "@ionic/react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router";
import AnimateButton from "../../components/@extended/AnimateButton";
import { Url } from "../../Model/Url";
import Picture from "./Picture";

interface Container {
  listCategory: any[];
  listAuctionDuration: any;
}

const Field: React.FC<Container> = ({ listCategory, listAuctionDuration }) => {
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [min_price, setMin_price] = useState<any>();
  const [duration, setDuration] = useState<any>();
  const [categorie, setCategorie] = useState<any>();
  const [picture, setPicture] = useState<any[]>([]);

  const history = useHistory();
  let user = JSON.parse(sessionStorage.getItem("user") || "{}");

  const sendEnchere_Postgresql = async () => {
    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      body: "",
    };
    content.body = JSON.stringify({
      title: title,
      description: description,
      min_price: min_price,
      duration: duration,
      category: {
        id: categorie,
        category_name: listCategory.filter(
          (e) => e.id === parseInt(categorie)
        )[0].category_name,
      },
      user_account: user.user_account,
    });
    content.headers.Authorization = "Bearer " + user.token;
    fetch(
      new Url().url +
        "/auctions?min_duration=" +
        listAuctionDuration.min_duration +
        "&&max_duration=" +
        listAuctionDuration.max_duration,
      content
    )
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          sendEnchere_MongoDB(json.data);
          history.push("/encheres");
        }
      });
  };

  const sendEnchere_MongoDB = (data: any) => {
    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };

    data.images = picture;
    content.body = JSON.stringify(data);

    fetch(new Url().url + "/mongoauctions", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          alert("Success");
        }
      });
  };

  const handleClick = async () => {
    sendEnchere_Postgresql();
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item={true}>
          <Typography variant="h5">Creation enchere</Typography>
        </Grid>
        <Grid />
      </Grid>
      <Grid container spacing={6}>
        <Grid item={true} xs={6} lg={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Titre</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="textarea"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item={true} xs={6} lg={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Description</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="textarea"
              fullWidth
              onChange={(e) => setDescription(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item={true} xs={6} md={1}>
          <Stack spacing={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                defaultValue={""}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={(e) => setCategorie(e.target.value)}
              >
                {listCategory?.map((e, index) => (
                  <MenuItem key={index} value={e.id}>
                    {e.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item={true} xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Prix mise Enchere</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="number"
              onChange={(e) => setMin_price(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item={true} xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Duree</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="number"
              onChange={(e) => setDuration(e.target.value)}
            />
          </Stack>
        </Grid>

        <Grid item={true} xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Importer photo</InputLabel>
            <Picture setPictures={setPicture} pictures={picture} />
          </Stack>
        </Grid>

        <Grid item={true} xs={6} md={1}>
          <AnimateButton type={undefined}>
            <Button
              fullWidth
              size="large"
              type="button"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Creer
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item={true} xs={6} md={1}></Grid>

        {picture.map((picture, index) => (
          <Grid item={true} xs={6} key={index}>
            <IonImg
              style={{ border: "1px solid black", minHeight: "100px" }}
              src={"data:image/png;base64," + picture}
            ></IonImg>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Field;
