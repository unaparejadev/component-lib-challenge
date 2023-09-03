import React, { useContext } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';
import { twMerge } from 'tailwind-merge';
import SubscriptionContext from '@/hooks/SubscriptionContext';

interface PriceCardProps {
  id: string;
}

interface PriceCardLineProps {
  children: React.ReactNode;
  isProfessional: boolean;
}

const PriceCardLine: React.FC<PriceCardLineProps> = ({ children, isProfessional }) => (
  <>
    <p className="text-sm font-bold">{children}</p>
    <Separator className={isProfessional ? 'h-[0.5px]' : 'h-[1px]'} />
  </>
);

const PriceCard: React.FC<PriceCardProps> = ({ id }) => {
  const {
    subscriptions,
    toggle,
  } = useContext(SubscriptionContext);

  const subscription = subscriptions.find(subscription => subscription.id === id);

  if (!subscription) return null;

  const isProfessional = subscription.title === 'Professional';
  const gradient = 'bg-gradient-to-br from-primary-500 to-primary-600';

  return (
    <Card className={twMerge(
      'w-[320px] flex flex-col justify-center',
      isProfessional
        ? `h-[450px] ${gradient} text-neutral-50`
        : 'h-[400px] text-neutral-600',
    )}>
      <CardHeader>
        <h3 className={twMerge(
          'text-center text-md font-bold',
          !isProfessional && 'text-neutral-500',
        )}>
          {subscription.title}
        </h3>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 items-center">
        <p className="text-6xl flex items-center font-bold">
          <span className="text-4xl">$</span>{toggle ? subscription.monthlyPrice : subscription.annualPrice}
        </p>
        <Separator className={isProfessional ? 'h-[0.5px]' : 'h-[1px]'} />

        <PriceCardLine isProfessional={isProfessional}>
          {subscription.storage} Storage
        </PriceCardLine>

        <PriceCardLine isProfessional={isProfessional}>
          {subscription.users} Users Allowed
        </PriceCardLine>

        <PriceCardLine isProfessional={isProfessional}>
          Send up to {subscription.send} GB
        </PriceCardLine>
      </CardContent>

      <CardFooter className="flex justify-center w-full">
        <Button
          className={twMerge(
            'flex-1 uppercase font-bold text-xs hover:bg-transparent hover:border transition duration-300',
            isProfessional
              ? 'bg-neutral-200 text-primary-600 hover:border-white hover:text-neutral-50'
              : `${gradient} hover:bg-white hover:from-white hover:to-white text-neutral-200 hover:text-primary-500 hover:border-neutral-500`,
          )}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;