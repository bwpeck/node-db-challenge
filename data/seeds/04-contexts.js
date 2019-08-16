exports.seed = function (knex) {
  return knex('contexts')
    .truncate()
    .then(function () {
      return knex('contexts').insert([
        { id: 1, contexts: 'At home' },
        { id: 2, contexts: 'At work' },
        { id: 3, contexts: 'At school' },
        { id: 4, contexts: 'Online' },
        { id: 5, contexts: 'At the pool' },
        { id: 6, contexts: 'in my room' }
      ]);
    });
};