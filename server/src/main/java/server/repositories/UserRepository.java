package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.User;

import java.util.Optional;

public interface UserRepository extends CommonRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
