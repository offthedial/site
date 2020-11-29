import React, { useState } from "react"

import { navigate } from "gatsby"
import { auth } from "src/services/firebase"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" })

  const submitForm = e => {
    e.preventDefault()
    auth.login(form)
  }
  const changeForm = e => {
    e.persist()
    setForm(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }))
    console.log(form)
  }

  return (
    <Layout pageTitle="Login">
      <PageContainer>
        <div class="columns is-centered my-5 py-5">
          <div class="column is-7 my-5 py-5">
            <h1 class="title">Login</h1>
            <form onSubmit={submitForm}>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    onChange={changeForm}
                    name="email"
                    placeholder="Email"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope" />
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    onChange={changeForm}
                    name="password"
                    placeholder="Password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div class="field">
                <input type="submit" block="true" class="button is-primary" />
              </div>
            </form>
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Login
