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
  position: relative;
`;

const Contents = styled.p<Omit<ChicagoProps, "text">>`
  color: ${(props) => props.color ?? "black"};
  &::after {
    color: transparent;
    margin-left: 3px;
    animation: typer infinite 0.9s linear;

    ${({ cursorStyle, cursorColor }) => {
      switch (cursorStyle) {
        case "typo":
          return css`
            content: "''";
            position: absolute;
            top: -0.3rem;
            border-bottom: solid 1px ${cursorColor};
            width: 0.5rem;
          `;

        default:
        case "default":
          return css`
            content: "";
            width: 2px;
            height: 100%;
            border-right: solid 2px ${cursorColor};
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
  interval = 100,
  className,
  style,
  cursorStyle = "default",
}: ChicagoProps) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const setText = async (text: string) => {
    if (ref.current) {
      ref.current.innerText = "";
      for (const elem of text) {
        await new Promise((res) => setTimeout(res, interval));
        // const handler = setTimeout((res) => res, interval);
        ref.current.innerText += elem;
        // return () => clearTimeout(handler);
      }
    }
  };

  useEffect(() => {
    setText(text);
    if (ref.current) {
      ref.current.innerText = "";
      const handler = text.split("").forEach((elem) => {
        console.log(elem);
      });
    }
  }, [text]);

  // useEffect(() => {
  //   setText(text);
  // }, [text]);

  // useEffect(() => {
  // }, [tState]);

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
