package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.PaymentMethod;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod,Long> {
}
