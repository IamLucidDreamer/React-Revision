import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Manas1",
      title: "hello1",
      number: "10",
    },
    {
      id: 2,
      name: "Manas2",
      title: "hello1",
      number: "7",
    },
    {
      id: 3,
      name: "Manas3",
      title: "hello2",
      number: "4",
    },
  ];
  const personList = persons.map((person) => (
    <h1 key={person.id}>
      The ID is {person.id}. My Name is {person.name}. My title is
      {person.title}. My Number is {person.number}
    </h1>
  ));

  return <div>{personList}</div>;
}

export default NameList;
