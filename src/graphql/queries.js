/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    description
    price
    publishDate
    owner
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      price
      publishDate
      owner
    }
    nextToken
  }
}
`;
export const getAccount = `query GetAccount($id: ID!) {
  getAccount(id: $id) {
    id
    first
    last
    email
    emailAllow
    has
    owner
  }
}
`;
export const listAccounts = `query ListAccounts(
  $filter: ModelAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      first
      last
      email
      emailAllow
      has
      owner
    }
    nextToken
  }
}
`;
