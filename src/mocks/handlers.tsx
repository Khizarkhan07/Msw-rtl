// src/mocks/handlers.js
import { rest } from 'msw'



export const handlers = [
  rest.post('/login', (req: any, res, ctx) => {
    // Persist user's authentication in the session
    if(req.body && req.body.password === "Khizar123" ) {
        localStorage.setItem('is-authenticated', 'true')

    return res( 
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({userName: "Khizar"})
    )
    }
    else {
        return res(
            // Respond with a 404 status code
            ctx.status(404),
            ctx.json({error: "Invalid Password"})
          ) 
    }
    
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]