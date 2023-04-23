import React, { FC, FormEvent, useRef } from "react";
import styled from "styled-components";

interface Prop {
  submitAction: (e: FormEvent<HTMLFormElement>, email?: string) => void;
}

export const InputEmail: FC<Prop> = ({ submitAction }) => {
  const ref = useRef<HTMLInputElement>(null);
  const defaultSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitAction(e, ref.current?.value);
  };

  return (
    <Container>
      <form onSubmit={defaultSubmit}>
        <input ref={ref} className="input" placeholder="your email" type="email" />
        <input className="submit btn" type="submit" value="contact" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 0;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
  }

  .input {
    display: block;
    height: 50px;
    width: 200px;
    border-radius: 20px;
    border: 1px solid #989898;
    padding: 0 15px;

    &:focus{
      outline: none;
    }
  }

  .submit {
    display: block;
    font-size: 18px;
    padding: 15px 30px;
    color: #ffffff;
    background-color: #000000;
    border-radius: 30px;
    transition: 0.4s;
    outline-style: none;
    outline: none;

    &:hover {
      background-color: #ffffff;
      color: #000000;
      border-width: 0.3px;
    }
  }
`;
