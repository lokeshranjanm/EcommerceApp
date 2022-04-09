package backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.Service.AddressService;
import backend.model.Address;
import backend.model.Product;

@RestController
@RequestMapping("/address/")
public class AddressController
{
	@Autowired
	private AddressService addressService;
	
	@GetMapping("/get")  
	private List<Address> getAllAddress()  
	{  
		return addressService.getAllAddress();  
	}
	
	@GetMapping("/get/{id}")  
	private Address getAddress(@PathVariable int id)   
	{  
	return addressService.getAddressById(id);
	}
	
	@PostMapping("/add")  
	private int saveAddress(@RequestBody Address address )  
	{  
		addressService.saveOrUpdate(address);  
	    return address.getId();  
	}
}

