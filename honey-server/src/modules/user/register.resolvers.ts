import * as jwt from 'jsonwebtoken';

import {
  User
} from '../../entity/User';

interface ILoginParms {
  email: string;
  password: string;
  confirmPassword: string;
}

export default {
  Mutation: {
    register: async (parent: any, { email, password, confirmPassword }: ILoginParms) => {
      // find user with provided email
      const user = await User.findOne({
        where: {
          email
        }
      });

      // if not user then return
      if (user) {
        return {
          token: null,
          userId: null,
          error: 'USER_ALREADY_EXISTS'
        };
      }

      // check if there are already 2 users
      const [users, count] = await User.findAndCount();

      if (count === 2) {
        return {
          token: null,
          userId: null,
          error: 'MAX_USERS_REACHED'
        };
      }

      // check if the passwords match
      const passwordsMatch = password === confirmPassword;

      if (!passwordsMatch) {
        return {
          token: null,
          userId: null,
          error: 'PASSWORDS_NOT_MATCH'
        };
      }

      let newUser;
      try {
        newUser = await User
          .create({
            email,
            password
          })
          .save();
      } catch (error) {
        console.log(error);

        return {
          token: null,
          userId: null,
          error: 'OOPS'
        };
      }
    
      // return token upon registration.
      return {
        token: jwt.sign(
          {
            userId: newUser.userId,
            email: newUser.email
          },
          'jwt_secret', 
          { expiresIn: 60*5 }
        ),
        userId: newUser.userId,
        error: null
      };
    }
  }
}