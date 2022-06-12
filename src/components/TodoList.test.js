import { render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList";

const data = [
  { todo: "HTML", id: '1', completed: false },
  { todo: "CSS", id: '2', completed: true },
  { todo: "JavaScript", id: '3', completed: true },
];

describe("TodoList component", () => {
  test("TodoList renders", () => {
    render(<TodoList todoItems={data} />);

    expect(screen.getByText('CSS')).toBeInTheDocument();
  });
});
