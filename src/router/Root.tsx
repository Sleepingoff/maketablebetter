import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import layout from "../style/layout";
import Header from "../components/layout/Header";

const Root = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const currentId = currentPath.toUpperCase();

  return (
    <>
      <Header id={currentId} />
      <Layout>
        <SideBar />
        <Main>
          <Outlet />
        </Main>
      </Layout>
      <Footer />
    </>
  );
};

export default Root;

const Layout = styled.div`
  ${layout}
`;

const SideBar = styled.aside``;

const Main = styled.main``;

const Footer = styled.footer``;
