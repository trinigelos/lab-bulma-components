import React from 'react'
import FormField from './FormField'
import Navbar from './Navbar'
import CoolButton from './CoolButton'

export default function SignupForm() {
  return (
      <div>
          <form className="form-container">
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="email" placeholder="e.g. alexsmith@gmail.com" />
              <CoolButton isPrimary>Submit </CoolButton>
          </form>
    </div>
  )
}
