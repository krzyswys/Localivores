package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Store;

public interface StoreRepository extends CommonRepository<Store,Long> {
}
