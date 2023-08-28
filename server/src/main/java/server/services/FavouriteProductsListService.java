package server.services;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.FavouriteProductsListDto;
import server.mapper.CommonMapper;
import server.models.FavouriteProductsList;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class FavouriteProductsListService extends CommonService<FavouriteProductsListDto, FavouriteProductsList> {
//    public FavouriteProductsListService(CommonMapper<FavouriteProductsListDto, FavouriteProductsList> commonMapper, CommonRepository<FavouriteProductsList, Long> commonRepository) {
//        super(commonMapper, commonRepository);
//    }
}
