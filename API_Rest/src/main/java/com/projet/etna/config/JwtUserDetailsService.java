package com.projet.etna.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.projet.etna.model.JwtUserDetails;
import com.projet.etna.model.User;
import com.projet.etna.repositories.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
    private UserRepository userRepository;

	@Override
	public JwtUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		User  user = userRepository.findByUsername(username);
		if (user != null) {
			return new JwtUserDetails(user);
	    } else {
	    	throw new UsernameNotFoundException("User not found with username: " + username);
	    }
	}
}
