import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";

import { OnRampStatus } from "@prisma/client";

export type OnRampTransaction = {
  time: Date;
  amount: number;
  status: OnRampStatus;
  provider: string;
};

type RecentTransactionsTableProps = {
  transactions: OnRampTransaction[];
};

export function RecentTransactionsTable({
  transactions,
}: RecentTransactionsTableProps) {
  if (transactions.length === 0) {
    return (
      <p className="mt-4 text-center text-gray-500">No transactions yet</p>
    );
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Provider</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((txn) => (
          <TableRow key={txn.time.toDateString()}>
            <TableCell className="font-medium">{txn.provider}</TableCell>
            <TableCell>
              <p
                className={`
                  ${
                    txn.status === OnRampStatus.Success
                      ? "bg-green-100"
                      : txn.status === OnRampStatus.Pending
                        ? "bg-yellow-100"
                        : "bg-red-100"
                  } text-center w-min px-3 rounded-lg
                `}
              >
                {txn.status}
              </p>
            </TableCell>
            <TableCell>{txn.time.toLocaleDateString()}</TableCell>
            <TableCell className="text-right">{txn.amount} INR</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
