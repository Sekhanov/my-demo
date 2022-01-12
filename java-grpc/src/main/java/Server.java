import java.io.IOException;
import org.sekhanov.HelloRequest;
import org.sekhanov.HelloResponse;
import org.sekhanov.HelloServiceGrpc;
import io.grpc.ServerBuilder;
import io.grpc.stub.StreamObserver;

public class Server {

    public static void main(String[] args) throws InterruptedException, IOException {
        io.grpc.Server server = ServerBuilder.forPort(8080)
            .addService(new HelloServiceImpl()).build();

        server.start();
        server.awaitTermination();
    }

    private static class HelloServiceImpl extends HelloServiceGrpc.HelloServiceImplBase {

        @Override public void hello(HelloRequest request, StreamObserver<HelloResponse> responseObserver) {
            StringBuilder response = new StringBuilder()
                .append("Hello, ")
                .append(request.getFirstName())
                .append(" ")
                .append(request.getLastName())
                .append("!");

            HelloResponse helloResponse = HelloResponse.newBuilder()
                .setGreeting(response.toString())
                .build();

            responseObserver.onNext(helloResponse);
            responseObserver.onCompleted();
        }
    }

}
