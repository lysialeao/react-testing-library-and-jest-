import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import App from '../App'
import UserForm from '../components/UserForm'

test('can receive a new user and show it on a list', async () => {

  render(<App />)

  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  })

  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  })

  const button = screen.getByRole('button')

  Promise.all([
   user.click(nameInput),
   user.keyboard('lysia leão'),

   user.click(emailInput),
   user.keyboard('lysialeao@gmail.com'),

   user.click(button)
  ]).then(() => {
    const name = screen.getByRole('cell', { name: 'lysia leão'})
    const email = screen.getByRole('cell', { name: 'lysialeao@gmail.com'})

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  })

})

test('empties the two inputs when the form is submitted', async () => {

  render(<UserForm onUserAdd={() => {}}/>)

  const nameInput = screen.getByRole('textbox', { name: /name/i})
  const emailInput = screen.getByRole('textbox', { name: /email/i})
  const button = screen.getByRole('button')

  Promise.all([
    user.click(nameInput),
    user.keyboard('Carol'),

    user.click(emailInput),
    user.keyboard('caroline@gmail.com'),

    user.click(button)
  ]).then(() => {
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
  })

})