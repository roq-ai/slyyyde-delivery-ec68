import { PurchaseInterface } from 'interfaces/purchase';
import { StartupInterface } from 'interfaces/startup';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  startup_id?: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  startup?: StartupInterface;
  _count?: {
    purchase?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  startup_id?: string;
}
