package server.mapper;

import org.mapstruct.Mapper;
import server.dto.StoreDto;
import server.models.Store;

@Mapper(componentModel = "spring")
public interface StoreMapper extends CommonMapper<StoreDto, Store> {
}
