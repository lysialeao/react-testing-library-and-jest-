import { render, screen, within } from '@testing-library/react'

import UserList from '../components/UserList'

test('render one row per user', () => {

  const users = [
    { name: 'Lysia', email: 'lysia@gmail.com'},
    { name: 'Caroline', email: 'caroline@gmail.com'}
  ]

  render(<UserList users={users}/>)

  const rows = within(screen.getByTestId('users')).getAllByRole('row')
  expect(rows).toHaveLength(2)

})

test('render the name and email of each user', () => {

})