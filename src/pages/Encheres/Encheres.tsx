import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import AnimateButton from "../../components/@extended/AnimateButton";
import { Url } from "../../Model/Url";
import { Util } from "../../Model/Util";
import { V_auction } from "../../Model/V_auction";

const Encheres: React.FC = () => {
  const [auctions, setAuctions] = useState<V_auction[]>([]);
  const util = new Util();
  let user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const history = useHistory();

  const getImage_auction = (listAuction: V_auction[]) => {
    listAuction.map((v_auction) => {
      var content = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(new Url().url + "/mongoauctions/" + v_auction.auction.id, content)
        .then((response) => response.json())
        .then((json) => {
          console.log(json.data);

          v_auction.img = json.data?.images;
          setAuctions([...auctions, v_auction]);
        });
    });
  };

  const getAllAuction = () => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    };
    content.headers.Authorization = "Bearer " + user.token;

    fetch(new Url().url + "/auctions/users/" + user.user_account.id, content)
      .then((response) => response.json())
      .then((json) => {
        getImage_auction(json.data);
      });
  };

  const handleClick = (auction: V_auction) => {
    history.push({
      pathname: "/details",
      state: { auction },
    });
  };

  useEffect(() => {
    getAllAuction();
  }, []);

  return (
    <>
      {auctions.map((auction, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={"data:image/png;base64," + auction.img[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {auction.auction.title}
              </Typography>
              <Typography
                style={{ marginTop: 10 }}
                variant="body2"
                color="text.secondary"
              >
                {auction.auction.description}
              </Typography>
              <Typography
                style={{ marginTop: 10 }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Category:</strong>:
                {auction.auction.category.category_name}
              </Typography>
              <Typography
                style={{ marginTop: 10 }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Debut</strong>:
                {util.formatDate(auction.auction.start_date)}
              </Typography>
              <Typography
                style={{ marginTop: 10 }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <strong>Fin</strong>:{util.formatDate(auction.final_date)}
              </Typography>
              <Alert style={{ marginTop: 10 }} variant="filled" severity="info">
                <strong>{auction.status}</strong>
              </Alert>
            </CardContent>
            <CardActions>
              <AnimateButton type={undefined}>
                <Button
                  fullWidth
                  size="large"
                  type="button"
                  variant="contained"
                  color="success"
                  onClick={() => handleClick(auction)}
                >
                  Details
                </Button>
              </AnimateButton>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Encheres;
