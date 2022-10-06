import work from "../images/icon-work.svg"
import play from "../images/icon-play.svg"
import study from "../images/icon-study.svg"
import exercise from "../images/icon-exercise.svg"
import social from "../images/icon-social.svg"
import selfCare from "../images/icon-self-care.svg"

export const data = [
  {
      title: 'Work',
  icon: work,
      bgColor: "hsl(15, 100%, 70%)",
      timeframes: {
          daily: {
              current: 5,
              previous: 7,
          },
          weekly: {
              current: 32,
              previous: 36,
          },
          monthly: {
              current: 103,
              previous: 128,
          },
      },
  },
  {
      title: 'Play',
  icon: play,
      bgColor: "hsl(195, 74%, 62%)",
      timeframes: {
          daily: {
              current: 1,
              previous: 2,
          },
          weekly: {
              current: 10,
              previous: 8,
          },
          monthly: {
              current: 23,
              previous: 29,
          },
      },
  },
  {
      title: 'Study',
  icon: study,
      bgColor: "hsl(348, 100%, 68%)",
      timeframes: {
          daily: {
              current: 0,
              previous: 1,
          },
          weekly: {
              current: 4,
              previous: 7,
          },
          monthly: {
              current: 13,
              previous: 19,
          },
      },
  },
  {
      title: 'Exercise',
  icon: exercise,
      bgColor: "hsl(145, 58%, 55%)",
      timeframes: {
          daily: {
              current: 1,
              previous: 1,
          },
          weekly: {
              current: 4,
              previous: 5,
          },
          monthly: {
              current: 11,
              previous: 18,
          },
      },
  },
  {
      title: 'Social',
  icon: social,
      bgColor: "hsl(264, 64%, 52%)",
      timeframes: {
          daily: {
              current: 1,
              previous: 3,
          },
          weekly: {
              current: 5,
              previous: 10,
          },
          monthly: {
              current: 21,
              previous: 23,
          },
      },
  },
  {
      title: 'Self Care',
  icon: selfCare,
      bgColor: "hsl(43, 84%, 65%)",
      timeframes: {
          daily: {
              current: 0,
              previous: 1,
          },
          weekly: {
              current: 2,
              previous: 2,
          },
          monthly: {
              current: 7,
              previous: 11,
          },
      },
  },
];
