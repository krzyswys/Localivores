package server.mapper;

import org.mapstruct.Mapper;
import server.dto.FavouriteProductsListDto;
import server.models.FavouriteProductsList;

@Mapper(componentModel = "spring")
public interface FavouriteProductsListMapper extends CommonMapper<FavouriteProductsListDto, FavouriteProductsList>  {
}
