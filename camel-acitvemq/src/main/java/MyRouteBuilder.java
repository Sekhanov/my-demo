import org.apache.camel.builder.RouteBuilder;

public class MyRouteBuilder extends RouteBuilder {

    @Override public void configure() throws Exception {
        from("timer://foo?fixedRate=true&period=2000").bean(new MyBean()).setHeader("myHeader", () -> "myheadervalue")
            .to("jmsComponent:queue:myqueue");
    }
}
