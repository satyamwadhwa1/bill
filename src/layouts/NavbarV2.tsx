import { useState } from "react";
// import SwitchProduct from "./SwitchProduct";
// import useIsMobile from "../utils/detectDevice";
// import FlyoutNotification from "./FlyoutNotification";
// import FlyoutSettings from "./FlyoutSettings";
// import { FlyoutProfile } from "./FlyoutProfile";
// import FlyoutSwitch from "./FlyoutSwitch";

function Navbar() {
  const [dialogOpen, setDialogOpen] = useState<{
    mode: "switch" | "notification" | "profile";
    open: boolean;
  }>();
  // const isMobile = useIsMobile();
  return (
    <div>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 shadow-sm border-gray-200 sm:gap-x-6 bg-white px-4 sm:px-6 lg:px-8">
        {dialogOpen?.mode === "switch" && dialogOpen.open && (
          <div className=" absolute top-4 right-0 bg-black w-96">
            {/* <SwitchProduct setDialogOpen={setDialogOpen} /> */}hello
          </div>
        )}
        <div className="flex flex-1 gap-x-4 self-stretch justify-end lg:gap-x-6">
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <div className="hidden">
              {/* <FlyoutSettings /> */}
              {/* <FlyoutNotification /> */}
            </div>
            {/* <FlyoutSettings /> */}
            {/* <FlyoutSwitch /> */}
            <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-secondary/10"
              aria-hidden="true"
            />
            {/* <FlyoutProfile /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
