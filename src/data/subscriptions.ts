import { Subscription } from "@/hooks/SubscriptionContext";

const subscriptions: Subscription[] = [
  {
    id: 'basic',
    title: 'Basic',
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    storage: '500 GB',
    users: 2,
    send: 3,
  },
  {
    id: 'professional',
    title: 'Professional',
    monthlyPrice: 24.99,
    annualPrice: 249.99,
    storage: '1 TB',
    users: 5,
    send: 10,
  },
  {
    id: 'master',
    title: 'Master',
    monthlyPrice: 39.99,
    annualPrice: 399.99,
    storage: '2 TB',
    users: 10,
    send: 20,
  },
];

export default subscriptions;
