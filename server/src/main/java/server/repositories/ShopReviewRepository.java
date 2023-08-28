package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.ShopReview;

public interface ShopReviewRepository extends CommonRepository<ShopReview,Long> {
}
