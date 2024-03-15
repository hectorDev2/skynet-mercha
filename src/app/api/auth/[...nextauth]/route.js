import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/libs/prisma'
import bcrypt from 'bcrypt'

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize (credentials, req) {
        const userFound = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        if (!userFound) return null

        console.log(userFound, 'user')

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        )
        console.log(matchPassword)

        if (!matchPassword) return null
        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email
        }
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
