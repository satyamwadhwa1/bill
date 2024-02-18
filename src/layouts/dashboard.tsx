import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Footer from "../components/shared/Footer";
import { Box } from "../components/utils";
import NavbarV2 from "./NavbarV2";
// import { useAuthorizationStore } from "../store";
// import useIsMobile from "../utils/detectDevice";
// import HeaderNavbarMobile from "./MobileLayout/HeaderNavbarMobile";
// import SwitchProduct from "./SwitchProduct";
// import MobileSideNav from "./MobileSideNav";
// import MainSideNavbarV2 from "./MainSideNavbarV2";

// import SideNavbar from "./SideNavbar";
// import { determineUserAccessToResource } from "../utils/auth";
// import { usePermissionStore } from "../store/permissionStore";
// import { Action, Resource } from "../utils/interfaces/Companies";
// import NavbarV2 from "./NavbarV2";

export interface NavBarRoute {
  title: string;
  path: string;
  shouldBeDisplayed: boolean;
  subRoute?: string;
}

function MainLayout() {
  //   const navigate = useNavigate();
  //   const { permission } = usePermissionStore();
  //   const isUserAdminViewer = useMemo(
  //     () =>
  //       determineUserAccessToResource(
  //         permission?.aclList || [],
  //         Resource.All,
  //         Action.Read
  //       ),
  //     [permission]
  //   );
  //   const isUserAdmin = useMemo(
  //     () =>
  //       determineUserAccessToResource(
  //         permission?.aclList || [],
  //         Resource.All,
  //         Action.All
  //       ),
  //     [permission]
  //   );
  //   const isUserEsopViewer = useMemo(
  //     () =>
  //       determineUserAccessToResource(
  //         permission?.aclList || [],
  //         Resource.All,
  //         Action.Read
  //       ),
  //     [permission]
  //   );
  //   const value = determineUserAccessToResource(
  //     permission?.aclList || [],
  //     Resource.All,
  //     Action.All
  //   );

  const allRoutes = {
    company: [
      {
        title: "Company Create",
        path: "/company/createCompany",
        shouldBeDisplayed: true,
        subRoutes: ["add-edit-pool"],
      },
    ],
    options: [
      {
        title: "Overview",
        path: "/options/esopOverview",
        shouldBeDisplayed: true,
        subRoutes: ["add-edit-pool"],
      },
      {
        title: "ESOP Plan",
        path: "/options/allPlans",
        shouldBeDisplayed: true,
        subRoutes: ["planView"],
      },
      {
        title: "All Option Holders",
        path: "/options/allEmployees",
        shouldBeDisplayed: true,
        subRoutes: ["employeeDetails"],
      },
      {
        title: "Vesting Schedules",
        path: "/options/vestingSchedules",
        shouldBeDisplayed: true,
        subRoutes: ["vestingSchedule"],
      },
      {
        title: "Milestones",
        path: "/options/milestones",
        shouldBeDisplayed: true,
        subRoute: "milestones",
      },
      //   {
      //     title: "ESOP Transaction",
      //     path: "/options/esopTransactions",
      //     shouldBeDisplayed: value,
      //     subRoutes: [
      //       "view-option-buy-back",
      //       "create-option-buyback",
      //       "edit-options-buyback",
      //       "exercise-event",
      //     ],
      //   },
      {
        title: "Company Structure Details",
        path: "/options/playground",
        shouldBeDisplayed: false,
        subRoutes: ["playGround"],
      },
      {
        title: "Compensation Template",
        path: "/options/playground1",
        shouldBeDisplayed: false,
        subRoutes: ["playGround1"],
      },
    ] as NavBarRoute[],
    settings: [
      {
        title: "Company Profile",
        path: "/settings/companyProfile",
        shouldBeDisplayed: true,
      },
      {
        title: "Site Settings",
        path: "/settings/siteSettings",
        shouldBeDisplayed: true,
      },
      {
        title: "FAQ Settings",
        path: "/settings/faq",
        shouldBeDisplayed: true,
      },
      {
        title: "Valuation Reports",
        path: "/settings/valuationReports",
        shouldBeDisplayed: true,
      },
    ],
  };
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = (value: boolean) => {
    setDialogOpen(value);
  };
  //   const { authority, permissions } = useAuthorizationStore();
  const location = useLocation();
  const [navBarRoutes, setNavBarRoutes] = useState<NavBarRoute[]>([]);
  //   useEffect(() => {
  //     const currentPath = location.pathname.split("/")[1];
  //     let navBarRoutes: NavBarRoute[] = [];
  //     if (currentPath === "options") {
  //       navBarRoutes = allRoutes.options;
  //       if (!value)
  //         navBarRoutes = navBarRoutes.filter(
  //           (route) => route.shouldBeDisplayed === true
  //         );
  //     } else if (currentPath === "settings") {
  //       navBarRoutes = allRoutes.settings;
  //     }

  //     if (!isUserAdmin) {
  //       navBarRoutes = navBarRoutes.filter((item) => {
  //         if (item.title === "ESOP Transaction") {
  //           item.shouldBeDisplayed = true;
  //         }
  //         return item;
  //       });
  //     }
  //     setNavBarRoutes(navBarRoutes as []);
  //     if (navBarRoutes.length > 0 && location.pathname.endsWith(currentPath)) {
  //       navigate(navBarRoutes[0].path);
  //     }
  //   }, [location, authority]);

  //   const { isMobile } = useIsMobile();
  useEffect(() => {
    const scroller = document.querySelector("#outlet");
    scroller?.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="flex">
        {/* <div className="relative w-20 h-screen overflow-hidden md:flex"> */}
        {/* <MainSideNavbarV2 /> */}
        {/* </div> */}
        {/* {dialogOpen && (
            <div className="absolute bg-black w-96">
              <SwitchProduct setDialogOpen={handleDialogOpen} />
            </div>
          )} */}
        <div className="flex-1 h-screen overflow-y-auto" id="outlet">
          <div className="relative w-full min-h-screen">
            <div className={`sticky top-0 z-20`}>
              <NavbarV2 />
            </div>
            <Box className="max-w-screen-xl py-4 px-8 pb-32 mx-auto">
              <Outlet />
            </Box>
            <div></div>
            <div className="absolute bottom-0 w-full mt-6 ">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainLayout;
// DashboardPage.tsx
// import React, { useState } from "react";
// import Footer from "../components/shared/Footer";
// import Dashboard from "../pages/Dasboard";
// import Navbar from "./Navbar";

// const DashboardPage: React.FC = () => {
//   const handleLogout = () => {
//     // Implement your logout logic here
//   };

//   const handleOpenDialog1 = () => {
//     // Implement logic to open Dialog 1
//   };

//   const handleOpenDialog2 = () => {
//     // Implement logic to open Dialog 2
//   };

//   return (
//     <div className="dashboard-page">
//       <Navbar onLogout={handleLogout} />
//       <Dashboard />
//       <Footer
//         onOpenDialog1={handleOpenDialog1}
//         onOpenDialog2={handleOpenDialog2}
//       />
//     </div>
//   );
// };

// export default DashboardPage;
