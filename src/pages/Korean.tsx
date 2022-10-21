import ChicagoContainer from "../components/ChicagoContainer";
import { useState } from "react";
import "./Korean.css";
import { ChicagoProps } from "react-chicago";
import { Input, Form, Radio, Collapse } from "antd";

export default function English() {
  const [props, setProps] = useState<ChicagoProps>({
    text: "hello world!",
    color: "red",
    cursorColor: "red",
    cursorStyle: "default",
  });

  const handleChange = (value: string, key: keyof ChicagoProps) => {
    setProps({ ...props, [key]: value });
  };

  const { Panel } = Collapse;

  return (
    <div id="korean-page">
      <ChicagoContainer
        chicagoProps={{ text: "Hello, World!" }}
        cardTitle="기본"
      />
      <ChicagoContainer
        chicagoProps={{
          text: "다양한 색상의 타이핑도 가능합니다",
          color: "tomato",
          cursorColor: "#1cff00",
        }}
        cardTitle="색상"
      />
      <ChicagoContainer
        chicagoProps={{
          text: "Hello, World!",
          cursorStyle: "typo",
        }}
        cardTitle="Cursor: Typo"
      />
      {/* 
      FIXME: Interval Typo is disable for now
      <ChicagoContainer
        chicagoProps={{
          text: "Interval Typo",
          cursorStyle: "typo",
          interval: 1000,
        }}
        cardTitle="Cursor: Typo"
      /> */}

      <ChicagoContainer
        cardTitle="직접 시험해보세요!"
        chicagoProps={{
          text: props.text,
          cursorColor: props.cursorColor,
          color: props.color,
          cursorStyle: props.cursorStyle,
        }}
      />
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "텍스트를 입력해주세요" }]}
        >
          <Input
            defaultValue={props.text}
            onChange={(e) => handleChange(e.target.value, "text")}
          />
        </Form.Item>
        <Form.Item label="Color" name="color">
          <Input
            onChange={(e) => handleChange(e.target.value, "color")}
            defaultValue={props.color}
          />
        </Form.Item>
        <Form.Item label="CursorColor" name="cursorColor">
          <Input
            defaultValue={props.cursorColor}
            onChange={(e) => handleChange(e.target.value, "cursorColor")}
          />
        </Form.Item>
        <Form.Item label="CursorStyle" name="cursorStyle">
          <Radio.Group
            onChange={(e) => handleChange(e.target.value, "cursorStyle")}
            value={props.cursorStyle}
            defaultValue="default"
          >
            <Radio value={"default"} checked={true}>
              default
            </Radio>
            <Radio value={"typo"}>typo</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <br />
      <h2>읽어주셔서 감사합니다!</h2>
      <div style={{ textAlign: "start" }}>
        <Collapse defaultActiveKey={"1"}>
          <Panel header="마음에 드시나요?" key="1">
            <p>
              그러면
              <code>npm install react-chicago</code>
              <code>yarn add react-chicago</code>
              으로 시작해보세요!
            </p>
          </Panel>
          <Panel header="이 프로젝트에 기여하고 싶으신가요?" key="2">
            <p>
              <a
                href="https://github.com/SpookyJelly/react-chicago/discussions"
                target="_blank"
              >
                Disscussions
              </a>
              페이지에서 의견을 알려주세요
            </p>
          </Panel>
          <Panel header="에러를 찾으셨나요?" key="3">
            <p>
              <a
                href="https://github.com/SpookyJelly/react-chicago/issues/new"
                target="_blank"
              >
                이슈 생성
              </a>
              으로 알려주시면 감사드리겠습니다
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
