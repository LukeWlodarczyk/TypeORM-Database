import { getConnection } from "typeorm";
import { ResolverMap } from "../types/ResolverType";
import { User } from '../entity/User';

const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }) => `hello ${name || "World"}`,
    user: (_, { id }) => {
      return getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id })
      .getOne();
    },
    users: () => User.find()
  },
  Mutation: {
    createUser: (_, args) => User.create(args).save(),
    updateUser: async (_, { id, ...args }) => {
      try {
        await User.update({ id }, args);
        return true;
      } catch (err) {
        return false;
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        await getConnection()
                .createQueryBuilder()
                .delete()
                .from(User)
                .where("id = :id", { id })
                .execute();
        return true;
      } catch (err) {
        return false;
      }
      
    }
  }
};

export default resolvers;
