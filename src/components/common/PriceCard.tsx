import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';
import { twMerge } from 'tailwind-merge';

interface PriceCardProps {
  title: string;
  price: number;
  storage: string;
  users: number;
  send: number;
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

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  storage,
  users,
  send,
}) => {
  const isProfessional = title === 'Professional';
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
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 items-center">
        <p className="text-6xl flex items-center font-bold">
          <span className="text-4xl">$</span>{price}
        </p>
        <Separator className={isProfessional ? 'h-[0.5px]' : 'h-[1px]'} />

        <PriceCardLine isProfessional={isProfessional}>
          {storage} Storage
        </PriceCardLine>

        <PriceCardLine isProfessional={isProfessional}>
          {users} Users Allowed
        </PriceCardLine>

        <PriceCardLine isProfessional={isProfessional}>
          Send up to {send} GB
        </PriceCardLine>
      </CardContent>

      <CardFooter className="flex justify-center w-full">
        <Button className={twMerge(
          'flex-1 uppercase font-bold text-xs hover:bg-transparent hover:border transition duration-300',
          isProfessional
            ? 'bg-neutral-200 text-primary-600 hover:border-white hover:text-neutral-50'
            : `${gradient} hover:bg-white hover:from-white hover:to-white text-neutral-200 hover:text-primary-500 hover:border-neutral-500`,
        )}>
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;