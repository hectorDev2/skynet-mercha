import Image from 'next/image'
import { Container, LeftSide, RightSide } from './style'
import Battlenet from '@/assets/icons/battlenet.svg'
import Cards from '@/assets/icons/cards_group.svg'
import Dots from '@/assets/icons/dots_group.svg'
import Buy from '@/assets/icons/buy.svg'
import Mobile from '@/assets/icons/mobile.svg'
import Download1 from '@/assets/images/download-1.png'
import Download2 from '@/assets/images/download-2.png'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'

export function Download() {
  const [detectedOS, setDetectedOS] = useState('Unknown OS')
  useEffect(() => {
    if (navigator.appVersion.indexOf('Win') != -1) setDetectedOS('Windows')
    if (navigator.appVersion.indexOf('Mac') != -1) setDetectedOS('MacOS')
    if (navigator.appVersion.indexOf('X11') != -1) setDetectedOS('UNIX')
    if (navigator.appVersion.indexOf('Linux') != -1) setDetectedOS('Linux')
  }, [])

  function getSo() {
    if (detectedOS === 'Windows') {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12V6.75L9 5.43V11.91L3 12ZM20 3V11.75L10 11.9V5.21L20 3ZM3 13L9 13.09V19.9L3 18.75V13ZM20 13.25V22L10 20.09V13.1L20 13.25Z"
            fill="white"
          />
        </svg>
      )
    }
    if (detectedOS === 'MacOS') {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7937 12.6832C18.7822 10.7159 19.6702 9.2333 21.4634 8.14007C20.4605 6.69782 18.9432 5.90458 16.9431 5.7517C15.0493 5.60171 12.9774 6.85935 12.2188 6.85935C11.417 6.85935 9.58362 5.80362 8.14103 5.80362C5.16391 5.84977 2 8.18622 2 12.9399C2 14.3446 2.25576 15.7955 2.76727 17.2897C3.4512 19.2569 5.91681 24.0769 8.48875 23.9991C9.83362 23.9673 10.7848 23.0414 12.5349 23.0414C14.2332 23.0414 15.1126 23.9991 16.6126 23.9991C19.2075 23.9616 21.4375 19.58 22.087 17.607C18.6069 15.96 18.7937 12.7841 18.7937 12.6832ZM15.7735 3.88543C17.2305 2.14895 17.0983 0.568247 17.0552 0C15.7678 0.0749971 14.2792 0.879774 13.4315 1.86916C12.4975 2.93066 11.9486 4.2431 12.0665 5.72285C13.4573 5.82958 14.7275 5.11134 15.7735 3.88543Z"
            fill="white"
          />
        </svg>
      )
    }
    if (detectedOS === 'Linux') {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9214 16.734C20.1482 16.8248 20.3436 16.9796 20.4839 17.1795C20.6099 17.367 20.6984 17.5935 20.7539 17.859C20.7839 18.015 20.8199 18.159 20.8589 18.294C20.9325 18.547 21.0432 18.7876 21.1874 19.008C21.2579 19.1175 21.3524 19.2375 21.4694 19.371C21.5699 19.4805 21.6599 19.6215 21.7394 19.7925C21.8127 19.9463 21.8521 20.1141 21.8549 20.2845C21.8607 20.4483 21.8116 20.6093 21.7154 20.742C21.6176 20.8708 21.4983 20.9819 21.3629 21.0705C21.1829 21.195 20.9954 21.3045 20.8004 21.399C20.6054 21.492 20.4104 21.5895 20.2154 21.6915C19.9239 21.8304 19.6453 21.9951 19.3829 22.1835C19.1489 22.356 18.9134 22.5735 18.6794 22.8405C18.4066 23.1461 18.0908 23.4104 17.7419 23.625C17.5638 23.738 17.3703 23.8249 17.1674 23.883C16.9724 23.937 16.7774 23.973 16.5824 23.988C16.1294 23.988 15.7544 23.91 15.4574 23.754C15.1604 23.598 14.9024 23.313 14.6834 22.899C14.6204 22.7805 14.5589 22.707 14.4959 22.6755C14.3987 22.6343 14.2962 22.6065 14.1914 22.593L13.0049 22.5C12.6149 22.47 12.2174 22.4535 11.8109 22.4535C11.4733 22.454 11.1363 22.481 10.8029 22.5345C10.4594 22.59 10.1189 22.656 9.78294 22.734C9.71394 22.749 9.64344 22.809 9.57294 22.9095C9.48516 23.0314 9.38678 23.1454 9.27894 23.25C9.13281 23.3891 8.96252 23.5005 8.77644 23.5785C8.51127 23.6821 8.2286 23.7335 7.94394 23.73C7.68594 23.73 7.40844 23.703 7.11144 23.649C6.83359 23.6007 6.5649 23.5096 6.31494 23.379C5.86404 23.1484 5.38277 22.9827 4.88544 22.887C4.41594 22.8015 3.92094 22.722 3.39744 22.653C3.22393 22.6304 3.0517 22.5989 2.88144 22.5585C2.72416 22.5229 2.57601 22.455 2.44644 22.359C2.32754 22.2711 2.2284 22.1591 2.15544 22.0305C2.07545 21.8666 2.03487 21.6863 2.03694 21.504C2.03694 21.261 2.06844 21.027 2.13144 20.8005C2.19444 20.5755 2.22894 20.3355 2.23644 20.0865C2.23644 19.914 2.22444 19.746 2.20194 19.5825C2.17713 19.4074 2.16111 19.2312 2.15394 19.0545C2.15394 18.657 2.24844 18.3645 2.43594 18.1755C2.62344 17.988 2.89644 17.8395 3.25644 17.73C3.41637 17.6816 3.56699 17.6065 3.70194 17.508C3.82574 17.4146 3.94301 17.3129 4.05294 17.2035C4.16455 17.0914 4.26642 16.9699 4.35744 16.8405C4.45194 16.707 4.55694 16.5735 4.67394 16.4415C4.69728 16.4115 4.70995 16.3745 4.70994 16.3365C4.70994 16.242 4.70544 16.152 4.69794 16.0665L4.67394 15.7845C4.67394 15.2535 4.75644 14.7195 4.91994 14.1795C5.08494 13.6395 5.29944 13.1145 5.56494 12.597C5.83003 12.0826 6.12763 11.5856 6.45594 11.109C6.78294 10.6335 7.10844 10.191 7.42794 9.7845C7.86192 9.24119 8.20626 8.63201 8.44794 7.98C8.67294 7.356 8.79144 6.675 8.79894 5.94C8.79894 5.6295 8.78394 5.3205 8.75244 5.016C8.72097 4.7045 8.70545 4.39159 8.70594 4.0785C8.70594 3.453 8.77644 2.8905 8.91594 2.391C9.05694 1.89 9.27594 1.461 9.57294 1.101C9.86994 0.741 10.2569 0.4725 10.7324 0.2925C11.2109 0.1125 11.7809 0.015 12.4439 0C13.2344 0 13.8629 0.156 14.3324 0.4695C14.8004 0.7815 15.1604 1.191 15.4094 1.6995C15.6599 2.2065 15.8204 2.7735 15.8894 3.399C15.9614 4.023 16.0004 4.656 16.0079 5.2965V5.496C16.0079 5.817 16.0109 6.102 16.0199 6.351C16.0339 6.85724 16.1492 7.35555 16.3589 7.8165C16.4684 8.058 16.6319 8.3205 16.8509 8.601C17.2259 9.0945 17.6099 9.591 17.9999 10.0905C18.3899 10.59 18.7454 11.106 19.0649 11.6355C19.3859 12.168 19.6484 12.723 19.8509 13.3005C20.0549 13.8795 20.1599 14.5035 20.1674 15.1755C20.1695 15.7053 20.0864 16.232 19.9214 16.7355V16.734ZM10.0904 4.524C10.1984 4.524 10.2884 4.551 10.3604 4.605C10.4336 4.66388 10.49 4.74095 10.5239 4.8285C10.5616 4.91859 10.5888 5.01271 10.6049 5.109C10.6199 5.2035 10.6289 5.301 10.6289 5.403C10.6314 5.46743 10.6191 5.53156 10.5929 5.5905C10.5672 5.6403 10.5315 5.68423 10.4879 5.7195L10.3469 5.8365C10.2967 5.87907 10.25 5.92573 10.2074 5.976C10.1512 6.06358 10.0745 6.13616 9.98394 6.1875C9.89105 6.24142 9.80093 6.3 9.71394 6.363C9.63085 6.42329 9.55261 6.48999 9.47994 6.5625C9.44362 6.60166 9.41559 6.64775 9.39755 6.69802C9.3795 6.74829 9.37181 6.80168 9.37494 6.855C9.37494 6.9255 9.40944 6.984 9.47994 7.0305C9.65485 7.14066 9.79358 7.29974 9.87894 7.488C9.95694 7.668 10.0439 7.8435 10.1369 8.016C10.2299 8.187 10.3514 8.331 10.4999 8.4495C10.6484 8.5665 10.8794 8.625 11.1899 8.625H11.2619C11.5739 8.61 11.8709 8.5275 12.1529 8.379C12.4334 8.2305 12.7154 8.0745 12.9959 7.9095C13.0448 7.88203 13.096 7.85894 13.1489 7.8405C13.2034 7.82106 13.2545 7.79323 13.3004 7.758L14.1554 7.0905C14.1703 7.04022 14.1823 6.98914 14.1914 6.9375C14.2006 6.88267 14.2086 6.82766 14.2154 6.7725C14.2181 6.69793 14.1971 6.62443 14.1554 6.5625C14.1171 6.50809 14.0699 6.46044 14.0159 6.4215C13.956 6.38061 13.8879 6.35299 13.8164 6.3405C13.7449 6.32615 13.6747 6.30608 13.6064 6.2805C13.4195 6.24206 13.2407 6.17098 13.0784 6.0705C12.9173 5.97044 12.7439 5.89178 12.5624 5.8365C12.5324 5.8275 12.5084 5.805 12.4919 5.766C12.4741 5.71981 12.4586 5.67275 12.4454 5.625C12.43 5.57555 12.4259 5.52325 12.4334 5.472C12.442 5.43272 12.4378 5.39173 12.4214 5.355C12.4214 5.262 12.4289 5.1645 12.4454 5.0625C12.4616 4.95924 12.4973 4.85998 12.5504 4.77C12.5962 4.68666 12.6603 4.61484 12.7379 4.56C12.8304 4.50603 12.9354 4.47708 13.0424 4.476C13.2854 4.476 13.4609 4.566 13.5704 4.746C13.6799 4.926 13.7384 5.121 13.7459 5.331C13.7479 5.42434 13.7278 5.51683 13.6874 5.601C13.6474 5.68108 13.6268 5.76947 13.6274 5.859C13.6274 5.922 13.6484 5.964 13.6874 5.988C13.7347 6.0139 13.7868 6.02973 13.8404 6.0345C14.0204 6.0345 14.1359 5.9925 14.1914 5.907C14.2546 5.7879 14.2866 5.65478 14.2844 5.52C14.2844 5.34 14.2694 5.1405 14.2394 4.9215C14.2098 4.70962 14.1459 4.50396 14.0504 4.3125C13.963 4.1327 13.8394 3.97287 13.6874 3.843C13.5247 3.71368 13.3206 3.64761 13.1129 3.657C12.7079 3.657 12.4139 3.7575 12.2339 3.9615C12.0539 4.164 11.9609 4.4685 11.9534 4.875C11.9534 4.992 11.9609 5.109 11.9759 5.226C11.9909 5.3445 11.9999 5.4615 11.9999 5.5785C11.9999 5.6175 11.9954 5.637 11.9879 5.637C11.9636 5.63171 11.9399 5.62366 11.9174 5.613C11.8707 5.59405 11.8242 5.57455 11.7779 5.5545C11.7206 5.53029 11.6614 5.51072 11.6009 5.496C11.5013 5.47178 11.3977 5.4677 11.2964 5.484C11.2343 5.49189 11.1716 5.49589 11.1089 5.496C10.9994 5.496 10.9439 5.4765 10.9439 5.4375C10.9439 5.3205 10.9379 5.172 10.9214 4.992C10.9064 4.812 10.8674 4.632 10.8044 4.452C10.7521 4.29185 10.6729 4.14173 10.5704 4.008C10.4759 3.891 10.3364 3.828 10.1489 3.8205C10.023 3.81759 9.90085 3.86386 9.80844 3.9495C9.71216 4.03858 9.6293 4.14115 9.56244 4.254C9.49056 4.37587 9.44651 4.51212 9.43344 4.653C9.42086 4.77834 9.40535 4.90338 9.38694 5.028C9.39296 5.23494 9.42831 5.43999 9.49194 5.637C9.53094 5.7615 9.57444 5.871 9.62094 5.9655C9.66744 6.0585 9.72294 6.105 9.78594 6.105C9.82344 6.105 9.87594 6.078 9.93744 6.024C10.0004 5.9685 10.0319 5.919 10.0319 5.871C10.0319 5.847 10.0199 5.832 9.99594 5.8245C9.97325 5.81669 9.94944 5.81264 9.92544 5.8125C9.87144 5.8125 9.82344 5.7855 9.78444 5.73C9.74425 5.6725 9.7129 5.6093 9.69144 5.5425C9.66682 5.46886 9.64332 5.39485 9.62094 5.3205C9.57422 5.11812 9.60359 4.90563 9.70344 4.7235C9.77394 4.5975 9.90294 4.5315 10.0904 4.524ZM7.53444 22.77C7.72194 22.77 7.90644 22.755 8.08644 22.722C8.26463 22.6914 8.43555 22.6278 8.59044 22.5345C8.73897 22.4486 8.86054 22.3228 8.94144 22.1715C9.02678 21.9958 9.07479 21.8042 9.08244 21.609C9.08245 21.4695 9.05861 21.331 9.01194 21.1995C8.96428 21.0654 8.89706 20.939 8.81244 20.8245C8.71986 20.6778 8.61816 20.537 8.50794 20.403C8.39767 20.2685 8.29597 20.1272 8.20344 19.98C8.05756 19.7656 7.91255 19.5506 7.76844 19.335C7.62894 19.125 7.48794 18.903 7.34844 18.6675C7.2251 18.4679 7.10755 18.2649 6.99594 18.0585C6.88125 17.8479 6.7477 17.648 6.59694 17.4615C6.50173 17.3426 6.39186 17.2363 6.26994 17.145C6.14469 17.0509 5.9916 17.0012 5.83494 17.004C5.67152 17.0016 5.51312 17.0605 5.39094 17.169C5.2513 17.2907 5.12186 17.4237 5.00394 17.5665C4.86563 17.7286 4.71681 17.8814 4.55844 18.024C4.39344 18.1725 4.18344 18.2895 3.92544 18.375C3.75085 18.4218 3.59024 18.5104 3.45744 18.633C3.34794 18.7425 3.29244 18.9105 3.29244 19.137C3.29244 19.293 3.30444 19.449 3.32844 19.605C3.35094 19.761 3.36744 19.9185 3.37494 20.0745C3.37494 20.2845 3.34494 20.484 3.28044 20.6715C3.21993 20.8488 3.18853 21.0347 3.18744 21.222C3.18744 21.4335 3.26244 21.582 3.40944 21.6675C3.55944 21.7545 3.72594 21.813 3.91344 21.843C4.14894 21.8835 4.37094 21.9135 4.58244 21.9375C4.79244 21.9615 4.99944 21.9975 5.20344 22.0425C5.40594 22.0905 5.60844 22.14 5.81244 22.1955C6.01494 22.2495 6.23094 22.3365 6.45744 22.4535C6.50244 22.476 6.57444 22.5045 6.66744 22.5345L6.98394 22.6395C7.10094 22.68 7.21044 22.7115 7.31244 22.734C7.38503 22.7535 7.45941 22.7655 7.53444 22.77ZM11.8244 21.363C12.0434 21.363 12.2774 21.3405 12.5279 21.2925C13.0379 21.1969 13.5312 21.0271 13.9919 20.7885C14.2064 20.6791 14.4103 20.5501 14.6009 20.403C14.6199 20.3817 14.636 20.358 14.6489 20.3325C14.6639 20.3024 14.6754 20.2707 14.6834 20.238V20.226C14.7299 20.055 14.7689 19.866 14.8004 19.6635C14.8329 19.4572 14.8605 19.2501 14.8829 19.0425C14.9056 18.8349 14.9331 18.6278 14.9654 18.4215C14.9954 18.219 15.0239 18.0195 15.0464 17.8245C15.0779 17.6145 15.1169 17.4105 15.1634 17.2155C15.2114 17.0205 15.2729 16.836 15.3509 16.6635C15.428 16.4936 15.5353 16.3391 15.6674 16.2075C15.8213 16.0592 15.9949 15.933 16.1834 15.8325V15.8085L16.1714 15.774C16.1741 15.6945 16.1984 15.6171 16.2419 15.5505C16.2945 15.4644 16.3531 15.3822 16.4174 15.3045C16.4799 15.2256 16.5555 15.1581 16.6409 15.105C16.719 15.0582 16.8014 15.019 16.8869 14.988C16.8396 14.7995 16.7886 14.612 16.7339 14.4255C16.6796 14.2399 16.6326 14.0523 16.5929 13.863C16.5546 13.6235 16.508 13.3853 16.4534 13.149C16.41 12.9657 16.3549 12.7853 16.2884 12.609C16.2213 12.4372 16.1304 12.2756 16.0184 12.129C15.9029 11.973 15.7574 11.784 15.5864 11.5665C15.5211 11.4935 15.4619 11.4152 15.4094 11.3325C15.3687 11.2395 15.3453 11.1399 15.3404 11.0385C15.3217 10.9359 15.2982 10.8343 15.2699 10.734C15.1646 10.3541 15.0435 9.97881 14.9069 9.609C14.8349 9.41154 14.7487 9.21954 14.6489 9.0345C14.5693 8.88633 14.4832 8.74169 14.3909 8.601C14.3129 8.484 14.2304 8.4255 14.1449 8.4255C13.9574 8.4255 13.7339 8.5005 13.4759 8.649C13.2194 8.7975 12.9449 8.961 12.6569 9.141C12.3674 9.321 12.0869 9.489 11.8124 9.645C11.5394 9.801 11.2934 9.8745 11.0744 9.867C10.8407 9.86685 10.6137 9.78872 10.4294 9.645C10.2308 9.49364 10.0497 9.32057 9.88944 9.129C9.72594 8.934 9.58944 8.766 9.47994 8.625C9.37044 8.484 9.28944 8.406 9.23394 8.391C9.17244 8.391 9.13644 8.4375 9.12894 8.5305C9.12059 8.63579 9.11659 8.74138 9.11694 8.847V9.0465C9.11694 9.0945 9.10944 9.1245 9.09294 9.141C9.00744 9.321 8.91294 9.4965 8.81244 9.6675C8.71044 9.84 8.60994 10.0155 8.50794 10.1955C8.30589 10.5414 8.193 10.9321 8.17944 11.3325C8.17944 11.4495 8.18694 11.5665 8.20344 11.6835C8.21844 11.8005 8.25744 11.9145 8.32044 12.024L8.29644 12.069C8.23622 12.1526 8.16951 12.2314 8.09694 12.3045C8.02303 12.3798 7.95671 12.4622 7.89894 12.5505C7.61202 12.9744 7.40511 13.4471 7.28844 13.9455C7.17144 14.445 7.10844 14.9535 7.10094 15.468C7.10094 15.6015 7.10994 15.735 7.12494 15.867C7.13994 16.0005 7.14894 16.1325 7.14894 16.266C7.14848 16.3093 7.14447 16.3524 7.13694 16.395C7.1294 16.4376 7.12539 16.4807 7.12494 16.524C7.29168 16.5428 7.45209 16.5987 7.59444 16.6875C7.77444 16.7895 7.96944 16.9185 8.17944 17.0745C8.38944 17.2305 8.59044 17.4105 8.77794 17.6145C8.96544 17.817 9.14394 18.015 9.31644 18.2115C9.48894 18.4065 9.61344 18.6015 9.69144 18.7965C9.76944 18.9915 9.82044 19.152 9.84294 19.2765C9.84697 19.3672 9.83242 19.4578 9.80018 19.5426C9.76793 19.6275 9.71868 19.7049 9.65544 19.77C9.52092 19.9012 9.3619 20.0047 9.18744 20.0745C9.32094 20.3085 9.48444 20.508 9.67944 20.6715C9.87444 20.8365 10.0859 20.9685 10.3124 21.0705C10.5389 21.1725 10.7849 21.246 11.0504 21.2925C11.3159 21.3405 11.5754 21.363 11.8244 21.363ZM16.5239 23.028C16.6874 23.028 16.8479 23.004 17.0039 22.9575C17.2403 22.8897 17.4653 22.7871 17.6714 22.653C17.8754 22.5195 18.0614 22.356 18.2339 22.1595C18.6414 21.6894 19.14 21.3067 19.6994 21.0345L20.0864 20.859C20.2192 20.8011 20.348 20.7345 20.4719 20.6595C20.5615 20.6028 20.6445 20.5364 20.7194 20.4615C20.7572 20.425 20.787 20.3811 20.8072 20.3326C20.8273 20.2841 20.8373 20.232 20.8364 20.1795C20.8365 20.1192 20.8243 20.0594 20.8004 20.004C20.7725 19.9416 20.7372 19.8827 20.6954 19.8285C20.5885 19.6797 20.487 19.5271 20.3909 19.371C20.3041 19.229 20.2293 19.08 20.1674 18.9255L19.9799 18.4575C19.9123 18.2857 19.8572 18.1092 19.8149 17.9295C19.7987 17.874 19.7711 17.8224 19.7339 17.778C19.6585 17.6653 19.5556 17.5737 19.4348 17.512C19.314 17.4503 19.1795 17.4205 19.0439 17.4255C18.904 17.425 18.7665 17.4612 18.6449 17.5305L18.2459 17.754C18.1071 17.831 17.9665 17.9051 17.8244 17.976C17.6863 18.0455 17.5336 18.0815 17.3789 18.081C17.2406 18.087 17.1043 18.0464 16.9919 17.9655C16.8841 17.8799 16.7961 17.7719 16.7339 17.649C16.6673 17.5239 16.6086 17.3946 16.5584 17.262L16.4174 16.875C16.3564 16.9753 16.2861 17.0697 16.2074 17.157C16.1271 17.2464 16.0636 17.3495 16.0199 17.4615C15.9179 17.6955 15.8549 17.9565 15.8324 18.246C15.7934 18.699 15.7424 19.14 15.6794 19.5705C15.6153 20.0095 15.5098 20.4414 15.3644 20.8605C15.323 20.9945 15.2914 21.1314 15.2699 21.27C15.2467 21.4136 15.2306 21.5583 15.2219 21.7035C15.2219 22.086 15.3404 22.4025 15.5744 22.653C15.8084 22.902 16.1249 23.028 16.5239 23.028Z"
            fill="white"
          />
        </svg>
      )
    }
  }

  return (
    <Container>
      <div className="sub-container">
        <LeftSide>
          <Image src={Battlenet} alt="" />
          <h2>Baixe agora o battle.net</h2>
          <div className="infos">
            <div className="info">
              <Image src={Cards} alt="" />
              <p>Seus jogos em um só lugar</p>
            </div>
            <div className="info">
              <Image src={Dots} alt="" />
              <p>Conecte-se aos seus amigos</p>
            </div>
            <div className="info">
              <Image src={Buy} alt="" />
              <p>Compre jogos e itens digitais</p>
            </div>
          </div>
          <Button leftIcon={getSo()}>
            Baixar para {detectedOS}
            {/*  {detectedOS === 'Windows' && <Image src={Windows} alt="Windows" />} */}
          </Button>
          <p className="mobile">
            <Image src={Mobile} alt="" />
            <span>
              Também disponível como <a href="#">aplicativo móvel</a>
            </span>
          </p>
        </LeftSide>
        <RightSide>
          <Image className="img1" src={Download1} alt="" />
          <Image className="img2" src={Download2} alt="" />
        </RightSide>
      </div>
    </Container>
  )
}
