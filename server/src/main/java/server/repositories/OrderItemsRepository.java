package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.OrderItems;

public interface OrderItemsRepository extends JpaRepository<OrderItems,Long> {
}
