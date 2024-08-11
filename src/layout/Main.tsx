import { FormEvent, useState } from "react";
import {
  AddFormView,
  Button,
  Form,
  InputField,
  Modal,
  TodoListItem,
  TodoListView,
} from "../components/_index";
import { ItemBox, StyledMain } from "../styles/styles";
import { useTodoFunctions } from "../hooks/useTodoFunctions";

export const Main = () => {
  const {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    markTodoAsCompleted,
    editTodo,
    deleteTodo,
  } = useTodoFunctions();
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleEditClick = (id: string, title: string) => {
    setEditingTodoId(id);
    setEditingValue(title);
    setModalOpen(true);
  };

  const handleModalSave = (value: string) => {
    if (editingTodoId) {
      editTodo(editingTodoId, value);
    }
    setModalOpen(false);
    setEditingValue("");
  };

  const closeDialogAndCancelEdit = () => {
    setModalOpen(false);
    setEditingValue("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <StyledMain>
      <AddFormView>
        <Form onSubmit={handleSubmit} row>
          <InputField
            value={newTodo}
            onInputChange={setNewTodo}
            mode={"dark"}
            placeholder={"Add a task"}
          />
          <Button type={"submit"} title={"Add Task"} mode={"add"} />
        </Form>
      </AddFormView>
      <TodoListView>
        {todos.map((todo, index: number) => (
          <ItemBox
            key={todo.id}
            $backgroundColor={todo.completed ? "#491c4c40" : "#eae8ee1a"}
          >
            <TodoListItem
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              markTodoAsCompleted={markTodoAsCompleted}
              handleEditClick={handleEditClick}
            />
          </ItemBox>
        ))}
      </TodoListView>
      <Modal
        isOpen={modalOpen}
        onClose={closeDialogAndCancelEdit}
        onSave={handleModalSave}
        initialValue={editingValue}
        onChangeModalValue={setEditingValue}
      />
    </StyledMain>
  );
};
