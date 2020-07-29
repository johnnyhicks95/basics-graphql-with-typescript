import { GraphQLSchema }  from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import rootSchema from './schemas/schemas.graphql'

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: [
        rootSchema
    ]
})