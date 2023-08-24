package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Payments;

public interface PaymentsRepository extends JpaRepository<Payments,Long> {
}
