import React from "react";

// ! Assets
import Metronome from "../assets/images/metronome.jpg";
import Wireframe from "../assets/images/wireframes.jpg";
import Logo from "../assets/logo.svg";

// ! Components
import App from "../components/core/App";
import {
  SubHeader,
  SubSubHeader,
  Paragraph,
  Link,
  UnorderedList,
  Image
} from "../components/core/Blog";

const goals = [
  "Although, we were required to allow the user to tap their desired bpm, I also wanted to give the option of more granular control.",
  "An /about page where I could test layouts and react-router.",
  "Keep external libraries to a minimum.",
  "The metronome would be audio but I also wanted a visual representation of the metronome. Like an anlogue metronome in the photos. (See Below)",
]

const considerations = [
  "The use of web workers (if an easy method for stopping the interval was found) would be good to use for timings to make sure that animation or interaction wouldn't slow down the app. This is not a problem I saw now, but if extra features were added it could become an issue.",
  "All files are organised well but improvements can be made. Deciding on the directory structure before knowing all the componenents I was required to write makes some components go into directories where I wouldn't usually put them. E.g Blog.js would be a misc component.",
  "Being able to render the about page using a markdown file would be cool and could be used for the Github README possibly.",
  "The Homepage has a small bout of mobile-first syndrome (content sparsity), as features are added this should fix itself."
]

const tech = [
  "Create React App",
  "TailwindCSS",
  "React Spring",
  "React Helmet",
  "Netlify"
]

const software = [
  "Visual Studio Code",
  "Audacity",
  "Affinity Designer",
]

