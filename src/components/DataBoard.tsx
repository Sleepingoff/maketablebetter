//https://blog.naver.com/PostView.naver?blogId=senshig&logNo=222367357985
//xlsx의 기본적인 내용만 가지고 구현하기 위해 위의 블로그 참고

interface Props {
  data: Array<any>;
}
const DataBoard = (props: Props) => {
  const data = props.data;
  const head = (
    <tr>
      {Object.keys(data[0]).map((innerData, key) => (
        <th key={key}>{innerData}</th>
      ))}
    </tr>
  );
  const itemList = data.map((item, keys) => (
    <tr key={"tr" + keys}>
      {Object.keys(item).map((innerItem, key) => (
        <td key={"td" + key}>{innerItem}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>{head}</thead>
      <tbody>{itemList}</tbody>
    </table>
  );
};

export default DataBoard;
