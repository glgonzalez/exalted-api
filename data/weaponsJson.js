// eslint-disable-next-line no-undef
db.weapons.insert([
  {
    name: 'test_weapon',
    weapon_type: 'light',
    accuracy: 3,
    damage: 2,
    defense: 0,
    overwhelming: 1,
    tags: ['lethal', 'melee', 'natural'],
    description: null,
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  }
]);
