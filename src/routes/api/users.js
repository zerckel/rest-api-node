import {Router} from 'express'
import {PrismaClient} from '@prisma/client'

const api = Router()

/** GET /api/users > Retrieve all users */
api.post('/new', (req, res) => store(req, res));

/** GET /api/users > Retrieve all users */
api.get('/', (req, res) => index(req, res))

/** GET /api/users > Retrieve all users */
api.get('/:id', (req, res) => show(req, res))

/** GET /api/users > Retrieve all users */
api.put('/:id', (req, res) => update(req, res))

/** GET /api/users > Retrieve all users */
api.delete('/:id', (req, res) => destroy(req, res))

function store(req, res) {
  const prisma = new PrismaClient
  prisma.user.create({
    data: req.body
  }).then(user => res.json(
          {
            data: user
          }
  ))

}

function index(req, res) {
  const prisma = new PrismaClient()

  return res.json({data: {users: prisma.user.findMany()}})
}

function show(req, res) {
  const prisma = new PrismaClient()

  prisma.user.findUnique({
    where: {
      id: parseInt(req.params.id),
    }
  }).then(user => res.json(
          {
            data: user
          }))
}

function update(req, res) {
  const prisma = new PrismaClient()

  prisma.user.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body
  }).then(user => res.json(
          {
            data: user
          }))
}

function destroy(req, res) {
  const prisma = new PrismaClient()

  prisma.user.delete({
    where: {
      id: parseInt(req.params.id),
    }
  }).then(user => res.json(
          {
            data: user
          }))
}

export default api
