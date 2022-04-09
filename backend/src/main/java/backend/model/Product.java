package backend.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name= "products")
public class Product 
{
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private int productId;
	
	private String productName;
	
	private int productPrice;
	
	private String url;
	
	private String productDesc;
	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "category_id")
	
	@JsonBackReference
	@ManyToOne(fetch=FetchType.LAZY, optional=false)
	@JoinColumn(name="category_id",nullable=false)
	private Category category;
	
	
	public Product(String productName, int productPrice,String url, String productDesc, Category category) 
	{
		this.productName=productName;
		this.productPrice=productPrice;
		this.setUrl(url);
		this.category=category;
	}
	
	public Product() {
		
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getProductDesc() {
		return productDesc;
	}

	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	
}
