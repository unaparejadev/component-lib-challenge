import { Dispatch, SetStateAction, createContext } from "react";

export interface Subscription {
  id: string;
  title: string;
  monthlyPrice: number;
  annualPrice: number;
  storage: string;
  users: number;
  send: number;
}

export interface SubscriptionContextType {
  subscriptions: Subscription[];
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  subscriptions: [],
  toggle: false,
  setToggle: () => {},
});

export default SubscriptionContext;