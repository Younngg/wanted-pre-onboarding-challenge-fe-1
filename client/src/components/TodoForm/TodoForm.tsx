import React, { FormEvent, RefObject, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  Form as FormStyle,
  Input,
  Label,
  Textarea,
} from '../../styles/form';
import axios from 'axios';

const TodoForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const onSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current && contentRef.current) {
      try {
        const res = await axios.post(
          'todos',
          {
            title: titleRef.current.value,
            content: contentRef.current.value,
          },
          { headers: { Authorization: localStorage.getItem('token') } }
        );
        console.log(res);
      } catch (err) {}
    }
  };

  return (
    <Form onSubmit={onSubmitTodo}>
      <InputContainer>
        <Label htmlFor='todoTitle'>할 일</Label>
        <Input type='text' id='todoTitle' ref={titleRef} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='todoContent'>내용</Label>
        <Textarea id='todoContent' rows={5} ref={contentRef} />
      </InputContainer>
      <ButtonContainer>
        <Button>추가하기</Button>
      </ButtonContainer>
    </Form>
  );
};

export default TodoForm;

const Form = styled(FormStyle)`
  width: fit-content;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
  * {
    vertical-align: middle;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
