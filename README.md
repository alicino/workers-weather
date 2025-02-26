# Workers Weather

### Descrição

Exemplo de workers rodando uma solicitação de temperatura através de API
O workers busca a temperatura da cidade de Austin, TX.

### Endereço de teste (resultado)
https://weather.alicinomoura.xyz

### Estrutura
```
/cloudflare-workers-weather
|- wrangler.toml
|- src/
|  |- index.js
|- .github/
|  |- workflows/
|  |  |- deploy.yml
|- README.md
``` 

### Fluxo

```mermaid
flowchart TD;
    A(fa:fa-user Website) --> B(Cloudflare Workers)
    B --> C(fa:fa-external-link API Weather)
    C --> D(Temperatura de Austin, TX)
    D --> E(fa:fa-firefox HTML com temperatura)
    E --> A
```

