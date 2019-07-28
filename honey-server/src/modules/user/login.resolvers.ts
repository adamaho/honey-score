import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import {
  Context
} from 'koa';

import {
  User
} from '../../entity/User';

interface ILoginParms {
  email: string;
  password: string;
}

export default {
  Mutation: {
    login: async (parent: any, { email, password }: ILoginParms, request: any) => {
      // find user with provided email
      const user = await User.findOne({
        where: {
          email
        }
      });

      // if not user then return
      if (!user) {
        return;
      }

      const validPassword = password === user.password;

      // if not valid password then return
      if (!validPassword) {
        return;
      }

      // if all things are good, sign a token and return it
      return jwt.sign(
        {
          userId: user.userId,
          email: user.email
        },
        'jwt_secret', 
        { expiresIn: 60*5 }
      );
    }
  }
}