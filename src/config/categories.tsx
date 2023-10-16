import ICategory from "../interfaces/ICategory";

const categories: ICategory[] = [
  {
    name: "Top Games",
    slug: "/categories/top",
    child: [],
  },
  {
    name: "New Games",
    slug: "/categories/new",
    child: [],
  },
  {
    name: "Slots",
    slug: "/categories/slot",
    child: [],
  },
  {
    name: "Jackpots",
    slug: "/categories/jackpots",
    child: [],
  },
  {
    name: "Live",
    slug: "/categories/live",
    child: [],
  },
  {
    name: "Blackjack",
    slug: "/categories/blackjack",
    child: [],
  },
  {
    name: "Roulette",
    slug: "/categories/roulette",
    child: [],
  },
  {
    name: "Table",
    slug: "/categories/table",
    child: [],
  },
  {
    name: "Poker",
    slug: "/categories/poker",
    child: [],
  },
  {
    name: "Other",
    slug: "",
    child: [
      {
        name: "Ball",
        slug: "/categories/ball",
      },
      {
        name: "Virtual",
        slug: "/categories/virtual",
      },
      {
        name: "Fun",
        slug: "/categories/fun",
      },
    ],
  },
];

export default categories;
