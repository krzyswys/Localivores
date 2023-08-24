package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Extras;
import server.models.Invoices;

public interface InvoicesRepository extends JpaRepository<Invoices, Long> {
}
