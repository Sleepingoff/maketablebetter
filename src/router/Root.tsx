import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import layout from "../style/layout";
import Button from "../components/Button";

const Root = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const currentId = currentPath.toUpperCase();

  const navigate = useNavigate();

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
interface HeaderProps {
  id: string;
}
const Header = ({ id }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClickGo = () => {
    navigate("/home");
  };
  const { pathname } = useLocation();
  const handleClickBack = () => {
    //TODO: 히스토리 확인 후 이동하기
    if (pathname !== `/`) {
      navigate(-1);
    }
  };
  return (
    <>
      {pathname == `/` ? (
        <DefaultHeader>
          <Button.Default onClick={handleClickGo}>준비 완료!</Button.Default>
        </DefaultHeader>
      ) : (
        <DefaultHeader>
          <Title>{id}</Title>
          <Button.Icon title="뒤로가기" onClick={handleClickBack}>
            🔙
          </Button.Icon>
        </DefaultHeader>
      )}
    </>
  );
};

const Layout = styled.div`
  ${layout}
`;

const SideBar = styled.aside``;

const Main = styled.main``;

const DefaultHeader = styled.header`
  height: 5vh;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: 4px;
`;

const Footer = styled.footer``;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin: auto;
`;
