package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.FavouriteProductsList;

public interface FavouriteProductsListRepository extends CommonRepository<FavouriteProductsList, Long> {
}