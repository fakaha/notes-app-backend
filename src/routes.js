const {
  addNoteHandler,
  getAllNotesHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    // options: {
    //     cors: {
    //         origin: ['*'],
    //     },
    // },
    // INI UNTUK CORS SEBAGIAN ROUTES
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
