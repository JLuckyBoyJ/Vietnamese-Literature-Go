package vlgo.server.response;

public class LoginResponse<T> extends ResponseForm<T> {
    private String access_token;

    public LoginResponse(Integer code, String message, T data, String jwt) {
        super(code, message, data);
        this.access_token = jwt;
    }

    public void getAccessToken(String token){
        this.access_token = token;
    }

    public String getAccessToken() {
        return this.access_token;
    }

    @Override
    public boolean equals(Object o) {
        return super.equals(o);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }
}
