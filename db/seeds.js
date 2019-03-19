const Creature =require('../models/Creature.js')

Creature.deleteMany().then(() => {
    const buck = new Creature({name: 'Buck', description: 'toad'})
    return buck.save()
}).then(() => {
    const joe = new Creature({name: 'Joe', description: 'turtle'})
    return joe.save()
})