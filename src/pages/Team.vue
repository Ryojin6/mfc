<template>
  <TemplateDefault class="bg-r-charcoal font-sans">
    <AtomSection tp="large" bp="large" id="team">
      <AtomInner>
        <MoleculeTitle title="Our team" class="text-white" />
        <div class="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <AtomAnimate
            v-for="(item, index) in team"
            :key="index"
            position="left"
            class="relative flex flex-col font-bold text-white transition-all duration-1000 ease-in-out"
          >
            <div
              class="absolute top-0 left-0 z-[-1] mt-2 ml-2 h-full w-full bg-white"
            />
            <div class="relative z-20 flex-1 bg-r-pink py-6 px-6 xl:p-10">
              <div class="mx-auto mb-10 h-56 w-56">
                <g-image :src="item.image" immediate alt="" />
              </div>
              <div class="w-full">
                <h4 class="textMedium text-lab-pink uppercase">
                  {{ item.name }}
                </h4>
                <div class="pb-4 font-mont uppercase">{{ item.title }}</div>
              </div>
              <div class="font-mont font-light">
                {{ item.description }}
              </div>
              <!-- <AtomIconTwitter
              link="https://twitter.com/goosexbt"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            /> -->
            </div>
          </AtomAnimate>
        </div>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          image: '/10.png',
          name: 'Micheal',
          title: 'CEO',
        },
        {
          image: '/11.png',
          name: 'Ray',
          title: 'ADMINISTRATOR',
        },
        {
          image: '/12.png',
          name: 'Ahmed',
          title: 'ARTIST',
        },
        {
          image: '/13.png',
          name: 'Jackson',
          title: 'Dev',
        },
        {
          image: '/14.png',
          name: 'Moose',
          title: 'DISCORD MANAGER',
        },
        {
          image: '/15.png',
          name: 'Ramaza',
          title: 'WEB DEVELOPER',
        },

        {
          image: '/10.png',
          name: 'Tsubasa',
          title: 'HEAD MODERATOR',
          description: `Got any questions? Suba and his mods are here for you 24/7!`,
        },
      ],
    };
  },
};
</script>
