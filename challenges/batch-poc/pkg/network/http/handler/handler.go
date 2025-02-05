package handler

import (
	"fmt"
	"net/http"

	"github.com/Gabriel-Pessoa/batch-poc/pkg/service"
)

type ArtistHandler interface {
	CreateArtistsInBatches() http.HandlerFunc
}

type artistHandler struct {
	artistService service.ArtistService
}

func NewArtistsHandler(artistService service.ArtistService) ArtistHandler {
	return &artistHandler{
		artistService: artistService,
	}
}

func (h *artistHandler) CreateArtistsInBatches() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "CreateArtistsInBatches \n")
	}
}
