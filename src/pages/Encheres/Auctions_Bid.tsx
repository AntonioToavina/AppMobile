import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Typography,
} from "@mui/material";
import { Auction_bid } from "../../Model/Auction_bid";

interface Container {
  auction_bid: Auction_bid[] | undefined;
}

const AuctionBid: React.FC<Container> = ({ auction_bid }) => {
  return (
    <>
      <Grid item={true} style={{ marginTop: "50px" }} xs={12}>
        <Typography gutterBottom variant="h4" component="div">
          Historiques Encheres
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">DateMise</TableCell>
                <TableCell align="right">Montant</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auction_bid?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.user_account.username}
                  </TableCell>
                  <TableCell align="right">{row.user_account.email}</TableCell>
                  <TableCell align="right">{row.bid_date}</TableCell>
                  <TableCell align="right">{row.bid_amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default AuctionBid;
