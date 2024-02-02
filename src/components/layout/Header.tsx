import styled from "styled-components";
import Button from "../Button";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
          <Title>
            <Link to={`/${id}`}>{id}</Link>
          </Title>
          <Button.Icon title="뒤로가기" onClick={handleClickBack}>
            🔙
          </Button.Icon>
        </DefaultHeader>
      )}
    </>
  );
};

export default Header;

const DefaultHeader = styled.header`
  height: 5vh;
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: 4px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 18px;
  margin: auto;
`;
