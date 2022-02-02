// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req: any, res, ctx) => {
    // Persist user's authentication in the session
    if (req.body && req.body.password === "Khizar123") {
      localStorage.setItem("is-authenticated", "true");
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ userName: "Khizar" })
      );
    } else {
      return res(
        // Respond with a 404 status code
        ctx.status(404),
        ctx.json({ error: "Invalid Password" })
      );
    }
  }),
  // rest.get(
  //   "https://61fac9e687801d0017a2c289.mockapi.io/api/users",
  //   (req: any, res, ctx) => {
  //     return res(
  //       // Respond with a 404 status code
  //       ctx.status(200),
  //       ctx.json({ users: [] })
  //     );
  //   }
  // ),
];
