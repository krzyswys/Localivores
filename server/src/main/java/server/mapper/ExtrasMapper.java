package server.mapper;

import org.mapstruct.Mapper;
import server.dto.ExtrasDto;
import server.models.Extras;

@Mapper(componentModel = "spring")
public interface ExtrasMapper extends CommonMapper<ExtrasDto, Extras> {

}
