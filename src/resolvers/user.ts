import { ResolverMap } from "../types/ResolverType";

const resolvers: ResolverMap = {
  Query: {
    hello: (_: any, { name }: any) => `hello ${name || "World"}`,
    user: (_, { id }) => {
      const a = id;
      return a;
    },
    users: () => {}
  },
  Mutation: {
    createUser: (_, args) => {
      const a = args;
      return a;
    },
    updateUser: async (_, { id, ...args }) => {
      const a = [id, ...args];
      return a;
    },
    deleteUser: async (_, { id }) => {
      const a = id;
      return a;
    }
  }
};

export default resolvers;
