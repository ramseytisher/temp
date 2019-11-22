import React, { useContext, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { UserContext } from '../context/user-context'

import { updateAccount as UpdateAccount } from '../graphql/mutations'

import Layout from '../components/layout'
import { API, graphqlOperation } from "aws-amplify"

export default function PageTemplate({ data: { general, gated } }) {
  const { accountInfo } = useContext(UserContext)
  const [isAuthz, setIsAuthz] = useState(false)

  useEffect(() => {
    try {
      if(accountInfo.has.indexOf(general.frontmatter.dataid) !== -1) {
        setIsAuthz(true)
      } else {
        setIsAuthz(false)
      }
    } catch (error) {
      setIsAuthz(false)
    }
    
  }, [accountInfo, general])

  async function addProjectToAccount() {
    try {
      const updatedAccount = await API.graphql(graphqlOperation(UpdateAccount, { id: accountInfo.id, has: []}))
      console.log('Updated account: ')
    } catch (error) {
      console.log('Error updating account', error)
    }
  }

  return (
    <Layout>
      <h1>{general.frontmatter.title} | {general.id} | {general.frontmatter.dataid}</h1>
      <MDXRenderer>{general.body}</MDXRenderer>
      { isAuthz ? <MDXRenderer>{gated.body}</MDXRenderer> : <button onClick={() => addProjectToAccount()}>add project</button> }
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContainerPageQuery($id: String, $gated: String) {
    general: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        dataid
      }
    }
    gated: mdx(
      fields: {gated: {id: {eq: $gated}}}, 
      fileAbsolutePath: {regex: "\/gated.mdx/"}
    ) {
      id
      body
    }
  }
`