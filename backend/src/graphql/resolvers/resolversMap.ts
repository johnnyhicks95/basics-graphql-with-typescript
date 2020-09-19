import { IResolvers } from 'graphql-tools'

const resolvers: IResolvers = {
    Query: {
        // es un objeto que contiene los metodos para el schema
        hello(){
            return "world"
        },

        getCharacters(){
            return [
                {
                    id: 1,
                    name: 'Link',
                    race: 'Hylian'
                },
                {
                    id: 2,
                    name: 'Zelda',
                    race: 'Hylian'
                }
            ]
        }
    }
}

export default resolvers