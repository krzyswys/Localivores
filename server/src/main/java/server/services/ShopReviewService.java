package server.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.dto.ShopReviewDto;
import server.mapper.CommonMapper;
import server.models.ShopReview;
import server.repositories.CommonRepository;

@Service
@Slf4j
public class ShopReviewService extends CommonService<ShopReviewDto, ShopReview>  {
    public ShopReviewService(CommonMapper<ShopReviewDto, ShopReview> commonMapper, CommonRepository<ShopReview, Long> commonRepository) {
        super(commonMapper, commonRepository);
    }
}
