import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('should create a new user', async () => {
    const user = await service.createUser('test', 'pass');
    expect(user).toHaveProperty('id');
    expect(user.username).toBe('test');
  });

  it('should find a user by username', async () => {
    const user = await service.findOne('anas');
    expect(user?.username).toBe('anas');
  });
});
