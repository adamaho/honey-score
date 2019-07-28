import {
  Context
} from 'koa';

interface ILoginParms {
  email: string;
  password: string;
}

export default {
  Mutation: {
    login: async (parent: any, { email, password }: ILoginParms, { ctx }: Context) => {
    }
  }
}