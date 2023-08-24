package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Invoice;

public interface InvoicesRepository extends JpaRepository<Invoice, Long> {
}
