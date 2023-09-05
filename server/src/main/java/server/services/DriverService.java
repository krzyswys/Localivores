package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.DriverDto;
import server.mapper.CommonMapper;
import server.models.Driver;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class DriverService  extends CommonService<DriverDto, Driver>  {
    public DriverService(CommonMapper<DriverDto, Driver> commonMapper, CommonRepository<Driver, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
