import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import LogFix from "./components/pages/LogFix";
import DefectFix from "./components/pages/DefectFix";
import Generate from "./components/pages/Generate";
import { Outlet, Route } from "react-router-dom";
import PageWrapper from "./components/layout/PageWrapper";

export const appRoutes = [
  {
    path: "/codefix",
    element: <Outlet />,
    state: "codefix",
    sidebarProps: {
      displayText: "Code Fix",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/codefix/logfix",
        element: <LogFix />,
        state: "codefix.logfix",
        sidebarProps: {
          displayText: "Log Fix",
        },
      },
      {
        path: "/codefix/defectfix",
        element: <DefectFix />,
        state: "codefix.defectfix",
        sidebarProps: {
          displayText: "Defect Fix",
        },
      },
    ],
  },
  {
    path: "/generate",
    element: <Generate />,
    state: "generate",
    sidebarProps: {
      displayText: "Generate",
      icon: <FormatListBulletedOutlinedIcon />,
    },
  },
];

const generateRoute = (routes) => {
  return routes.map((route, index) =>
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && generateRoute(route.child)}
      </Route>
    )
  );
};

export const routes = generateRoute(appRoutes);
