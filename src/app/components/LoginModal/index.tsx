import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, Close } from './style'
import Image from 'next/image'
import UserIcon from '../../assets/icons/user.svg'
import CloseIcon from '../../assets/icons/close.svg'

import { ButtonStyle } from '../Button/style'
import { AuthButtonServer } from '../auth-button-server'

export function LoginModal () {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button
            className={ButtonStyle({
              withIcon: true
            })}
          >
            <Image src={UserIcon} alt='Criar conta' width={19} height={19} />
            ingresar
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Overlay>
            <Content>
              {/* <AuthButtonServer /> */}
              <AuthButtonServer />
              <Close>
                <Image src={CloseIcon} alt='Fechar modal de login' />
              </Close>
            </Content>
          </Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
