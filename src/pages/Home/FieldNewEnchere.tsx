import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Url } from "../../Model/Url";
import Field from "./Field";

const FieldNewEnchere = () => {
  const [listCategory, setListCategory] = useState<any[]>([]);
  const [auctionDuration, setAuctionDuration] = useState<any>();

  const getData = () => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(new Url().url + "/categories", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else setListCategory(json.data);
      });
  };

  const getData_AuctionDuration = () => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(new Url().url + "/auction_durations/last", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          console.log(json.data);
          setAuctionDuration(json.data);
        }
      });
  };

  useEffect(() => {
    getData();
    getData_AuctionDuration();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item={true} xs={12}>
          <Field
            listCategory={listCategory}
            listAuctionDuration={auctionDuration}
          />
          <br />
        </Grid>
      </Grid>
    </>
  );
};

export default FieldNewEnchere;
