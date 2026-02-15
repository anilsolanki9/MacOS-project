import React, { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import "./todo.scss";

const TodoList = ({ windowName, setWindowState, isFullScreen, setIsFullScreen }) => {
  const [tasksCollection, setTasksCollection] = useState(
    JSON.parse(localStorage.getItem("alltasks")) || [],
  );

  const [title, setTitle] = useState("");

  function formHandller(e) {
    e.preventDefault();
    setTasksCollection([
      ...tasksCollection,
      {
        title: title,
        status: false,
      },
    ]);
    setTitle("");
  }

  function completeBtnHandller(id) {
    let arr = [...tasksCollection];
    arr[id].status = true;
    setTasksCollection(arr);
  }

  function undoHandller(id) {
    let arr = [...tasksCollection];
    arr[id].status = false;
    setTasksCollection(arr);
  }

  function deleteHandller(id) {
    let arr = [...tasksCollection];
    arr.splice(id, 1);
    setTasksCollection(arr);
  }

  useEffect(() => {
    localStorage.setItem("alltasks", JSON.stringify(tasksCollection));
  }, [tasksCollection]);

  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      width="70vw">
      <div className="todo-window">
        <h1>To-Do List</h1>
        <form onSubmit={formHandller}>
          <input
            required
            type="text"
            id="title"
            autoFocus
            placeholder="Enter To-Do Task"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button type="submit">ADD TASK</button>
        </form>
        <div className="tasks">
          {tasksCollection.map((task, idx) => {
            return (
              <div className="task" key={idx}>
                <div className={`task-title ${task.status ? `strike-through` : ``}`}>
                  {task.title}
                </div>
                {task.status ? (
                  <div className="btns">
                    <div
                      className="task-btn task-undo-btn"
                      onClick={() => {
                        undoHandller(idx);
                      }}>
                      Undo
                    </div>
                    <div
                      className="task-btn task-delete-btn"
                      onClick={() => {
                        deleteHandller(idx);
                      }}>
                      Delete
                    </div>
                  </div>
                ) : (
                  <div
                    className="task-btn"
                    onClick={() => {
                      completeBtnHandller(idx);
                    }}>
                    Mark Completed
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MacWindow>
  );
};

export default TodoList;
