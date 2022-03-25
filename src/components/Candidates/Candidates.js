import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { fetchUser } from "../../actions/CandAct";
import Detail from "../Detail";

export default function Candidates() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const state = useSelector((state) => state);

  const { users } = state;

  users.sort((a, b) => a.name.localeCompare(b.name));

  const [inputVal, setInputVal] = useState("");

  const filterUsers = users.filter((item) =>
    item.name.toLowerCase().includes(inputVal.toLowerCase())
  );

  return (
    <div className="candy">
      <nav className="navbar navbar-gray bg-gray">
        <div className="container">
          <form className="d-flex">
            <input
              onChange={(e) => setInputVal(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      <div className="container-fluid">
        <table className="table table-bordered table-success table-hover table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col"></th>
            </tr>
          </thead>{" "}
          <tbody>
            {filterUsers.map((user, u) => (
              <tr key={u}>
                <th scope="row">{u + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>
                  <td>
                    <Link
                      to={"detail/" + user.id}
                      className="btn btn-secondary  "
                    >
                      Detail
                    </Link>
                  </td>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
      <Routes>
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

