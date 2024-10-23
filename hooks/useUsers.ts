import { gql } from "@apollo/client";

const useUsers = gql`
  query ExampleQuery {
    users {
      role
      phone
      name
      id
      email
    }
  }
`;

export default useUsers;