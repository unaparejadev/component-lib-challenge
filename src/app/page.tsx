'use client';

import PriceCard from "@/components/common/PriceCard";
import PriceSwitch from "@/components/common/PriceSwitch";
import SubscriptionContext from "@/hooks/SubscriptionContext";
import useSubscriptions from "@/hooks/useSubscriptions";

export default function Home() {
  const { contextValue } = useSubscriptions();

  return (
    <SubscriptionContext.Provider value={contextValue}>
      <main className="flex min-h-screen items-center flex-col p-24 gap-20 bg-neutral-200">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-neutral-500 font-bold mb-6">
            Our Pricing
          </h2>
          <PriceSwitch />
        </div>
            
        <div className="flex items-center">
          <PriceCard id="basic" />
          <PriceCard id="professional" />
          <PriceCard id="master" />
        </div>
      </main>
    </SubscriptionContext.Provider>
  );
}
