package server.mapper;

import org.mapstruct.Mapper;
import server.dto.DriverDto;
import server.models.Driver;

@Mapper(componentModel = "spring")
public interface DriverMapper extends CommonMapper<DriverDto, Driver> {
}
