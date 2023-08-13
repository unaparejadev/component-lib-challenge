'use client';

import PriceCard from "@/components/common/PriceCard";
import { Switch } from "@/components/ui/Switch";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="flex min-h-screen items-center flex-col p-24 gap-20 bg-neutral-200">
      <div className="flex flex-col items-center">
        <h2>Our Pricing</h2>
        <div className="flex gap-2">
          Annually
          <Switch
            checked={toggle}
            onClick={() => setToggle(prevToggle => !prevToggle)}
          />
          Monthly
        </div>
      </div>
          
      <div className="flex items-center">
        <PriceCard
          title="Basic"
          price={toggle ? 19.99 : 199.99}
          storage="500 GB"
          users={2}
          send={3}
        />

        <PriceCard
          title="Professional"
          price={toggle ? 24.99 : 249.99}
          storage="1 TB"
          users={5}
          send={10}
        />

        <PriceCard
          title="Master"
          price={toggle ? 39.99 : 399.99}
          storage="2 TB"
          users={10}
          send={20}
        />
      </div>
    </main>
  );
}
