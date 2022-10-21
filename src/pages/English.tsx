import ChicagoContainer from "../components/ChicagoContainer";
import { useState } from "react";
import "./English.css";
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
    <div id="english-page">
      <ChicagoContainer
        chicagoProps={{ text: "Hello, World!" }}
        cardTitle="Default"
      />
      <ChicagoContainer
        chicagoProps={{
          text: "Various color typing is allowed",
          color: "tomato",
          cursorColor: "#1cff00",
        }}
        cardTitle="Colored"
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
        cardTitle="Try it yourself!"
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
          rules={[{ required: true, message: "Please input text!" }]}
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
      <h2>Thanks for your attention!</h2>
      <div style={{ textAlign: "start" }}>
        <Collapse defaultActiveKey={"1"}>
          <Panel header="Do you like it?" key="1">
            <p>
              then Give a try
              <code>npm install react-chicago</code>
              <code>yarn add react-chicago</code>
            </p>
          </Panel>
          <Panel header="Want to contribute?" key="2">
            <p>
              <a
                href="https://github.com/SpookyJelly/react-chicago/discussions"
                target="_blank"
              >
                Disscussions
              </a>
              are always open!
            </p>
          </Panel>
          <Panel header="Found an error?" key="3">
            <p>
              Let us know by
              <a
                href="https://github.com/SpookyJelly/react-chicago/issues/new"
                target="_blank"
              >
                creating an issue
              </a>
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
