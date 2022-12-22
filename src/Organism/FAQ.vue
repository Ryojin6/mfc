<template>
  <AtomSection
    tp="large"
    bp="large"
    class="relative transition-all duration-1000 ease-in-out"
  >
    <AtomInner>
      <AtomAnimate>
        <MoleculeTitle title="FAQ" class="text-white" />
      </AtomAnimate>
      <AtomAnimate class="mb-10">
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'How many MFC are there?',
          description: `There are currently 10 000 hazardous mutant felines roaming the universe.
`,
        },
        {
          title: 'What’s the release date?',
          description: `23rd December`,
        },
        {
          title: 'What’s the mint price',
          description: `5 Dollars each and 5 per wallet`,
        },
        {
          title: 'What blockchain is MFC on?',
          description: `MFC is built on the Eth Blockchain`,
        },

        {
          title: 'Where can I contact the team?',
          description: `You can contact us anytime in our twitter @MutantFelines`,
        },
      ],
    };
  },
};
</script>
