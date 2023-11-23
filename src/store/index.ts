import { MoonType } from "../models/moon.model";
import { ref, computed } from 'vue';
import { defineStore } from 'pinia'



export const useMoonPhaseStore = defineStore('moonPhaseStore', () => {

  const currentMoonState = ref<MoonType>();
  const signs = ref([{
    moon: 'scorpio', content: 'The Moon in Scorpio does not influence on hair health. Hair can became harder and thicker. It is extremely tight moon phase for hair-cut because it can improve or destroy relations with your opposite sex partner.'
  },
  {
    moon: 'sagittarius', content: 'The Moon in Sagittarius is unfavorable for hair-cut. A hairdo doesn’t hold the form, rebel hair are not suitable for styling.'
  },
  {
    moon: 'leo', content: 'The Moon in Leo is favorable for hair dyeing and hair decoration. The hair’s health remains unchangeable. Hair-cut is favorable for making beautiful, silken and voluminous hair. If you have thick hair curling can be unfavorable.'
  },
  {
    moon: 'cancer', content: 'The Moon in Cancer slows the hair-growth. A good period for those who has brittle and dry hair. A hairdo doesn’t hold the form, rebel hair are not suitable for styling. Shampoo is not recommended.'
  },
  {
    moon: 'pisces', content: 'The Moon in Pisces slows the hair-growth. A good period for those who has brittle and dry hair. A hairdo doesn’t hold the form, rebel hair are not suitable for styling. Shampoo is not recommended.'
  },
  {
    moon: 'aquarius', content: 'The Moon in Aquarius. A good period for experimenting with your hairdo but not try to make it as accustomed. The hair’s health remains unchangeable. Nevertheless when possible avoid from hair-cut.'
  },
  {
    moon: 'gemini', content: 'The Moon in Gemini. A favorable time to make beehive hairdo. A good hair-growth after hair-cut. The hair’s health remains unchangeable. It makes rebel hair but if you want to make it curl it can be useful.'
  },
  {
    moon: 'libra', content: 'The Moon in Libra. A favorable time to make beehive hairdo. A good hair-growth after hair-cut. The hair’s health remains unchangeable.'
  },
  {
    moon: 'aries', content: 'The Moon in Aries – hasten the hair-growth with loosing its quality. In general this period is unfavorable for hair-cut because the immunity decreases but the probability of disease increases.'
  },
  {
    moon: 'taurus', content: 'The Moon in Taurus – a favorable period for hair-growth with less splitting and falling-out.'
  },
  {
    moon: 'capricorn', content: 'The Moon in Capricorn – a favorable period for hair-growth with less splitting and falling-out.'
  },
  {
    moon: 'virgo', content: 'The Moon in Virgo – a favorable period for hair-growth with less splitting and falling-out. For using chemicals for hair-cut (curling, dyes, etc.) the best time is when the moon is in Virgo.'
  },
  ]);
  const moons = ref([
    {
      name: 'new moon',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['wax or shave your body hairs to slow the growth'],
        dont: ['do not cut your hairs'],
      }
    },
    {
      name: 'waxing crescent',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
    },
    {
      name: 'first quarter',

      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
    },
    {
      name: 'waxing gibbous',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['cut your hair if you want them to grow back quickly and healthily'],
        dont: ['do not shave nor wax']
      },
    },
    {
      name: 'full moon',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['go for a trim, apply a mask or a conditioner to help your hair be stronger and more resistant.'],
        dont: ['nothing in particular']
      },
    }, 
    {
      name: 'waning gibbous',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['cut your hair if you want them to grow slowly', 'wax or shave your body hair to slow the growth'],
        dont: ['do not cut your hair if you want them to grow back quickly ']
      },

    }, 
    {
      name: 'third quarter',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['cut your hair if you want them to grow slowly', 'wax or shave your body hair to slow the growth'],
        dont: ['do not cut your hair if you want them to grow back quickly ']
      },
    }, 
    {
      name: 'waning crescent',
      plantState: {
        dos: ['nothing in particular'],
        dont: ['nothing in particular']
      },
      hairState: {
        dos: ['nothing in particular'],
        dont: ['do not cut your hair if you want them to grow back quickly ']
      },
    }
  ]);


  const getCurrentMoonState = computed(() => currentMoonState?.value);
  const getCurrentMoonAstro = computed(() => signs.value.find((astro) => astro.moon.toUpperCase() === currentMoonState?.value?.moon.zodiac_sign.toUpperCase())?.content);
  const getHairDos = computed(() => moons.value.find((moon) => moon.name.toUpperCase() === currentMoonState?.value?.moon.phase_name.toUpperCase())?.hairState.dos);
  const getHairDonts = computed(() => moons.value.find((moon) => moon.name.toUpperCase() === currentMoonState?.value?.moon.phase_name.toUpperCase())?.hairState.dont);
  const getPlantsDos = computed(() => moons.value.find((moon) => moon.name.toUpperCase() === currentMoonState?.value?.moon.phase_name.toUpperCase())?.plantState.dos);
  const getPlantsDonts = computed(() => moons.value.find((moon) => moon.name.toUpperCase() === currentMoonState?.value?.moon.phase_name.toUpperCase())?.plantState.dont);


  function setCurrentMoonState(event: MoonType) {
    currentMoonState.value = event
  };

  return {
    currentMoonState,
    signs,
    moons,
    getCurrentMoonState,
    getCurrentMoonAstro,
    getPlantsDos,
    getPlantsDonts,
    getHairDos,
    getHairDonts,
    setCurrentMoonState
  }

})