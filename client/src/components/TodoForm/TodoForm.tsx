import React, {
  Dispatch,
  FC,
  FormEvent,
  RefObject,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import {
  Button,
  Form as FormStyle,
  Input,
  Label,
  Textarea,
} from '../../styles/form';
import axios from 'axios';
import type { TodoResType } from '../../types/todo';

interface TodoFormProps {
  setTodos: Dispatch<React.SetStateAction<TodoResType[]>>;
  titleRef: RefObject<HTMLInputElement>;
  contentRef: RefObject<HTMLTextAreaElement>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  setTodos,
  titleRef,
  contentRef,
}) => {
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

        setTodos((current) => [...current, res.data.data]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Form onSubmit={onSubmitTodo}>
      <InputContainer>
        <Label htmlFor='todoTitle'>할 일</Label>
        <TitleInput type='text' id='todoTitle' ref={titleRef} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='todoContent'>내용</Label>
        <ContentInput id='todoContent' rows={5} ref={contentRef} />
      </InputContainer>
      <ButtonContainer>
        <Button>추가하기</Button>
      </ButtonContainer>
    </Form>
  );
};

export default TodoForm;

const Form = styled(FormStyle)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled(Input)`
  width: calc(100% - 8rem);
`;

const ContentInput = styled(Textarea)`
  width: calc(100% - 8rem);
`;

const InputContainer = styled.div`
  width: 100%;
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
