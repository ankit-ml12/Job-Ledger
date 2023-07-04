import React, { useEffect } from 'react'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useState } from 'react'
import { Logo, FormRow, Alert } from '../components'
import { useGlobalContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const navigate = useNavigate()
  const { isLoading, showAlert, displayAlert, registerUser, user, loginUser } =
    useGlobalContext()
  const [values, setValue] = useState(initialState)
  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    const currentUser = { name, email, password }
    if (isMember) {
      loginUser(currentUser)
    } else {
      registerUser(currentUser)
    }
  }
  const toggleMember = (e) => {
    setValue({ ...values, isMember: !values.isMember })
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [user, navigate])
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet' : 'Allready a member?'}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Allready a member?'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
