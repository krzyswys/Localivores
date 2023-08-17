package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.models.Store;
import server.repositories.StoreRepository;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class StoreController {
    @Autowired
    StoreRepository storeRepository;

    @GetMapping("/stores")
    public ResponseEntity<List<Store>> getStores() {
        try {
            List<Store> stores = new ArrayList<>(storeRepository.findAll());

            if (stores.isEmpty()) {
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(stores, HttpStatus.OK);


        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/stores")
    public ResponseEntity<Store> createStore(@RequestBody Store store){
        try {
            Store _store = storeRepository.save(new Store(store.getName(), store.getAddress(), store.getOpeningHours(), store.getDiscounts(), store.getLongitude(), store.getLatitude(), store.getProductList(), store.getShopReviews(), store.getUser()));
            return new ResponseEntity<>(_store, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
