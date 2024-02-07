import * as XLSX from 'xlsx';

const readExcelFile = async (file:File):Promise<any> => {
return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
    const data = e.target?.result;
    // 여기에서 엑셀 파일을 처리하는 로직을 추가합니다.
    // const XLSX =  XLSX$Consts;
    const workbook = XLSX.read(data, { type: 'binary' });
    //TODO: 시트별로 내보내기
    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    resolve(jsonData);
    };

    reader.onerror = (error) => {
    reject(error);
    };

    reader.readAsBinaryString(file);
});
};

export default readExcelFile;