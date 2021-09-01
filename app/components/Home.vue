<template>
  <Page>
    <ActionBar :title="message" />

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>
    </GridLayout>

    <StackLayout>
      <Button text="Exercises" @tap="$navigateTo(exercisesPage)" />
      <Button text="Workouts" @tap="$navigateTo(workoutsPage)" />
    </StackLayout>
  </Page>
</template>

<script>
import Exercises from "./Exercises";

export default {
  components: {
    Exercises,
    Workouts
  },
  data() {
    return {
      exercisesPage: Exercises,
      workoutsPage: Workouts
    };
  },
  computed: {
    message() {
      return "Home";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
