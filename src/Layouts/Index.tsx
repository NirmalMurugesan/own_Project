import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "../Components/Header/Header";
import SidebarMenu from "../Components/SideNavigation/SideNavigationBar";
import ContentPage from "../Pages/DashBoard/Index";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const BaseLayouts: FC<SidebarLayoutProps> = () => {

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            // display: "block",
            flex: 1,
          }}
        >
          <Header />
          <SidebarMenu />
          <Box
            sx={{
              position: "relative",
              zIndex: 5,
              display: "block",
              flex: 1,
              marginLeft: "225px",
              paddingTop: "80px"
            }}
          >
            <Box display="block">
                <ContentPage />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BaseLayouts;
