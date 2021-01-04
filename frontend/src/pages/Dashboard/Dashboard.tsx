import { useMemo, useEffect, useState } from "react";
import { Button } from "./styles";
import { Table } from "../../components/Table";

import { MdCheck, MdDelete, MdEdit, MdUndo } from "react-icons/md";

export default function Dashboard() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        setList(
          json.map((item: any) => {
            return {
              id: item.id,
              userId: item.userId,
              title: item.title,
              start: item.start || "",
              conclusion: item.conclusion || "",
              actions: (
                <>
                  {item.completed ? (
                    <Button
                      style={{ backgroundColor: "#28a745" }}
                      onClick={() => alert("foi")}
                    >
                      <MdCheck size={20} color={"#fff"} />
                    </Button>
                  ) : (
                    <Button
                      style={{ backgroundColor: "#ffc107" }}
                      onClick={() => alert("foi")}
                    >
                      <MdUndo size={20} color={"#fff"} />
                    </Button>
                  )}
                  <Button
                    style={{ backgroundColor: "#007bff" }}
                    onClick={() => alert("foi")}
                  >
                    <MdEdit size={20} color={"#fff"} />
                  </Button>

                  <Button
                    style={{ backgroundColor: "#dc3545" }}
                    onClick={() => alert("foi")}
                  >
                    <MdDelete size={20} color={"#fff"} />
                  </Button>
                </>
              ),
            };
          })
        )
      );
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Description",
        accessor: "title",
      },
      {
        Header: "Start",
        accessor: "visits",
      },
      {
        Header: "Conclusion",
        accessor: "status",
      },
      {
        Header: "Responsible",
        accessor: "userId",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );

  return <Table columns={columns} data={list} />;
}
