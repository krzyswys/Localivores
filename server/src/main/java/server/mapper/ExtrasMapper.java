package server.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import server.dto.ExtrasDto;
import server.models.Extras;

@Mapper(componentModel = "spring")
public interface ExtrasMapper {
    ExtrasDto mapExtrasToDto(Extras extras);

    @InheritInverseConfiguration
    Extras mapDtoToExtras(ExtrasDto extrasDto);

}
