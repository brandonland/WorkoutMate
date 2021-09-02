<template>
  <Page>
    <ActionBar :title="message">
      <NavigationButton
        text="Go back"
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>
      <Label class="description" text="Work in progress" />
    </GridLayout>
    <FlexboxLayout flexDirection="column" backgroundColor="#fcfcfc">
      <Label height="70">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>

      <Button text="Barbell Squat" @tap="$navigateTo(exercisePage)" />
      <Button text="Bench Press" @tap="$navigateTo(exercisePage)" />
      <Button text="Deadlift" @tap="$navigateTo(exercisePage)" />
      <Button text="Kamehameha" @tap="$navigateTo(exercisePage)" />
    </FlexboxLayout>
  </Page>
</template>

<script>
import Exercise from "./Exercise";

export default {
  name: "Exercises",
  components: {
    Exercise
  },
  data() {
    return {
      exercisePage: Exercise
    };
  },
  computed: {
    message() {
      return "Exercises";
    }
  }
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

.fas {
  @include colorize($color: accent);
}

.info {
  font-size: 20;
  margin-top: 20;
  margin-bottom: 10;
  horizontal-align: center;
  vertical-align: center;
}
</style>
