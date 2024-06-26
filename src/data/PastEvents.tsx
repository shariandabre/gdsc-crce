/* eslint-disable @next/next/no-img-element */
import { GlobeIcon } from '@radix-ui/react-icons'
import {EvervaultCard} from  '../components/ui/evervault'
//import { Button } from '@radix-ui/themes'


export const features = [
  {
    Icon: GlobeIcon,
    name: 'GDSC Ideathon',
    description: 'in seminar hall',
    href: '/',
    cta: 'RSVP now!',
    background: (
      <div className="m-2 h-auto w-auto p-2">
        <img src="/ideation.jpg" alt="" className='w-[100-px] h-[200px]'/>
      </div>
    ),
    className:
      'h-auto w-auto col-span-1 lg:col-span-1 row-span-2 sm:row-span-1 lg:row-span-1',
  },
  {
    Icon: GlobeIcon,
    name: 'Mathday',
    description: 'in Samwaad',
    href: '/',
    cta: 'RSVP now!',
    background: (
      <div className="m-2 w-auto p-2">
        <EvervaultCard imgsrc="/mathday.jpeg" className="h-auto w-auto" />
      </div>
    ),
    className:
      ' h-auto w-auto col-span-1 lg:col-span-3 row-span-1  sm:row-span-2 lg:row-span-2',
  },
  {
    Icon: GlobeIcon,
    name: 'Event 3',
    description: 'in seminar hall',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="m-2 p-2">
        <EvervaultCard imgsrc="/gdsc-f.png" className="h-auto w-auto" />
      </div>
    ),
    className: ' h-auto w-auto col-span-1 lg:row-span-2 lg:col-span-1',
  },
  {
    Icon: GlobeIcon,
    name: 'hachover 3.0',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="m-2 p-2">
        <img src="/HackOver3.0.jpg" alt=" hey" className="h-auto w-auto" />
      </div>
    ),
    className: ' h-auto w-auto col-span-2 lg:col-span-1 lg:row-span-2',
  },
]

export const events = [
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    
    name: 'Event 1',
    description: 'hey there',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className: ' h-fit',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className: '',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 3',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className:
      '',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 4',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="min-w- m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-auto"
        />
      </div>
    ),
    className: '',
  },
]

export const MarqeeEvents = [ 
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 1',
    description: 'hey there',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className: ' h-fit',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 2',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className: '',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 3',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    // eslint-disable-next-line @next/next/no-img-element
    background: (
      <div className="m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/postman_event_poster.webp"
          className="h-auto w-full"
        />
      </div>
    ),
    className:
      '',
  },
  {
    Icon: () => ( <img src="/gdsc-f.png" alt="GDSC CRCE" className="h-auto w-4" /> ),
    name: 'Event 4',
    description: 'in Samwaad',
    href: '/',
    cta: 'Register now!',
    background: (
      <div className="min-w- m-2 h-fit p-2">
        <EvervaultCard
          imgsrc="/mathday.jpeg"
          className="h-auto w-auto"
        />
      </div>
    ),
    className: '',
  },
  
]