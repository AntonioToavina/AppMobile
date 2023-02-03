import { Auction } from "./Auction";
import { Auction_bid } from "./Auction_bid";

export class V_auction {
  auction: Auction = new Auction();
  auction_bid: Auction_bid = new Auction_bid();
  final_date: any = null;
  status: any = null;
  img: any[] = [];
}
