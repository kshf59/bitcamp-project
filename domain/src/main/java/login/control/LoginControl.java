package login.control;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import login.domain.President;
import login.service.PresidentService;

// mvc 라이브러리를 받아온다
@Controller
@RequestMapping("/president")
public class LoginControl {
  
  @Autowired PresidentService presidentService;
  
  @RequestMapping("form")
  public void form() {}
  
  // httpServletRequest,response 는  servlet, servlet.jsp 라이브 러리를 받아온다.
  @RequestMapping("login")
  public String login(HttpServletRequest req, HttpServletResponse resp) throws Exception {
    
    String userType = req.getParameter("userType");
    String p_id = req.getParameter("p_id");
    String password = req.getParameter("password");
    
    President president = null;
    
    if(userType.equals("president")) {
      president = presidentService.getByIdPassword(p_id, password);
    }
    
    if (president != null) {
      HttpSession session = req.getSession();
      session.setAttribute("loginPresident", president);
      String saveP_id = req.getParameter("saveP_id");
      if (saveP_id != null) {
        Cookie cookie2 = new Cookie("p_id", p_id);
        cookie2.setMaxAge(60 * 60 * 24 * 7);
        resp.addCookie(cookie2);
      } else {
        Cookie cookie2 = new Cookie("p_id", "");
        cookie2.setMaxAge(0);
        resp.addCookie(cookie2);
        
      }
      
      return "redirect:../president/suc.html";
      //return "president/form";
      
    } else {
      return "president/fail";
    }
  }
  @RequestMapping("logout")
  public String logout(HttpServletRequest req, HttpServletResponse res) throws Exception {
    req.getSession().invalidate();  
    return "redirect:../president/login.do";
  }  
  
  
  @RequestMapping("add")
  public String add(President president) throws Exception {
	  presidentService.add(president);
	  return "redirect:../president/form.do";
  }

  
}
