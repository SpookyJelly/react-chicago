import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";

export interface ChicagoProps {
  text: string;
  color?: string;
  interval?: number;
  cursorColor?: string;
}

const Wrapper = styled.div`
  white-space: break-spaces;
`;
const Contents = styled.p<Omit<ChicagoProps, "text">>`
  color: ${(props) => props.color ?? "black"};
  &::after {
    content: "";
    margin-left: 3px;
    width: 2px;
    height: 100%;
    background-color: ${(props) => props.cursorColor ?? "black"};
    border-right: solid 2px ${(props) => props.cursorColor ?? "black"};
    animation: typer infinite 0.9s linear;
  }
  @keyframes typer {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Chicago = ({
  text,
  color = "black",
  cursorColor = "black",
}: ChicagoProps) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const setText = async (text: string) => {
    if (ref.current) {
      ref.current.innerText = "";
      for (const elem of text) {
        await new Promise((res) => setTimeout(res, 100));
        ref.current.innerText += elem;
      }
    }
  };
  useEffect(() => {
    setText(text);
  }, [text]);

  return (
    <Wrapper>
      <Contents ref={ref} color={color} cursorColor={cursorColor} />
    </Wrapper>
  );
};

export default Chicago;
