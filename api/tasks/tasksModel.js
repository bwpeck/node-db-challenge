const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    addTask,
};

function getAll() {
    return db('tasks');
}

async function getById(id) {
    return [
        await db('tasks')
            .where({ id })
            .first(),
        await db('tasks_contexts as a')
            .where('task_id', id)
            .join('contexts as b', 'a.context_id', 'b.id')
            .select('b.id', 'b.contexts'),
    ];
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(([id]) => getById(id));
}