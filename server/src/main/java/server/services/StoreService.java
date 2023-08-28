package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.StoreDto;
import server.models.Store;

@Service
@AllArgsConstructor
@Slf4j
public class StoreService extends CommonService<StoreDto, Store> {
}
