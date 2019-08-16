exports.seed = function (knex) {
  return knex('projects')
    .truncate()
    .then(function () {
      return knex('projects').insert([
        { id: 1, name: 'Learn java', completed: true, description: 'Why must this be so hard.' },
        { id: 2, name: 'Sleep', completed: false, description: 'The fact I need to tell myself this is troubling.' },
        { id: 3, name: 'Wash the dog', completed: false }
      ]);
    });
};