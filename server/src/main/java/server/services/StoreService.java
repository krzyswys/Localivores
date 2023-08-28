package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.StoreDto;
import server.mapper.CommonMapper;
import server.models.Store;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class StoreService extends CommonService<StoreDto, Store> {
    public StoreService(CommonMapper<StoreDto, Store> commonMapper, CommonRepository<Store, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
