package bigdata3.domain;

import lombok.Data;

@Data
public class User {
	int userNo;
	String email;
	String name;
	String password;
	String fbUserId;

}
