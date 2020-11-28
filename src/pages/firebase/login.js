import React, {useState} from "react"

import { auth } from "src/services/firebase"
import Layout from "src/components/Layout"
import PageContainer from "src/components/PageContainer"

const Login = () => {
  const [formValues, setFormValues] = useState({email: '', password: ''});

  function submit(e){
    e.preventDefault();
    auth.login({email: formValues.email, password: formValues.password});
  }

  function changeFormValues(e) {
    e.persist();
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value
    }))
    console.log(formValues)
  }

  return (
    <Layout pageTitle="Login">
      <PageContainer>
        <div class="columns is-centered my-5 py-5">
          <div class="column is-7 my-5 py-5">
            <h1 class="title">Login</h1>
            <form onSubmit={submit}>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="email" onChange={changeFormValues} name="email" placeholder="Email" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope" />
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" onChange={changeFormValues} name="password" placeholder="Password" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div class="field">
                <input type="submit" block class="button is-primary" />
              </div>
            </form>
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
}

export default Login
