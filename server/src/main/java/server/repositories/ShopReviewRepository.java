package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.ShopReview;

public interface ShopReviewRepository extends JpaRepository<ShopReview,Long> {
}
