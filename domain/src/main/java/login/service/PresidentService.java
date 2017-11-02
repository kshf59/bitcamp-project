package login.service;

import login.domain.President;

public interface PresidentService {
	President getByIdPassword(String p_id, String password) throws Exception;
	void add(President president) throws Exception;
}
