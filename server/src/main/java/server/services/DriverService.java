package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.DriverDto;
import server.models.Driver;

@Service
@AllArgsConstructor
@Slf4j
public class DriverService  extends CommonService<DriverDto, Driver>  {
}
