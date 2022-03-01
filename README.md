# WorkoutMate

## **This app is not yet ready for use.**

### A complete scrap and rewrite using Kotlin (for Android) is on its way.
The reasons to move in this direction are simple:
- **NativeScript is a massive framework.**
    It gets bloated and unnecessarily complex *real* fast. This makes it too easy to break the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle) in my opinion.
- **NativeScript has a steep learning curve.**
    I could put the same effort into learning a programming language that more directly speaks to Android

------------

WorkoutMate is a [free and open source](https://en.wikipedia.org/wiki/Free_and_open-source_software) (FOSS) Android app, ~~written in JavaScript via Svelte Native~~ soon-to-be written in Kotlin for Android, inspired by FitNotes.

As a former avid exercise enthusiast and gym rat, I have for many years written down my progress during planned workouts. Part of my love for exercise was the evolution of my processes over time. I love to keep track of my progress; it keeps me goal-oriented and self-competitive. Keeping a written log is a crucial piece to reaching goals of any kind, let alone fitness goals. I will attempt to bring this idea/philosophy into the app itself. There exist many different types of exercises (and ways to exercise) though; and different ways to track progress... I want this app to be flexible for most exercise programs, but I don't want to also overcomplicate the app by making it too feature-rich. There will probably be a middle ground.

Because this is FOSS software, your data is _your_ data, solely for your own benefit, and _you are not the product_. If someday I plan to fund this project, I will likely go for a business model that has "premium", unlockable, paid features. I do plan on also having this listed on [F-Droid](https://f-droid.org/) when it is ready for production use. I believe that the importance of privacy in this day and age is vastly underrated and misunderstood. Most software today aims to profit over data at the cost of everyone's privacy — this project will not do such a thing.

## Ambition

I want this app to just as much be a helper during workouts as it will be for big-picture, long-term planning and the setting of goals. There may eventually
involve _gamification_ to spice things up as a sort of end-game feature (after the app's core features are implemented). 

## Features

- [ ] Workout session creation (a collection of exercises and/or stretches)
  - [ ] Create workouts by selecting existing exercises and/or stretches from a preexisting list.
  - [ ] Create custom exercises/moves/stretches, adding to the preexisting list of moves.
  - [ ] Create supersets.
- [ ] Customizable rest timers
  - This will be flexible in that: timers can be "injected" into the workout. The user will be able to add a rest timer to a workout as if it were an
  exercise/move itself. While maintaining that flexibility, it should also be easy for the user to "edit all" rest timers. Perhaps there can be multiple
  types of rest timers -- one called a mid-set timer, and one called a mid-workout timer... Flexible, yet simple. An interesting idea to include in the
  long-term planning aspect of this would be to allow the user to optionally automatically decrease the rest timer by `x` each time the workout is repeated.
  This is one way to gradually intensify workout sessions to improve endurance over time.
- [ ] Add workouts to a calendar view
- [ ] Optionally set a planned time to start the workout
- [ ] Notifications and reminders
- [ ] Integrate with a heart rate monitor/smartwatch
- [ ] View progress data on a chart
- [ ] Export data to spreadsheet
- [ ] Printer-friendly - Allow printing of tables, charts, graphs..
- [ ] Add more to this list
