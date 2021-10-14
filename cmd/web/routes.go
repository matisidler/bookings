package main

import (
	"bookings/pkg/config"
	"bookings/pkg/handlers"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func routes(app *config.AppConfig) http.Handler {
	mux := chi.NewRouter()

	mux.Use(middleware.Recoverer)
	mux.Use(NoSurf)
	mux.Use(SessionLoad)

	mux.Get("/", handlers.Repo.Home)
	mux.Get("/about", handlers.Repo.About)

	//le decimso que sirva todo el contenido estático que hay en la carpeta static
	fileServer := http.FileServer(http.Dir("../../static"))
	//le decimos que utilice todo lo que haya en static
	mux.Handle("/static/*", http.StripPrefix("/static", fileServer))

	return mux
}
