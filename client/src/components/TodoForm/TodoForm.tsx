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
  titleRef: RefObject<HTMLInputElement>;
  contentRef: RefObject<HTMLTextAreaElement>;
  isUpdating: boolean;
  onCancleUpdate: () => void;
  onSubmitTodo: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  titleRef,
  contentRef,
  isUpdating,
  onCancleUpdate,
  onSubmitTodo,
}) => {
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
        {isUpdating ? (
          <>
            <Button>수정하기</Button>
            <Button type='button' onClick={onCancleUpdate} color='red'>
              수정 취소
            </Button>
          </>
        ) : (
          <Button>추가하기</Button>
        )}
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
