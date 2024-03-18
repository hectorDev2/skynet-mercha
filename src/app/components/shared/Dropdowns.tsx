import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'
import Link from 'next/link'

export const Dropdowns = ({ game }: { game: any }) => {
  console.log(game)

  return (
    <div className='flex flex-col'>
      <Link href={game.href ?? ''}>{game.image}</Link>
      <Dropdown>
        <DropdownTrigger>
          <Button variant='bordered'>{game.name}</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label='Static Actions'>
          {game.subcategories?.map((subcategory: any) => {
            console.log(subcategory)

            return (
              <DropdownItem
                key='new'
                description={subcategory.subtitle}
                // startContent={game.image}
              >
                <Link href={`productos/${subcategory.title}`}>
                  {subcategory.title}
                </Link>
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
