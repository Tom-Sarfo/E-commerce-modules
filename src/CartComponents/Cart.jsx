import Stack from "@mui/material/Stack";
import CartCard from "./CartCard";
import Shipping from "../ShippingComponents/Shipping";
import Divider from "@mui/material/Divider";

const cartSyles = {
  container: "flex flex-col py-2 h-full",
  totals:
    "flex justify-between w-64 h-10 rounded bg-white text-purple-700 drop-shadow p-2 my-4 text-left",
};

export default function Cart() {
  return (
    <div className={cartSyles.container}>
      <div>
        <Stack gap={0.5}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </Stack>
      </div>

      <div className={cartSyles.totals}>
        Subtotal
        <p>$543</p>
      </div>
      <Divider />
      <div className="my-6">
        <Shipping />
      </div>
      <button className="btn">Checkout</button>
    </div>
  );
}
