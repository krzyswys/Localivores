package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Payment;

public interface PaymentsRepository extends JpaRepository<Payment,Long> {
}
