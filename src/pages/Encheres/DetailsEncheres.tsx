import { Alert, ImageList, ImageListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Auction_bid } from "../../Model/Auction_bid";
import { Url } from "../../Model/Url";
import { Util } from "../../Model/Util";
import { V_auction } from "../../Model/V_auction";
import AuctionBid from "./Auctions_Bid";

const DetailsEncheres: React.FC = () => {
  const location = useLocation();
  const auctionD: any = location.state;
  const auction = auctionD.auction;

  const util = new Util();
  let user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const [auctionBid, setAuctionBid] = useState<Auction_bid[]>();

  const getAuction_bid = () => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
    };
    content.headers.Authorization = "Bearer " + user.token;
    console.log(auction.auction.id);
    fetch(
      new Url().url + "/auction_bids/auctions/" + auction.auction.id,
      content
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);

        setAuctionBid(json.data);
      });
  };

  useEffect(() => {
    getAuction_bid();
  }, []);

  return (
    <>
      <ImageList style={{ margin: "cover", width: "auto" }} rowHeight={164}>
        {auction.img.map((item: any, index: any) => (
          <ImageListItem key={index}>
            <img src={"data:image/png;base64," + item} />
          </ImageListItem>
        ))}
      </ImageList>

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
        <strong>Category:</strong>:{auction.auction.category.category_name}
      </Typography>
      <Typography
        style={{ marginTop: 10 }}
        variant="subtitle1"
        color="text.secondary"
        component="div"
      >
        <strong>Debut</strong>:{util.formatDate(auction.auction.start_date)}
      </Typography>

      <Typography
        style={{ marginTop: 10 }}
        variant="subtitle1"
        color="text.secondary"
        component="div"
      >
        <strong>Status</strong>:
        <Alert style={{ marginTop: 10 }} variant="filled" severity="info">
          <strong>{auction.status}</strong>
        </Alert>
      </Typography>
      <AuctionBid auction_bid={auctionBid} />
    </>
  );
};

export default DetailsEncheres;
