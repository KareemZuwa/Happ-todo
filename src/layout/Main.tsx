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
import { Todo } from "../types/interfaces";

export const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<string>("");
  console.log(todos);

  /*******************************FUNCTIONALITY */
  //ADD TODO
  const addTodo = (title: string) => {
    if (title.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //MARK TODO AS DONE
  const markTodoAsCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //EDIT TODO
  const editTodo = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  //TODO LIST ITEM EDIT BUTTON
  const handleEditClick = (id: string, title: string) => {
    setEditingTodoId(id);
    setModalValue(title);
    setModalOpen(true);
  };

  const handleModalSave = (value: string) => {
    if (editingTodoId) {
      editTodo(editingTodoId, value);
    }
    setModalValue("");
  };

  const closeDialogAndCancelEdit = () => {
    setModalOpen(false);
    setModalValue("");
  };

  console.log(modalValue);

  //DELETE TODO
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /*******************************FUNCTIONALITY */

  //Submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    // Process form data and store it in localStorage or context
    // setFormData(event.target);
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
        initialValue={modalValue}
        onChangeModalValue={setModalValue}
      />
    </StyledMain>
  );
};
