import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { RecentTransactionsTable } from "./RecentTransactionsTable";

const RecentTransactions = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <RecentTransactionsTable />
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
