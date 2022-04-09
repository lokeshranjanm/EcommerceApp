package backend.Service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.Repository.AddressRepository;
import backend.model.Address;

@Service
public class AddressService 
{
	@Autowired
	private AddressRepository addressRepository;
	
	public List<Address> getAllAddress()   
	{  
	List<Address> address = new ArrayList<Address>();  
	addressRepository.findAll().forEach(product1 -> address.add(product1));  
	return address;  
	}
	
	public Address getAddressById(int id)   
	{  
	return addressRepository.findById(id).get();  
	}
	
	public void saveOrUpdate(Address address)   
	{  
		addressRepository.save(address);  
	}
}

