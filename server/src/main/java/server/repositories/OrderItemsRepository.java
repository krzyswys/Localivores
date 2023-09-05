package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.OrderItems;

public interface OrderItemsRepository extends CommonRepository<OrderItems, Long> {
}
