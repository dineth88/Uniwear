package lk.ac.uov.Uniwear.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable=false)
	private String firstName;
	@Column(nullable=false)
	private String lastName;
	@Column(nullable=false)
	private String university;
	@Column(nullable=false)
	private String indexNo;
	@Column(nullable=false)
	private String email;
	@Column(nullable=false)
	private String password;
	@JsonIgnore
	@OneToMany(mappedBy = "user")
	private List<Shirt>shirts;
	
	public User() {

	}

	public User(int id, String firstName, String lastName, String university, String indexNo, String email,
			String password, List<Shirt> shirts) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.university = university;
		this.indexNo = indexNo;
		this.email = email;
		this.password = password;
		this.shirts = shirts;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public String getIndexNo() {
		return indexNo;
	}

	public void setIndexNo(String indexNo) {
		this.indexNo = indexNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Shirt> getShirts() {
		return shirts;
	}

	public void setShirts(List<Shirt> shirts) {
		this.shirts = shirts;
	}
}
