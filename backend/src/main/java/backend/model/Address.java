package backend.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name= "address")
public class Address 
{
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int id;
	
	private String address1;

	private String address2;
	
	private String city;
	
	private String state;
	
	private int pincode;
	

	@OneToOne(fetch=FetchType.LAZY,optional=false)
	@JoinColumn(name="user_id",nullable=false)
	private User user;
	
	public Address() {
		
	}

	public Address(String address1, String address2, String city, String state, int pincode) 
	{
		this.address1=address1;
		this.address2=address2;
		this.city=city;
		this.state=state;
		this.pincode=pincode;
	}
	


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public User getUsers() {
		return user;
	}

	public void setUsers(User users) {
		this.user = users;
	}
	
	
	
}
