const knex = require('../Database/knex');

class NotesController {
  async create(request, response) {
    const {title, description, rating, tags} = request.body;
    const user_id = request.user.id;

    const note_id = await knex('Notes').insert({
      title, 
      description, 
      rating, 
      user_id
    });

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        user_id,
        name
      }
    });

    await knex('Tags').insert(tagsInsert);

    response.json();
  };

  async show(request, response) {
    const { id } = request.params;

    const note = await knex('Notes').where({ id }).first();
    const tags = await knex('Tags').where({ note_id: id }).orderBy('name');


    return response.json({...note, tags});
  }

  async delete(request, response) {
    const { id } = request.params

    await knex('Notes').where({ id }).delete();

    return response.json();
  }

  async index(request, response){
    const { title, tags } = request.query;
    const user_id = request.user.id;

    let notes;
    
      if(tags) {
        const filterTags = tags.split(',').map(tag => tag.trim());

        notes = await knex('Tags')
        .select([
          'Notes.id',
          'Notes.title',
          'Notes.user_id',
        ])
        .where('Notes.user_id', user_id)
        .whereLike('Notes.title', `%${title}%`)
        .whereIn('name', filterTags)
        .innerJoin ('Notes', 'Notes.id', 'Tags.note_id')
        .orderBy('Notes.title')

      } else {
        notes = await knex('Notes')
        .where({ user_id })
        .whereLike('title', `%${title}%`)
        .orderBy('title')
      }

      const userTags = await knex('Tags').where({ user_id });
      const notesWithTags = notes.map(note => {
        const noteTags = userTags.filter(tag => tag.note_id === note.id);

        return {
          ...note,
          tags:noteTags
        }
      })


    return response.json(notesWithTags)

  }

}


module.exports = NotesController;