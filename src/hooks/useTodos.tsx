import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/modules';
import { addTodo, toggleTodo, removeTodo } from '@/store/modules/todos';

function useTodos() {
  const todos = useSelector((state: RootState) => state.todo);
  return todos;
}

function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}

function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

  return { onToggle, onRemove };
}

export { useTodos, useAddTodo, useTodoActions };
