package login.dao;

import java.util.List;
import java.util.Map;

import login.domain.President;

// 클래스로 하면 selectList 가 오류가 난다
// 하지만 인터페이스로 하면 오류가 없어진다 이유가??
public interface PresidentDao {
  
  List<President> selectList(Map<String, Object> valueMap);
  List<President> selectListByNames(Map<String, Object> valueMap);
  President selectOne(int p_no);
  President selectOneByIdPassword(Map<String, Object> valueMap);
  int insert(President president);
  int update(President president);
  int delete(int p_no) throws Exception;
  
}
