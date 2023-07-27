package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Extras;

public interface ExtrasRepository extends JpaRepository<Extras, Long> {
}
