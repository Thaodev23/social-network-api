const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {

  let userVerify = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userVerify.length) {
    await connection.dropCollection('users');
  }

  let thoughtVerify = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtVerify.length) {
    await connection.dropCollection('thoughts');
  }

  let reactionVerify = await connection.db.listCollections({ name: 'reactions' }).toArray();
  if (reactionVerify.length) {
    await connection.dropCollection('reactions');
  }

  const users =
  [
  {
    username: 'joey123',
    email: 'joey123@gmail.com',
  },
  {
    username: 'joseph123',
    email: 'jospeh123@gmail.com',
  },
  {
    username: 'thao123',
    email: 'thao123@gmail.com',
  },
  {
    username: 'thoj123',
    email: 'thoj123@gmail.com',
  },
  {
    username: 'michael123',
    email: 'michael123@gmail.com',
  },
  ];

const thoughts =
  [{
    thoughtText: 'Had a fun day today playing soccer.',
    username: 'joey123',
    reactions: {
      reactionBody: 'I do not play soccer but I enjoy watching it.',
      username: 'joseph123',
    }
  },
  {
    thoughtText: 'Coding is very hard. What does everyone else think?',
    username: 'joseph123',
    reactions: {
      reactionBody: 'Yes, it is complicated but just keep practicing.',
      username: 'thao123',
    }
  },
  {
    thoughtText: 'I want to go to college at Harvard University.',
    username: 'thao123',
    reactions: {
      reactionBody: 'Keep studying hard and you will achieve it.',
      username: 'thoj123',
    }
  },
  {
    thoughtText: 'Need to get back into shape for the marathon.',
    username: 'thoj123',
    reactions: {
      reactionBody: 'Let do it. I will meet you tomorrow at the park.',
      username: 'michael123',
    }
  },
  {
    thoughtText: 'Anybody wants to go golfing tommorrow?',
    username: 'michael123',
    reactions: {
      reactionBody: 'I am not good at golfing but I will join.',
      username: 'joseph123',
    }
  },
  
  ]

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);


  console.table(users);
  console.table(thoughts);
  console.info('successful')
  process.exit(0);
});