import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="main">
      <div className="dashboard">
        <div className="header">
          <h2>Welcome user</h2>
          <p>log out</p>
        </div>
        <div className="search_task">
          <div className="search_task_1">
            <input
              required
              autoComplete="off"
              type="text"
              id="search"
              placeholder="search"
              // value={login.username}
              // onChange={handleInput}
            />
            <button type="submit">Search</button>
          </div>
          <div className="search_task_2">
            <div>
              sort by
              <select name="" id="">
                <option value="">1</option>
                <option value="">1</option>
              </select>
            </div>
            <button type="submit">New Task</button>
          </div>
        </div>
        <div className="tasks">
          <div className="task">
            <h3>title</h3>
            <p>dueDate</p>
            <div>
              <p>Edit</p>
              <p>Delete</p>
            </div>
          </div>
        </div>
        <div>
          <div className="pagination">
            <p>prev</p>
            <p>1</p>
            <p>2</p>
            <p>next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
