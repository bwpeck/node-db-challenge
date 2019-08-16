const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addResource,
};

function getAll() {
    return db('resources');
}

async function getById(id) {
    return [
        await db('resources')
            .where({ id })
            .first(),
        await db('project_resources as b')
            .where('resource_id', id)
            .join('projects as c', 'b.project_id', 'c.id')
            .select('c.id', 'c.name', 'c.description', 'c.completed'),
    ];
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(([id]) => getById(id));
}