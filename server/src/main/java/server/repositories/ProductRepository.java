package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
