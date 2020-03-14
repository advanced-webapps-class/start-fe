# 서버 
> 리소스를 저장하고 클라이언트가 요청한 데이터를 제공

<!-- https://mermaidjs.github.io -->
<mermaid>
graph LR 
    Client-->| 요청 Request |Server;
    Server-->| 응답 Response |Client;
</mermaid>