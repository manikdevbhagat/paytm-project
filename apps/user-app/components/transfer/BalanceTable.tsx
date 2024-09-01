import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

const BalanceTable = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <TableRow title="Unlocked Balance" value={amount / 100} />
        <TableRow title="Locked Balance" value={locked / 100} />
        <TableRow
          title="Total Balance"
          value={(amount + locked) / 100}
          className="font-semibold"
        />
      </CardContent>
    </Card>
  );
};

export default BalanceTable;

const TableRow = ({
  title,
  value,
  className,
}: {
  title: string;
  value: number;
  className?: string;
}) => {
  return (
    <div
      className={`p-2 flex justify-between border-b-[1px] border-b-gray-100 text-base text-gray-700 ${className}`}
    >
      <p>{title}</p>
      <p>{value} INR</p>
    </div>
  );
};
