//package server.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import server.models.ShopReview;
//import server.repositories.ShopReviewRepository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@CrossOrigin(origins = "http://localhost:8080")
//@RestController
//@RequestMapping("/api")
//public class ShopReviewController {
//    @Autowired
//    ShopReviewRepository shopReviewRepository;
//
//    @GetMapping("/shop-reviews")
//    public ResponseEntity<List<ShopReview>> getAllShopReviews(){
//        try {
//            List<ShopReview> shopReviews = new ArrayList<>(shopReviewRepository.findAll());
//
//            if (shopReviews.isEmpty()){
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//
//            return new ResponseEntity<>(shopReviews, HttpStatus.OK);
//
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    @PostMapping("/shop-reviews")
//    public ResponseEntity<ShopReview> createShopReview(@RequestBody ShopReview shopReview){
//        try {
//            ShopReview _shopReview = shopReviewRepository.save(new ShopReview(shopReview.getRating(), shopReview.getDescription(), shopReview.getDate(), shopReview.getUser(), shopReview.getStore()));
//            return new ResponseEntity<>(_shopReview, HttpStatus.CREATED);
//        } catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//}
