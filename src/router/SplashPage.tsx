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
      <Button.Default onClick={handleClickTo}>준비 완료!</Button.Default>
    </>
  );
};

export default SplashPage;
