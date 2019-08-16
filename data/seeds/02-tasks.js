exports.seed = function (knex) {
  return knex('tasks')
    .truncate()
    .then(function () {
      return knex('tasks').insert([
        {
          id: 1,
          description: 'Sign up for Lambda',
          notes: 'These entrance tests are easy.',
          completed: true,
          project_id: 1,
        },
        {
          id: 2,
          description: 'Buy a laptop that can handle the work load.',
          completed: true,
          project_id: 1,
        },
        {
          id: 3,
          description: 'Pay attention.',
          notes: 'I see you looking off in the distance.',
          completed: true,
          project_id: 1,
        },
        {
          id: 4,
          description: 'Apply head to pillow.',
          completed: true,
          project_id: 2,
        },
        {
          id: 5,
          description: 'pull up covers.',
          completed: true,
          project_id: 2,
        },
        {
          id: 6,
          description: 'Pet the cat.',
          notes: 'He always wants attention at the worst time.',
          completed: false,
          project_id: 2,
        },
        {
          id: 7,
          description: 'Chase dog.',
          completed: false,
          project_id: 3,
        },
        {
          id: 8,
          description: 'place dog in shower.',
          completed: false,
          project_id: 3,
        },
        {
          id: 9,
          description: 'scrub dog well.',
          notes: 'hes covered in dirt.',
          completed: false,
          project_id: 3,
        },
      ]);
    });
};