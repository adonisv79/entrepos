import { UserProfile } from '@auth0/nextjs-auth0/client'
import * as React from 'react'

type ListDetailProps = {
  item: UserProfile
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id?.toString()}</p>
  </div>
)

export default ListDetail