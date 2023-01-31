import { Prisma, PrismaClient } from '@prisma/client'
import { Fixture } from './fixtures/interface.fixture';

const fixtures: Fixture[] = require('./fixtures/fixtures.json');
const prisma = new PrismaClient();

fixtures.forEach((fixture) => {
  switch (fixture.table) {

    case 'role':
      prisma.role.deleteMany({});

      fixture.entries.forEach(async (entrie) => {
        const role = await prisma.role.create({
          data: {
            role: entrie.parameters[0].value,
          }
        })
      })
    break;

    case 'articleType':
      prisma.articleType.deleteMany({});

      fixture.entries.forEach(async (entrie) => {
        const role = await prisma.articleType.create({
          data: {
            type: entrie.parameters[0].value,
          }
        })
      })
    break;
  }
});