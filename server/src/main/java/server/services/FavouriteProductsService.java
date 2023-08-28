package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.FavouriteProductsListDto;
import server.models.FavouriteProductsList;

@Service
@AllArgsConstructor
@Slf4j
public class FavouriteProductsService extends CommonService<FavouriteProductsListDto, FavouriteProductsList> {
}
