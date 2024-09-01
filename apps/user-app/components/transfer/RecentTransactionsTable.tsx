import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";

enum Status {
  Paid = "Paid",
  Pending = "Pending",
  Failed = "Failed",
}

enum Type {
  Credit = "Credit",
  Debit = "Debit",
}
type Transaction = {
  name: string;
  paymentStatus: Status;
  totalAmount: number;
  type: Type;
  date: Date;
};

const transactions: Transaction[] = [
  {
    name: "Manik",
    paymentStatus: Status.Paid,
    totalAmount: 250.0,
    type: Type.Credit,
    date: new Date("2022-01-01"),
  },
  {
    name: "John Doe",
    paymentStatus: Status.Pending,
    totalAmount: 150.0,
    type: Type.Debit,
    date: new Date("2022-01-02"),
  },
  {
    name: "Aman",
    paymentStatus: Status.Failed,
    totalAmount: 350.0,
    type: Type.Debit,
    date: new Date("2022-01-03"),
  },
  {
    name: "Shubham",
    paymentStatus: Status.Paid,
    totalAmount: 450.0,
    type: Type.Credit,
    date: new Date("2022-01-04"),
  },
  {
    name: "Akul",
    paymentStatus: Status.Paid,
    totalAmount: 550.0,
    type: Type.Credit,
    date: new Date("2022-01-05"),
  },
  {
    name: "Himanshi",
    paymentStatus: Status.Pending,
    totalAmount: 200.0,
    type: Type.Debit,
    date: new Date("2022-01-06"),
  },
  {
    name: "Kushal",
    paymentStatus: Status.Failed,
    totalAmount: 300.0,
    type: Type.Credit,
    date: new Date("2022-01-07"),
  },
];

export function RecentTransactionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((txn) => (
          <TableRow key={txn.name}>
            <TableCell className="font-medium">{txn.name}</TableCell>
            <TableCell>
              <p
                className={`
                  ${
                    txn.paymentStatus === Status.Paid
                      ? "bg-green-100"
                      : txn.paymentStatus === Status.Pending
                        ? "bg-yellow-100"
                        : "bg-red-100"
                  } text-center w-min px-3 rounded-lg
                `}
              >
                {txn.paymentStatus}
              </p>
            </TableCell>
            <TableCell>{txn.type}</TableCell>
            <TableCell>{txn.date.toLocaleDateString()}</TableCell>
            <TableCell className="text-right">{txn.totalAmount} INR</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
