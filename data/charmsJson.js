// eslint-disable-next-line no-undef
db.charms.insert([
  {
    name: 'Wise Arrow',
    type: 'supplemental',
    duration: 'Instant',
    effect: 'See page 255 of Exalted 3rd edition core rulebook',
    keywords: [],
    costs: {
      motes: 1
    },
    mins: {
      ability: {
        name: 'archery',
        value: 2
      },
      essence: 1
    },
    prerequisities: [],
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  },
  {
    name: 'Sight Without Eyes',
    type: 'reflexive',
    duration: 'One tick',
    effect: 'See page 255 of Exalted 3rd edition core rulebook',
    keywords: [],
    costs: {
      motes: 1
    },
    mins: {
      ability: {
        name: 'archery',
        value: 3
      },
      essence: 1
    },
    prerequisities: ['Wise Arrow'],
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  }
]);
