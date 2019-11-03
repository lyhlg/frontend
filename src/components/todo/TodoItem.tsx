import React from 'react';
import styled, { IStyledComponent } from 'styled-components';

import { Todo } from '~store/modules/todo';
import { useTodoActions } from '~/hooks/useTodos';

// import './TodoItem.css';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // TODO: 커스텀 Hook 사용해서 onToggle / onRemove 구현
  const { onToggle, onRemove } = useTodoActions(todo.id);
  return (
    <S.List className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <S.Text className="text" onClick={onToggle}>
        {todo.text}
      </S.Text>
      <S.RemoveIcon className="remove" onClick={onRemove}>
        (X)
      </S.RemoveIcon>
    </S.List>
  );
}

export default TodoItem;

const S: IStyledComponent = {};
S.List = styled.li`
  &.done {
    .text {
      color: #999999;
      text-decoration: line-through;
    }
  }
`;
S.Text = styled.span`
  cursor: pointer;
`;
S.RemoveIcon = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;
