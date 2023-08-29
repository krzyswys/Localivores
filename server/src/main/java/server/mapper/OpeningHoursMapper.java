package server.mapper;

import org.mapstruct.Mapper;
import server.dto.OpeningHoursDto;
import server.models.OpeningHours;

@Mapper(componentModel = "spring")
public interface OpeningHoursMapper extends CommonMapper<OpeningHoursDto, OpeningHours>  {
}
