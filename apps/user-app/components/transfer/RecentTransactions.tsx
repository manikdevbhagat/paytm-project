import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  OnRampTransaction,
  RecentTransactionsTable,
} from "./RecentTransactionsTable";

const RecentTransactions = ({
  transactions,
}: {
  transactions: OnRampTransaction[];
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <RecentTransactionsTable transactions={transactions} />
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
