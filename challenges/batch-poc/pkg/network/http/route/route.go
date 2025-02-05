package routes

import (
	"net/http"

	"github.com/Gabriel-Pessoa/batch-poc/pkg/network/http/handler"
	"github.com/gorilla/mux"
)

func ConfigureRoutes(r *mux.Router, artistsHandler handler.ArtistHandler) {
	r.HandleFunc("/artists-in-batch", artistsHandler.CreateArtistsInBatches()).Methods(http.MethodPost)
}
