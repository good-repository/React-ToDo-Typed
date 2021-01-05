import { useMemo, useEffect, useState } from "react";
import { Button, Container, Form, Input, Label, Title } from "./styles";
import { Table } from "../../components/Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

import { MdCheck, MdDelete, MdEdit, MdSearch, MdUndo } from "react-icons/md";

const selectStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "rgba(0, 0, 0, 0.4)"
      : "rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid white",
  }),
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "10px",
  }),
};

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [options, setOptions] = useState([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        setOptions(
          json.map((item: any) => {
            return {
              value: item.id,
              label: item.name,
            };
          })
        )
      );

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

  return (
    <Container>
      <Title>Task Form</Title>
      <Form>
        <Label>Description</Label>
        <div style={{ display: "flex", flexGrow: 1, marginBottom: "1rem" }}>
          <Input />
          <Button style={{ backgroundColor: "#17a2b8" }}>
            <MdSearch size={20} color={"#fff"} />
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "1rem",
              }}
            >
              <Label>Date</Label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date | null) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                customInput={<Input />}
              />
            </div>
            <div style={{ width: "260px" }}>
              <Label>Responsible</Label>
              <Select options={options} styles={selectStyles} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              style={{
                backgroundColor: "#28a745",
                width: "100px",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              ADD
            </Button>
            <Button
              style={{
                backgroundColor: "#dc3545",
                width: "100px",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              CLEAR
            </Button>
          </div>
        </div>
      </Form>

      <Title>To Do List</Title>
      <Table columns={columns} data={list} />
    </Container>
  );
}
