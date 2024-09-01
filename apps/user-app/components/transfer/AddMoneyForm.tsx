import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";

export function AddMoneyForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Add money</CardTitle>
        <CardDescription>
          Add money to your wallet in one-click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="Enter amount" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bank">Select Bank</Label>
              <Select>
                <SelectTrigger id="bank">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">HDFC Bank</SelectItem>
                  <SelectItem value="sveltekit">Axis Bank</SelectItem>
                  <SelectItem value="astro">ICICI Bank</SelectItem>
                  <SelectItem value="nuxt">State Bank of India</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-centers">
        <Button>Add Money</Button>
      </CardFooter>
    </Card>
  );
}
