package handlers

import (
	"bookings/pkg/config"
	"bookings/pkg/models"
	"bookings/pkg/render"
	"net/http"
)

// Repo the repository used by the handlers
var Repo *Repository

// Repository is the repository type
type Repository struct {
	App *config.AppConfig
}

// NewRepo creates a new repository
func NewRepo(a *config.AppConfig) *Repository {
	return &Repository{
		App: a,
	}
}

// NewHandlers sets the repository for the handlers
func NewHandlers(r *Repository) {
	Repo = r
}

// Home is the handler for the home page
func (m *Repository) Home(w http.ResponseWriter, r *http.Request) {
	remoteIP := r.RemoteAddr
	m.App.Session.Put(r.Context(), "remote_ip", remoteIP)

	render.RenderTemplate(w, "home.page.tpl", &models.TemplateData{})
}

// About is the handler for the about page
func (m *Repository) About(w http.ResponseWriter, r *http.Request) {
	// perform some logic
	stringMap := make(map[string]string)
	stringMap["test"] = "Hello, again"

	remoteIP := m.App.Session.GetString(r.Context(), "remote_ip")
	stringMap["remote_ip"] = remoteIP

	// send data to the template
	render.RenderTemplate(w, "about.page.tpl", &models.TemplateData{
		StringMap: stringMap,
	})
}

//Reservation renders the make a reservation page and displays form
func (m *Repository) Reservation(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "make-reservation.page.tpl", &models.TemplateData{})
}

//Generals renders Generals page
func (m *Repository) Generals(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "generals.page.tpl", &models.TemplateData{})
}

//Majors renders the Majors page
func (m *Repository) Majors(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "majors.page.tpl", &models.TemplateData{})
}

//Availability renders the Availability page
func (m *Repository) Availability(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "search-availability.page.tpl", &models.TemplateData{})
}

//Contact renders the Availability page
func (m *Repository) Contact(w http.ResponseWriter, r *http.Request) {
	render.RenderTemplate(w, "contact.page.tpl", &models.TemplateData{})
}
