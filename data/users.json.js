// eslint-disable-next-line no-undef
db.users.insert([
  {
    username: 'test',
    password: 'test',
    email: 'test@test.com',
    role: 'admin',
    insert_date: new Date(Date.now),
    date_updated: new Date(Date.now)
  }
]);
