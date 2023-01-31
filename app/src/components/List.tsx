import { UserProfile } from '@auth0/nextjs-auth0/client'
import * as React from 'react'
import ListItem from './ListItem'

type Props = {
  items: UserProfile[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item, key) => (
      <li key={key}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List