export default function About() {
  return (
    <App
      title="MetroNome | About"
      vertical="start"
      horizontal="start"
      navbarFixed
      footerFixed
    >
      <h1 className="text-4xl font-light tracking-tighter text-red-500">
        About The App
      </h1>
      <hr className="w-full my-4"></hr>
      <SubHeader>Introduction</SubHeader>
      <SubSubHeader>Task</SubSubHeader>
      <Paragraph>
        I was tasked with creating an app that displayed a metronome and could accurately display the beat. It was required that a user can tap the beat through interacting with something on the website to get their desired BPM. This was all the brief that was given and the technology stack, how you go about styling the website and other general decisions were left up to me.
      </Paragraph>

      <SubSubHeader>My Goals</SubSubHeader>
      <Paragraph>The task was set and I got to formulating what I wanted the website to have on it. A beat button was mandatory, but everything else was open to my discretion. So I formulated what my goals were for the project beyond the metronome just working:</Paragraph>
      <UnorderedList id="goals" items={goals}/>
      <Image
        src={Metronome}
        alt="Metronome"
        width="w-full md:w-1/2"
        subtitle="Something similar to this in function would suffice."
      />

      <SubSubHeader>Technology Stack</SubSubHeader>
      <Paragraph>
        I decided on using <Link href="https://create-react-app.dev/docs/getting-started">Create-React-App</Link>, it was a suggestion on the brief and I didn't want to use my usual framework<Link href="https://nextjs.org/">NextJS</Link> and use something different. From the task's requirements I decided that just a client side app with no api endpoints would be suitable. I love using NextJS though and I've approximated some of what I like about the framework. For example, being able to change the title of a document depending on each page (Using React-Helmet) and organising the app to have a pages directory.
      </Paragraph>
      <Paragraph>
        What I was going to do for styling and components in the app was a much harder choice. Do I use a react component library? I've always wanted to try Chakra UI. Do I just use styled-components? By how it is utilised, it looks like it would be easy to create the animation needed for the metronome with it. I tried both these solutions but ended up choosing something familiar. <Link href="https://tailwindcss.com/">TailwindCSS</Link> as getting the metronome functionality working was priority number one and styling was secondary. I wanted something where I can write layouts and components styled as fast as possible and TailwindCSS is very good at that. Additionally, adding reponsive styles as you are designing which is very straightforward and one of my favourite features of the framework.
      </Paragraph>
      <Paragraph>
        I decided that it was also necessary to use <Link href="https://react-spring.io/">React Spring</Link> for the animation side of the app, it is well tested and after reading the documentation not too difficult to implement the animations you want. At a later date it could also be extended to other parts of the app to provided animation as well.
      </Paragraph>

      <Paragraph>
        Finally deployment, since I usually use Nextjs, I have used their <Link href="https://vercel.com/">Vercel</Link> platform for deployments. Its easy to use and offers the continuous deployments with Git that makes a developers life so much easier. However, since I was using create-react-app I thought I would try a different platform to see how it stacks up. I decided on <Link href="https://www.netlify.com/">Netlify</Link> it offers the same type of CI/CD as Vercel so I thought it would be suitable for easy deployments and in some ways it was smoother than using Vercel.
      </Paragraph>

      <SubHeader>Implementation</SubHeader>
      <SubSubHeader>Website Design</SubSubHeader>
      <Paragraph>
        With the goals I mentioned I had a general idea of how I wanted the application to look for each of the pages. Instead of making full wireframes in this situation I find paper designs to be very effective, especially with how I like to write and lay elements out on a page.
      </Paragraph>
      <Image
        src={Wireframe}
        alt="Wireframes Design"
        width="w-full md:w-2/3"
        subtitle="Ugly but helpful, easily translatable to Invision, XD or code"
      />
      <Paragraph>
        This design would change slightly as it was built, for example I decided that the start button should be above the controls. This allowed the controls more space in their container for easier display. More information about current metronome state could be added to the start button as well.
      </Paragraph>
      <SubSubHeader>The Metronome</SubSubHeader>
      <Paragraph>
        The main focal point I wanted to spend as much time on this as possible. I decided to get the looping sound working first. This involved getting an audio file from the internet and editing it with <Link href="https://www.audacityteam.org/download/">Audacity</Link> to have one solid beat. I spent sometime thinking whether <span className="text-blue-500">setInterval()</span> was suitable for the intervals needed to create the metronome but I initially managed to get it working, the beeps were coming at general intervals.
      </Paragraph>
      <Paragraph>
        In the design for the page I had a general look for the analog metronome. So I decided to build something similar using div tags. Instead of getting an svg to animate, it seemed easier to create the design using composition provided in React.
      </Paragraph>
      <Image
        src={Logo}
        alt="Logo"
        width="w-1/2 md:w-1/3"
        subtitle="Recreated roughly in Affinity Designer to create an SVG for use in the navbar and the favicon."
      />
      <Paragraph>
        When I was trying to synchonise the metronome to the movement of the analog I was running into a problem. At higher BPM (100 +) the analog wasn't clicking on each each side of the metronome rather on hitting both sides. I initially thought this was overhead of using <span className="text-blue-500">setInterval()</span> on the UI thread. So I introduced a web worker... This did not solve anything. It was after discussing the problem with another programmer that they said the magic words "What about the audio buffer?". I had trimmed the audio file down to have one beat but I left a trail on the waveform like I would in editing speech. So higher BPMs were too fast for the audio file to end and play again. After trimming the file down more, the problem was solved and I was relieved to say the least.
      </Paragraph>
      <SubSubHeader>Extras</SubSubHeader>
      <Paragraph>For the alternative method of choosing the BPM I was initially going to implement a range input (slider) to give granular control over the BPM for the user from 40 - 220. This led to problems, overriding default appearance was not as easy as other inputs and I was left with something that looked out of place with the colour scheme and theme of the app.</Paragraph>
      <Paragraph>Looking at common BPMs for different types of music - I was looking for a suitable starting BPM of the app, 60 seemed obvious because of calculations - I thought that presets would be good to have and would be easy to display with the use of selects with varying options.</Paragraph>

      <SubSubHeader>Considerations</SubSubHeader>
      <UnorderedList id="considerations" items={considerations}/>

      <SubHeader>Summary</SubHeader>
      <SubSubHeader>Technology Stack</SubSubHeader>
      <UnorderedList id="tech" items={tech} />

      <SubSubHeader>Software</SubSubHeader>
      <UnorderedList id="software" items={software} />
    </App>
  );
}
