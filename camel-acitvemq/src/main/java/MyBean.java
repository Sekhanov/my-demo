import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MyBean {

    public byte[] beanMethod() throws JsonProcessingException {
        System.out.println("hello1");
        Person person = new Person("Ivan", 20);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        String message = objectMapper.writeValueAsString(person);
        return message.getBytes();
    }
}
