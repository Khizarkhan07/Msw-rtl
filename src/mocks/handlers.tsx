// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req: any, res, ctx) => {
    // Persist user's authentication in the session
    if (req.body && req.body.password === "Khizar123") {
      console.log("HEREEE")
      localStorage.setItem("is-authenticated", "true");
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ userName: "Khizar" })
      );
    } else {
      
      console.log("EXEEECECECCC:");
      return res(
        // Respond with a 404 status code
        ctx.status(404),
        ctx.json({ error: "Invalid Password" })
      );
    }
  }),
  rest.get("/users", (req: any, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            createdAt: "2022-02-02T03:48:13.935Z",
            name: "Mr. Albert White",
            avatar: "https://cdn.fakercloud.com/avatars/bluesix_128.jpg",
            id: "1",
          },
          {
            createdAt: "2022-02-02T05:36:57.224Z",
            name: "Olivia Roberts Sr.",
            avatar: "https://cdn.fakercloud.com/avatars/mhudobivnik_128.jpg",
            id: "2",
          },
          {
            createdAt: "2022-02-02T11:17:20.425Z",
            name: "Steven Wintheiser I",
            avatar: "https://cdn.fakercloud.com/avatars/kevka_128.jpg",
            id: "3",
          },
          {
            createdAt: "2022-02-02T14:30:14.171Z",
            name: "Melody Wolf",
            avatar: "https://cdn.fakercloud.com/avatars/andrewofficer_128.jpg",
            id: "4",
          },
          {
            createdAt: "2022-02-02T10:44:29.717Z",
            name: "Juanita VonRueden",
            avatar: "https://cdn.fakercloud.com/avatars/marosholly_128.jpg",
            id: "5",
          },
          {
            createdAt: "2022-02-02T17:04:05.586Z",
            name: "Traci Veum",
            avatar: "https://cdn.fakercloud.com/avatars/mighty55_128.jpg",
            id: "6",
          },
          {
            createdAt: "2022-02-02T11:13:26.881Z",
            name: "Jan Bogan",
            avatar: "https://cdn.fakercloud.com/avatars/2fockus_128.jpg",
            id: "7",
          },
          {
            createdAt: "2022-02-02T18:08:33.246Z",
            name: "Charlie Jones",
            avatar: "https://cdn.fakercloud.com/avatars/jnmnrd_128.jpg",
            id: "8",
          },
          {
            createdAt: "2022-02-02T07:42:48.164Z",
            name: "Leland Zboncak",
            avatar: "https://cdn.fakercloud.com/avatars/ryanjohnson_me_128.jpg",
            id: "9",
          },
          {
            createdAt: "2022-02-02T15:19:33.953Z",
            name: "Alice Ritchie",
            avatar: "https://cdn.fakercloud.com/avatars/johncafazza_128.jpg",
            id: "10",
          },
          {
            createdAt: "2022-02-02T11:24:44.190Z",
            name: "Jane Kulas",
            avatar: "https://cdn.fakercloud.com/avatars/emmandenn_128.jpg",
            id: "11",
          },
          {
            createdAt: "2022-02-02T13:52:53.821Z",
            name: "Silvia Flatley",
            avatar: "https://cdn.fakercloud.com/avatars/craigrcoles_128.jpg",
            id: "12",
          },
        ],
      })
    );
  }),
];
