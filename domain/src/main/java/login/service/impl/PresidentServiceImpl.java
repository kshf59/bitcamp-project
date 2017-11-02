package login.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import login.dao.PresidentDao;
import login.domain.President;
import login.service.PresidentService;

@Service
public class PresidentServiceImpl implements PresidentService {
  @Autowired
   PresidentDao presidentDao;
  
  public President getByIdPassword(String p_id, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("p_id", p_id);
    valueMap.put("password", password);
    
    return presidentDao.selectOneByIdPassword(valueMap);
  }
  
  public void add(President president) throws Exception {
	  presidentDao.insert(president);
  }
}
