package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.ShopReviewDto;
import server.models.ShopReview;
import server.services.CommonService;

@RestController
@RequestMapping("/api/shopreview")
public class ShopReviewController extends CommonController<ShopReviewDto, ShopReview> {

    public ShopReviewController(CommonService<ShopReviewDto, ShopReview> commonService) {
        super(commonService);
    }
}
