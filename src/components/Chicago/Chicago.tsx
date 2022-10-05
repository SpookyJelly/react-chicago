import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface ChicagoProps {
  text: string;
  color?: string;
  interval?: number;
  cursorColor?: string;
  cursorStyle?: "default" | "typo";
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper = styled.div`
  white-space: break-spaces;
`;

const Contents = styled.p<Omit<ChicagoProps, "text">>`
  color: ${(props) => props.color ?? "black"};
  &::after {
    content: "";
    margin-left: 3px;
    animation: typer infinite 0.9s linear;
    background-color: ${(props) => props.cursorColor ?? "black"};
    border-right: solid 2px ${(props) => props.cursorColor ?? "black"};

    ${({ cursorStyle }) => {
      switch (cursorStyle) {
        case "typo":
          return css`
            width: 5px;
            height: 2px;
          `;

        default:
        case "default":
          return css`
            width: 2px;
            height: 100%;
          `;
      }
    }}
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
  className,
  style,
  cursorStyle = "default",
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
    <Wrapper className={className}>
      <Contents
        ref={ref}
        color={color}
        cursorColor={cursorColor}
        style={style}
        cursorStyle={cursorStyle}
      />
    </Wrapper>
  );
};

export default Chicago;
