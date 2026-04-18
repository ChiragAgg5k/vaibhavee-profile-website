import { createFileRoute } from '@tanstack/react-router'
import { TopBar } from '../components/TopBar'
import { Masthead } from '../components/Masthead'
import { Ticker } from '../components/Ticker'
import { About } from '../components/About'
import { Work } from '../components/Work'
import { Projects } from '../components/Projects'
import { Publications } from '../components/Publications'
import { Toolbelt } from '../components/Toolbelt'
import { Quote } from '../components/Quote'
import { Contact } from '../components/Contact'
import { TweaksPanel } from '../components/TweaksPanel'
import { SmoothScroll } from '../components/SmoothScroll'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <>
      <TopBar />
      <Masthead />
      <Ticker />
      <About />
      <Work />
      <Projects />
      <Publications />
      <Toolbelt />
      <Quote />
      <Contact />
      <TweaksPanel />
      <SmoothScroll />
    </>
  )
}
