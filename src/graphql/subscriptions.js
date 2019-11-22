/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = `subscription OnCreateProject($owner: String!) {
  onCreateProject(owner: $owner) {
    id
    description
    price
    publishDate
    owner
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject($owner: String!) {
  onUpdateProject(owner: $owner) {
    id
    description
    price
    publishDate
    owner
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject($owner: String!) {
  onDeleteProject(owner: $owner) {
    id
    description
    price
    publishDate
    owner
  }
}
`;
export const onCreateAccount = `subscription OnCreateAccount($owner: String!) {
  onCreateAccount(owner: $owner) {
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
export const onUpdateAccount = `subscription OnUpdateAccount($owner: String!) {
  onUpdateAccount(owner: $owner) {
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
export const onDeleteAccount = `subscription OnDeleteAccount($owner: String!) {
  onDeleteAccount(owner: $owner) {
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
