package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ShopReviewDto;
import server.models.ShopReview;

@Service
@AllArgsConstructor
@Slf4j
public class ShopReviewService extends CommonService<ShopReviewDto, ShopReview>  {
}
