<template>
  <Page>
    <ActionBar>
      <Label text="Exercises" />
    </ActionBar>

    <GridLayout>
      <Label class="info">
        <FormattedString>
          <Span class="fas" text.decode="&#xf135; " />
          <Span :text="message" />
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return "Exercises";
    }
  }
};
</script>

<style></style>
