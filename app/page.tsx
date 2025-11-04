import Image from "next/image";
import Link from "next/link";

const fragments = [
  {
    title: "Echo I",
    time: "11:47 PM",
    excerpt:
      "The voicemail arrived without a number. Just breathing. A sound like bare feet wading through broken glass.",
    detail:
      "Jun let the message play on loop while the apartment lights dimmed one by one. The breathing never aligned with their own, always a half-beat off, as though mocking the rhythm of their pulse."
  },
  {
    title: "Echo V",
    time: "12:09 AM",
    excerpt:
      "Scratching from the ceiling, then the floor, then inside the walls. Each scrape traced the outline of a door Jun never built.",
    detail:
      "When they pressed their ear to the drywall, the scratcher whispered back the sentence Jun screamed at their brother ten years ago. Word for word."
  },
  {
    title: "Echo IX",
    time: "12:32 AM",
    excerpt:
      "In the bathroom mirror, a crowd of silhouettes blinked out of sync. Only one had Jun's eyes. It refused to blink at all.",
    detail:
      "Jun wrote I AM SORRY across the mirror. The letters bled, smearing into a new message: I SAVED YOUR ROOM. COME HOME."
  },
  {
    title: "Echo XIII",
    time: "12:59 AM",
    excerpt:
      "The final voicemail: a child humming the lullaby their mother sang the night the fire started. In the background, faint crackling.",
    detail:
      "Jun’s phone burned cold in their hand. On the other end, the humming voice faded and was replaced by their own. \"Open the door,\" it begged. \"I’m still inside.\""
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(226,73,47,0.25),transparent_60%)] mix-blend-screen blur-3xl" />
      <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col gap-24 px-6 py-24 sm:px-10">
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-ember-500/80">found transmission</p>
          <h1 className="text-4xl font-semibold text-slate-100 sm:text-6xl">
            The Thirteenth Echo
          </h1>
          <p className="text-lg text-slate-300 sm:text-xl">
            The story returns every thirteenth night after the anniversary. Each time, Jun listens.
            Each time, the recordings arrive earlier, clawing back the hours between midnight and
            dawn. Tonight, there are thirteen echoes.
          </p>
        </header>

        <article className="grid gap-12">
          <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 shadow-2xl shadow-black/60">
            <div className="absolute inset-0 hidden bg-[url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay sm:block" />
            <div className="relative space-y-6">
              <h2 className="text-2xl font-medium text-ember-500 sm:text-3xl">
                Jun&apos;s Apartment · Night Thirteen
              </h2>
              <p className="text-slate-200">
                The power company insisted the grid was stable. Yet candles flickered on without a
                flame and the air tasted of attic dust and rain-soaked ash. When Jun pressed record,
                the microphone captured voices that looping software couldn&apos;t erase — their
                own voice speaking from the hallway, despite their body never leaving the chair.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="font-serif text-xl leading-relaxed text-slate-100">
                  “You can keep deleting the messages,” the other Jun whispered from the recording,
                  “but you can&apos;t silence a house that remembers burning.”
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6">
            <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Thirteen Echoes Logged Between 11:47 PM and 12:59 AM
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {fragments.map((fragment) => (
                <div
                  key={fragment.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.015] p-6 transition duration-500 hover:border-ember-500/50 hover:shadow-xl hover:shadow-ember-500/20"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ember-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-400">
                      <span>{fragment.title}</span>
                      <span>{fragment.time}</span>
                    </div>
                    <p className="font-serif text-lg text-slate-200">{fragment.excerpt}</p>
                    <p className="text-sm text-slate-400">{fragment.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.015]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="relative grid gap-6 p-8 sm:grid-cols-[1.5fr_1fr] sm:gap-12 sm:p-12">
              <div className="space-y-5">
                <p className="text-sm uppercase tracking-[0.45em] text-slate-400">the apology</p>
                <h3 className="font-serif text-3xl text-slate-100 sm:text-4xl">
                  What Jun Never Said Aloud
                </h3>
                <p className="text-slate-300">
                  Their younger brother, Min, always collected lost things: broken radios, bent
                  spoons, a snow globe that only held soot. The night Jun stormed out, they said,
                  “Watch the flames if you love them so much.” Min did. The fire ate the house
                  quietly, room by room, until the lullaby stopped mid-verse.
                </p>
                <p className="text-slate-300">
                  Tonight, the echoes returned Min&apos;s silence. Each voicemail replaced the
                  ordinary sounds of the city with the exact creak of the hallway floorboard outside
                  Min&apos;s door. When Jun tried to respond, the call absorbed their words and
                  replied in Min&apos;s voice: “I never left. You did.” The thirteenth echo arrives
                  if Jun answers the door before 1:00 AM. The hinges sigh. Footsteps pause on the
                  threshold. The apartment exhales ember-scented air.
                </p>
              </div>
              <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6">
                <div className="absolute inset-0 animate-slowDrift bg-gradient-to-br from-ember-500/20 via-transparent to-transparent" />
                <div className="relative flex flex-col items-center gap-4 text-center">
                  <div className="relative h-40 w-40">
                    <div className="absolute inset-0 animate-pulseGlow rounded-full border border-ember-500/40" />
                    <Image
                      src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=600&q=60"
                      alt="Singed audio cassette tape"
                      fill
                      className="rounded-full object-cover object-center opacity-80"
                      sizes="160px"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-[0.35em] text-ember-500/90">
                    artifact 13
                  </p>
                  <p className="font-serif text-lg text-slate-100">
                    A cassette tape recovered from the ash of Jun’s childhood home. Plays thirteen
                    humming loops. Stops the moment a listener forgives themselves.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 rounded-3xl border border-white/5 bg-white/[0.015] p-8 sm:grid-cols-2 sm:gap-10 sm:p-12">
            <div className="space-y-5">
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Instructions for Survivors
              </h3>
              <ol className="space-y-4 text-slate-300">
                <li>
                  • Delete the voicemails after the twelfth echo. The thirteenth must be heard in
                  person or it will re-record itself in the voice of whoever you miss most.
                </li>
                <li>
                  • Never apologize out loud. Whisper it against cold glass. The house does not
                  accept surrender, only confession.
                </li>
                <li>
                  • If the walls breathe, leave. If the breathing syncs with yours, stay. Something
                  still remembers you.
                </li>
                <li>
                  • When the door opens after midnight, count the breaths between the hinges. If you
                  reach thirteen, close your eyes. Whoever stands there is older than the fire.
                </li>
              </ol>
            </div>
            <div className="space-y-5 rounded-3xl border border-white/10 bg-black/50 p-6">
              <h4 className="text-sm uppercase tracking-[0.35em] text-ember-500/80">
                Redacted Report
              </h4>
              <p className="text-sm text-slate-400">
                Incident 67-13 resolved with subject self-reporting third-degree burns to the palm
                of the non-dominant hand. No fire damage discovered on-site. Subject&apos;s phone
                rendered inoperable, screen displaying only:{" "}
                <span className="text-ember-500">LET ME IN</span>.
              </p>
              <p className="text-sm text-slate-400">
                Recommendation: secure remaining tapes. Containment requires lullabies sung in
                reverse during hours 00:47-01:00. Do not allow subject Jun to sleep within ten miles
                of open flame.
              </p>
            </div>
          </section>
        </article>

        <footer className="flex flex-col items-start gap-2 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Last transmission received {new Date().getFullYear()} · Archive 13</p>
          <Link href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
            Imagery courtesy of unnamed witnesses
          </Link>
        </footer>
      </section>
    </main>
  );
}
