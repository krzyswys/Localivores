package server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.models.Extras;
import server.models.PaymentMethod;
import server.repositories.PaymentMethodRepository;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class PaymentMethodController {
    @Autowired
    PaymentMethodRepository paymentMethodRepository;

    @GetMapping("/payment-methods")
    public ResponseEntity<List<PaymentMethod>> getAllPaymentMethods() {
        try {
            List<PaymentMethod> paymentMethods = new ArrayList<>(paymentMethodRepository.findAll());

            if (paymentMethods.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(paymentMethods, HttpStatus.OK);

        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/payment-methods")
    public ResponseEntity<PaymentMethod> createPaymentMethod(@RequestBody PaymentMethod paymentMethod){
        try{
            PaymentMethod _paymentMethod = paymentMethodRepository.save(new PaymentMethod(paymentMethod.isCreditCard(), paymentMethod.isPaypal(), paymentMethod.isGooglePay(), paymentMethod.isApplePay()));
            return new ResponseEntity<>(_paymentMethod, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
