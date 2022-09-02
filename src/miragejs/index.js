import { createServer } from "miragejs";

let server = createServer();

function fakeServer() {
  server.get("/api/films", {
    trailers: [
      {
        id: 1,
        name: "black window",
        videoId: "ybji16u608U",
        thumbnailUrl: "https://i.ytimg.com/vi/ybji16u608U/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      },
      {
        id: 2,
        name: "boss baby",
        videoId: "prWBrMJOg2k",
        thumbnailUrl:
          "https://i.ytimg.com/an_webp/prWBrMJOg2k/mqdefault_6s.webp?du=3000&sqp=CPSJ1pYG&rs=AOn4CLDsWLExn2UH53GbcRWoUIZwk3V0BQ",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BYWY1N2I5MGUtZTBmNS00MWZmLWEyNzAtZjliNzk0ZDVkYzI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX180_CR0,9,180,266_.jpg",
      },
      {
        id: 3,
        name: "luca",
        videoId: "mYfJxlgR2jw",
        thumbnailUrl: "https://i.ytimg.com/vi/mYfJxlgR2jw/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      },
      {
        id: 4,
        name: "infinite",
        videoId: "_WWEOCQGxSw",
        thumbnailUrl: "https://i.ytimg.com/vi/_WWEOCQGxSw/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BZTEzM2ZiNDMtNjlkNC00MjU4LTkyNTQtNzM5Yjc4NmQwZDc4XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_QL75_UY280_CR109,0,280,280_.jpg",
      },
      {
        id: 5,
        name: "fast and furious",
        videoId: "f02Haxdg7EQ",
        thumbnailUrl: "https://i.ytimg.com/vi/f02Haxdg7EQ/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_QL75_UX180_CR0,9,180,266_.jpg",
      },
      {
        id: 6,
        name: "peter rabbit",
        videoId: "7Pa_Weidt08",
        thumbnailUrl: "https://i.ytimg.com/vi/7Pa_Weidt08/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BMjQ0NzQzNTE0MV5BMl5BanBnXkFtZTgwNTU4OTIyNDM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      },
    ],
    tvShow: [
      {
        id: "tvShow-1",
        name: "Studios' Loki ",
        videoId: "nW948Va-l10",
        thumbnailUrl: "https://i.ytimg.com/vi/nW948Va-l10/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      },
      {
        id: "tvShow-2",
        name: "Café con aroma de mujer ",
        videoId: "ufs8NhLBuCk",
        thumbnailUrl: "https://i.ytimg.com/vi/ufs8NhLBuCk/maxresdefault.jpg",
        subThumb:
          "https://m.media-amazon.com/images/M/MV5BNGY1ZWQ1ZTMtNjI5Ny00YmUwLTk0YmUtYzIzZWY4YjM1ZDMxXkEyXkFqcGdeQXVyOTE4NzcwNzI@._V1_QL75_UY266_CR6,0,180,266_.jpg",
      },
    ],
    products: [
      {
        id: "prod-1",
        name: "PRODUCT 1",
        thumb:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-through-waves-ae-collections.jpg",
        price: 146,
      },
      {
        id: "prod-2",
        name: "PRODUCT 2",
        thumb:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-through-waves-ae-collections.jpg",
        price: 192,
      },
      {
        id: "prod-3",
        name: "PRODUCT 3",
        thumb:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-through-waves-ae-collections.jpg",
        price: 126,
      },
      {
        id: "prod-4",
        name: "PRODUCT 4",
        thumb:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-through-waves-ae-collections.jpg",
        price: 137,
      },
      {
        id: "prod-5",
        name: "PRODUCT 5",
        thumb:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-through-waves-ae-collections.jpg",
        price: 143,
      },
      {
        id: "prod-6",
        name: "PRODUCT 6",
        thumb:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/sunset-through-waves-ae-collections.jpg",
        price: 94,
      },
    ],
  });
}

export default fakeServer;
