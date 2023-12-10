import Stack from "@mui/material/Stack";
import CartCard from "./CartCard";
import { Outlet } from "react-router-dom";

const cartSyles = {
  container: "flex flex-col py-2 h-full px-4",
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
      <Outlet />
    </div>
  );
}
