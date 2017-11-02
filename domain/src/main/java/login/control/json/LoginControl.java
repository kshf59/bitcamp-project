package login.control.json;


import static login.control.json.JsonResult.STATE_FAIL;
import static login.control.json.JsonResult.STATE_SUCCESS;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import login.domain.President;
import login.service.PresidentService;

// mvc 라이브러리를 받아온다
@RestController("json.LoginControl")
@RequestMapping("/login/json")
public class LoginControl {
  
  @Autowired PresidentService presidentService;
  
  
  // httpServletRequest,response 는  servlet, servlet.jsp 라이브 러리를 받아온다.
  @RequestMapping("login")
  public Object login(
      String p_id,
      String password,
      @RequestParam(defaultValue="president") String userType,
      HttpSession session) throws Exception {
    
      President president = null;
    
      if(userType.equals("president")) {
        president = presidentService.getByIdPassword(p_id, password);
    }
    
      if(president != null) {
        session.setAttribute("loginPresident", president);
        return new JsonResult(STATE_SUCCESS, president);
  }
      
      return new JsonResult(STATE_FAIL, null);
      
  }
    
    
  /*@RequestMapping("logout")
  public Object logout(HttpServletRequest req, HttpServletResponse res) throws Exception {
    req.getSession().invalidate();  
    return "redirect:../president/login.do";
  }  */
  
  @RequestMapping("add")
  public Object add(President president) throws Exception {
    try {
     	presidentService.add(president);
      return new JsonResult(STATE_SUCCESS, null);
      
    } catch (Exception e) {
      return new JsonResult(STATE_FAIL, e.getMessage());
    }
  }
  
  
}
