package repository

import (
	"github.com/masilvasql/imersao10-consolidacao/internal/infra/db"
)

type Repository struct {
	*db.Queries
}
