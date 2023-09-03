import React, { useContext } from 'react';
import { Switch } from '../ui/Switch';
import SubscriptionContext from '@/hooks/SubscriptionContext';

const PriceSwitch = () => {
  const { toggle, setToggle } = useContext(SubscriptionContext);;

  return (
    <div className="flex gap-4 text-sm font-bold text-neutral-400 items-center">
      Annually
      <Switch
        className="data-[state=checked]:bg-primary-600 data-[state=unchecked]:bg-primary-600"
        checked={toggle}
        onClick={() => setToggle(prevToggle => !prevToggle)}
      />
      Monthly
    </div>
  );
};

export default PriceSwitch;
