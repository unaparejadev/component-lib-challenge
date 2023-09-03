import subscriptions from "@/data/subscriptions";
import { SubscriptionContextType } from "./SubscriptionContext";
import { useMemo, useState } from "react";

const useSubscriptions = () => {
  const [toggle, setToggle] = useState(false);

  const contextValue: SubscriptionContextType = useMemo(() => ({
    subscriptions,
    toggle,
    setToggle,
  }), [toggle]);

  return { contextValue };
};

export default useSubscriptions;
