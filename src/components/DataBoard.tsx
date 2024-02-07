//https://blog.naver.com/PostView.naver?blogId=senshig&logNo=222367357985
//xlsx의 기본적인 내용만 가지고 구현하기 위해 위의 블로그 참고

interface Props {
  data: Array<any>;
}
const DataBoard = (props: Props) => {
  const data = props.data;
  const head = (
    <tr>
      {Object.keys(data[0]).map((innerData, key) => {
        return <th key={key}>{innerData}</th>;
      })}
    </tr>
  );
  const itemList = data.map((item, keys) => {
    const currentRow = item.__rowNum__;
    //keys + 2 === currentRow
    //TODO: 빈 셀을 알아야 한다!
    return (
      <tr key={"tr" + keys}>
        {Object.values(item).map((innerItem: any, key) => {
          if (innerItem) return <td key={"td" + key}>{innerItem}</td>;
          else return <td key={"td" + key}> empty </td>;
        })}
      </tr>
    );
  });

  return (
    <table>
      <thead>{head}</thead>
      <tbody>{itemList}</tbody>
    </table>
  );
};

export default DataBoard;
