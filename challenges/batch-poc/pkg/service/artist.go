package service

type Input struct {
	EventID string
	Status  string
}

type ArtistService interface {
	CreateArtistsInBatches() Input
}
