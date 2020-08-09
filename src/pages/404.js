import React from "react"
import Layout from "../components/Layout"
import SeoComponent from "../components/SeoComponent"

const NotFoundPage = () => (
  <Layout>
    <SeoComponent
      title="404: Not found"
      description="La página que estás buscando no existe."
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
