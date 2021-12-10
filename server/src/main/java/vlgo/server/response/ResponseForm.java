package vlgo.server.response;

import lombok.Data;

@Data
public class ResponseForm<T> {
    private Integer code;
    private String message;
    private T data;

    public ResponseForm(Integer code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
