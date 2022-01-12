import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import org.sekhanov.HelloRequest;
import org.sekhanov.HelloResponse;
import org.sekhanov.HelloServiceGrpc;

public class Client {

    public static void main(String[] args) {
        ManagedChannel managedChannel = ManagedChannelBuilder.forAddress("localhost", 8080).usePlaintext().build();

        HelloServiceGrpc.HelloServiceBlockingStub stub
            = HelloServiceGrpc.newBlockingStub(managedChannel);

        HelloResponse helloResponse = stub.hello(HelloRequest.newBuilder()
            .setFirstName("Sergey")
            .setLastName("Khanov")
            .build());

        System.out.println(helloResponse.getGreeting());

        managedChannel.shutdown();
    }
}
