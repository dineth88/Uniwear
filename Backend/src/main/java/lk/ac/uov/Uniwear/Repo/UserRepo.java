package lk.ac.uov.Uniwear.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import lk.ac.uov.Uniwear.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	
	@Query("select u.password from User u where u.email= ?1")
	public String getPassword(String email);
	
	@Query("select u.id from User u where u.email= ?1")
	public String getId(String email);
}
