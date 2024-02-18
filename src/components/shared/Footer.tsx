import { Dialog } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import TermsAndPolicy from "./TermsAndPolicy";
// import useIsMobile from "../../utils/detectDevice";

function Footer() {
  const [dialogState, setDialogState] = useState<{
    open: boolean;
    header: string;
  }>({ open: false, header: "" });
  // const { isMobile } = useIsMobile();
  return (
    <>
      <Dialog
        open={dialogState.open}
        onClose={() => setDialogState({ header: "", open: false })}
      >
        <TermsAndPolicy
          type={dialogState.header}
          onClose={() => setDialogState({ header: "", open: false })}
        />
      </Dialog>
      <footer
        className={` "md:flex md:items-center md:justify-between md:p-6"
`}
      >
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2022{" "}
          <a
            onClick={() =>
              setDialogState({ open: true, header: "Terms And Services" })
            }
            className="cursor-pointer hover:underline"
          >
            Hissa™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li></li>
          <li>
            <a
              onClick={() =>
                setDialogState({ open: true, header: "Privacy Policy" })
              }
              className="mr-4 cursor-pointer hover:underline md:mr-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                setDialogState({ open: true, header: "Terms And Services" })
              }
              className="cursor-pointer hover:underline"
            >
              Terms and Conditions
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;

// import React from "react";

// interface FooterProps {
//   onOpenDialog1: () => void;
//   onOpenDialog2: () => void;
// }

// const Footer: React.FC<FooterProps> = ({ onOpenDialog1, onOpenDialog2 }) => {
//   return (
//     <footer>
//       <button onClick={onOpenDialog1}>Open Dialog 1</button>
//       <button onClick={onOpenDialog2}>Open Dialog 2</button>
//     </footer>
//   );
// };

// export default Footer;
