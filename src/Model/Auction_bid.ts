import { Auction } from "./Auction";
import { User_account } from "./User_account";

export class Auction_bid {
  id: number = 0;
  user_account: User_account = new User_account();
  auction: Auction = new Auction();
  bid_amount: number = 0;
  bid_date: any = null;
}
