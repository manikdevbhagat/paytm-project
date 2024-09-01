import { getServerSession } from "next-auth";
import { AddMoneyForm } from "../../../components/transfer/AddMoneyForm";
import BalanceTable from "../../../components/transfer/BalanceTable";
import RecentTransactions from "../../../components/transfer/RecentTransactions";
import db from "@repo/db/client";
import { authOptions } from "../../lib/auth";
import { OnRampTransaction } from "../../../components/transfer/RecentTransactionsTable";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await db.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await db.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map(
    (txn): OnRampTransaction => ({
      time: txn.createdAt,
      amount: txn.amount,
      status: txn.status,
      provider: txn.provider,
    })
  );
}

export default async function () {
  const balance = await getBalance();
  const onRampTransactions = await getOnRampTransactions();
  return (
    <div className="p-8">
      <div>
        <h1 className="text-primary text-2xl font-semibold">Transfer</h1>
      </div>
      <div className="mt-12 flex gap-8 justify-between">
        <div className="flex-1">
          <AddMoneyForm />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <BalanceTable amount={balance.amount} locked={balance.locked} />
          <RecentTransactions transactions={onRampTransactions} />
        </div>
      </div>
    </div>
  );
}
