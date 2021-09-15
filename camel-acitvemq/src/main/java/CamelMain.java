import javax.jms.ConnectionFactory;
import javax.jms.JMSException;
import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.camel.CamelContext;
import org.apache.camel.component.jms.JmsComponent;
import org.apache.camel.impl.DefaultCamelContext;


public class CamelMain {

    public static void main(String[] args) throws JMSException {
        CamelContext ctx = new DefaultCamelContext();

//        ConnectionFactory connectionFactory = new ActiveMQConnectionFactory("ReadWriteAccessKey",
//            "bdGmTgBT+qG34hfYX0nYZz7rTxWAMToDs441t+p1glI=", "failover://ueesc-dvamzel01.hce.escriptioncolo.com:61616");
                ConnectionFactory connectionFactory = new ActiveMQConnectionFactory();
        connectionFactory.createConnection();
        ctx.addComponent("jmsComponent", JmsComponent.jmsComponentAutoAcknowledge(connectionFactory));

        try {
            ctx.addRoutes(new MyRouteBuilder());
            ctx.start();
            Thread.sleep(5 * 60 * 1000);
            ctx.stop();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
