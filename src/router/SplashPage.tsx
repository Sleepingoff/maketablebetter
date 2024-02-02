import {
  EventHandler,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const SplashPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoading) {
      console.log("ready");
      navigate("/home");
    }
  }, [isLoading]);

  const handleClickTo = (event: MouseEvent) => {
    setIsLoading(true);
  };
  return (
    <>
      SplashPage
      <Button onClick={handleClickTo}>준비 완료!</Button>
    </>
  );
};

export default SplashPage;
