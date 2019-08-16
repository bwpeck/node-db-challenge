const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addProject,
};

function getAll() {
    return db('projects');
}

async function getById(id) {
    return [
        await db('projects')
            .where({ id })
            .first(),
        await db('tasks as a')
            .where('project_id', id)
            .select('a.id', 'a.description', 'a.notes', 'a.completed'),
        await db('project_resources as b')
            .where('project_id', id)
            .join('resources as c', 'b.resource_id', 'c.id')
            .select('c.id', 'c.name', 'c.description'),
    ];
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => getById(id));
}