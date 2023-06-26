import React from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useState } from 'react'
import { Logo, FormRow, Alert } from '../components'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMemeber: true,
  showAlert: false,
}

const toggleMember = () => {
  setValue({ ...values, isMemeber: !values.isMemeber })
}
const Register = () => {
  const [values, setValue] = useState(initialState)
  const handleChange = (e) => {
    console.log(e.target)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onsubmit}>
        <Logo />
        <h3>{value.isMemeber ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMemeber && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button className="btn btn-block">Submit</button>
        <p>
          {values.isMemeber(
            <button type="button" onClick={toggleMember} className="member-btn">
              Register
            </button>
          )}
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
