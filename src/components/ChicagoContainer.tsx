import { useState, useEffect } from "react";
import { Chicago, ChicagoProps } from "react-chicago";
import { Card, Table, Button, TableColumnProps } from "antd";
import "./ChicagoContainer.css";
import { ReloadOutlined } from "@ant-design/icons";

type Props = {
  chicagoProps: ChicagoProps;
  cardTitle: string;
};

interface DataType {
  key: string;
  text: string;
  color?: string;
  className?: string;
  cursorColor?: string;
  cursorStlye?: string;
  style?: any;
}

export default function ChicagoContainer(props: Props) {
  const [sampleText, setSampleText] = useState(props.chicagoProps.text);
  const { text, className, color, cursorColor, cursorStyle, style } =
    props.chicagoProps;

  const getTableText = (param: any) => param ?? "-";

  const data: DataType[] = [
    {
      key: "1",
      text: getTableText(props.chicagoProps.text),
      color: getTableText(color),
      cursorColor: getTableText(cursorColor),
      cursorStlye: getTableText(cursorStyle),
    },
  ];

  const columns: TableColumnProps<DataType>[] = [
    {
      title: "Text",
      dataIndex: "text",
      key: "1",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "2",
    },
    {
      title: "CursorColor",
      dataIndex: "cursorColor",
      key: "3",
    },
    {
      title: "CursorStyle",
      dataIndex: "cursorStlye",
      key: "4",
    },
  ];

  return (
    <div className="chicago-container">
      <Card title={props.cardTitle}>
        <div style={{ padding: "1rem", background: "#e8e8e8" }}>
          <Chicago
            text={sampleText}
            className={className}
            color={color}
            cursorColor={cursorColor}
            cursorStyle={cursorStyle}
            style={style}
            interval={props.chicagoProps.interval}
          />
          <div style={{ textAlign: "end" }}>
            <Button
              shape="round"
              icon={<ReloadOutlined />}
              onClick={() => {
                setTimeout(() => setSampleText(""), 0);
                setTimeout(() => setSampleText(props.chicagoProps.text), 10);
              }}
            ></Button>
          </div>
        </div>
        <br />
        <Table dataSource={data} columns={columns} pagination={false} />
      </Card>
    </div>
  );
}
