import { UserProfile } from '@auth0/nextjs-auth0/client'
import React from 'react'
import Link from 'next/link'

type Props = {
  data: UserProfile
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id?.toString()}:{data.name}
  </Link>
)

export default ListItem