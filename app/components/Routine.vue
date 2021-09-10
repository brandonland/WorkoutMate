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
      <Label class="info" horizontalAlign="center">
        <FormattedString horizontalAlign="center">
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

      <TextView text="Work in progress" horizontalAlign="center" />
    </FlexboxLayout>
  </Page>
</template>

<script>
import Workout from "./Workout";

export default {
  data() {
    return {
      workoutPage: Workout
    };
  },
  computed: {
    message() {
      return "Routine";
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
