import {
  ListSubheader,
  Box,
  List,
  styled,
  Button,
  ListItem,
} from "@mui/material";

import Data from "../../Data/Data";

import { MdOutlinePets } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import { FaCat } from "react-icons/fa6";
import { IoFish } from "react-icons/io5";
import { SiHappycow } from "react-icons/si";
import { GiGoat } from "react-icons/gi";
import { GiHummingbird } from "react-icons/gi";
import { GiHorseHead } from "react-icons/gi";
import { GiPiggyBank } from "react-icons/gi";
import { GiDuck } from "react-icons/gi";

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }
    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: #fff;
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: rgb(17, 25, 42);
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: rgba(255, 255, 255, 0.7);
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(["color"])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: rgba(255, 255, 255, 0.7);
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: rgba(255, 255, 255, 0.7);
            margin: 5px auto ;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: rgba(255, 255, 255, 0.06);
            color: #ffffff;

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: "";
            }
          }
        }
      }
    }
  
`
);

function SidebarMenu() {
  // const { closeSidebar } = useContext(SidebarContext);

  const handleSideBarMenu = (r: any) => {
    // console.log(r);
    Data.filter((item) => {
      if (item.category.toLowerCase() === r.toLowerCase()) {
        console.log(item);
      } else {
        console.log("not avilable");
      }
    });
  };

  return (
    <>
      <MenuWrapper
        style={{
          background: "rgb(17, 25, 42)",
          width: "220px",
          height: "100vh",
          position: "fixed",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button>Overview</Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Pet Names
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button disableRipple startIcon={<MdOutlinePets />}>
                  All
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  startIcon={<GiSittingDog />}
                  onClick={() => handleSideBarMenu("Dog")}
                  value="Dog"
                >
                  Dog
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<FaCat />}
                  onClick={() => handleSideBarMenu("Cats")}
                >
                  Cats
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<IoFish />}
                  onClick={() => handleSideBarMenu("Fish")}
                >
                  Fish
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<SiHappycow />}
                  onClick={() => handleSideBarMenu("Cow")}
                >
                  Cow
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<GiGoat />}
                  onClick={() => handleSideBarMenu("Goat")}
                >
                  Goat
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<GiHummingbird />}
                  onClick={() => handleSideBarMenu("Birds")}
                >
                  Birds
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<GiHorseHead />}
                  onClick={() => handleSideBarMenu("Horse")}
                >
                  Horse
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<GiPiggyBank />}
                  onClick={() => handleSideBarMenu("Pig")}
                >
                  Pig
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  startIcon={<GiDuck />}
                  onClick={() => handleSideBarMenu("Duck")}
                >
                  Duck
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
