package backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>
{
 
}
