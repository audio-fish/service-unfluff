# service-unfluff
Microservice to extract the main content from a webpage. For more info visit (https://github.com/ageitgey/node-unfluff)

## API DOCUMENTATION

### Response Object
```
{
  "copyright": ...,
  "author": [...],
  "image": ...,
  "tags": [...],
  "text": "...",
  "links": [...],
  "date": ...,
  "softTitle": "...",
  "videos": [...],
  "title": "...",
  "lang": "en"
}
```

### GET /unfluff?url=[website url]&lang=(optional)[lang code)
Requests the given url and extracts content

## POST /fromHTML
Extracts content from a html string provided in the post.
```
{
  "html" : "<!DOCTYPE html><html><head>...</head><body>Article text in the body</body></html>"
}
```
## TODO

Add test coverage

