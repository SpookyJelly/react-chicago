import React from "react";
import Chicago from "./Chicago";

export default {
  title: "ShowCase/Chicago",
  component: Chicago,
};

export const basic = (args: any) => <Chicago {...args} />;

basic.args = {
  text: "Hello, World!",
};

export const typo = (args: any) => <Chicago {...args} />;

typo.args = {
  text: "Hello, World!",
  cursorStyle: "typo",
};
