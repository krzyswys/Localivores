package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.models.Log;


public interface LogRepository extends JpaRepository<Log, Long> {
}
