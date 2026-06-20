---
title: Our Staff
desc: We're thankful to have such an awesome team of staff, each person contributes to a key part of Off the Dial. If any of them interest you, feel free to read about them here.
---

import { Card, Stack, Secret } from "src/components/staff"
import djam from "src/static/staff/djam.webp"
import wolf from "src/static/staff/wolf.webp"
import ambird from "src/static/staff/ambird.webp"
import cysabi from "src/static/staff/cysabi.webp"
import skye from "src/static/staff/skye.webp"


<Stack>

<Card
  name="DJam98"
  role="Creative Director, Founder"
  hobby="A Busy Person"
  links={[
    ["Twitch", "https://twitch.tv/djam98"],
    ["X", "https://x.com/djam987"],
  ]}
  iconUrl={djam}
>

Hey there! I'm DJam98 and I am the creator of this little Discord server on the internet.

I spend most of my spare time on Off the Dial and playing games on the Switch (and spending way too much time in Splatoon).

I have a Twitch and Twitter, if you want to check that out, I would greatly appricate that! I stream a lot of Splatoon, but also a bunch of other games. Beyond Off the Dial I also help commentate stream other tournaments and explore the world!

</Card>

<Card
  name="Wolf"
  role="Head TO, Player Management Lead"
  hobby="Forever tired"
  links={[
    ["X", "https://x.com/LiberoWolf_"],
  ]}
  iconUrl={wolf}
>

Hi I'm Wolf/LiberoWolf! I'm a sleepyhead who really has no sleep schedule. Certified (self-identified) lurker in streams and channels.

I enjoy games & music so expect me to be playing games or listening to music at some point in the day. I mainly play Final Fantasy 14, Splatoon and Pokémon.

I have a Twitter where I like and retweet stuff and on the rare time post stuff.

</Card>

<Card
  name="Skye"
  role="Head TO, Staff and Rules Lead"
  hobby="FFXIV Raider & Eeper"
  links={[
    ["X", "https://x.com/SkyeTheDemon"],
    ["Bluesky", "https://bsky.app/profile/skye.otd.ink",
    ["Twitch", "https://www.twitch.tv/skyethedemon"],
  ]}
  iconUrl={skye}
>

Hello I'm Skye!

I am a long standing Tournament Organizer within the splatoon community and have been since 2020 with lots of my former experience being creating IPL and specifically Swim or Sink.

When I'm not running Tournaments I love to draw, play games, and occasionally stream either of the two of those things on my twitch :3. If I'm not streaming, playing games, drawing, or at work then I am mostly likely asleep (help skye fell asleep!).

If you'd like to follow me, know when I go live on twitch, or open up commission slots for my art feel free to follow me on my Twitter/Bsky/Twitch. Otherwise, I hope to see you play in our events and can't wait to see how everything unfolds! <3

</Card>

<Card
  name="Ambird"
  role="Artist"
  hobby="looking at small round birds"
  links={[
    ["X", "https://x.com/ambirdoodles"],
    ["Carrd", "https://ambird.carrd.co"],
  ]}
  iconUrl={ambird}
>

hi, i'm ambird (they/them)! i draw, design, and also fly. but here on off the dial, i only do two of those things. i'm an illustrator and visual designer who posts art under the handle ambirdoodles! if you see any doodles around, they're prooobably from me! if you got sniped by a tri-stringer wearing a small hat, that's probably me! if your oranges are missing from your fruit bowl, that's probably me too!

if you want a doodle for yourself, feel free to contact me and i'll be happy to get one for you. have a nice day 😄

</Card>

{/* CAUTION -- THIS IS MY SECRET CARD! IF YOU ARE ADDING NEW STAFF CARDS, PLEASE PUT THEM ABOVE THIS LINE */}

<Secret><Card
  name="cysabi"
  role="technical head"
  hobby="boba addict"
  links={[
    ["github", "https://github.com/cysabi"],
  ]}
  iconUrl={cysabi}
>

> <p className="text-xl">**woah! you found me !**</p>

i'm the dev behind the entire site! i've rewritten it about 5 times ,, and i also built both the discord bot to help with managing tournaments, and the overlays that you see on stream !

i like boba, fizzy boba especially. in splatoon, i'm a glooga dualies one-trick, and i always make sure to die with my special up :D

</Card></Secret>

</Stack>
