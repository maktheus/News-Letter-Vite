import { useState } from "react"

import Header from "./components/Header/Header"
import ArticleList from "./components/ArticleList/ArticleList"
import Form from "./components/Form/Form"

const App = () => {
  const [user, setUser] = useState()

  const submitForm = (user) => {
    setUser(user)
  }

  return (
    <div className="h-screen ">
      <Header user={user?.name} />
      { !!user && <ArticleList /> }
      { !!user || <Form onSubmit={submitForm} /> }
    </div>
  )
}

export default App