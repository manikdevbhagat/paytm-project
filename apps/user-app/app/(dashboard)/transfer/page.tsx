import { AddMoneyForm } from "../../../components/transfer/AddMoneyForm";
import BalanceTable from "../../../components/transfer/BalanceTable";
import RecentTransactions from "../../../components/transfer/RecentTransactions";

export default function () {
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
          <BalanceTable />
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
