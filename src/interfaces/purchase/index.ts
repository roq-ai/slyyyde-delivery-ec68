import { UserInterface } from 'interfaces/user';
import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  buyer_id?: string;
  product_id?: string;
  delivery_address: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  product?: ProductInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  buyer_id?: string;
  product_id?: string;
  delivery_address?: string;
}
