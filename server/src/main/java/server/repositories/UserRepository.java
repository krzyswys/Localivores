package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
