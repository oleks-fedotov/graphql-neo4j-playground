export default /* GraphQL */ `
  mutation {
    p1: CreatePerson(id: "p1", name: "Will") {
      id
      name
    }
    p2: CreatePerson(id: "p2", name: "Bob") {
      id
      name
    }
    p3: CreatePerson(id: "p3", name: "Jenny") {
      id
      name
    }
    p4: CreatePerson(id: "p4", name: "Angie") {
      id
      name
    }
    u1: CreateUniversity(
      id: "b1"
      title: "TUM"
    ) {
      id
      title
    }
    u2: CreateUniversity(
      id: "b2"
      title: "LMU"
    ) {
      id
      title
    }
    u3: CreateUniversity(
      id: "b3"
      title: "KNU"      
    ) {
      id
      title
    }
  }
`;
