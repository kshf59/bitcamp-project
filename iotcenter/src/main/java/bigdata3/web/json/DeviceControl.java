package bigdata3.web.json;


import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bigdata3.domain.Device;
import bigdata3.service.DeviceService;
import bigdata3.util.EmailAgent;

import static bigdata3.web.json.JsonResult.*;

@RestController("json.DeviceControl")
@RequestMapping("/json/iot/")
public class DeviceControl {
  
  @Autowired ServletContext application;
  
  @Autowired EmailAgent emailAgent;
  
  @Autowired DeviceService deviceService;
  
  
  @RequestMapping("{deviceType}/status/{fbUserId}")
  public Object Status(
		  @PathVariable String deviceType,
		  @PathVariable String fbUserId) throws Exception {
    

    //=> 서버에 등록되어 있는 장비를 가져온다. 
    List<Device> devices = deviceService.list(fbUserId, deviceType);
    

    return new JsonResult(STATE_SUCCESS, devices);
  }
  
  
  
}









