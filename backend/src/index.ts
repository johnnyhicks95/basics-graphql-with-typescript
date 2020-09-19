import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const app = express()
app.use(cors())

const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true
})

// apollo-server nethod
server.applyMiddleware({
    app
})

app.listen( 5000, () => {
    console.log(`Server graphql up! Running on:`);
    
    console.log('http://localhost:5000');
    
})