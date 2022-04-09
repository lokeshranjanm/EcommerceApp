package backend.model;

import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "users")
public class User {
    private @Id @GeneratedValue long id;
    private @NotBlank String username;
    private @NotBlank String password;
    private @NotBlank String email;
    private @NotBlank boolean loggedIn;
    @JsonBackReference

    @OneToOne(fetch=FetchType.LAZY,cascade = CascadeType.ALL, mappedBy="user")
    private Address address;
    public User() {
    }
    public User(@NotBlank String username, 
                @NotBlank String password,@NotBlank String email, @NotBlank boolean loggedIn) {
        this.username = username;
        this.password = password;
        this.email=email;
        
        this.loggedIn = false;
    }
   
    public long getId() {
        return id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public boolean isLoggedIn() {
        return loggedIn;
    }
    public void setLoggedIn(boolean loggedIn) {
        this.loggedIn = loggedIn;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(email, user.email) &&
                Objects.equals(password, user.password);
    }
    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, email,
                            loggedIn);
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", loggedIn=" + loggedIn +
                '}';
    }
    
    public User errorDisplay() throws Exception {
    	
    	
    	throw new Exception("Invalid Credentials");
    	
    }
}
