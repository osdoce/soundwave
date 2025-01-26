import { User } from '../models/user';

export const users: User[] = [
  {
    id: 1,
    name: 'Anakin',
    email: 'anakin@noemail.com',
    password: 'password',
    created_at: new Date('2025-01-23T17:36:43.317023'),
  },
  {
    id: 2,
    name: 'Obi Wan',
    email: 'Obi@noemail.com',
    password: 'password',
    created_at: new Date('2025-01-23T17:36:43.317023'),
  },
  {
    id: 3,
    name: 'R2',
    email: 'r2@noemail.com',
    password: 'password',
    created_at: new Date('2025-01-23T17:36:43.317023'),
  }
];
