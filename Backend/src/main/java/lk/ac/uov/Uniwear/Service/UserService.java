package lk.ac.uov.Uniwear.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lk.ac.uov.Uniwear.Model.User;
import lk.ac.uov.Uniwear.Repo.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo repo;
	
	public void addUser(User user) {
        repo.save(user);
    }
	
	public String getPswd(String email) {
		return repo.getPassword(email);
	}
	
	public String getId(String email) {
		return repo.getId(email);
	}
}
