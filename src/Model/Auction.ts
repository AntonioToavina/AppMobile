import { Category } from "./Category";
import { User_account } from "./User_account";

export class Auction {
  id: any = null;
  title: any = null;
  description: any = null;
  min_price: any = null;
  start_date: any = null;
  duration: any = null;
  category: Category = new Category();
  user_account: User_account = new User_account();
  img: any = null;
}
