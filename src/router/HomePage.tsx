import styled from "styled-components";
import Button from "../components/Button";
import { ChangeEvent, useEffect, useState } from "react";
import readExcelFile from "../utils/readExelFile";
import DataBoard from "../components/DataBoard";

const HomePage = () => {
  const [excelData, setExcelData] = useState();
  const [error, setError] = useState();

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      await readExcelFile(file)
        .then((result) => {
          console.log(result);
          setExcelData(result);
        })
        .catch((e) => {
          setError(e);
        });
    }
  };

  return (
    <div>
      only accept xlsx, xls files:
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {excelData && (
        <div>
          <h2>엑셀 파일 내용:</h2>
          <DataBoard data={excelData} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
