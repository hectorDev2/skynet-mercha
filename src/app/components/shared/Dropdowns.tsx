import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const Dropdowns = ({ game }: { game: any }) => {
  const router = useRouter()

  return (
    <div className='flex flex-col'>
      <Link href={`/${game.href}` ?? ''}>{game.image}</Link>
      <Dropdown>
        <DropdownTrigger>
          <Button variant='bordered'>{game.name}</Button>
        </DropdownTrigger>
        <DropdownMenu
          onAction={key => router.push(`/${game.href}/${key}`)}
          aria-label='Static Actions'
        >
          {game.subcategories?.map((subcategory: any) => {
            return (
              <DropdownItem
                key={subcategory.id}
                description={
                  <Link className='w-full' href={`/gamer/${subcategory.id}`}>
                    {subcategory.subtitle}
                  </Link>
                }
                // startContent={game.image}
              >
                {subcategory.title}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
