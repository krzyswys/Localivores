package server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import server.models.Model;

@NoRepositoryBean
public interface CommonRepository<ModelImplementation extends Model, ID> extends JpaRepository<ModelImplementation, ID> {
}
