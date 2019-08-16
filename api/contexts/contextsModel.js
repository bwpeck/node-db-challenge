
const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addContext,
};

function getAll() {
    return db('contexts');
}

async function getById(id) {
    return [
        await db('contexts')
            .where({ id })
            .first(),
        await db('tasks_contexts as a')
            .where('context_id', id)
            .join('tasks as b', 'a.task_id', 'b.id')
            .select('b.id', 'b.description', 'b.notes', 'b.completed')
            .where('b.completed', 0),
    ];
}

function addContext(task) {
    return db('contexts')
        .insert(task)
        .then(([id]) => getById(id));
}