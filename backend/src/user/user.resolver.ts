import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '../auth/auth.service';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Mutation(() => User)
  async signup(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.userService.createUser(email, password);
  }

  @Mutation(() => String)
  async signin(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.authService.signin(email, password);
  }

  @Query(() => [User])
  async users() {
    const users = await this.userService.getAllUsers();
    return users; // return User objects
  }
}
