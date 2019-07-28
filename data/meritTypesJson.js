// eslint-disable-next-line no-undef
db.merit_types.insert([
  {
    type: 'story',
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  },
  {
    type: 'innate',
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  },
  {
    type: 'purchased',
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  }
]);
