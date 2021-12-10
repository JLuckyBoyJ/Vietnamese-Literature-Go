package vlgo.server.response;

import java.util.List;

import lombok.Data;

@Data
public class ResponseListForm <T>{
    private Integer code;
    private String message;
    private List<T> data;

    public ResponseListForm(Integer code, String message, List<T> data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
