import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useContact } from "../../Hooks/Contact";
import styled from "styled-components";
import { UserContext } from "../../Providers/UserProvider";

const ContactForm = () => {
  // hooks
  const { nameRef, emailRef, contactRef, errors, setFlg, changeFlg } =
    useContact();

  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext.userInfo) {
      emailRef.current!.value = userContext.userInfo.email;
    }
  }, [userContext]);

  useEffect(() => {
    if (changeFlg) {
      if (errors.length !== 0) {
        const errorMsg = errors.map((error) => {
          for (const [_, value] of Object.entries(error!)) {
            return value;
          }
        });
        alert(errorMsg.join("\n"));
      } else {
        alert("success send message");
      }

      setFlg(false);
    }
  }, [errors]);

  // submit method
  const submitAction = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      setFlg(true);
    },
    [errors]
  );

  return (
    <Container>
      <Form
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <label htmlFor="contact">Contact</label>
        <textarea ref={contactRef} id="contact" placeholder="write text ..." />
        <button type="submit" onSubmit={submitAction} onClick={submitAction}>
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default ContactForm;

const Container = styled.div`
  width: 100%;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  border-radius: 20px;
  border-width: 0px;
  background-color: #f6f6f6;
  width: 40%;
  max-width: 960px;
  box-shadow: 4px 4px 10px 0 #585858;

  label {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  input {
    margin-bottom: 40px;
    display: block;
    padding: 15px 10px;
    height: 20px;
    border-radius: 20px;
    border-width: 1px;

    &:focus {
      outline: none;
    }
  }

  textarea {
    padding: 15px 10px;
    height: 150px;
    border-radius: 20px;
    margin-bottom: 20px;

    &:focus {
      outline: none;
    }
  }

  button {
    margin: 0 auto;
    width: 40%;
    cursor: pointer;
    padding: 15px 20px;
    background-color: #f6f6f6;
    border-radius: 20px;
    border-width: 1px;
    box-shadow: 4px 4px 5px #ccc, -4px -4px 5px #ccc;
    font-size: 1.3rem;
    transition: 0.5s;

    &:hover {
      background-color: #000000;
      color: #f6f6f6;
      transform: translateY(3px);
      box-shadow: none;
    }
  }
`;
