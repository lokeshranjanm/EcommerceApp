package backend.model;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name= "categories")
public class Category
{
	@Id
	
	private int categoryId;
	
	private String categoryName;

	@JsonManagedReference
	@OneToMany(mappedBy = "category" ,fetch=FetchType.LAZY,cascade=CascadeType.ALL)
	 private List<Product> products = new ArrayList<>();

	 public Category(int categoryId, String categoryName) {
		    this.categoryId=categoryId;
	        this.categoryName = categoryName;
	       
	    }
	 public Category() {
		 
	 }

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	
}
