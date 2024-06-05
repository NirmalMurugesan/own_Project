import { BrowserRouter, Route, RouteObject, Routes } from "react-router-dom";
import BaseLayouts from "../../Layouts/Index";
import PopOver from "../../Pages/PopOver/PopOver";

const Content = () => {
  // var routesContent: RouteObject[] = [
  //   {
  //     path: "",
  //     element: <BaseLayouts />,
  //     children: [
  //       {
  //         path: "/popover/:category/:id",
  //         element:<PopOver />
  //       },
  //     ],
  //   },
  // ];
  // export default routesContent;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BaseLayouts />}></Route>
        <Route path="/popover/:category/:id" element={<PopOver />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Content;
