package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.FavouriteProductsListDto;
import server.models.FavouriteProductsList;
import server.services.CommonService;

@RestController
@RequestMapping("/api/favouriteproducts")
public class FavouriteProductsController extends CommonController<FavouriteProductsListDto, FavouriteProductsList>{

    public FavouriteProductsController(CommonService<FavouriteProductsListDto, FavouriteProductsList> commonService) {
        super(commonService);
    }
}
