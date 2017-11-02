package login.domain;

public class President {
    
  int p_no;
  String p_id;
  String password;
  String p_name;
  String p_phone;
  String p_email;
  @Override
  public String toString() {
    return "President [p_no=" + p_no + ", p_id=" + p_id + ", password=" + password + ", p_name=" + p_name + ", p_phone="
        + p_phone + ", p_email=" + p_email + "]";
  }
  public int getP_no() {
    return p_no;
  }
  public void setP_no(int p_no) {
    this.p_no = p_no;
  }
  public String getP_id() {
    return p_id;
  }
  public void setP_id(String p_id) {
    this.p_id = p_id;
  }
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  public String getP_name() {
    return p_name;
  }
  public void setP_name(String p_name) {
    this.p_name = p_name;
  }
  public String getP_phone() {
    return p_phone;
  }
  public void setP_phone(String p_phone) {
    this.p_phone = p_phone;
  }
  public String getP_email() {
    return p_email;
  }
  public void setP_email(String p_email) {
    this.p_email = p_email;
  }
 
  
  
}
