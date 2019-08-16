exports.seed = function (knex) {
  return knex('resources')
    .truncate()
    .then(function () {
      return knex('resources').insert([
        {
          id: 1,
          name: 'Dog shampoo',
          description: 'Smells lovely.',
        },
        { id: 2, name: 'shower' },
        {
          id: 3,
          name: 'Laptop',
          description: 'This thing is a beast when overclocked',
        },
        { id: 4, name: 'Pencil' },
        { id: 5, name: 'Paper' },
        { id: 6, name: 'Bed', description: 'how i love thee' },
        {
          id: 7,
          name: 'pillow',
          description: "oh so squishy",
        },
        { id: 8, name: 'cat' },
      ]);
    });
};