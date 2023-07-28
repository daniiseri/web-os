import { getUser } from '@/lib/auth'
import { CLIENT_ID, REDIRECT_URI } from '@/utils/constants'
import { UserCircle2, PieChart, Settings } from 'lucide-react'
import { cookies } from 'next/headers'
import { Profile } from './Profiles'

export async function NavBar() {
  const user = cookies().has('token') && getUser()

  return (
    <div className='sm:ml-20 py-6 sm:mr-3 w-full flex justify-between h-5 items-center'>
      <div>
        <ul className='flex'>
          <li className='p-2'><UserCircle2 size={12} /></li>
          <li className='p-2'><PieChart size={12} /></li>
          <li className='p-2'><Settings size={12} /></li>
        </ul>
      </div>

      <div className='flex items-center gap-2'>
        <div>
          <div className='text-[0.75rem] font-semibold'>Boa noite ,</div>
          <div className='text-[0.75rem] text-gray-400'>
            {!user
              ? (
                <form method="POST" action={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid+profile+email`}>
                  <button className='underline text-blue-500'>Fazer login com GOOGLE </button>
                </form>
              )
              : <>
                {user.name} <form method='GET' action='http://localhost:3000/api/logout'><button className='underline text-blue-500'>Sair</button></form>
              </>
            }
          </div>
        </div>
        <div>
          {
            user
              ? <Profile picture={user.picture} />
              : <UserCircle2 size={24} />
          }
        </div>
      </div>
    </div>
  )
}