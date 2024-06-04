import { reactive } from "vue";

export const store = reactive({
  results: [], // dati del character
  info: [], // dati della pagina dell'api
  status: [], // stati dei personaggi

  apiInfo: {
    url: "https://rickandmortyapi.com/api/character",
    pageNumber: 1,
    endpoints: {
      status: "?status",
    },
  },
});
