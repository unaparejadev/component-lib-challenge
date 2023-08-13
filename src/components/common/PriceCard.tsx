import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { twMerge } from 'tailwind-merge';

interface PriceCardProps {
  title: string;
  price: number;
  storage: string;
  users: number;
  send: number;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  storage,
  users,
  send,
}) => {
  return (
    <Card className={twMerge(
      'w-[300px]',

    )}>
      <CardHeader>
        {title}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Separator />
        <p>${price}</p>
        <Separator />
        <p>{storage} Storage</p>
        <Separator />
        <p>{users} Users Allowed</p>
        <Separator />
        <p>Send up to {send} GB</p>
        <Separator />
      </CardContent>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;