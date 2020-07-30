# -*- coding: utf-8 -*-
from http.server import HTTPStatus, HTTPServer, BaseHTTPRequestHandler

address = "127.0.0.1"
port = 8080
webpage = "我是钓鱼网站"

class RequestHandler(BaseHTTPRequestHandler):
    "HTTP请求处理类"

    def do_HEAD(self):
        "HEAD request"
        self.send_response(HTTPStatus.OK)
        self.end_headers()
        return

    def do_GET(self):
        "HTTP GET"
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(webpage.encode("utf-8"))
        return

    def do_POST(self):
        "HTTP POST"
        return

def main():
    server = HTTPServer((address, port), RequestHandler)
    server.serve_forever()

if __name__ == "__main__":
    main()
